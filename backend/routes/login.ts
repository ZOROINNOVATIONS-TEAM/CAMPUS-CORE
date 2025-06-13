import express from 'express';
import { z } from 'zod';

import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

const router = express.Router();

const login_schema_email = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const login_schema_userid = z.object({
  userid: z.string(),
  password: z.string().min(8),
});

router.post('/login', async (req, res) =>
{
  //TODO
});

export default router;
