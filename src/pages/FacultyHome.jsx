// import React, { useState } from "react";
// import CoursesGrid from "../components/CoursesGrid";

// // Dummy data for attendance, events, classes, etc.
// const attendanceStats = { present: 65, absent: 21, leave: 9 };
// const classes = ["Multi", "Physics", "Chemistry", "Biology"];
// const upcomingEvents = [
//   { title: "Assignment Submission", date: "2025-06-20 10:00 AM", color: "border-red-400" },
//   { title: "Department Meeting", date: "2025-06-22 12:00 PM", color: "border-orange-400" },
//   { title: "Exam Schedule", date: "2025-06-25 09:00 AM", color: "border-yellow-400" },
//   { title: "PTM", date: "2025-06-28 04:00 PM", color: "border-green-400" },
// ];
// const todaysClasses = [
//   {
//     name: "Introduction to Computer Science",
//     time: "09:00-10:00",
//     status: "Completed",
//     icon: "📘",
//     download: true,
//   },
//   {
//     name: "Advanced Mathematics",
//     time: "10:30-11:30",
//     status: "Upcoming",
//     icon: "📘",
//     download: true,
//   },
//   {
//     name: "English Literature",
//     time: "12:00-01:00",
//     status: "Upcoming",
//     icon: "📘",
//     download: true,
//   },
// ];
// const announcements = [
//   { text: "Campus Closed Notice", color: "text-red-500", label: "Important" },
//   { text: "Summer Registration Open", color: "text-blue-500" },
//   { text: "Library Extended Hours", color: "text-green-500" },
// ];

// const navItems = [
//   { label: "Home", icon: "🏠" },
//   { label: "Exam", icon: "📝" },
//   { label: "Course Setup", icon: "📚" },
//   { label: "Grading", icon: "📊" },
//   { label: "Assignment", icon: "📂" },
//   { label: "Dates", icon: "📅" },
//   { label: "Mentor", icon: "👨‍🏫" },
// ];

// export default function FacultyHome() {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [selectedClass, setSelectedClass] = useState(classes[0]);
//   const [attendanceStatus, setAttendanceStatus] = useState("Present");

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="flex justify-between items-center px-6 py-2">
//           <div className="flex items-center gap-2">
//             <span className="font-bold text-lg text-blue-900">Campus Logo</span>
//           </div>
//           <div className="flex items-center gap-6">
//             <span className="text-xl">🔔</span>
//             <span className="text-xl">👤</span>
//             <span className="text-xl">🌐</span>
//             <span className="text-sm font-medium">En/Ar</span>
//           </div>
//         </div>
//         <div className="px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-b-lg flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <div className="text-white text-lg font-semibold">Welcome,<span className="font-bold"> Dr.kab</span></div>
//             <div className="text-blue-100 text-sm">Faculty, Computer Science Department</div>
//             <div className="text-blue-200 text-xs">Faculty ID: 123456789</div>
//             <div className="text-blue-200 text-xs">Last Login: 2025-06-15 08:00 AM</div>
//           </div>
//           <div className="mt-4 md:mt-0 flex items-center gap-2">
//             <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg flex items-center gap-2">
//               <span className="text-white font-medium">Next Class:</span>
//               <span className="text-white font-bold">Advanced Mathematics</span>
//               <span className="text-white">10:30 AM</span>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="flex gap-4 px-6 py-4 bg-white shadow mt-6 rounded-lg">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActiveTab(item.label)}
//             className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium ${
//               activeTab === item.label
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-blue-100 text-gray-700"
//             }`}
//           >
//             <span>{item.icon}</span>
//             {item.label}
//           </button>
//         ))}
//       </nav>

