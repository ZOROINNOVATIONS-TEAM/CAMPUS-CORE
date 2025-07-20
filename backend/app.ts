import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';

// Middleware
import { faculty_only, admin_only, student_only } from '#lib/middlewares.ts';

// Routes
import login from '#routes/login.ts';
import user_info from '#routes/user_info.ts';
import verify_email from '#routes/verify_email.ts';
import admin_create_user from '#routes/admin/create_user.ts';
import admin_course from '#routes/admin/course.ts';
import student_course from '#routes/student/course.ts';
import faculty_attendance from '#routes/faculty/attendance.ts';
import analyticsRoutes from './routes/analytics';

// Swagger setup
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger/swaggerConfig';

// DB and Auth
import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

// (Optional) Database testing code — Remove before production
const password = 'password';
const user: db.User = {
  name: 'Admin',
  pass_hash: await auth.calc_password_hash('Admin', password),
  type: 'admin',
  email: 'admin@example.com',
  rollno: 'ABC123',
};
const uid = await db.add_user(user);

console.log(await db.get_user_from_rollno('abc123'));
console.log(await db.get_user_from_email('test@example.coM'));
console.log(await db.get_user_from_token(await auth.jwt_create(uid, user.type)));
console.log(await db.get_user_from_uid(uid));
const jwt = await auth.jwt_create(uid, user.type);
console.log("Admin JWT:", jwt);

// Initialize Express
const app = express();
app.use(cookieParser());
app.use(express.json());

// Swagger docs: view at /api/api-docs
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route Registrations
app.use('/api/v1/student', student_only, student_course);
app.use('/api/v1/faculty', faculty_only, faculty_attendance);
app.use('/api/v1', login);
app.use('/api/v1', user_info);
app.use('/api/v1', verify_email);
app.use('/api/v1', admin_only, admin_create_user);
app.use('/api/v1', admin_only, admin_course);
app.use('/api/analytics', analyticsRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found', path: req.originalUrl });
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
