
import * as auth from './auth';
import mongoose from 'mongoose';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error(" Failed to connect to MongoDB:", error);
    process.exit(1);
  }
};


export interface User {
  _id?: string;
  rollno?: string;
  email: string;
  pass_hash: string;
  name: string;
  type: 'student' | 'faculty' | 'admin';
  courses?: mongoose.Types.ObjectId[]; 
}

const UserSchema = new mongoose.Schema<User>({
  email:     { type: String, required: true, unique: true, lowercase: true },
  pass_hash: { type: String, required: true },
  name:      { type: String, required: true },
  rollno:    { type: String, required: false, unique: true, sparse: true, uppercase: true },
  type:      { type: String, required: true, enum: ['student', 'faculty', 'admin'] },
  courses:   [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }], 
});

export const UserModel = mongoose.model<User>('users', UserSchema);

/////////////////////////////////////////////////////////////////////////////
// COURSE SCHEMA

export interface Course {
  _id?: string;
  title: string;
  description: string;
  resource_link: string;
  attendance_needed: boolean;
}

const CourseSchema = new mongoose.Schema<Course>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  resource_link: { type: String, required: false },
  attendance_needed: { type: Boolean, required: true, default: false },
});

const CourseModel = mongoose.model<Course>('courses', CourseSchema);


/////////////////////////////////////////////////////////////////////////////
// ATTENDANCE SCHEMA

export interface Attendance {
  _id?: string;
  course_id: string;
  student_id: string;
  date: Date;
  marked_by: string;
}

const AttendanceSchema = new mongoose.Schema({
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  date: { type: Date, required: true },
  marked_by: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
});

const AttendanceModel = mongoose.model<Attendance>('attendances', AttendanceSchema);


/////////////////////////////////////////////////////////////////////////////
// COURSE & ATTENDANCE FUNCTIONS

export async function create_course(data: Course): Promise<string> {
  const course = new CourseModel(data);
  const saved = await course.save();
  return saved._id!.toString();
}

export async function update_course(course_id: string, data: Partial<Course>): Promise<boolean> {
  const updated = await CourseModel.findByIdAndUpdate(course_id, data);
  return !!updated;
}

export async function register_student_to_course(student_id: string, course_id: string): Promise<boolean> {
  const course = await CourseModel.findById(course_id);
  if (!course) throw new Error("Course not found");
  const result = await UserModel.updateOne(
    { _id: student_id },
    { $addToSet: { courses: course._id } } 
  );
  if (result.modifiedCount === 0) {
    throw new Error("Student is already registered or update failed");
  }
  return true;
}

export async function mark_attendance(course_id: string, student_id: string, date: Date, marked_by: string): Promise<string> {
  const exists = await AttendanceModel.findOne({ course_id, student_id, date });
  if (exists) throw new Error("Attendance already marked for this date");

  const attendance = new AttendanceModel({ course_id, student_id, date, marked_by });
  const saved = await attendance.save();
  return saved._id!.toString();
}
/////////////////////////////////////////////////////////////////////////////

export async function add_user(user: User): Promise<string>
{
  const newdoc = await UserModel.create(user);
  return newdoc._id;
}

/////////////////////////////////////////////////////////////////////////////

export async function update_email(userid: string, email: string)
{
  await UserModel.findOneAndUpdate({userid}, {email}, {runValidators: true}).exec();
}

export async function update_pass_hash(userid: string, pass_hash: string)
{
await UserModel.findOneAndUpdate({ _id: userid }, { pass_hash }, { runValidators: true }).exec();
}

/////////////////////////////////////////////////////////////////////////////

export function get_user_from_uid(uid: string): Promise<User|null>
{
  return UserModel.findOne({_id: uid}).lean<User>().exec();
}

export function get_user_from_email(email: string): Promise<User|null>
{
  return UserModel.findOne({email}).lean<User>().exec();
}

export function get_user_from_rollno(rollno: string): Promise<User|null>
{
  return UserModel.findOne({rollno}).lean<User>().exec();
}

/////////////////////////////////////////////////////////////////////////////

export async function get_user_from_token(token: string): Promise<User|null>
{
  if (token)
  {
    const data = auth.jwt_decode(token);
    if (data)
    {
      const user = await get_user_from_uid(data.uid);
      if (user)
      {
        return user;
      }
    }
  }
  
  return null;
}