//       {/* Main Content */}
//       <main className="flex flex-col lg:flex-row gap-6 px-6 py-6">
//         {/* Left/Main Column */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* Home Tab */}
//           {activeTab === "Home" && (
//             <>
//               {/* Submit Attendance */}
//               <section className="bg-white rounded-lg shadow p-6">
//                 <div className="flex justify-between items-start gap-6">
//                   {/* Vertical Stats Boxes */}
//                   <div className="flex flex-col gap-4">
//                     <div className="flex flex-col items-center bg-blue-100 rounded-lg px-6 py-2 w-24">
//                       <span className="text-2xl font-bold text-blue-600">{attendanceStats.present}%</span>
//                       <span className="text-xs text-gray-500">Present</span>
//                     </div>
//                     <div className="flex flex-col items-center bg-yellow-100 rounded-lg px-6 py-2 w-24">
//                       <span className="text-2xl font-bold text-yellow-600">{attendanceStats.absent}%</span>
//                       <span className="text-xs text-gray-500">Absent</span>
//                     </div>
//                     <div className="flex flex-col items-center bg-red-100 rounded-lg px-6 py-2 w-24">
//                       <span className="text-2xl font-bold text-red-600">{attendanceStats.leave}%</span>
//                       <span className="text-xs text-gray-500">Student Leave</span>
//                     </div>
//                   </div>
//                   {/* Attendance Form */}
//                   <div className="flex-1">
//                     <div className="flex items-center gap-2 mb-3">
//                       <span className="text-sm font-medium">Select Class:</span>
//                       {classes.map((cls) => (
//                         <button
//                           key={cls}
//                           className={`px-2 py-1 rounded text-sm border ${
//                             selectedClass === cls
//                               ? "bg-blue-600 text-white border-blue-600"
//                               : "bg-white text-gray-700 border-gray-300"
//                           }`}
//                           onClick={() => setSelectedClass(cls)}
//                         >
//                           {cls}
//                         </button>
//                       ))}
//                     </div>
//                     <div className="flex gap-4 mb-4">
//                       {["Present", "Absent", "Late"].map((status) => (
//                         <label key={status} className="flex items-center gap-1 text-sm">
//                           <input
//                             type="radio"
//                             name="attendanceStatus"
//                             value={status}
//                             checked={attendanceStatus === status}
//                             onChange={() => setAttendanceStatus(status)}
//                           />
//                           {status}
//                         </label>
//                       ))}
//                     </div>
//                     <div className="flex gap-2">
//                       <button
//                         className="bg-gray-200 text-gray-700 px-4 py-1 rounded"
//                         onClick={() => setAttendanceStatus("Present")}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         className="bg-black text-white px-4 py-1 rounded"
//                         onClick={() =>
//                           alert(
//                             `Attendance submitted for ${selectedClass} as ${attendanceStatus}`
//                           )
//                         }
//                       >
//                         Submit Attendance
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Today's Class Schedule */}
//               <section className="bg-white rounded-lg shadow p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-lg font-bold">Today's Class Schedule</h2>
//                   <a href="#" className="text-blue-500 text-xs">View Details</a>
//                 </div>
//                 <div className="space-y-3">
//                   {todaysClasses.map((cls, idx) => (
//                     <div
//                       key={idx}
//                       className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3"
//                     >
//                       <span className="text-2xl">{cls.icon}</span>
//                       <div className="flex-1">
//                         <div className="font-medium">{cls.name}</div>
//                         <div className="text-xs text-gray-500">{cls.time}</div>
//                       </div>
//                       <span
//                         className={`text-xs font-semibold px-2 py-1 rounded ${
//                           cls.status === "Completed"
//                             ? "bg-gray-200 text-gray-700"
//                             : "bg-blue-100 text-blue-700"
//                         }`}
//                       >
//                         {cls.status}
//                       </span>
//                       {cls.download && (
//                         <button
//                           className="ml-2 text-blue-500 hover:text-blue-700"
//                           title="Download Resources"
//                         >
//                           ⬇️
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             </>
//           )}

//           {/* Course Setup Tab */}
//           {activeTab === "Course Setup" && (
//             <section className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-lg font-bold mb-4">Course Setup</h2>
//               <CoursesGrid />
//             </section>
//           )}
//         </div>

//         {/* Right Column (for Home tab only) */}
//         {activeTab === "Home" && (
//           <div className="w-full lg:w-1/3 flex flex-col gap-6">
//             {/* Upcoming Events */}
//             <section className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
//               <ul className="space-y-3">
//                 {upcomingEvents.map((event, idx) => (
//                   <li
//                     key={idx}
//                     className={`border-l-4 pl-3 py-2 rounded ${event.color} bg-gray-50`}
//                   >
//                     <div className="font-semibold">{event.title}</div>
//                     <div className="text-xs text-gray-500">{event.date}</div>
//                   </li>
//                 ))}
//               </ul>
//             </section>

