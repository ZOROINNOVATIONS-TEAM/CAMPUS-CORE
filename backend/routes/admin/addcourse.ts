import express, { Request } from 'express';
import { z } from 'zod';
import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';
const router = express.Router();

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const add_course_schema = z.object({
  name: z.string(),
  code: z.string(),
  facultyid: z.string(),
  description: z.string().optional(),
  link: z.string().optional(),
  resources: z.array(z.string()).optional(),
  attendence: z.enum(['present', 'absent']),
});

router.post('/admin/addcourse', async (req, res) => {
  try {
    const { name, code, facultyid, description, link, resources, attendence } = add_course_schema.parse(req.body);
    const courseData = {
      name,
      code,
      facultyid,
      description: description || '',
      link: link || '',
      resources: resources || [],
      attendence,
    };
    
    try {
      const courseId = await db.add_course(courseData, req.user);
      res.status(200).json({ courseId });
    } catch (err) {
      res.status(400).json({ error: 'Course already exists or invalid data' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid request' });
  }
});