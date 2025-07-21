import express from 'express';

import * as controllers from '#controllers/login.ts';

const router = express.Router();
router.post('/login',controllers.login);

export default router;