//             {/* Announcements */}
//             <section className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-lg font-bold mb-4">Announcements</h2>
//               <ul className="space-y-2 text-sm">
//                 {announcements.map((ann, idx) => (
//                   <li key={idx} className={`pl-2 border-l-4 ${ann.color}`}>
//                     <span className="font-semibold">{ann.text}</span>
//                     {ann.label && (
//                       <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
//                         {ann.label}
//                       </span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import CoursesGrid from "../components/CoursesGrid";

// // Dummy data (unchanged)
// const attendanceStats = { present: 65, absent: 21, leave: 9 };
// const classes = ["Multi", "Physics", "Chemistry", "Biology"];
// const upcomingEvents = [
//   { title: "Assignment Submission", date: "2025-06-20 10:00 AM", color: "border-red-400" },
//   { title: "Department Meeting", date: "2025-06-22 12:00 PM", color: "border-orange-400" },
//   { title: "Exam Schedule", date: "2025-06-25 09:00 AM", color: "border-yellow-400" },
//   { title: "PTM", date: "2025-06-28 04:00 PM", color: "border-green-400" },
// ];
// const todaysClasses = [
//   { name: "Introduction to Computer Science", time: "09:00-10:00", status: "Completed", icon: "📘", download: true },
//   { name: "Advanced Mathematics", time: "10:30-11:30", status: "Upcoming", icon: "📘", download: true },
//   { name: "English Literature", time: "12:00-01:00", status: "Upcoming", icon: "📘", download: true },
// ];
// const announcements = [
//   { text: "Campus Closed Notice", color: "text-red-500", label: "Important" },
//   { text: "Summer Registration Open", color: "text-blue-500" },
//   { text: "Library Extended Hours", color: "text-green-500" },
// ];
// const navItems = [
//   { label: "Home", icon: "🏠" },
//   { label: "Exam", icon: "🗘" },
//   { label: "Course Setup", icon: "📚" },
//   { label: "Grading", icon: "📊" },
//   { label: "Assignment", icon: "📂" },
//   { label: "Dates", icon: "📅" },
//   { label: "Mentor", icon: "👨‍🏫" },
// ];

// export default function FacultyHome() {
//   const [activeTab, setActiveTab] = useState("Home");
//   const [selectedClass, setSelectedClass] = useState(classes[0]);
//   const [attendanceStatus, setAttendanceStatus] = useState("Present");

//   return (
//     <div className="min-h-screen bg-gray-100 overflow-x-hidden">
//       {/* Header */}
//       <header className="bg-white shadow sticky top-0 z-10">
//         <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3">
//           <span className="font-bold text-lg text-blue-900">Campus Logo</span>
//           <div className="flex items-center gap-4 mt-2 sm:mt-0">
//             <span className="text-xl">🔔</span>
//             <span className="text-xl">👤</span>
//             <span className="text-xl">🌐</span>
//             <span className="text-sm font-medium">En/Ar</span>
//           </div>
//         </div>
//         <div className="px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white rounded-b-xl flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <div className="text-lg font-semibold">Welcome, <span className="font-bold">Dr. kab</span></div>
//             <div className="text-blue-100 text-sm">Faculty, Computer Science Department</div>
//             <div className="text-blue-200 text-xs">Faculty ID: 123456789</div>
//             <div className="text-blue-200 text-xs">Last Login: 2025-06-15 08:00 AM</div>
//           </div>
//           <div className="mt-4 md:mt-0 bg-white bg-opacity-20 px-4 py-2 rounded-lg flex flex-wrap gap-2 text-sm">
//             <span className="font-medium">Next Class:</span>
//             <span className="font-bold">Advanced Mathematics</span>
//             <span>10:30 AM</span>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="flex flex-wrap gap-2 px-4 py-3 bg-white shadow mt-4 rounded-lg">
//         {navItems.map((item) => (
//           <button
//             key={item.label}
//             onClick={() => setActiveTab(item.label)}
//             className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
//               activeTab === item.label
//                 ? "bg-blue-600 text-white"
//                 : "hover:bg-blue-100 text-gray-700"
//             }`}
//           >
//             <span>{item.icon}</span>
//             {item.label}
//           </button>
//         ))}
//       </nav>

