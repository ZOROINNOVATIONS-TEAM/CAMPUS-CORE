import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';

import { faculty_only, admin_only } from '#lib/middlewares.ts';

import login from '#routes/login.ts';
import user_info from '#routes/user_info.ts';
import admin_register from '#routes/admin/register.ts';

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use('/api/v1', login);
app.use('/api/v1', user_info);
app.use('/api/v1', admin_only, admin_register);

app.listen(process.env.PORT, () => {
   console.log(`Express running on port ${process.env.PORT}`);
})
