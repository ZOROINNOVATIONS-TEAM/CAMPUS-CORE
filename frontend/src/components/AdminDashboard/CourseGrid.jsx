import React from "react";
import CourseCard from "./CourseCard";

const dummyCourses = [
  {
    title: "Introduction to Computer Science",
    department: "Computer Science",
    instructor: "Robert Cole",
    credits: 3,
  },
  {
    title: "Advanced Mathematics",
    department: "Mathematics",
    instructor: "Emily Wilson",
    credits: 4,
  },
  {
    title: "Physics Laboratory",
    department: "Physics",
    instructor: "Michael Thompson",
    credits: 2,
  },
  {
    title: "English Literature",
    department: "English",
    instructor: "Sarah Johnson",
    credits: 3,
  },
  {
    title: "Business Economics",
    department: "Economics",
    instructor: "Dr. Rajesh",
    credits: 2,
  },
  {
    title: "Database Systems",
    department: "Computer Science",
    instructor: "James Anderson",
    credits: 3,
  },
];

function CourseGrid() {
  return (
    <div className="flex flex-wrap gap-4">
      {dummyCourses.map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
  );
}

export default CourseGrid;
