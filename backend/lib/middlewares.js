import * as db from '#lib/db.js';
async function get_user_type(cookies) {
    const session_token = cookies['session_token'];
    if (session_token) {
        const user = await db.get_user_from_token(session_token);
        if (user?.type)
            return user.type;
    }
    return null;
}
export async function faculty_only(req, res, next) {
    const type = await get_user_type(req.cookies);
    if (type === 'faculty' || type === 'admin')
        next();
    else
        res.sendStatus(403);
}
export async function admin_only(req, res, next) {
    const type = await get_user_type(req.cookies);
    if (type === 'admin')
        next();
    else
        res.sendStatus(403);
}
export async function student_only(req, res, next) {
    const user = await db.get_user_from_token(req.cookies.token);
    if (user?.type !== 'student')
        return res.status(403).json({ error: 'Students only' });
    next();
}
