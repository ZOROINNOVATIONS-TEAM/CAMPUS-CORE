import { useState } from "react";

const AddCourseModal = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    code: "",
    department: "",
    credits: "",
    students: "",
    status: "Active",
    instructor: {
      name: "",
      title: "",
      avatar: "https://via.placeholder.com/30"
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["name", "title"].includes(name)) {
      setFormData(prev => ({
        ...prev,
        instructor: {
          ...prev.instructor,
          [name]: value
        }
      }));
    } 
    else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.code) return;
    formData.credits = parseInt(formData.credits);
    formData.students = parseInt(formData.students);
    onAdd(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-black rounded-xl p-6 w-full max-w-md text-amber-50">
            <h2 className="text-lg font-semibold mb-4">Add New Course</h2>
            <form onSubmit={handleSubmit} className="space-y-3 text-blue-200">
                <input name="title" onChange={handleChange} required placeholder="Course Title" className="w-full border px-3 py-2 rounded" />
                <input name="code" onChange={handleChange} required placeholder="Course Code" className="w-full border px-3 py-2 rounded" />
                <input name="department" onChange={handleChange} placeholder="Department" className="w-full border px-3 py-2 rounded" />
                <input name="credits" type="number" onChange={handleChange} placeholder="Credits" className="w-full border px-3 py-2 rounded" />
                <input name="students" type="number" onChange={handleChange} placeholder="Students" className="w-full border px-3 py-2 rounded" />
                <select name="status" onChange={handleChange} className="w-full border px-3 py-2 rounded bg-blue-200 text-amber-950">
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                </select>
                <input name="name" onChange={handleChange} placeholder="Instructor Name" className="w-full border px-3 py-2 rounded" />
                <input name="title" onChange={handleChange} placeholder="Instructor Title" className="w-full border px-3 py-2 rounded" />
                
                <div className="flex justify-end gap-2">
                    <button type="button" onClick={onClose} className="px-3 py-1 bg-gray-300 text-amber-950 rounded">Cancel</button>
                    <button type="submit" className="px-4 py-1 bg-blue-600 text-white rounded">Add</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddCourseModal;
