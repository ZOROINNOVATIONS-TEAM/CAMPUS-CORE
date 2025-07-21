import express from 'express';
import * as controllers from '#controllers/user_info.ts';

const router = express.Router();

router.get('/user_info',controllers.userInfo);

export default router;
