import express from 'express';
import * as controllers from '#controllers/faculty/attendance.ts';

const router = express.Router();
/**
 * @openapi
 * /api/v1/faculty/mark-attendance:
 *   post:
 *     summary: Mark student attendance
 *     description: Allows a faculty member to mark a student's attendance for a specific course on a given date.
 *     tags:
 *       - Attendance
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - course_id
 *               - student_id
 *               - date
 *             properties:
 *               course_id:
 *                 type: string
 *                 example: "COURSE123"
 *               student_id:
 *                 type: string
 *                 example: "STUDENT456"
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2025-07-16"
 *     responses:
 *       200:
 *         description: Attendance successfully marked
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 attendance_id:
 *                   type: string
 *                   example: "att_789xyz"
 *       400:
 *         description: Missing fields or invalid data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Missing required fields"
 *       403:
 *         description: Unauthorized access (not a faculty member)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Only faculty allowed"
 *       500:
 *         description: Server or unknown error
 */
router.post('/mark-attendance',controllers.attendance);

export default router;
