import { useState } from "react";
import CourseManagementStats from "./CourseManagementStats";
import CourseList from "./CourseList";

const mockCourses = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    credits: 4,
    students: 42,
    faculty: "Dr. Robert Chen",
    facultyTitle: "Professor",
    status: "active",
  },
  {
    id: 2,
    name: "Advanced Mathematics",
    code: "MATH302",
    department: "Mathematics",
    credits: 3,
    students: 28,
    faculty: "Dr. Emily Wilson",
    facultyTitle: "Associate Professor",
    status: "active",
  },
];

export default function CourseSetupPage() {
  const [courses, setCourses] = useState(mockCourses);
  const [showAdd, setShowAdd] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  // ---- CRUD Handlers ----
  function handleAdd(newCourse) {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
    setShowAdd(false);
  }

  function handleEditSave(updatedCourse) {
    setCourses(courses.map((c) => (c.id === updatedCourse.id ? updatedCourse : c)));
    setEditCourse(null);
  }

  function handleDelete(course) {
    if (window.confirm(`Delete course: ${course.name}?`)) {
      setCourses(courses.filter((c) => c.id !== course.id));
    }
  }

  function handleAssign(course) {
    alert(`Assign faculty to: ${course.name}`);
  }

  // ---- Forms ----
  function AddEditForm({ course = {}, onSubmit, onCancel }) {
    const [form, setForm] = useState({
      name: course.name || "",
      code: course.code || "",
      department: course.department || "",
      credits: course.credits || 0,
      students: course.students || 0,
      faculty: course.faculty || "",
      facultyTitle: course.facultyTitle || "",
      status: course.status || "active",
    });

    function handleChange(e) {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
      e.preventDefault();
      onSubmit({ ...course, ...form, credits: Number(form.credits), students: Number(form.students) });
    }

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          className="border rounded px-2 py-1"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Course Name"
          required
        />
        <input
          className="border rounded px-2 py-1"
          name="code"
          value={form.code}
          onChange={handleChange}
          placeholder="Course Code"
          required
        />
        <input
          className="border rounded px-2 py-1"
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          required
        />
        <input
          className="border rounded px-2 py-1"
          type="number"
          name="credits"
          value={form.credits}
          onChange={handleChange}
          placeholder="Credits"
          min={1}
        />
        <input
          className="border rounded px-2 py-1"
          type="number"
          name="students"
          value={form.students}
          onChange={handleChange}
          placeholder="Enrolled Students"
          min={0}
        />
        <input
          className="border rounded px-2 py-1"
          name="faculty"
          value={form.faculty}
          onChange={handleChange}
          placeholder="Faculty Name"
        />
        <input
          className="border rounded px-2 py-1"
          name="facultyTitle"
          value={form.facultyTitle}
          onChange={handleChange}
          placeholder="Faculty Title"
        />
        <select
          className="border rounded px-2 py-1"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="pending">Pending</option>
        </select>
        <div className="flex gap-3 mt-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">
            Save
          </button>
          <button type="button" onClick={onCancel} className="text-gray-600 px-4 py-1 rounded border">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      <CourseManagementStats onAddCourse={() => setShowAdd(true)} />
      <CourseList
        courses={courses}
        onEdit={(course) => setEditCourse(course)}
        onDelete={handleDelete}
        onAssign={handleAssign}
      />

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-2">
            <h2 className="text-lg font-bold mb-4">Add New Course</h2>
            <AddEditForm
              onSubmit={handleAdd}
              onCancel={() => setShowAdd(false)}
            />
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {editCourse && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md mx-2">
            <h2 className="text-lg font-bold mb-4">Edit Course</h2>
            <AddEditForm
              course={editCourse}
              onSubmit={handleEditSave}
              onCancel={() => setEditCourse(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
