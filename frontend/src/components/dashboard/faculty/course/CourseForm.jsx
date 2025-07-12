import { useState } from "react";

const CourseForm = ({ onClose, onSubmit, defaultValues }) => {
  const [form, setForm] = useState(
    defaultValues || {
      title: "",
      code: "",
      department: "",
      timing: "",
      room: "",
      enrolled: 0,
    }
  );

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: defaultValues?.id || Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-md p-6 space-y-4 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {defaultValues ? "Edit Course" : "Add Course"}
        </h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          {[
            { name: "title", type: "text", placeholder: "Course Title", required: true },
            { name: "code", type: "text", placeholder: "Course Code", required: true },
            { name: "department", type: "text", placeholder: "Department", required: true },
            { name: "timing", type: "text", placeholder: "Timing" },
            { name: "room", type: "text", placeholder: "Room" },
            { name: "enrolled", type: "number", placeholder: "Students Enrolled" },
          ].map(({ name, type, placeholder, required }) => (
            <input
              key={name}
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              className="w-full px-3 py-2 border rounded text-gray-800 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400"
            />
          ))}

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
            >
              {defaultValues ? "Update" : "Create"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseForm;
