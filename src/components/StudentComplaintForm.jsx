import React, { useState } from "react";
import { SendHorizonal } from "lucide-react"; // Optional icon

const StudentComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Complaint:", formData);
    setSubmitted(true);
    setFormData({ title: "", category: "", description: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8 mt-12 transition-all duration-300">
      <div className="mb-6 text-center">
        <span className="inline-block px-4 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-semibold rounded-full shadow-sm">
          Student Complaint Form
        </span>
        <h2 className="text-3xl font-bold mt-4 text-gray-800">Raise an Issue</h2>
        <p className="text-sm text-gray-500 mt-1">Fill out the form below to submit your concern</p>
      </div>

      {submitted && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-200 rounded-md text-center transition-all duration-300">
          🎉 Complaint submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 mb-1 font-medium">Complaint Title</label>
          <input
            type="text"
            name="title"
            placeholder="Eg: Classroom projector not working"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            <option value="">-- Select Category --</option>
            <option value="Academic">Academic</option>
            <option value="Hostel">Hostel</option>
            <option value="Facilities">Facilities</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="4"
            placeholder="Describe the issue clearly..."
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm resize-none focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-200"
        >
          <SendHorizonal className="w-4 h-4" />
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default StudentComplaintForm;
