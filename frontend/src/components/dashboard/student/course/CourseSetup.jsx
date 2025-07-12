import { useState } from "react";
import { Search } from "lucide-react";
import { CourseCard } from "./CourseCard";

export default function CourseSetup() {
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      name: "Advanced Mathematics",
      instructor: "Prof. Sarah Wilson",
      code: "MATH-301",
      assignments: { pending: 2, completed: 5 },
      schedule: { days: "Mon, Wed", time: "11:00 AM" },
    },
    {
      id: 2,
      name: "Introduction to Computer Science",
      instructor: "Prof. Michael Chen",
      code: "CS-101",
      assignments: { pending: 1, completed: 3 },
      schedule: { days: "Tue, Thu", time: "9:00 AM" },
    },
    {
      id: 3,
      name: "Physics Laboratory",
      instructor: "Prof. David Thompson",
      code: "PHY-201",
      assignments: { pending: 3, completed: 0 },
      schedule: { days: "Wed", time: "2:00 PM" },
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-2 sm:px-6 py-4 sm:py-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
          Enrolled Courses
        </h1>
        <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto">
          {/* Search Bar */}
          <div className="relative flex-1 sm:flex-initial text-gray-400">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5" />
            <input
              type="search"
              placeholder="Search courses..."
              className="bg-yellow-50 dark:bg-gray-800 pl-10 pr-4 py-2 rounded-xl text-sm placeholder-gray-400 text-gray-900 dark:text-white w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {/* Add Button */}
          <button className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition w-full sm:w-auto">
            + Add Course
          </button>
        </div>
      </div>

      {/* Course List */}
      {filteredCourses.length > 0 ? (
        <div className="space-y-5 sm:space-y-6">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 dark:text-gray-500 mt-10 text-sm italic">
          No courses found matching "<strong>{searchTerm}</strong>".
        </div>
      )}
    </section>
  );
}
