import React, { useState } from "react";
import {
  BookOpen,
  ClipboardList,
  UploadCloud,
  Users,
  CircleDot,
  MoreVertical,
  FlaskConical,
  MapPin,
  Settings,
} from "lucide-react";
import CourseDetailsModal from "./CourseDetailsModal";

const CourseCard = ({ course, onEdit, onDelete }) => {
  const isLab = course.type === "Lab";
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition p-5 flex flex-col justify-between gap-4 sm:gap-5">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
            {course.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {course.code} &bull; {course.department}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-xs bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full font-medium">
            ACTIVE
          </span>
          <button
            onClick={onEdit}
            title="Edit Course"
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <MoreVertical size={18} />
          </button>
        </div>
      </div>

      {/* Course Meta Info */}
      <div className="text-sm text-gray-600 dark:text-gray-300 flex flex-wrap gap-x-6 gap-y-2">
        <p className="flex items-center gap-1">
          <CircleDot size={14} /> {course.days || "Mon/Wed"} &bull; {course.timing}
        </p>
        <p className="flex items-center gap-1">
          <MapPin size={14} /> {course.room}
        </p>
        <p className="flex items-center gap-1">
          <Users size={14} /> {course.enrolled} Enrolled
        </p>
      </div>

      {/* Course Stats */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="flex items-center gap-1 font-semibold text-gray-800 dark:text-white">
            <BookOpen size={14} /> Course Materials
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {course.materials?.count || 0} files
          </p>
        </div>

        <div>
          <p className="flex items-center gap-1 font-semibold text-gray-800 dark:text-white">
            {isLab ? <FlaskConical size={14} /> : <ClipboardList size={14} />}
            {isLab ? " Lab Reports" : " Assignments"}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            {course.reportsOrAssignments?.count || 0} active
          </p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-3 grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
        <button
          onClick={() => setShowDetails(true)}
          className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none"
        >
          <UploadCloud size={14} /> Upload Files
        </button>
        <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
          <Users size={14} /> Attendance
        </button>
        {isLab ? (
          <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
            <FlaskConical size={14} /> Lab Equipment
          </button>
        ) : (
          <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
            <ClipboardList size={14} /> Submissions
          </button>
        )}
        <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline focus:outline-none">
          <Settings size={14} /> Settings
        </button>
      </div>

      {/* Modal for Details */}
      {showDetails && (
        <CourseDetailsModal
          course={course}
          onClose={() => setShowDetails(false)}
        />
      )}
    </div>
  );
};

export default CourseCard;
