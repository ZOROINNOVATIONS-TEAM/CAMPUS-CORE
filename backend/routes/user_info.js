import express from 'express';
import * as db from '#lib/db.js';
const router = express.Router();
router.get('/user_info', async (req, res) => {
    const session_token = req.cookies['session_token'];
    if (session_token) {
        const user = await db.get_user_from_token(session_token);
        if (user) {
            user.uid = user._id;
            delete user._id;
            delete user.__v;
            delete user.pass_hash;
            res.json(user); // returns {uid, rollno, email, name, type} only
        }
        else
            res.status(400).json({ error: 'invalid session_token' });
    }
    else
        res.status(400).json({ error: 'missing session_token' });
});
export default router;
