import { useState } from "react";
import {
  Search,
  BookOpen,
  Folder,
  ClipboardCheck,
  Calendar,
  User,
} from "lucide-react";

export default function CourseSetup() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      name: "Advanced Mathematics",
      professor: "Prof. Sarah Wilson",
      code: "MATH-301",
      syllabus: "Course outline and requirements",
      resourcesCount: 12,
      assignmentsPending: 2,
      assignmentsCompleted: 5,
      schedule: "Mon, Wed 11:00 AM",
    },
    {
      id: 2,
      name: "Introduction to Computer Science",
      professor: "Prof. Michael Chen",
      code: "CS-101",
      syllabus: "Course outline and requirements",
      resourcesCount: 8,
      assignmentsPending: 1,
      assignmentsCompleted: 3,
      schedule: "Tue, Thu 9:00 AM",
    },
    {
      id: 3,
      name: "Physics Laboratory",
      professor: "Prof. David Thompson",
      code: "PHY-201",
      syllabus: "Course outline and requirements",
      resourcesCount: 15,
      assignmentsPending: 3,
      assignmentsCompleted: 0,
      schedule: "Wed 2:00 PM",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Enrolled Courses</h1>

        <div className="flex items-center space-x-3">
          <div className="relative text-gray-400">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="search"
              placeholder="Search courses..."
              className="bg-yellow-50 pl-10 pr-4 py-2 rounded-xl text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            + Add Course
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="font-semibold text-lg">{course.name}</h2>
                <div className="flex items-center text-sm text-gray-600 mt-1 gap-2">
                  <div className="flex items-center gap-1 text-gray-600">
                    <User className="w-4 h-4" />
                    <span>{course.professor}</span>
                  </div>
                  <span>  </span>
                  <span className="inline-block w-4 h-4 border border-gray-500 rounded-full"></span>
                  <span>{course.code}</span>
                </div>
              </div>
              <button className="text-violet-600 border border-violet-600 px-3 py-1.5 rounded-lg text-sm hover:bg-violet-50 transition">
                View Materials
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 text-left">
              {/* Syllabus */}
              <div className="bg-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <BookOpen className="w-4 h-4 text-violet-600" />
                  <p className="font-semibold text-gray-800 text-sm m-0">Syllabus</p>
                </div>
              <p className="text-xs text-gray-500">{course.syllabus}</p>
              </div>


              {/* Resources */}
<div className="bg-gray-100 rounded-lg p-4">
  <div className="flex items-center gap-2 mb-1">
    <Folder className="w-4 h-4 text-violet-600" />
    <p className="font-semibold text-gray-800 text-sm m-0">Resources</p>
  </div>
  <p className="text-xs text-gray-500">
    {course.resourcesCount} files available
  </p>
</div>

{/* Assignments */}
<div className="bg-gray-100 rounded-lg p-4">
  <div className="flex items-center gap-2 mb-1">
    <ClipboardCheck className="w-4 h-4 text-violet-600" />
    <p className="font-semibold text-gray-800 text-sm m-0">Assignments</p>
  </div>
  <p className="text-xs text-gray-500">
    {course.assignmentsPending} pending, {course.assignmentsCompleted} completed
  </p>
</div>

{/* Schedule */}
<div className="bg-gray-100 rounded-lg p-4">
  <div className="flex items-center gap-2 mb-1">
    <Calendar className="w-4 h-4 text-violet-600" />
    <p className="font-semibold text-gray-800 text-sm m-0">Schedule</p>
  </div>
  <p className="text-xs text-gray-500">{course.schedule}</p>
</div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
