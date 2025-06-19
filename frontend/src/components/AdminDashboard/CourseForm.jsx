import React, { useState, useEffect } from "react";

const CourseForm = ({ onSubmit, editingCourse }) => {
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");

  useEffect(() => {
    if (editingCourse) {
      setTitle(editingCourse.title);
      setInstructor(editingCourse.instructor);
    } else {
      setTitle("");
      setInstructor("");
    }
  }, [editingCourse]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !instructor) return;

    onSubmit({ id: editingCourse?.id || Date.now(), title, instructor });
    setTitle("");
    setInstructor("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-4">
      <h2 className="text-lg font-semibold mb-2">{editingCourse ? "Edit Course" : "Add Course"}</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Course Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 w-full mb-2"
        placeholder="Instructor Name"
        value={instructor}
        onChange={(e) => setInstructor(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        {editingCourse ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default CourseForm;
