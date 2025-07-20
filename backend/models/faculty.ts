import mongoose, { Document, Schema } from 'mongoose';

export interface FacultyDocument extends Document {
  name: string;
  email: string;
  pass: string;
}

const facultySchema = new Schema<FacultyDocument>({
  name: { type: String },
  email: { type: String, unique: true },
  pass: { type: String },
});

export default mongoose.model<FacultyDocument>('Faculty', facultySchema);
