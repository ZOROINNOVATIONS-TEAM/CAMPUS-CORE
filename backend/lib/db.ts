import mongoose from 'mongoose';
import * as auth from '#lib/auth.ts';

// Ensure MONGODB_URL is loaded
if (!process.env.MONGODB_URL) {
  console.error("MONGODB_URL is not defined in .env file. Please create one.");
  process.exit(1);
}

await mongoose.connect(process.env.MONGODB_URL!);

// ANALYTICS SCHEMA
export const Analytics = mongoose.model('Analytics', new mongoose.Schema({
  weeklyActiveUsers: [{ week: String, users: Number }],
  userDistribution: [{ name: String, value: Number }],
  studentSatisfaction: [{ sem: String, score: Number }],
  coursePopularity: [{ name: String, value: Number }],
  metrics: {
    totalStudents: Number,
    newEnrollments: Number,
    activeCourses: Number,
    graduationRate: Number,
    facultyCount: Number,
  },
  activities: [{
    iconType: String,
    title: String,
    desc: String,
    time: String,
  }],
}, { timestamps: true }));

// USER SCHEMA
export interface User {
  _id?: string;
  rollno?: string;
  email: string;
  pass_hash: string;
  name: string;
  type: 'student' | 'faculty' | 'admin';
  courses?: mongoose.Types.ObjectId[];
  verified?: boolean;
}

const UserSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true, lowercase: true },
  pass_hash: { type: String, required: true },
  name: { type: String, required: true },
  rollno: { type: String, unique: true, sparse: true, uppercase: true },
  type: { type: String, required: true, enum: ['student', 'faculty', 'admin'] },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'courses' }],
  verified: { type: Boolean, default: false }
});

export const UserModel = mongoose.model<User>('users', UserSchema);

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
  resource_link: { type: String },
  attendance_needed: { type: Boolean, default: false },
});

export const CourseModel = mongoose.model<Course>('courses', CourseSchema);

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

// FEE SCHEMA
export interface Fee {
  _id?: mongoose.Types.ObjectId;
  student_id: mongoose.Types.ObjectId;
  semester: number;
  academic_year: string;
  total_amount: number;
  paid_amount: number;
  payment_status: 'paid' | 'unpaid' | 'partial';
  due_date: Date;
  payment_history: {
    amount: number;
    payment_date: Date;
    transaction_id: string;
    payment_method: string;
  }[];
}

const FeeSchema = new mongoose.Schema<Fee>({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  semester: { type: Number, required: true, min: 1, max: 8 },
  academic_year: { type: String, required: true },
  total_amount: { type: Number, required: true, min: 0 },
  paid_amount: { type: Number, required: true, default: 0, min: 0 },
  payment_status: {
    type: String,
    enum: ['paid', 'unpaid', 'partial'],
    required: true,
    default: 'unpaid'
  },
  due_date: { type: Date, required: true },
  payment_history: [{
    amount: { type: Number, required: true },
    payment_date: { type: Date, required: true, default: Date.now },
    transaction_id: { type: String, required: true },
    payment_method: {
      type: String,
      enum: ['credit_card', 'debit_card', 'net_banking', 'upi', 'cash'],
      required: true
    }
  }]
});

export const FeeModel = mongoose.model<Fee>('fees', FeeSchema);

// RESULT SCHEMA
export interface CourseResult {
  course_id: mongoose.Types.ObjectId | { _id: mongoose.Types.ObjectId; title?: string };
  grade: string;
  marks?: number;
}

export interface Result {
  _id?: mongoose.Types.ObjectId;
  student_id: mongoose.Types.ObjectId | { _id: mongoose.Types.ObjectId; name?: string; rollno?: string };
  semester: number;
  academic_year: string;
  course_results: CourseResult[];
  gpa?: number;
  published_date: Date;
  __v?: number;
  id?: string;
}

const ResultSchema = new mongoose.Schema<Result>({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  semester: { type: Number, required: true },
  academic_year: { type: String, required: true },
  course_results: [{
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
    grade: { type: String, required: true },
    marks: { type: Number }
  }],
  gpa: { type: Number, min: 0.0, max: 4.0 },
  published_date: { type: Date, default: Date.now, required: true }
});

export const ResultModel = mongoose.model<Result>('results', ResultSchema);

/////////////////////////////////////////////////////////////////////////////
// CORE FUNCTIONS

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
  if (result.modifiedCount === 0) throw new Error("Already registered or error");
  return true;
}

export async function mark_attendance(course_id: string, student_id: string, date: Date, marked_by: string): Promise<string> {
  const exists = await AttendanceModel.findOne({ course_id, student_id, date });
  if (exists) throw new Error("Already marked today");

  const attendance = new AttendanceModel({ course_id, student_id, date, marked_by });
  const saved = await attendance.save();
  return saved._id!.toString();
}

export async function add_user(user: User): Promise<string> {
  const newdoc = await UserModel.create({ ...user, verified: false });
  return newdoc._id!.toString();
}

export async function update_email(userid: string, email: string) {
  await UserModel.findByIdAndUpdate(userid, { email }, { runValidators: true }).exec();
}

export async function update_pass_hash(userid: string, pass_hash: string) {
  await UserModel.findByIdAndUpdate(userid, { pass_hash }, { runValidators: true }).exec();
}

export function get_user_from_uid(uid: string): Promise<User | null> {
  return UserModel.findById(uid).lean<User>().exec();
}

export function get_user_from_email(email: string): Promise<User | null> {
  return UserModel.findOne({ email }).lean<User>().exec();
}

export function get_user_from_rollno(rollno: string): Promise<User | null> {
  return UserModel.findOne({ rollno }).lean<User>().exec();
}

export async function get_user_from_token(token: string): Promise<User | null> {
  if (token) {
    const data = auth.jwt_decode(token);
    if (data) {
      return await get_user_from_uid(data.uid);
    }
  }
  return null;
}

export async function verify_user_email(uid: string): Promise<boolean> {
  const result = await UserModel.updateOne(
    { _id: uid, verified: false },
    { $set: { verified: true } }
  );
  return result.modifiedCount > 0;
}

