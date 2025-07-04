import { useState } from "react";
import { Plus } from "lucide-react";
import CourseCard from "./CourseCard";
import CourseForm from "./CourseForm";

const CourseSetup = () => {
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editCourse, setEditCourse] = useState(null);

  const handleAdd = (course) => {
    setCourses([...courses, course]);
  };

  const handleUpdate = (updated) => {
    setCourses(courses.map((c) => (c.id === updated.id ? updated : c)));
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((c) => c.id !== id));
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
          className="flex items-center gap-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Course
        </button>
      </div>

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

      {showForm && (
        <CourseForm
          onClose={() => {
            setShowForm(false);
            setEditCourse(null);
          }}
          onSubmit={editCourse ? handleUpdate : handleAdd}
          defaultValues={editCourse}
        />
      )}
    </div>
  );
};

export default CourseSetup;
