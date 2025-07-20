// src/components/faculty/CourseCard.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faUpload,
  faFileAlt,
  faClock,
  faCog,
  faMapMarkerAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg mb-4">
      {/* Course Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">{course.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {course.code} • {course.department}
          </p>
        </div>
        <span className="px-2 py-1 rounded-full bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-200 text-xs font-medium">
          Active
        </span>
      </div>

      {/* Course Details */}
      <div className="mt-4 flex space-x-4">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faClock} className="mr-1" />{" "}
            {course.schedule}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1" />{" "}
            {course.room}, {course.enrolledStudents} Students Enrolled
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {/* Left Column */}
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-200">Course Materials</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{course.materialsCount} files</p>
          <button className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            <FontAwesomeIcon icon={faUpload} className="mr-1" /> Upload New
          </button>
        </div>

        {/* Right Column */}
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-200">Assignments</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{course.assignmentsCount} active</p>
          <button className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            <FontAwesomeIcon icon={faPlus} className="mr-1" /> Create New
          </button>
        </div>
      </div>

      {/* Additional Actions */}
      <div className="mt-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FontAwesomeIcon icon={faEye} className="mr-1" /> View Details
          </button>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FontAwesomeIcon icon={faFileAlt} className="mr-1" /> Submissions
          </button>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <FontAwesomeIcon icon={faCog} className="mr-1" /> Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
