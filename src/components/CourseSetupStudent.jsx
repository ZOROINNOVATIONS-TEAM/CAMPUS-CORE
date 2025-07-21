// // import React from "react";
// // import {
// //   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
// // } from "recharts";
// // import { Bell, User } from "lucide-react";
// // import logo from "../assets/logo.png"; 
// // const attendanceData = [
// //   { week: "Week 1", Present: 85, Late: 10, Absent: 5 },
// //   { week: "Week 2", Present: 80, Late: 12, Absent: 8 },
// //   { week: "Week 3", Present: 82, Late: 11, Absent: 7 },
// //   { week: "Week 4", Present: 84, Late: 10, Absent: 6 },
// //   { week: "Week 5", Present: 85, Late: 10, Absent: 5 },
// //   { week: "Week 6", Present: 83, Late: 9, Absent: 8 },
// //   { week: "Week 7", Present: 86, Late: 8, Absent: 6 },
// //   { week: "Week 8", Present: 85, Late: 10, Absent: 5 },
// // ];

// // const performanceData = [
// //   { subject: "CS", score: 92 },
// //   { subject: "Math", score: 85 },
// //   { subject: "Physics", score: 88 },
// // ];

// // const courses = [
// //   {
// //     name: "Advanced Mathematics",
// //     professor: "Prof. Sarah Wilson",
// //     code: "MATH301",
// //     resources: 12,
// //     assignments: "2 pending, 5 completed",
// //     schedule: "Mon, Wed 11:00 AM",
// //   },
// //   {
// //     name: "Introduction to Computer Science",
// //     professor: "Prof. Michael Chen",
// //     code: "CS101",
// //     resources: 8,
// //     assignments: "1 pending, 3 completed",
// //     schedule: "Tue, Thu 9:00 AM",
// //   },
// //   {
// //     name: "Physics Laboratory",
// //     professor: "Prof. David Thompson",
// //     code: "PHYS201",
// //     resources: 15,
// //     assignments: "3 pending, 2 completed",
// //     schedule: "Wed 2:00 PM",
// //   },
// // ];

// // export default function CourseSetupStudent() {
// //   return (
// //     <div className="bg-gray-50 min-h-screen flex flex-col">
      
// // <section className="mx-8 mt-8">
// //   <div className="flex justify-between items-center mb-6">
// //     <h2 className="text-xl font-semibold">Enrolled Courses</h2>
// //     <div className="flex gap-2">
// //       <input
// //         type="text"
// //         placeholder="Search courses..."
// //         className="px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-yellow-50"
// //       />
// //       <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
// //         + Add Course
// //       </button>
// //     </div>
// //   </div>

// //   <div className="space-y-6">
// //     {courses.map((course, idx) => (
// //       <div key={idx} className="bg-white p-6 rounded-xl shadow border border-gray-200">
// //         <div className="flex justify-between items-start mb-4">
// //           <div>
// //             <h3 className="text-lg font-semibold text-gray-800">{course.name}</h3>
// //             <p className="text-sm text-gray-500">
// //               <span className="inline-block mr-2">👨‍🏫 {course.professor}</span>
// //               <span className="inline-block text-gray-400">●</span>
// //               <span className="inline-block ml-2">{course.code}</span>
// //             </p>
// //           </div>
// //           <button className="border border-purple-600 text-purple-600 text-sm px-4 py-1 rounded-md hover:bg-purple-50">
// //             View Materials
// //           </button>
// //         </div>

// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
// //           <div className="p-3 rounded-md bg-gray-50 border">
// //             <p className="font-medium text-gray-700 flex items-center gap-2">
// //               📄 Syllabus
// //             </p>
// //             <p className="text-xs text-gray-500">Course outline and requirements</p>
// //           </div>
// //           <div className="p-3 rounded-md bg-gray-50 border">
// //             <p className="font-medium text-gray-700 flex items-center gap-2">
// //               📁 Resources
// //             </p>
// //             <p className="text-xs text-gray-500">{course.resources} files available</p>
// //           </div>
// //           <div className="p-3 rounded-md bg-gray-50 border">
// //             <p className="font-medium text-gray-700 flex items-center gap-2">
// //               📝 Assignments
// //             </p>
// //             <p className="text-xs text-gray-500">{course.assignments}</p>
// //           </div>
// //           <div className="p-3 rounded-md bg-gray-50 border">
// //             <p className="font-medium text-gray-700 flex items-center gap-2">
// //               📅 Schedule
// //             </p>
// //             <p className="text-xs text-gray-500">{course.schedule}</p>
// //           </div>
// //         </div>
// //       </div>
// //     ))}
// //   </div>
// // </section>

