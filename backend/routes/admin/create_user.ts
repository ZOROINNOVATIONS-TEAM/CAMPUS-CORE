import express from 'express';
import * as controllers from '#controllers/admin/create_user.ts';
const router = express.Router();

router.post('/admin/create_user',controllers.createUser);

export default router;
