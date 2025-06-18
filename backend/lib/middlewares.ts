import * as db from '#lib/db.js';
import * as auth from '#lib/auth.js';

async function get_user_type(cookies: any): Promise<string|null>
{
  const session_token = cookies['session_token'];
  
  if (session_token)
  {
    const user = await db.get_user_from_token(session_token);
    if (user?.type) return user.type;
  }
  
  return null;
}

export async function faculty_only(req: any, res: any, next: any)
{
  const type = await get_user_type(req.cookies);
  
  if (type === 'faculty' || type === 'admin')
    next();
  else
    res.sendStatus(403);
}

export async function admin_only(req: any, res: any, next: any)
{
  const type = await get_user_type(req.cookies);
  
  if (type === 'admin')
    next();
  else
    res.sendStatus(403);
}
export async function student_only(req:any, res:any, next:any) {
  const user = await db.get_user_from_token(req.cookies.token);
  if (user?.type !== 'student') return res.status(403).json({ error: 'Students only' });
  next();
  
}