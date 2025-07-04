import { z, ZodError } from 'zod';

import * as db from '#lib/db.ts';
import * as auth from '#lib/auth.ts';

const create_user_schema = z.object({
  name: z.string(),
  email: z.string().email(),
  rollno: z.string().optional(),
  pass: z.string().min(8),
  type: z.enum(['student','faculty','admin']),
});


export const createUser=async (req : any, res : any) =>
{
  try
  {
    const {name, email, rollno, pass, type} = create_user_schema.parse(req.body);
    const pass_hash = await auth.calc_password_hash(name, pass);
    const uid = await db.add_user({name, email, rollno, pass_hash, type});
    res.sendStatus(200);
  }
  catch (err) {
    if (err instanceof ZodError) {
      return res.status(400).json({ error: 'invalid request' });
    }

    if (err instanceof Error && err.message.includes('duplicate')) {
      return res.status(400).json({ error: 'user already exists' });
    }

    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'internal server error' });
  }
}