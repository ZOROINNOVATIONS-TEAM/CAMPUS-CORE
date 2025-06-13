import mongoose from 'mongoose';
import * as auth from '#lib/auth.ts';

const db = await mongoose.connect(process.env.MONGODB_URL!);

export interface User
{
  userid: string, // this is the unique key, same as rollno for students, faculty and admin can have something like FC0001, ADM001
  email: string,
  pass: string, // hashed password
  name: string,
  type: string // student, faculty, admin
}

/////////////////////////////////////////////////////////////////////////////

export function add_user(user: User)
{
  //TODO
}

export function update_email(userid: string)
{
  //TODO
}

export function update_password(userid: string)
{
  //TODO
}

/////////////////////////////////////////////////////////////////////////////

export function get_user_from_userid(userid: string): User|null
{
  //TODO
  return null;
}

export function get_user_from_email(email: string): User|null
{
  //TODO
  return null;
}

export function get_user_from_token(token: string): User|null
{
  if (token)
  {
    const uid = auth.jwt_decode_uid(token);
    if (uid)
    {
      const user = get_user_from_userid(uid);
      if (user)
      {
        return user;
      }
    }
  }
  
  return null;
}