// src/pages/admin/CourseSetupPage.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faUsers, faChalkboardTeacher, faBook, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import { AdminTopBar, AdminBannerAndTabs } from "../../components/dashboard/admin/AdminHeader";

// Sample data (replace with API)
const departments = [
  {
    name: "Computer Science",
    students: 450,
    faculties: 25,
    courses: [
      { name: "Introduction to Programming", students: 150, faculties: 5 },
      { name: "Data Structures", students: 120, faculties: 4 },
      { name: "Machine Learning", students: 180, faculties: 6 },
    ],
  },
  {
  "name": "Electrical Engineering",
  "students": 400,
  "faculties": 22,
  "courses": [
    { "name": "Circuit Theory", "students": 130, "faculties": 5 },
    { "name": "Electromagnetics", "students": 110, "faculties": 4 },
    { "name": "Power Systems", "students": 160, "faculties": 6 }
  ],
},

{
  "name": "Mechanical Engineering",
  "students": 350,
  "faculties": 20,
  "courses": [
    { "name": "Thermodynamics", "students": 120, "faculties": 5 },
    { "name": "Fluid Mechanics", "students": 100, "faculties": 4 },
    { "name": "Machine Design", "students": 130, "faculties": 5 }
  ],
},

{
  "name": "Civil Engineering",
  "students": 280,
  "faculties": 16,
  "courses": [
    { "name": "Structural Analysis", "students": 90, "faculties": 4 },
    { "name": "Geotechnical Engineering", "students": 80, "faculties": 3 },
    { "name": "Transportation Engineering", "students": 110, "faculties": 4 }
  ],
},

{
  "name": "Fine Arts",
  "students": 220,
  "faculties": 12,
  "courses": [
    { "name": "Drawing Fundamentals", "students": 70, "faculties": 3 },
    { "name": "Painting Techniques", "students": 60, "faculties": 3 },
    { "name": "Sculpture", "students": 90, "faculties": 4 }
  ],
},

{
  "name": "Performing Arts",
  "students": 180,
  "faculties": 10,
  "courses": [
    { "name": "Theater Acting", "students": 60, "faculties": 3 },
    { "name": "Music Theory", "students": 50, "faculties": 2 },
    { "name": "Dance Fundamentals", "students": 70, "faculties": 3 }
  ],
},

{
  "name": "Liberal Arts",
  "students": 260,
  "faculties": 14,
  "courses": [
    { "name": "Philosophy", "students": 80, "faculties": 4 },
    { "name": "Literature Studies", "students": 90, "faculties": 4 },
    { "name": "History of Art", "students": 90, "faculties": 3 }
  ],
},

  {
    name: "Mathematics",
    students: 300,
    faculties: 18,
    courses: [
      { name: "Calculus I", students: 100, faculties: 4 },
      { name: "Linear Algebra", students: 120, faculties: 5 },
      { name: "Statistics", students: 80, faculties: 3 },
    ],
  },
  {
    name: "Physics",
    students: 250,
    faculties: 15,
    courses: [
      { name: "Mechanics", students: 90, faculties: 4 },
      { name: "Electromagnetism", students: 80, faculties: 5 },
      { name: "Quantum Physics", students: 80, faculties: 3 },
    ],
  },
];

const CourseSetupPage = () => {
  const [expandedDept, setExpandedDept] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sticky top bar */}
      <AdminTopBar />

      {/* Scrollable banner and tabs */}
      <AdminBannerAndTabs />

      {/* Course Setup content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Admin Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Course Setup</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FontAwesomeIcon icon={faPlus} />
              Add Department
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <FontAwesomeIcon icon={faPlus} />
              Add Course
            </button>
          </div>
        </div>

        {/* Departments Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{dept.name}</h3>
                <button className="text-blue-600 dark:text-blue-300">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
              </div>
              <div className="flex justify-around text-center">
                <div>
                  <FontAwesomeIcon icon={faUsers} className="text-2xl text-blue-500 mb-2" />
                  <p className="text-lg font-semibold">{dept.students}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Students</p>
                </div>
                <div>
                  <FontAwesomeIcon icon={faChalkboardTeacher} className="text-2xl text-green-500 mb-2" />
                  <p className="text-lg font-semibold">{dept.faculties}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-300">Faculties</p>
                </div>
              </div>
              <button
                onClick={() => setExpandedDept(expandedDept === index ? null : index)}
                className="mt-4 w-full bg-gray-100 dark:bg-gray-700 py-2 rounded-lg text-center text-sm font-medium"
              >
                {expandedDept === index ? "Hide Courses" : "View Courses"}
              </button>
              {expandedDept === index && (
                <ul className="mt-4 space-y-3">
                  {dept.courses.map((course, cIndex) => (
                    <li key={cIndex} className="border-t dark:border-gray-700 pt-3">
                      <div className="flex justify-between">
                        <div>
                          <FontAwesomeIcon icon={faBook} className="text-blue-500 mr-2" />
                          <span className="font-medium">{course.name}</span>
                        </div>
                        <button className="text-blue-600 dark:text-blue-300 text-sm">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </div>
                      <div className="flex justify-around text-sm text-gray-600 dark:text-gray-300 mt-2">
                        <p>Students: {course.students}</p>
                        <p>Faculties: {course.faculties}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CourseSetupPage;
