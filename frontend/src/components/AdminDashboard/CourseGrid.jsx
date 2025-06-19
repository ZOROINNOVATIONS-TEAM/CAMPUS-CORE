const CourseGrid = ({ courses, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {courses.map((course) => (
        <div key={course.id} className="bg-white p-4 shadow rounded">
          <h3 className="font-semibold text-lg">{course.title}</h3>
          <p className="text-gray-600">Instructor: {course.instructor}</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => onEdit(course)}
              className="text-blue-600 hover:underline"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(course.id)}
              className="text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseGrid;