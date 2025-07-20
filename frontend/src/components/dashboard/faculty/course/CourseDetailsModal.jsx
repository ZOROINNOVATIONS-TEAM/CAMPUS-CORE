import React, { useRef } from "react";
import {
  X,
  FileText,
  UploadCloud,
  ClipboardList,
  FlaskConical,
} from "lucide-react";

const CourseDetailsModal = ({ course, onClose }) => {
  const overlayRef = useRef(null);
  const isLab = course.type === "Lab";

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Uploaded: ${file.name}`);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4"
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
          {course.title} – {course.code}
        </h2>

        {/* Info Section */}
        <div className="mb-6 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <strong>Department:</strong> {course.department}
          </p>
          <p>
            <strong>Days:</strong> {course.days}
          </p>
          <p>
            <strong>Timing:</strong> {course.timing}
          </p>
          <p>
            <strong>Room:</strong> {course.room}
          </p>
          <p>
            <strong>Enrolled:</strong> {course.enrolled} students
          </p>
        </div>

        {/* Course Materials Upload */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
            <FileText size={18} />
            Course Materials
          </h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleUpload}
            className="block w-full text-sm text-gray-700 dark:text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border
              file:border-gray-300 dark:file:border-gray-600
              file:text-sm file:font-medium
              file:bg-gray-100 dark:file:bg-gray-800
              hover:file:bg-gray-200 dark:hover:file:bg-gray-700"
          />
          <p className="mt-2 text-xs text-gray-500">
            Only PDF or DOC/DOCX files are allowed.
          </p>
        </div>

        {/* Assignment or Lab Report Upload */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
            {isLab ? (
              <>
                <FlaskConical size={18} />
                Lab Report
              </>
            ) : (
              <>
                <ClipboardList size={18} />
                Assignment
              </>
            )}
          </h3>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleUpload}
            className="block w-full text-sm text-gray-700 dark:text-gray-300
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border
              file:border-gray-300 dark:file:border-gray-600
              file:text-sm file:font-medium
              file:bg-gray-100 dark:file:bg-gray-800
              hover:file:bg-gray-200 dark:hover:file:bg-gray-700"
          />
          <p className="mt-2 text-xs text-gray-500">
            Only PDF or DOC/DOCX files are allowed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsModal;
