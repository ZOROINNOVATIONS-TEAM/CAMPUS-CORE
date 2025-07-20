import mongoose, { Document, Schema } from 'mongoose';

export interface AdminDocument extends Document {
  name: string;
  email: string;
  pass: string;
}

const adminSchema = new Schema<AdminDocument>({
  name: { type: String },
  email: { type: String, unique: true },
  pass: { type: String },
});

export default mongoose.model<AdminDocument>('Admin', adminSchema);
