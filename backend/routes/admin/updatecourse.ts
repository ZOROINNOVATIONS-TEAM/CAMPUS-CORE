import express from 'express';
import { z } from 'zod';

import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

const router = express.Router();

const update_course_schema = z.object({
  courseid: z.string(), 
  name: z.string().optional(),
  code: z.string().optional(),
  facultyid: z.string().optional(),
  description: z.string().optional(),
  link: z.string().optional(),
  resources: z.array(z.string()).optional(),
  attendence: z.enum(['present', 'absent']).optional(),
});
router.post('/admin/updatecourse', async (req, res) => {
  try {
    const { courseid, name, code, facultyid, description, link, resources, attendence } = update_course_schema.parse(req.body);
    
    const updateData: any = {};
    if (name) updateData.name = name;
    if (code) updateData.code = code;
    if (facultyid) updateData.facultyid = facultyid;
    if (description) updateData.description = description;
    if (link) updateData.link = link;
    if (resources) updateData.resources = resources;
    if (attendence) updateData.attendence = attendence;

    try {
      await db.update_course(courseid, updateData);
      res.sendStatus(200);
    } catch (err) {
      res.status(400).json({ error: 'Course not found or invalid data' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid request' });
  }
});