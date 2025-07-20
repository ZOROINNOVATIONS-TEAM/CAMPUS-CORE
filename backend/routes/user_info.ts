import express from 'express';
import * as controllers from '#controllers/user_info.ts';

const router = express.Router();

/**
 * @openapi
 * /api/v1/user_info:
 *   get:
 *     summary: Get user info from session token
 *     description: Retrieves user information using the session token stored in cookies.
 *     tags:
 *       - User_info
 *     parameters:
 *       - in: cookie
 *         name: session_token
 *         required: true
 *         schema:
 *           type: string
 *         description: Session token to authenticate user
 *     responses:
 *       200:
 *         description: User information successfully retrieved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 uid:
 *                   type: string
 *                   example: 64b1a94ce287g23d598c0e9a
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john@example.com
 *       400:
 *         description: Missing or invalid session_token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: invalid session_token
 *       500:
 *         description: Server error
 */

router.get('/user_info',controllers.userInfo);

export default router;
