import { CourseInfoBlock } from "./CourseInfoBlock";

export function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4 border border-gray-100">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{course.name}</h3>
          <p className="text-sm text-gray-500">
            {course.instructor} &nbsp;&bull;&nbsp; {course.code}
          </p>
        </div>
        <button className="text-indigo-600 text-sm font-semibold hover:underline">
          View Materials
        </button>
      </div>

      <div className="flex gap-4 justify-between">
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