//       {/* Main Content */}
//       <main className="flex flex-col lg:flex-row gap-6 px-4 py-6">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-6">
//           {activeTab === "Home" && (
//             <>
//               {/* Attendance */}
//               <section className="bg-white rounded-lg shadow p-4 md:p-6">
//                 <div className="flex flex-col md:flex-row gap-6">
//                   {/* Stats */}
//                   <div className="flex md:flex-col gap-4 justify-between">
//                     {["present", "absent", "leave"].map((key) => (
//                       <div
//                         key={key}
//                         className={`flex flex-col items-center px-4 py-2 w-24 rounded-lg ${
//                           key === "present"
//                             ? "bg-blue-100 text-blue-600"
//                             : key === "absent"
//                             ? "bg-yellow-100 text-yellow-600"
//                             : "bg-red-100 text-red-600"
//                         }`}
//                       >
//                         <span className="text-xl font-bold">{attendanceStats[key]}%</span>
//                         <span className="text-xs text-gray-500 capitalize">{key}</span>
//                       </div>
//                     ))}
//                   </div>
//                   {/* Form */}
//                   <div className="flex-1">
//                     <div className="flex flex-wrap gap-2 mb-3 items-center">
//                       <span className="text-sm font-medium">Select Class:</span>
//                       {classes.map((cls) => (
//                         <button
//                           key={cls}
//                           className={`px-2 py-1 rounded text-sm border ${
//                             selectedClass === cls
//                               ? "bg-blue-600 text-white border-blue-600"
//                               : "bg-white text-gray-700 border-gray-300"
//                           }`}
//                           onClick={() => setSelectedClass(cls)}
//                         >
//                           {cls}
//                         </button>
//                       ))}
//                     </div>
//                     <div className="flex flex-wrap gap-4 mb-4 text-sm">
//                       {["Present", "Absent", "Late"].map((status) => (
//                         <label key={status} className="flex items-center gap-1">
//                           <input
//                             type="radio"
//                             name="attendanceStatus"
//                             value={status}
//                             checked={attendanceStatus === status}
//                             onChange={() => setAttendanceStatus(status)}
//                           />
//                           {status}
//                         </label>
//                       ))}
//                     </div>
//                     <div className="flex gap-2">
//                       <button
//                         className="bg-gray-200 text-gray-700 px-4 py-1 rounded"
//                         onClick={() => setAttendanceStatus("Present")}
//                       >
//                         Cancel
//                       </button>
//                       <button
//                         className="bg-black text-white px-4 py-1 rounded"
//                         onClick={() => alert(`Attendance submitted for ${selectedClass} as ${attendanceStatus}`)}
//                       >
//                         Submit Attendance
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               {/* Today's Schedule */}
//               <section className="bg-white rounded-lg shadow p-4 md:p-6">
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-base md:text-lg font-bold">Today's Class Schedule</h2>
//                   <a href="#" className="text-blue-500 text-xs">View Details</a>
//                 </div>
//                 <div className="space-y-3">
//                   {todaysClasses.map((cls, idx) => (
//                     <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3">
//                       <span className="text-2xl">{cls.icon}</span>
//                       <div className="flex-1">
//                         <div className="font-medium text-sm md:text-base">{cls.name}</div>
//                         <div className="text-xs text-gray-500">{cls.time}</div>
//                       </div>
//                       <span className={`text-xs font-semibold px-2 py-1 rounded ${
//                         cls.status === "Completed"
//                           ? "bg-gray-200 text-gray-700"
//                           : "bg-blue-100 text-blue-700"
//                       }`}>
//                         {cls.status}
//                       </span>
//                       {cls.download && (
//                         <button className="ml-2 text-blue-500 hover:text-blue-700" title="Download Resources">
//                           ⬇️
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </div>
//               </section>
//             </>
//           )}

