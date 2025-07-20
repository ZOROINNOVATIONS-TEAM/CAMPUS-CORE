import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import notificationRoutes from './routes/notifications';
import { faculty_only, admin_only, student_only } from './lib/middlewares';

import login from './routes/login';
import user_info from './routes/user_info';
import admin_create_user from './routes/admin/create_user';
import admin_course from './routes/admin/course';
import student_course from './routes/student/course';
import faculty_attendance from './routes/faculty/attendance';



import * as db from './lib/db';
import * as auth from './lib/auth';
import { connectToDB } from './lib/db'; // ✅ Import DB connection function

const app = express();
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB first
connectToDB(); // ✅ Call the DB connection



app.use('/api/v1/student', student_only, student_course);
app.use('/api/v1/faculty', faculty_only, faculty_attendance);
app.use('/api/v1', login);
app.use('/api/v1', user_info);
app.use('/api/v1', admin_only, admin_create_user);
app.use('/api/v1', admin_only, admin_course);
app.use('/api/v1/notifications', notificationRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

app.listen(process.env.PORT, () => {
  console.log(`Express running on port ${process.env.PORT}`);
});
