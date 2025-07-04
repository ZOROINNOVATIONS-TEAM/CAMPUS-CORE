import { useState, useEffect } from "react";

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
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4">
        <h2 className="text-xl font-semibold">
          {defaultValues ? "Edit Course" : "Add Course"}
        </h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Course Title"
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            placeholder="Course Code"
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full px-3 py-2 border rounded"
            required
          />
          <input
            type="text"
            name="timing"
            value={form.timing}
            onChange={handleChange}
            placeholder="Timing"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="text"
            name="room"
            value={form.room}
            onChange={handleChange}
            placeholder="Room"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="number"
            name="enrolled"
            value={form.enrolled}
            onChange={handleChange}
            placeholder="Students Enrolled"
            className="w-full px-3 py-2 border rounded"
          />

          <div className="flex justify-end space-x-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
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
