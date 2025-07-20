import express from 'express';
import * as controllers from '#controllers/admin/create_user.ts';
const router = express.Router();
/**
 * @openapi
 * /api/admin/user:
 *   post:
 *     summary: Create a new user
 *     description: Allows admin to create a new user (student, faculty, or admin).
 *     tags:
 *       - Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - pass
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Alice Smith"
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "alice@example.com"
 *               rollno:
 *                 type: string
 *                 example: "23CS1021"
 *               pass:
 *                 type: string
 *                 minLength: 8
 *                 example: "strongPassword123"
 *               type:
 *                 type: string
 *                 enum: [student, faculty, admin]
 *                 example: "student"
 *     responses:
 *       200:
 *         description: User successfully created
 *       400:
 *         description: Invalid request or user already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   examples:
 *                     invalid:
 *                       summary: Invalid request body
 *                       value: "invalid request"
 *                     exists:
 *                       summary: User already exists
 *                       value: "user already exists"
 */
router.post('/admin/create_user',controllers.createUser);

export default router;
