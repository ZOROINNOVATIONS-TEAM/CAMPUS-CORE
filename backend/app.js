import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import { faculty_only, admin_only, student_only } from '#lib/middlewares.js';
import login from '#routes/login.js';
import user_info from '#routes/user_info.js';
import admin_create_user from '#routes/admin/create_user.js';
import admin_course from '#routes/admin/course.js';
import student_course from '#routes/student/course.js';
import faculty_attendance from '#routes/faculty/attendance.js';
// DB TESTING CODE
// const password = 'password';
// const user: db.User = {
//    name: 'test user',
//    pass_hash: await auth.calc_password_hash('test user', password),
//    type: 'admin',
//    email: 'test@example.com',
//    rollno: 'ABC123',
// };
// const uid = await db.add_user(user);
// console.log(await db.get_user_from_rollno('abc123'));
// console.log(await db.get_user_from_email('test@example.coM'));
// console.log(await db.get_user_from_token(await auth.jwt_create(uid, user.type)));
// console.log(await db.get_user_from_uid(uid));
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/api/v1', login);
app.use('/api/v1', user_info);
app.use('/api/v1', admin_only, admin_create_user);
app.use('/api/v1', admin_only, admin_course);
app.use('/api/v1', faculty_only, faculty_attendance);
app.use('/api/v1', student_only, student_course);
app.listen(process.env.PORT, () => {
    console.log(`Express running on port ${process.env.PORT}`);
});
