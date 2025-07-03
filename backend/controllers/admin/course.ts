import * as db from '#lib/db.ts';

export const adminCourse = async (req: any, res: any) => {
    try {
        const course_id = await db.create_course(req.body);
        res.json({ course_id });
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}

