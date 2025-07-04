import { MoreVertical, Pencil, Trash2 } from "lucide-react";

const CourseCard = ({ course, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold">{course.title}</h3>
          <p className="text-sm text-gray-500">
            {course.code} • {course.department}
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onEdit}
            className="text-blue-500 hover:text-blue-600 transition"
            title="Edit"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-600 transition"
            title="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <p><strong>Time:</strong> {course.timing}</p>
        <p><strong>Room:</strong> {course.room}</p>
        <p><strong>Enrolled:</strong> {course.enrolled}</p>
      </div>
    </div>
  );
};

export default CourseCard;
