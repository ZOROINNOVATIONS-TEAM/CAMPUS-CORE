import { FaBook, FaFolderOpen, FaTasks, FaCalendarAlt } from "react-icons/fa";

const CourseCard = ({ course }) => (
    <div className="bg-white dark:bg-gray-800 p-5 border-violet-400 rounded-xl shadow-sm border dark:border-violet-700 ">
        <div className="mb-2">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{course.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
                {course.professor} • <span className="text-gray-500 dark:text-gray-500">{course.code}</span>
            </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400">
                    <FaBook /> <span>Syllabus</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{course.syllabus}</p>
            </div>
            <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400">
                    <FaFolderOpen /> <span>Resources</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{course.resources}</p>
            </div>
            <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-sm text-pink-600 dark:text-pink-400">
                    <FaTasks /> <span>Assignments</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{course.assignments}</p>
            </div>
            <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                    <FaCalendarAlt /> <span>Schedule</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{course.schedule}</p>
            </div>
        </div>
        <div className="mt-4 text-right">
            <button className="text-sm text-violet-600 dark:text-violet-400 font-medium border border-violet-600 dark:border-violet-400 rounded-md px-3 py-1 hover:bg-violet-50 dark:hover:bg-violet-900">
                View Materials
            </button>
        </div>
    </div>
);

const CourseSetup = ({ courses }) => {
    return (
        <div className="w-full min-h-screen p-4">
            <div className="w-full p-6 lg:p-8 bg-white dark:bg-gray-800 shadow-2xl border-violet-400  rounded-xl dark:border dark:border-violet-700">
                <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Enrolled Courses</h2>
                <div className="flex flex-col gap-6">
                    {courses.map((course, idx) => (
                        <CourseCard key={idx} course={course} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseSetup;
