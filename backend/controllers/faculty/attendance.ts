import * as db from '#lib/db.ts';

const sendError = (res: any, statusCode: number, message: string) => {
    res.status(statusCode).json({ error: message });
};

export const attendance = async (req: any, res: any) => {
    try {
        const faculty = await db.get_user_from_token(req.cookies.session_token);
        if (!faculty || faculty.type !== 'faculty') {
            return sendError(res, 403, 'Only faculty allowed');
        }

        const { course_id, student_id, date } = req.body;

        if (!course_id || !student_id || !date) {
            return sendError(res, 400, 'Missing required fields');
        }

        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) {
            return sendError(res, 400, 'Invalid date format');
        }

        const att_id = await db.mark_attendance(course_id, student_id, parsedDate, faculty._id!);
        res.json({ attendance_id: att_id });

    } catch (err) {
        if (err instanceof Error) {
            sendError(res, 400, err.message);
        }
        else {
            sendError(res, 500, 'Unknown error occurred');
        }
    }
};