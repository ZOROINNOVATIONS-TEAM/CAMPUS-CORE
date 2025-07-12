import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";

const STORAGE_KEY = "faculty_courses";

const CourseSetup = () => {
  const [courses, setCourses] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  }, [courses]);

  const closeForm = () => {
    setShowForm(false);
    setEditCourse(null);
  };

  const handleAdd = (course) => {
    // Ensure unique id
    if (!course.id) {
      course.id = Date.now();
    }
    setCourses([...courses, course]);
    closeForm();
  };

  const handleUpdate = (updated) => {
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));
    closeForm();
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      setCourses(courses.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Course Setup</h2>
        <button
          onClick={() => {
            setEditCourse(null);
            setShowForm(true);
          }}
          className={`flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
            showForm ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={showForm}
        >
          <Plus size={18} />
          Add Course
        </button>
      </div>

      {courses.length === 0 ? (
        <p className="text-gray-500">No courses added yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onEdit={() => {
                setEditCourse(course);
                setShowForm(true);
              }}
              onDelete={() => handleDelete(course.id)}
            />
          ))}
        </div>
      )}

      {showForm && (
        <CourseForm
          onClose={closeForm}
          onSubmit={editCourse ? handleUpdate : handleAdd}
          defaultValues={editCourse}
        />
      )}
    </div>
  );
};

export default CourseSetup;
