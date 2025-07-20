import { useState, useEffect, useRef } from "react";

const CourseForm = ({ onClose, onSubmit, defaultValues }) => {
  const [form, setForm] = useState(
    defaultValues || {
      title: "",
      code: "",
      department: "",
      timing: "",
      room: "",
      enrolled: 0,
      type: "Lecture",
    }
  );

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus(); // Auto focus first input
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: defaultValues?.id || Date.now() });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl w-full max-w-md p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
          {defaultValues ? "Edit Course" : "Add New Course"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {[
            { name: "title", type: "text", placeholder: "Course Title", required: true },
            { name: "code", type: "text", placeholder: "Course Code", required: true },
            { name: "department", type: "text", placeholder: "Department", required: true },
            { name: "timing", type: "text", placeholder: "Timing (e.g. 10:00 AM - 11:30 AM)" },
            { name: "room", type: "text", placeholder: "Room Number (e.g. 203)" },
            { name: "enrolled", type: "number", placeholder: "Enrolled Students" },
          ].map(({ name, type, placeholder, required }, index) => (
            <input
              key={name}
              type={type}
              name={name}
              value={form[name]}
              onChange={handleChange}
              required={required}
              placeholder={placeholder}
              ref={index === 0 ? inputRef : null}
              className="w-full px-4 py-2 border rounded-md text-sm text-gray-800 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          ))}

          {/* Type Dropdown */}
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md text-sm text-gray-800 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
          >
            <option value="Lecture">Lecture</option>
            <option value="Lab">Lab</option>
          </select>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500 transition"
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
