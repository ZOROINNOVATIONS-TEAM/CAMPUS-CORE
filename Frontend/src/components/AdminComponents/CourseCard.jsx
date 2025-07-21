import { useState } from "react";

const CourseCard = ({ course, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...course });

  const statusColors = {
    Active: "bg-blue-100 text-blue-800",
    Inactive: "bg-red-100 text-red-800",
    Pending: "bg-yellow-100 text-yellow-800"
  };

  const handleSave = () => {
    onEdit(formData); // send updated course back to parent
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
        {isEditing ? (
            <>
            <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            />
            <input
                name="code"
                value={formData.code}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            />
            <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            />
            <input
                name="credits"
                type="number"
                value={formData.credits}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            />
            <input
                name="students"
                type="number"
                value={formData.students}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            />
            <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full mb-2 p-1 border rounded"
            >
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
            </select>
            <div className="flex justify-between mt-3">
                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={handleSave}>
                Save
                </button>
                <button className="bg-gray-300 px-3 py-1 rounded" onClick={() => setIsEditing(false)}>
                Cancel
                </button>
            </div>
            </>
        ) : (
        <>
            <div className="flex justify-between items-start">

                <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-xs text-gray-500">{course.code}</p>
                </div>

                <span className={`px-2 py-1 text-xs rounded-full ${statusColors[course.status]}`}>
                {course.status}
                </span>

            </div>
            
            <p className="mt-2 text-sm text-gray-600">Department: {course.department}</p>
            <p className="text-sm text-gray-600">Credits: {course.credits} | Students: {course.students}</p>
            
            <div className="flex items-center gap-2 mt-2">
                <img src={course.instructor.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
                <p className="text-sm">{course.instructor.name} <span className="text-xs text-gray-500">({course.instructor.title})</span></p>
            </div>
            
            <div className="flex justify-between items-center mt-4">
                <button className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded" onClick={() => setIsEditing(true)}>
                    Edit
                </button>
                <button className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded" onClick={() => onDelete(course.code)}>
                    Delete
                </button>
            </div>
        </>
        )}
    </div>
  );
};

export default CourseCard;
