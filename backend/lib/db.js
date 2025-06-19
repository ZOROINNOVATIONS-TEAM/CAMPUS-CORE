import mongoose from 'mongoose';
import * as auth from '#lib/auth.js';
await mongoose.connect(process.env.MONGODB_URL);
const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true },
    pass_hash: { type: String, required: true },
    name: { type: String, required: true },
    rollno: { type: String, required: false, unique: true, uppercase: true },
    type: { type: String, required: true, enum: ['student', 'faculty', 'admin'] },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
});
export const UserModel = mongoose.model('users', UserSchema);
const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    resource_link: { type: String, required: false },
    attendance_needed: { type: Boolean, required: true, default: false },
});
const CourseModel = mongoose.model('courses', CourseSchema);
const AttendanceSchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    date: { type: Date, required: true },
    marked_by: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
});
const AttendanceModel = mongoose.model('attendances', AttendanceSchema);
/////////////////////////////////////////////////////////////////////////////
// COURSE & ATTENDANCE FUNCTIONS
export async function create_course(data) {
    const course = new CourseModel(data);
    const saved = await course.save();
    return saved._id.toString();
}
export async function update_course(course_id, data) {
    const updated = await CourseModel.findByIdAndUpdate(course_id, data);
    return !!updated;
}
export async function register_student_to_course(student_id, course_id) {
    const course = await CourseModel.findById(course_id);
    if (!course)
        throw new Error("Course not found");
    const result = await UserModel.updateOne({ _id: student_id }, { $addToSet: { courses: course._id } });
    if (result.modifiedCount === 0) {
        throw new Error("Student is already registered or update failed");
    }
    return true;
}
export async function mark_attendance(course_id, student_id, date, marked_by) {
    const exists = await AttendanceModel.findOne({ course_id, student_id, date });
    if (exists)
        throw new Error("Attendance already marked for this date");
    const attendance = new AttendanceModel({ course_id, student_id, date, marked_by });
    const saved = await attendance.save();
    return saved._id.toString();
}
/////////////////////////////////////////////////////////////////////////////
export async function add_user(user) {
    const newdoc = await UserModel.create(user);
    return newdoc._id;
}
/////////////////////////////////////////////////////////////////////////////
export async function update_email(userid, email) {
    await UserModel.findOneAndUpdate({ userid }, { email }, { runValidators: true }).exec();
}
export async function update_pass_hash(userid, pass_hash) {
    await UserModel.findOneAndUpdate({ _id: userid }, { pass_hash }, { runValidators: true }).exec();
}
/////////////////////////////////////////////////////////////////////////////
export function get_user_from_uid(uid) {
    return UserModel.findOne({ _id: uid }).lean().exec();
}
export function get_user_from_email(email) {
    return UserModel.findOne({ email }).lean().exec();
}
export function get_user_from_rollno(rollno) {
    return UserModel.findOne({ rollno }).lean().exec();
}
/////////////////////////////////////////////////////////////////////////////
export async function get_user_from_token(token) {
    if (token) {
        const data = auth.jwt_decode(token);
        if (data) {
            const user = await get_user_from_uid(data.uid);
            if (user) {
                return user;
            }
        }
    }
    return null;
}
