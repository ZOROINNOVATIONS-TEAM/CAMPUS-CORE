import express from 'express';
import * as controllers from '#controllers/faculty/attendance.ts';

const router = express.Router();

router.post('/mark-attendance',controllers.attendance);

export default router;