//           {/* Course Setup */}
//           {activeTab === "Course Setup" && (
//             <section className="bg-white rounded-lg shadow p-6">
//               <h2 className="text-lg font-bold mb-4">Course Setup</h2>
//               <CoursesGrid />
//             </section>
//           )}
//         </div>

//         {/* Right Column */}
//         {activeTab === "Home" && (
//           <div className="w-full lg:w-1/3 flex flex-col gap-6">
//             <section className="bg-white rounded-lg shadow p-4 md:p-6">
//               <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
//               <ul className="space-y-3">
//                 {upcomingEvents.map((event, idx) => (
//                   <li
//                     key={idx}
//                     className={`border-l-4 pl-3 py-2 rounded ${event.color} bg-gray-50`}
//                   >
//                     <div className="font-semibold text-sm">{event.title}</div>
//                     <div className="text-xs text-gray-500">{event.date}</div>
//                   </li>
//                 ))}
//               </ul>
//             </section>

//             <section className="bg-white rounded-lg shadow p-4 md:p-6">
//               <h2 className="text-lg font-bold mb-4">Announcements</h2>
//               <ul className="space-y-2 text-sm">
//                 {announcements.map((ann, idx) => (
//                   <li key={idx} className={`pl-2 border-l-4 ${ann.color}`}>
//                     <span className="font-semibold">{ann.text}</span>
//                     {ann.label && (
//                       <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
//                         {ann.label}
//                       </span>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </section>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import CoursesGrid from "../components/CoursesGrid";
import { Sun, Moon } from "lucide-react";

// Dummy data (unchanged)
const attendanceStats = { present: 65, absent: 21, leave: 9 };
const classes = ["Multi", "Physics", "Chemistry", "Biology"];
const upcomingEvents = [
  { title: "Assignment Submission", date: "2025-06-20 10:00 AM", color: "border-red-400" },
  { title: "Department Meeting", date: "2025-06-22 12:00 PM", color: "border-orange-400" },
  { title: "Exam Schedule", date: "2025-06-25 09:00 AM", color: "border-yellow-400" },
  { title: "PTM", date: "2025-06-28 04:00 PM", color: "border-green-400" },
];
const todaysClasses = [
  { name: "Introduction to Computer Science", time: "09:00-10:00", status: "Completed", icon: "📘", download: true },
  { name: "Advanced Mathematics", time: "10:30-11:30", status: "Upcoming", icon: "📘", download: true },
  { name: "English Literature", time: "12:00-01:00", status: "Upcoming", icon: "📘", download: true },
];
const announcements = [
  { text: "Campus Closed Notice", color: "text-red-500", label: "Important" },
  { text: "Summer Registration Open", color: "text-blue-500" },
  { text: "Library Extended Hours", color: "text-green-500" },
];
const navItems = [
  { label: "Home", icon: "🏠" },
  { label: "Exam", icon: "🗘" },
  { label: "Course Setup", icon: "📚" },
  { label: "Grading", icon: "📊" },
  { label: "Assignment", icon: "📂" },
  { label: "Dates", icon: "📅" },
  { label: "Mentor", icon: "👨‍🏫" },
];

