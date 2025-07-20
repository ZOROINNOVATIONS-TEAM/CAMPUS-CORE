import { useState } from "react";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";
import { Plus, LayoutGrid, List, Filter as FilterIcon } from "lucide-react";

const CourseSetup = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to Computer Science",
      code: "CS101",
      department: "Computer Science",
      timing: "10:00 AM - 11:30 AM",
      days: "Mon, Wed, Fri",
      room: "101",
      enrolled: 42,
      type: "Lecture",
      materials: { count: 12 },
      reportsOrAssignments: { count: 4 },
    },
    {
      id: 2,
      title: "Advanced Mathematics",
      code: "MATH302",
      department: "Mathematics",
      timing: "11:30 AM - 1:30 PM",
      days: "Tue, Thu",
      room: "203",
      enrolled: 28,
      type: "Lecture",
      materials: { count: 8 },
      reportsOrAssignments: { count: 3 },
    },
    {
      id: 3,
      title: "Physics Laboratory",
      code: "PHYS201L",
      department: "Physics",
      timing: "2:00 PM - 5:00 PM",
      days: "Wed",
      room: "Lab Building B",
      enrolled: 18,
      type: "Lab",
      materials: { count: 6 },
      reportsOrAssignments: { count: 2 },
    },
    {
      id: 4,
      title: "English Literature",
      code: "ENG205",
      department: "English",
      timing: "3:30 PM - 5:00 PM",
      days: "Tue, Thu",
      room: "305",
      enrolled: 35,
      type: "Lecture",
      materials: { count: 10 },
      reportsOrAssignments: { count: 5 },
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null);
  const [viewMode, setViewMode] = useState("grid");

  const handleAddOrEdit = (newCourse) => {
    setCourses((prev) =>
      prev.some((c) => c.id === newCourse.id)
        ? prev.map((c) => (c.id === newCourse.id ? newCourse : c))
        : [...prev, newCourse]
    );
  };

  const handleDelete = (id) =>
    setCourses((prev) => prev.filter((c) => c.id !== id));

  return (
    <div className="p-4 sm:p-6 space-y-6">

      {/* Filter Row */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div className="flex flex-wrap gap-2">
          <select className="border rounded px-3 py-1 dark:bg-gray-900 dark:text-white text-sm">
            <option>Spring Semester 2025</option>
          </select>
          <select className="border rounded px-3 py-1 dark:bg-gray-900 dark:text-white text-sm">
            <option>All Departments</option>
          </select>
        </div>

        <div className="flex gap-2 items-center">
          {/* View Toggle */}
          <button
            onClick={() => setViewMode((prev) => (prev === "grid" ? "list" : "grid"))}
            className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            title="Toggle View"
          >
            {viewMode === "grid" ? (
              <List size={20} className="text-gray-600 dark:text-gray-300" />
            ) : (
              <LayoutGrid size={20} className="text-gray-600 dark:text-gray-300" />
            )}
          </button>

          {/* Add Button */}
          <button
            onClick={() => {
              setEditCourse(null);
              setShowForm(true);
            }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-2 rounded transition"
          >
            <Plus size={16} /> Add Course
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-5"
            : "flex flex-col gap-4"
        }`}
      >
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEdit={() => {
              setEditCourse(course);
              setShowForm(true);
            }}
            onDelete={() => handleDelete(course.id)}
            viewMode={viewMode}
          />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl mt-10">
        <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-white">
            Recent Activity
          </h3>
          <button
            className="text-sm flex items-center gap-1 px-3 py-1.5 rounded-md border text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <FilterIcon size={16} />
            Filter
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
              <tr>
                <th className="px-4 py-2 font-semibold">Activity</th>
                <th className="px-4 py-2 font-semibold">Course</th>
                <th className="px-4 py-2 font-semibold">Date</th>
                <th className="px-4 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2">New Assignment Created</td>
                <td className="px-4 py-2">CS101</td>
                <td className="px-4 py-2">June 15, 2025</td>
                <td className="px-4 py-2 text-green-600 font-medium">Published</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2">Graded Assignments</td>
                <td className="px-4 py-2">MATH302</td>
                <td className="px-4 py-2">June 14, 2025</td>
                <td className="px-4 py-2 text-gray-600 dark:text-gray-400 font-medium">
                  Completed
                </td>
              </tr>
              <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                <td className="px-4 py-2">New Material Uploaded</td>
                <td className="px-4 py-2">PHYS201L</td>
                <td className="px-4 py-2">June 13, 2025</td>
                <td className="px-4 py-2 text-green-600 font-medium">Published</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Course Form */}
      {showForm && (
        <CourseForm
          defaultValues={editCourse}
          onClose={() => setShowForm(false)}
          onSubmit={handleAddOrEdit}
        />
      )}
    </div>
  );
};

export default CourseSetup;