// //       {/* Attendance + Performance */}
// //       <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-10">
// //         {/* Attendance Summary */}
// //         <section className="bg-white rounded-xl shadow p-6 col-span-2">
// //           <div className="flex gap-6 mb-4">
// //             <div className="flex-1 text-center">
// //               <div className="text-2xl font-bold text-blue-500">85%</div>
// //               <div>Present</div>
// //             </div>
// //             <div className="flex-1 text-center">
// //               <div className="text-2xl font-bold text-yellow-500">10%</div>
// //               <div>Late</div>
// //             </div>
// //             <div className="flex-1 text-center">
// //               <div className="text-2xl font-bold text-red-500">5%</div>
// //               <div>Absent</div>
// //             </div>
// //           </div>
// //           <ResponsiveContainer width="100%" height={200}>
// //             <BarChart data={attendanceData}>
// //               <XAxis dataKey="week" />
// //               <YAxis />
// //               <Tooltip />
// //               <Legend />
// //               <Bar dataKey="Present" fill="#3b82f6" />
// //               <Bar dataKey="Late" fill="#facc15" />
// //               <Bar dataKey="Absent" fill="#ef4444" />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </section>

// //         {/* Recent Results */}
// //         <section className="bg-white rounded-xl shadow p-6">
// //           <h2 className="font-semibold mb-2">Recent Results</h2>
// //           <ul className="text-sm space-y-2 mb-4">
// //             <li>Computer Science - May 28, 2025 - <span className="text-green-600 font-semibold">92/100 A</span></li>
// //             <li>Advanced Math - June 2, 2025 - <span className="text-blue-600 font-semibold">85/100 B+</span></li>
// //             <li>Physics - June 5, 2025 - <span className="text-green-600 font-semibold">88/100 A-</span></li>
// //           </ul>
// //           <ResponsiveContainer width="100%" height={120}>
// //             <LineChart data={performanceData}>
// //               <XAxis dataKey="subject" />
// //               <YAxis domain={[0, 100]} />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </section>
// //       </main>

// //       {/* Schedule + Announcements */}
// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-6 mb-10">
// //         {/* Today's Schedule */}
// //         <section className="bg-white rounded-xl shadow p-6 col-span-2">
// //           <h2 className="font-semibold mb-4">Today's Schedule</h2>
// //           <div className="space-y-3">
// //             <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
// //               <span>09:00AM | Introduction to CS | Room 101</span>
// //               <span className="text-green-600 font-semibold">Completed</span>
// //             </div>
// //             <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
// //               <span>11:00AM | Advanced Math | Room 203</span>
// //               <span className="text-blue-600 font-semibold">Upcoming</span>
// //             </div>
// //             <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
// //               <span>02:00PM | Physics Lab | Lab B</span>
// //               <span className="text-blue-600 font-semibold">Upcoming</span>
// //             </div>
// //             <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
// //               <span>04:30PM | English Lit. | Room 305</span>
// //               <span className="text-blue-600 font-semibold">Upcoming</span>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Announcements */}
// //         <section className="bg-white rounded-xl shadow p-6">
// //           <h2 className="font-semibold mb-2">Announcements</h2>
// //           <div className="mb-3">
// //             <div className="text-red-500 font-bold">Campus Closure Notice</div>
// //             <div className="text-sm">Campus closed on Sat, June 14. Weekend classes online.</div>
// //           </div>
// //           <div className="mb-3">
// //             <div className="text-blue-500 font-bold">Summer Registration</div>
// //             <div className="text-sm">Register for summer courses before June 20.</div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
// } from "recharts";
// import { Bell, User } from "lucide-react";
// import logo from "../assets/logo.png"; 

