import * as db from '#lib/db.ts';
export const course = async (req: any, res: any) => {
    const user = req.user;
    try {
        const result = await db.register_student_to_course(user._id!, req.params.course_id);
        return res.json({ success: result });
    } catch (err) {
        if (err instanceof Error) {
            return res.status(400).json({ error: err.message });
        } else {
            return res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}