import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

export async function calc_password_hash(uid: string, pass: string): Promise<string>
{
  return argon2.hash(uid+pass, {
    timeCost: 10,
    parallelism: 1,
    memoryCost: 1024,//KiB
    hashLength: 48,
    secret: Buffer.from(process.env.ARGON2_PEPPER!)
  });
}

export async function verify_password_hash(uid: string, pass: string, pass_hash: string): Promise<boolean>
{
  try
  {
    let result = await argon2.verify(pass_hash, uid+pass, {
      secret: Buffer.from(process.env.ARGON2_PEPPER!)
    });
    return result;
  }
  catch (err) {
    return false;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function jwt_create(uid: string): string
{
  return jwt.sign({uid}, process.env.JWT_SECRET!, {expiresIn: '15d'});
}

// if this returns null, token is either invalid or expired and client should delete the session cookie
export function jwt_decode_uid(token: string): string|null
{
  try
  {
    let result = jwt.verify(token, process.env.JWT_SECRET!) as jwt.JwtPayload;
    
    if (result.uid)
      return result.uid;
    else
      return null;
  }
  catch (err) {
    return null;
  }
}