// const attendanceData = [
//   { week: "Week 1", Present: 85, Late: 10, Absent: 5 },
//   { week: "Week 2", Present: 80, Late: 12, Absent: 8 },
//   { week: "Week 3", Present: 82, Late: 11, Absent: 7 },
//   { week: "Week 4", Present: 84, Late: 10, Absent: 6 },
//   { week: "Week 5", Present: 85, Late: 10, Absent: 5 },
//   { week: "Week 6", Present: 83, Late: 9, Absent: 8 },
//   { week: "Week 7", Present: 86, Late: 8, Absent: 6 },
//   { week: "Week 8", Present: 85, Late: 10, Absent: 5 },
// ];

// const performanceData = [
//   { subject: "CS", score: 92 },
//   { subject: "Math", score: 85 },
//   { subject: "Physics", score: 88 },
// ];

// const courses = [
//   {
//     name: "Advanced Mathematics",
//     professor: "Prof. Sarah Wilson",
//     code: "MATH301",
//     resources: 12,
//     assignments: "2 pending, 5 completed",
//     schedule: "Mon, Wed 11:00 AM",
//   },
//   {
//     name: "Introduction to Computer Science",
//     professor: "Prof. Michael Chen",
//     code: "CS101",
//     resources: 8,
//     assignments: "1 pending, 3 completed",
//     schedule: "Tue, Thu 9:00 AM",
//   },
//   {
//     name: "Physics Laboratory",
//     professor: "Prof. David Thompson",
//     code: "PHYS201",
//     resources: 15,
//     assignments: "3 pending, 2 completed",
//     schedule: "Wed 2:00 PM",
//   },
// ];

// export default function CourseSetupStudent() {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-200">
//       {/* Course List */}
//       <section className="mx-2 sm:mx-4 md:mx-8 mt-8">
//         <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-6">
//           <h2 className="text-xl font-semibold dark:text-gray-100">Enrolled Courses</h2>
//           <div className="flex gap-2 flex-col sm:flex-row">
//             <input
//               type="text"
//               placeholder="Search courses..."
//               className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none
//                 focus:ring-2 focus:ring-blue-500 bg-yellow-50 dark:bg-gray-800 dark:text-gray-100"
//             />
//             <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition">
//               + Add Course
//             </button>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {courses.map((course, idx) => (
//             <div
//               key={idx}
//               className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
//             >
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{course.name}</h3>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     <span className="inline-block mr-2">👨‍🏫 {course.professor}</span>
//                     <span className="inline-block text-gray-400 dark:text-gray-500">●</span>
//                     <span className="inline-block ml-2">{course.code}</span>
//                   </p>
//                 </div>
//                 <button className="border border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 text-sm px-4 py-1 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900 transition">
//                   View Materials
//                 </button>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                 <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
//                   <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📄 Syllabus</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">Course outline and requirements</p>
//                 </div>
//                 <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
//                   <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📁 Resources</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">{course.resources} files available</p>
//                 </div>
//                 <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
//                   <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📝 Assignments</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">{course.assignments}</p>
//                 </div>
//                 <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
//                   <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📅 Schedule</p>
//                   <p className="text-xs text-gray-500 dark:text-gray-400">{course.schedule}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Attendance + Performance */}
//       <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 sm:mx-4 md:mx-8 mt-10">
//         {/* Attendance Summary */}
//         <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 col-span-2">
//           <div className="flex gap-6 mb-4 flex-col sm:flex-row">
//             <div className="flex-1 text-center">
//               <div className="text-2xl font-bold text-blue-500">85%</div>
//               <div className="dark:text-gray-200">Present</div>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="text-2xl font-bold text-yellow-500">10%</div>
//               <div className="dark:text-gray-200">Late</div>
//             </div>
//             <div className="flex-1 text-center">
//               <div className="text-2xl font-bold text-red-500">5%</div>
//               <div className="dark:text-gray-200">Absent</div>
//             </div>
//           </div>
//           <ResponsiveContainer width="100%" height={200}>
//             <BarChart data={attendanceData}>
//               <XAxis dataKey="week" stroke="#8884d8" />
//               <YAxis stroke="#8884d8" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="Present" fill="#3b82f6" />
//               <Bar dataKey="Late" fill="#facc15" />
//               <Bar dataKey="Absent" fill="#ef4444" />
//             </BarChart>
//           </ResponsiveContainer>
//         </section>

