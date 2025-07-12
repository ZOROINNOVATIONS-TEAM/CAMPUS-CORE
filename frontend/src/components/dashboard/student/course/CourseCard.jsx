import { CourseInfoBlock } from "./CourseInfoBlock";
import { BookOpen } from "lucide-react"; // Optional icon

export function CourseCard({ course }) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-4 sm:p-6 space-y-4 border border-gray-100 dark:border-gray-700 transition">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{course.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {course.instructor} &nbsp;&bull;&nbsp; {course.code}
          </p>
        </div>

        <button className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:underline flex items-center gap-1">
          <BookOpen className="w-4 h-4" />
          View Materials
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
        <CourseInfoBlock
          type="syllabus"
          label="Syllabus"
          sublabel="Course outline and requirements"
        />
        <CourseInfoBlock
          type="resources"
          label="Resources"
          sublabel="Files available"
        />
        <CourseInfoBlock
          type="assignments"
          label="Assignments"
          sublabel={`${course.assignments.pending} pending, ${course.assignments.completed} completed`}
        />
        <CourseInfoBlock
          type="schedule"
          label="Schedule"
          sublabel={`${course.schedule.days}, ${course.schedule.time}`}
        />
      </div>
    </div>
  );
}
