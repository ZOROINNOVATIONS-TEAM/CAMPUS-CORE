import express from 'express';
import * as controllers from '#controllers/admin/course.ts';

const router = express.Router();

router.post('/create-course',controllers.adminCreateCourse);

router.patch('/update-course/:id',controllers.adminUpdateCourse);

export default router;
