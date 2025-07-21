import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFolder, faTasks, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { AttendanceSummary } from "@/components/dashboard/student/AttendanceSummary";
import { TodaySchedule } from "@/components/dashboard/student/TodaySchedule";
import { RecentResults } from "@/components/dashboard/student/RecentResults";
import { Announcements } from "@/components/dashboard/student/Announcements";

// Mock Data for Enrolled Courses
const enrolledCourses = [
  {
    id: 1,
    title: "Advanced Mathematics",
    instructor: "Prof. Sarah Wilson",
    courseCode: "MATH301",
    materials: ["Notes.pdf", "Week 1 Video.mp4"],
    syllabus: "Course outline and requirements",
    resources: { count: 12, available: true },
    assignments: { pending: 2, completed: 5 },
    schedule: "Mon, Wed, Fri 10:00 AM",
    nextClass: "In 45 minutes"
  },
  {
    id: 2,
    title: "Introduction to Computer Science",
    instructor: "Prof. Michael Chen",
    courseCode: "CS101",
    materials: ["Lecture Slides.pptx", "Intro to HTML.docx"],
    syllabus: "Course outline and requirements",
    resources: { count: 8, available: true },
    assignments: { pending: 1, completed: 0 },
    schedule: "Tue, Thu 9:00 AM",
    nextClass: "In 2 hours"
  },
  {
    id: 3,
    title: "Physics Laboratory",
    instructor: "Prof. David Thompson",
    courseCode: "PHY201",
    materials: ["Lab Manual.pdf", "Experiment Guide.docx"],
    syllabus: "Course outline and requirements",
    resources: { count: 15, available: true },
    assignments: { pending: 3, completed: 2 },
    schedule: "Wed 2:00 PM",
    nextClass: "In 1 hour"
  }
];

const CourseSetup = () => {
  return (
    <div className="course-setup p-6 bg-gray-500 dark:bg-white rounded-lg shadow-md">
      {/* Header Section */}
      <div className="header-section bg-indigo-600 text-white p-3 rounded-lg mb-6">
        <div className="next-class-notification bg-yellow-400 text-black p-2 rounded-lg flex items-center space-x-2 mt-0">
          <FontAwesomeIcon icon={faBook} className="text-white" />
          <span>Next Class: Advanced Mathematics in 45 minutes</span>
        </div>
      </div>

      {/* Enrolled Courses Section - ROW-WISE */}
      <div className="enrolled-courses p-6 bg-gray-400 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-200">Enrolled Courses</h2>

        {/* Search Bar */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full md:w-8/12 p-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
            + Add Course
          </button>
        </div>

        {/* List of Enrolled Courses - ROW-WISE */}
        <div className="space-y-6">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600 w-full">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-200">{course.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {course.instructor} | {course.courseCode}
              </p>

              {/* Course Details in Grid (inside each row) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {/* Syllabus */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <FontAwesomeIcon icon={faBook} className="text-yellow-500 dark:text-yellow-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-200">Syllabus</h4>
                  <p className="text-gray-700 dark:text-gray-400">{course.syllabus}</p>
                </div>

                {/* Resources */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <FontAwesomeIcon icon={faFolder} className="text-green-500 dark:text-green-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-200">Resources</h4>
                  <p className="text-gray-700 dark:text-gray-400">{course.resources.count} files available</p>
                </div>

                {/* Assignments */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <FontAwesomeIcon icon={faTasks} className="text-red-500 dark:text-red-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-200">Assignments</h4>
                  <p className="text-gray-700 dark:text-gray-400">
                    {course.assignments.pending} pending, {course.assignments.completed} completed
                  </p>
                </div>

                {/* Schedule */}
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <FontAwesomeIcon icon={faCalendar} className="text-blue-500 dark:text-blue-400" />
                  <h4 className="font-medium text-gray-900 dark:text-gray-200">Schedule</h4>
                  <p className="text-gray-700 dark:text-gray-400">{course.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Left Column: Attendance Summary */}
        <div>
          <AttendanceSummary />
        </div>

        {/* Right Column: Recent Results */}
        <div className="space-y-6">
          <RecentResults />
        </div>
      </div>

      <div className="mt-6">
        <TodaySchedule />
      </div>

      {/* Announcements Section */}
      <div className="mt-6">
        <Announcements />
      </div>
    </div>
  );
};

export default CourseSetup;
