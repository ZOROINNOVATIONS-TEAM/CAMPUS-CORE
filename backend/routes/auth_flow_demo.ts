import express, { Request, Response } from 'express';
import * as db from '#lib/db';
import * as auth from '#lib/auth';

const router = express.Router();

// [1] User Login Demo Endpoint
// Accepts { id, pass } (id = email or rollno), checks credentials, generates JWT with role, sets cookie
router.post('/login-demo', async (req: Request, res: Response): Promise<void> => {
  const { id, pass } = req.body;
  if (!id || !pass) {
    res.status(400).json({ error: 'Missing id or password' });
    return;
  }

  let user: db.User | null = null;
  let upass: string = pass;

  try {
    if (id.includes('@')) {
      // treat as email
      user = await db.get_user_from_email(id);
    } else {
      // treat as rollno
      user = await db.get_user_from_rollno(id);
    }
  } catch (err) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  if (!user) {
    res.status(404).json({ error: 'User not found' });
    return;
  }

  try {
    const valid = await auth.verify_password_hash(user.name, upass, user.pass_hash);
    if (!valid) {
      res.status(401).json({ error: 'Incorrect password' });
      return;
    }
    // Generate JWT and set cookie
    const session_token = auth.jwt_create(user._id!, user.type);
    res.cookie('session_token', session_token, { expires: new Date(Date.now() + 15 * 24 * 3600 * 1000) }); // 15d expiry
    res.status(200).json({ message: 'Login successful', type: user.type });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
