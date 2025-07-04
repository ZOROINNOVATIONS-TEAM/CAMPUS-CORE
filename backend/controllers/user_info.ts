import * as db from '#lib/db.ts';

export const userInfo = async (req: any, res: any, next: any) => {
  try {
    const session_token = req.cookies['session_token'];

    if (session_token) {
      const user: any = await db.get_user_from_token(session_token);
      if (user) {
        user.uid = user._id;
        delete user._id;
        delete user.__v;
        delete user.pass_hash;
        return res.json(user);
      }
      else
        return res.status(400).json({ error: 'invalid session_token' });
    }
    else
      return res.status(400).json({ error: 'missing session_token' });
  }
  catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ error: err.message });
    } else {
      return res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
}