//         {/* Recent Results */}
//         <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6">
//           <h2 className="font-semibold mb-2 dark:text-gray-100">Recent Results</h2>
//           <ul className="text-sm space-y-2 mb-4">
//             <li>Computer Science - May 28, 2025 - <span className="text-green-600 font-semibold">92/100 A</span></li>
//             <li>Advanced Math - June 2, 2025 - <span className="text-blue-600 font-semibold">85/100 B+</span></li>
//             <li>Physics - June 5, 2025 - <span className="text-green-600 font-semibold">88/100 A-</span></li>
//           </ul>
//           <ResponsiveContainer width="100%" height={120}>
//             <LineChart data={performanceData}>
//               <XAxis dataKey="subject" stroke="#8884d8" />
//               <YAxis domain={[0, 100]} stroke="#8884d8" />
//               <Tooltip />
//               <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
//             </LineChart>
//           </ResponsiveContainer>
//         </section>
//       </main>

//       {/* Schedule + Announcements */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 sm:mx-4 md:mx-8 mt-6 mb-10">
//         {/* Today's Schedule */}
//         <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 col-span-2">
//           <h2 className="font-semibold mb-4 dark:text-gray-100">Today's Schedule</h2>
//           <div className="space-y-3">
//             <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <span>09:00AM | Introduction to CS | Room 101</span>
//               <span className="text-green-600 dark:text-green-400 font-semibold">Completed</span>
//             </div>
//             <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <span>11:00AM | Advanced Math | Room 203</span>
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
//             </div>
//             <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <span>02:00PM | Physics Lab | Lab B</span>
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
//             </div>
//             <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//               <span>04:30PM | English Lit. | Room 305</span>
//               <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
//             </div>
//           </div>
//         </section>

//         {/* Announcements */}
//         <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6">
//           <h2 className="font-semibold mb-2 dark:text-gray-100">Announcements</h2>
//           <div className="mb-3">
//             <div className="text-red-500 font-bold">Campus Closure Notice</div>
//             <div className="text-sm">Campus closed on Sat, June 14. Weekend classes online.</div>
//           </div>
//           <div className="mb-3">
//             <div className="text-blue-500 font-bold">Summer Registration</div>
//             <div className="text-sm">Register for summer courses before June 20.</div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from "recharts";
import { Bell, User } from "lucide-react";
import logo from "../assets/logo.png"; 

const attendanceData = [
  { week: "Week 1", Present: 85, Late: 10, Absent: 5 },
  { week: "Week 2", Present: 80, Late: 12, Absent: 8 },
  { week: "Week 3", Present: 82, Late: 11, Absent: 7 },
  { week: "Week 4", Present: 84, Late: 10, Absent: 6 },
  { week: "Week 5", Present: 85, Late: 10, Absent: 5 },
  { week: "Week 6", Present: 83, Late: 9, Absent: 8 },
  { week: "Week 7", Present: 86, Late: 8, Absent: 6 },
  { week: "Week 8", Present: 85, Late: 10, Absent: 5 },
];

const performanceData = [
  { subject: "CS", score: 92 },
  { subject: "Math", score: 85 },
  { subject: "Physics", score: 88 },
];

const courses = [
  {
    name: "Advanced Mathematics",
    professor: "Prof. Sarah Wilson",
    code: "MATH301",
    resources: 12,
    assignments: "2 pending, 5 completed",
    schedule: "Mon, Wed 11:00 AM",
  },
  {
    name: "Introduction to Computer Science",
    professor: "Prof. Michael Chen",
    code: "CS101",
    resources: 8,
    assignments: "1 pending, 3 completed",
    schedule: "Tue, Thu 9:00 AM",
  },
  {
    name: "Physics Laboratory",
    professor: "Prof. David Thompson",
    code: "PHYS201",
    resources: 15,
    assignments: "3 pending, 2 completed",
    schedule: "Wed 2:00 PM",
  },
];

