import express from 'express';
import * as controllers from '#controllers/admin/course.ts';

const router = express.Router();
/**
 * @openapi
 * /api/admin/course:
 *   post:
 *     summary: Admin creates a new course
 *     description: Allows an admin to create a new course by providing course details.
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Introduction to AI"
 *               code:
 *                 type: string
 *                 example: "AI101"
 *               credits:
 *                 type: number
 *                 example: 4
 *               description:
 *                 type: string
 *                 example: "This course introduces the basics of artificial intelligence."
 *     responses:
 *       200:
 *         description: Course successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 course_id:
 *                   type: string
 *                   example: "COURSE123"
 *       400:
 *         description: Failed to create course due to validation or server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Course code already exists"
 */
router.post('/create-course',controllers.adminCreateCourse);

router.patch('/update-course/:id',controllers.adminUpdateCourse);

export default router;
