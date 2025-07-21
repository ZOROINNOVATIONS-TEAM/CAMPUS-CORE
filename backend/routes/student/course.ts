import express from 'express';
import * as controllers from '#controllers/student/course.ts';

const router = express.Router();

router.post('/register/:course_id', controllers.course);

export default router;