export default function FacultyHome() {
  const [activeTab, setActiveTab] = useState("Home");
  const [selectedClass, setSelectedClass] = useState(classes[0]);
  const [attendanceStatus, setAttendanceStatus] = useState("Present");
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 overflow-x-hidden transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow sticky top-0 z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 py-3">
          <span className="font-bold text-lg text-blue-900 dark:text-blue-200">Campus Logo</span>
          <div className="flex items-center gap-4 mt-2 sm:mt-0">
            <span className="text-xl">🔔</span>
            <span className="text-xl">👤</span>
            <span className="text-xl">🌐</span>
            <span className="text-sm font-medium">En/Ar</span>
            <button
              onClick={() => setDarkMode((d) => !d)}
              className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>
        <div className="px-4 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white rounded-b-xl flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold">
              Welcome, <span className="font-bold">Dr. kab</span>
            </div>
            <div className="text-blue-100 text-sm">
              Faculty, Computer Science Department
            </div>
            <div className="text-blue-200 text-xs">Faculty ID: 123456789</div>
            <div className="text-blue-200 text-xs">Last Login: 2025-06-15 08:00 AM</div>
          </div>
          <div className="mt-4 md:mt-0 bg-white bg-opacity-80 px-4 py-2 rounded-lg flex flex-wrap gap-2 text-sm text-black">
            <span className="font-medium">Next Class:</span>
            <span className="font-bold">Advanced Mathematics</span>
            <span>10:30 AM</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="flex flex-wrap gap-2 px-4 py-3 bg-white dark:bg-gray-800 shadow mt-4 rounded-lg">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setActiveTab(item.label)}
            className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-all duration-200 ${
              activeTab === item.label
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-100 dark:hover:bg-blue-900 text-gray-700 dark:text-gray-300"
            }`}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-6 px-4 py-6">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          {activeTab === "Home" && (
            <>
              {/* Attendance */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Stats */}
                  <div className="flex md:flex-col gap-4 justify-between">
                    {["present", "absent", "leave"].map((key) => (
                      <div
                        key={key}
                        className={`flex flex-col items-center px-4 py-2 w-24 rounded-lg ${
                          key === "present"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                            : key === "absent"
                            ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                        }`}
                      >
                        <span className="text-xl font-bold">{attendanceStats[key]}%</span>
                        <span className="text-xs text-gray-500 dark:text-gray-300 capitalize">{key}</span>
                      </div>
                    ))}
                  </div>
                  {/* Form */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3 items-center">
                      <span className="text-sm font-medium">Select Class:</span>
                      {classes.map((cls) => (
                        <button
                          key={cls}
                          className={`px-2 py-1 rounded text-sm border ${
                            selectedClass === cls
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-500"
                          }`}
                          onClick={() => setSelectedClass(cls)}
                        >
                          {cls}
                        </button>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm">
                      {["Present", "Absent", "Late"].map((status) => (
                        <label key={status} className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="attendanceStatus"
                            value={status}
                            checked={attendanceStatus === status}
                            onChange={() => setAttendanceStatus(status)}
                          />
                          {status}
                        </label>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-4 py-1 rounded"
                        onClick={() => setAttendanceStatus("Present")}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-black dark:bg-gray-900 text-white px-4 py-1 rounded"
                        onClick={() =>
                          alert(
                            `Attendance submitted for ${selectedClass} as ${attendanceStatus}`
                          )
                        }
                      >
                        Submit Attendance
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Today's Schedule */}
              <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-base md:text-lg font-bold">Today's Class Schedule</h2>
                  <a href="#" className="text-blue-500 text-xs">View Details</a>
                </div>
                <div className="space-y-3">
                  {todaysClasses.map((cls, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-900 rounded-lg px-4 py-3">
                      <span className="text-2xl">{cls.icon}</span>
                      <div className="flex-1">
                        <div className="font-medium text-sm md:text-base">{cls.name}</div>
                        <div className="text-xs text-gray-500">{cls.time}</div>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${
                        cls.status === "Completed"
                          ? "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
                          : "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                      }`}>
                        {cls.status}
                      </span>
                      {cls.download && (
                        <button className="ml-2 text-blue-500 hover:text-blue-700" title="Download Resources">
                          ⬇️
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* Course Setup */}
          {activeTab === "Course Setup" && (
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-bold mb-4">Course Setup</h2>
              <CoursesGrid />
            </section>
          )}
        </div>

        {/* Right Column */}
        {activeTab === "Home" && (
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
              <h2 className="text-lg font-bold mb-4">Upcoming Events</h2>
              <ul className="space-y-3">
                {upcomingEvents.map((event, idx) => (
                  <li
                    key={idx}
                    className={`border-l-4 pl-3 py-2 rounded ${event.color} bg-gray-50 dark:bg-gray-900`}
                  >
                    <div className="font-semibold text-sm">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.date}</div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 md:p-6">
              <h2 className="text-lg font-bold mb-4">Announcements</h2>
              <ul className="space-y-2 text-sm">
                {announcements.map((ann, idx) => (
                  <li key={idx} className={`pl-2 border-l-4 ${ann.color}`}>
                    <span className="font-semibold">{ann.text}</span>
                    {ann.label && (
                      <span className="ml-2 bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs">
                        {ann.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </main>
    </div>
  );
}
