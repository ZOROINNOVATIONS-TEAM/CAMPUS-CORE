import express from 'express';
import { z } from 'zod';

import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

const router = express.Router();

router.post('/user_info', async (req, res) =>
{
  const session_token = req.cookies['session_token'];
  
  if (session_token)
  {
    const user = db.get_user_from_token(session_token);
    if (user)
      res.json(user);
    else
      res.status(400).json({error: 'invalid session_token'});
  }
  else
    res.status(400).json({error: 'missing session_token'});
});

export default router;
