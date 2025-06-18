import argon2 from 'argon2';
import jwt from 'jsonwebtoken';
export async function calc_password_hash(name, pass) {
    return argon2.hash(name + pass, {
        timeCost: 10,
        parallelism: 1,
        memoryCost: 1024, //KiB
        hashLength: 48,
        secret: Buffer.from(process.env.ARGON2_PEPPER)
    });
}
export async function verify_password_hash(name, pass, pass_hash) {
    try {
        let result = await argon2.verify(pass_hash, name + pass, {
            secret: Buffer.from(process.env.ARGON2_PEPPER)
        });
        return result;
    }
    catch (err) {
        return false;
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
export function jwt_create(uid, type) {
    return jwt.sign({ uid, type }, process.env.JWT_SECRET, { expiresIn: '15d' });
}
// if this returns null, token is either invalid or expired and client should delete the session cookie
export function jwt_decode(token) {
    try {
        let result = jwt.verify(token, process.env.JWT_SECRET);
        if (result.uid && result.type)
            return { uid: result.uid, type: result.type };
        else
            return null;
    }
    catch (err) {
        return null;
    }
}
