import React from "react";

const FacultyDashboard = () => {
  // Sample mock data for demonstration
  const facultyName = "Dr. Emily Clark";
  const courses = [
    { id: 1, name: "Introduction to Computer Science", schedule: "Mon & Wed 10:00 AM - 11:30 AM" },
    { id: 2, name: "Data Structures and Algorithms", schedule: "Tue & Thu 2:00 PM - 3:30 PM" },
  ];
  const announcements = [
    { id: 1, title: "Midterm Grades Submission", date: "June 20", details: "Please submit midterm grades by June 25." },
    { id: 2, title: "Faculty Meeting", date: "June 22", details: "Monthly faculty meeting scheduled at 3 PM in Room 101." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome, {facultyName}</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">Faculty Dashboard</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Your Courses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{course.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{course.schedule}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Announcements</h2>
        <ul className="space-y-4">
          {announcements.map((announcement) => (
            <li key={announcement.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <h3 className="font-semibold text-gray-900 dark:text-white">{announcement.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{announcement.date}</p>
              <p className="mt-1 text-gray-700 dark:text-gray-300">{announcement.details}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default FacultyDashboard;
