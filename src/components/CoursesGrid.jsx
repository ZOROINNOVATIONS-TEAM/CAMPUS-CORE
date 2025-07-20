import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Introduction to Computer Science",
    code: "CS101",
    instructor: "Dr. Smith",
    time: "Mon, Wed 9:00–10:00 AM",
    students: 40,
    assignments: true,
    materials: true,
    status: "Active",
    tags: ["Lecture"],
  },
  {
    title: "Advanced Mathematics",
    code: "MATH201",
    instructor: "Dr. Johnson",
    time: "Tue, Thu 10:30–11:30 AM",
    students: 35,
    assignments: true,
    materials: true,
    status: "Active",
    tags: ["Lecture"],
  },
  {
    title: "Physics Laboratory",
    code: "PHYLAB",
    instructor: "Dr. Lee",
    time: "Fri 2:00–4:00 PM",
    students: 25,
    labReports: true,
    materials: true,
    status: "Active",
    tags: ["Lab"],
  },
  {
    title: "English Literature",
    code: "ENG301",
    instructor: "Prof. Davis",
    time: "Mon, Wed 12:00–1:00 PM",
    students: 30,
    assignments: true,
    materials: true,
    status: "Active",
    tags: ["Lecture"],
  },
];

export default function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5">
      {courses.map((course, idx) => (
        <CourseCard key={idx} {...course} />
      ))}
    </div>
  );
}
