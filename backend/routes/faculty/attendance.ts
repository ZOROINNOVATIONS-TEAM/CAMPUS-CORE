import express from 'express';

import * as db from '#lib/db';
import * as auth from '#lib/auth';

const router = express.Router();

router.post('/mark-attendance', async (req :any , res : any) => {
  const faculty = await db.get_user_from_token(req.cookies.session_token);
  if (!faculty || faculty.type !== 'faculty') return res.status(403).json({ error: 'Only faculty allowed' });

  const { course_id, student_id, date } = req.body;
  if (!course_id || !student_id || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const att_id = await db.mark_attendance(course_id, student_id, new Date(date), faculty._id!);
    res.json({ attendance_id: att_id });
  } catch (err) {
if (err instanceof Error) {
  res.status(400).json({ error: err.message });
} else {
  res.status(400).json({ error: 'Unknown error occurred' });
}  }
});
router.get('/students', async (req, res) => {
  const course_title = req.query.course_title as string;

  if (!course_title) {
    return res.status(400).json({ error: 'Missing course_title' });
  }

  try {
    const course = await db.CourseModel.findOne({ title: course_title });
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }

    const students = await db.get_students_by_course(course._id.toString());
    res.json({ students });
  } catch (err) {
    console.error('Failed to fetch students:', err);
    res.status(500).json({ error: 'Failed to fetch students' });
  }
});

router.get('/courses', async (req, res) => {
  try {
    const courses = await db.get_all_courses();
    res.json({ courses });
  } catch (err) {
    console.error('Failed to fetch courses:', err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

export default router;
