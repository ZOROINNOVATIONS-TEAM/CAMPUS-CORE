import React from 'react';
import { AttendanceSummary } from "@/components/dashboard/student/AttendanceSummary";
import { TodaySchedule } from "@/components/dashboard/student/TodaySchedule";
import { RecentResults } from "@/components/dashboard/student/RecentResults";

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
    <div className="course-setup p-3">
      {/* Header Section */}
      <div className="header-section bg-indigo-600 text-white p-3 rounded-lg mb-6">
        <div className="next-class-notification bg-yellow-500 text-white p-2 rounded-lg flex items-center space-x-2 mt-0">
          <i className="fas fa-book text-white"></i>
          <span>Next Class: Advanced Mathematics in 45 minutes</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Attendance Summary */}
        <div>
          <AttendanceSummary />
        </div>

        {/* Right Column: Recent Results + Today's Schedule */}
        <div className="space-y-6">
          <RecentResults />
          <TodaySchedule />
        </div>
      </div>
    </div>
  );
};

export default CourseSetup;
