import * as db from '#lib/db.js';
async function get_user_type(cookies) {
    const session_token = cookies['session_token'];
    console.log(" Cookie session_token:", session_token);
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
    else {
        res.sendStatus(403);
        console.log("faculty or admin check ");
    }
}
export async function admin_only(req, res, next) {
    const type = await get_user_type(req.cookies);
    console.log(" Type:", type);
    if (type === 'admin')
        next();
    else {
        res.sendStatus(403);
        console.log("Admin is here");
    }
}
export async function student_only(req, res, next) {
    const token = req.cookies.session_token;
    const user = await db.get_user_from_token(token);
    if (!user || (user.type && user.type.toLowerCase() !== 'student')) {
        console.log('student_only middleware: Forbidden, user type:', user?.type);
        return res.status(403).json({ error: 'Students only' });
    }
    req.user = user;
    next();
}