export default function CourseSetupStudent() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col transition-colors duration-200">
      {/* Course List */}
      <section className="mx-2 sm:mx-4 md:mx-8 mt-8">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center mb-6">
          <h2 className="text-xl font-semibold dark:text-gray-100">Enrolled Courses</h2>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="text"
              placeholder="Search courses..."
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm focus:outline-none
                focus:ring-2 focus:ring-blue-500 bg-yellow-50 dark:bg-gray-800 dark:text-gray-100"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700 transition">
              + Add Course
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{course.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="inline-block mr-2">👨‍🏫 {course.professor}</span>
                    <span className="inline-block text-gray-400 dark:text-gray-500">●</span>
                    <span className="inline-block ml-2">{course.code}</span>
                  </p>
                </div>
                <button className="border border-purple-600 text-purple-600 dark:border-purple-400 dark:text-purple-400 text-sm px-4 py-1 rounded-md hover:bg-purple-50 dark:hover:bg-purple-900 transition">
                  View Materials
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
                  <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📄 Syllabus</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Course outline and requirements</p>
                </div>
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
                  <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📁 Resources</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{course.resources} files available</p>
                </div>
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
                  <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📝 Assignments</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{course.assignments}</p>
                </div>
                <div className="p-3 rounded-md bg-gray-50 dark:bg-gray-900 border dark:border-gray-700">
                  <p className="font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">📅 Schedule</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{course.schedule}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Attendance + Performance */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 sm:mx-4 md:mx-8 mt-10">
        {/* Attendance Summary */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 col-span-2">
          <div className="flex gap-6 mb-4 flex-col sm:flex-row">
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-blue-500">85%</div>
              <div className="dark:text-gray-200">Present</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-yellow-500">10%</div>
              <div className="dark:text-gray-200">Late</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-2xl font-bold text-red-500">5%</div>
              <div className="dark:text-gray-200">Absent</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={attendanceData}>
              <XAxis dataKey="week" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Present" fill="#3b82f6" />
              <Bar dataKey="Late" fill="#facc15" />
              <Bar dataKey="Absent" fill="#ef4444" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* Recent Results */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6">
          <h2 className="font-semibold mb-2 dark:text-gray-100">Recent Results</h2>
          <ul className="text-sm space-y-2 mb-4">
            <li>Computer Science - May 28, 2025 - <span className="text-green-600 font-semibold">92/100 A</span></li>
            <li>Advanced Math - June 2, 2025 - <span className="text-blue-600 font-semibold">85/100 B+</span></li>
            <li>Physics - June 5, 2025 - <span className="text-green-600 font-semibold">88/100 A-</span></li>
          </ul>
          <ResponsiveContainer width="100%" height={120}>
            <LineChart data={performanceData}>
              <XAxis dataKey="subject" stroke="#8884d8" />
              <YAxis domain={[0, 100]} stroke="#8884d8" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </section>
      </main>

      {/* Schedule + Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 sm:mx-4 md:mx-8 mt-6 mb-10">
        {/* Today's Schedule */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6 col-span-2">
          <h2 className="font-semibold mb-4 dark:text-gray-100">Today's Schedule</h2>
          <div className="space-y-3">
            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span>09:00AM | Introduction to CS | Room 101</span>
              <span className="text-green-600 dark:text-green-400 font-semibold">Completed</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span>11:00AM | Advanced Math | Room 203</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span>02:00PM | Physics Lab | Lab B</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-900 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <span>04:30PM | English Lit. | Room 305</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Upcoming</span>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 sm:p-6">
          <h2 className="font-semibold mb-2 dark:text-gray-100">Announcements</h2>
          <div className="mb-3">
            <div className="text-red-500 font-bold">Campus Closure Notice</div>
            <div className="text-sm">Campus closed on Sat, June 14. Weekend classes online.</div>
          </div>
          <div className="mb-3">
            <div className="text-blue-500 font-bold">Summer Registration</div>
            <div className="text-sm">Register for summer courses before June 20.</div>
          </div>
        </section>
      </div>
    </div>
  );
}
