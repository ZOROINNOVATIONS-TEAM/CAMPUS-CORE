import mongoose, { Document, Schema } from 'mongoose';

export interface StudentDocument extends Document {
  name: string;
  email: string;
  rollno: string;
  pass: string;
}

const studentSchema = new Schema<StudentDocument>({
  name: { type: String },
  email: { type: String, unique: true },
  rollno: { type: String, unique: true },
  pass: { type: String },
});

export default mongoose.model<StudentDocument>('Student', studentSchema);
