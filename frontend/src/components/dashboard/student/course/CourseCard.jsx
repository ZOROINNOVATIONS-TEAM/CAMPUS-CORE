import { CourseInfoBlock } from "./CourseInfoBlock";

export function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 space-y-4 border border-gray-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-base sm:text-lg font-semibold">{course.name}</h3>
          <p className="text-xs sm:text-sm text-gray-500">
            {course.instructor} &nbsp;&bull;&nbsp; {course.code}
          </p>
        </div>
        <button className="text-indigo-600 text-xs sm:text-sm font-semibold hover:underline">
          View Materials
        </button>
      </div>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
        <CourseInfoBlock
          type="syllabus"
          label="Syllabus"
          sublabel="Course outline and requirements"
        />
        <CourseInfoBlock type="resources" label="Resources" sublabel="Files available" />
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
