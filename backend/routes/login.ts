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
  var user: db.User|null;
  var pass: string;
  
  try
  {
    const {uid, upass} = req.body;
    
    try
    {
      if (uid.includes('@')) //treat as email
      {
        const {email, password} = login_schema_email.parse({email:uid, password:upass});
        user = db.get_user_from_email(email);
        pass = password;
      }
      else
      {
        const {userid, password} = login_schema_userid.parse({userid:uid, password:upass});
        user = db.get_user_from_userid(userid);
        pass = password;
      }
    }
    catch (err) {
      res.status(401).json({error: 'invalid credentials'});
      return;
    }
  }
  catch (err) {
    res.status(400).json({error: 'invalid request'});
    return;
  }
  
  if (user && pass)
  {
    if (await auth.verify_password_hash(user.userid, pass, user.pass))
    {
      const session_token = auth.jwt_create(user.userid);
      res.cookie('session_token', session_token, {expires: new Date(Date.now() + 15*24*3600*1000)}); // 15d expiry, also enforced by jwt
      res.sendStatus(200);
    }
    else res.status(401).json({error: 'incorrect password'});
  }
  else res.status(404).json({error: 'user not found'});
});

export default router;
