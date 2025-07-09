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

// DB TESTING CODE

// const password = 'password';
// const user: db.User = {
//    name: 'Admin',
//    pass_hash: await auth.calc_password_hash('Admin', password),
//    type: 'admin',
//    email: 'admin@example.com',
//    //rollno: 'ABC123',
// };
// const uid = await db.add_user(user);

// console.log(await db.get_user_from_rollno('abc123'));
// console.log(await db.get_user_from_email('test@example.coM'));
// console.log(await db.get_user_from_token(await auth.jwt_create(uid, user.type)));
// console.log(await db.get_user_from_uid(uid));

const app = express();
app.use(cookieParser());
app.use(express.json());

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
})
