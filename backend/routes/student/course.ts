import express from 'express';
import * as controllers from '#controllers/student/course.ts';

const router = express.Router();
/**
 * @openapi
 * /api/v1/student/register/{course_id}:
 *   post:
 *     summary: Register student to a course
 *     description: Registers the authenticated user to the course identified by `course_id`.
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: course_id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the course to register for
 *     responses:
 *       200:
 *         description: Successfully registered for course
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: Registration failed due to error (e.g., already registered or invalid course)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Already registered for course
 */
router.post('/register/:course_id', controllers.course);

export default router;
