import express from 'express';
import { z } from 'zod';

import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

const router = express.Router();

router.post('/login', async (req, res) =>
{
  //TODO
});

export default router;
