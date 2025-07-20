import express from 'express';

import * as controllers from '#controllers/login.ts';
/**
 * @openapi
 * /api/v1/login:
 *   post:
 *     summary: User login
 *     tags:
 *       - Login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: admin@gmail.com
 *               pass:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

const router = express.Router();
router.post('/login',controllers.login);

export default router;
