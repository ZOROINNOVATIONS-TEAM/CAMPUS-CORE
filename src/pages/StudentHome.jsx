
// import React, { useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
// } from "recharts";
// import {
//   Home, LayoutDashboard, LineChart as LineChartIcon, Bell, User,
//   Calendar1, PenBoxIcon, MessageCircle,
//   MessageCirclePlusIcon,
//   PenBox
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import logo from "../assets/logo.png";
// import CourseSetupStudent from "../components/CourseSetupStudent";
// import Fees from "../components/Fees";
// import Schedule from "../components/Schedule";
// import Results from "../components/Results";
// import OtherStudent from "../components/OtherStudent";
// import Mentor from "../components/Mentor";
// import StudentComplaintForm from "../components/StudentComplaintForm";

// import Feedback from "../components/Feedback";
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
//   { subject: "English", score: 83 },
//   { subject: "History", score: 81 },
// ];

// export default function StudentHome() {
//   const [activeTab, setActiveTab] = useState("home");
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col">
//       <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Campus Core" className="h-8" />
//           <span className="font-bold text-lg">CAMPUS CORE</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <button onClick={() => navigate("/notifications")}>
//             <Bell size={20} className="hover:text-blue-600 transition" />
//           </button>
//           <User size={20} />
//           <span className="font-semibold">DEVANSH</span>
//         </div>
//       </header>

//       <div className="mx-8 mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-6 flex justify-between items-center text-white">
//         <div>
//           <h1 className="text-2xl font-semibold">Welcome back, Dev!</h1>
//           <p>Wednesday, June 11, 2025 | Spring Semester 2025</p>
//           <p className="text-sm">Student ID: 670234585</p>
//         </div>
//         <div className="bg-indigo-300 bg-opacity-10 rounded-xl px-6 py-4">
//           <p className="text-sm">Next Class</p>
//           <p className="text-lg font-bold">Advanced Mathematics in 45 minutes</p>
//         </div>
//       </div>

//       <nav className="flex justify-center gap-10 mt-8 mb-6">
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "home" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("home")}> <Home size={24} /> Home </div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "schedule" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("schedule")}> <LayoutDashboard size={24} /> Schedule </div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "courseSetup" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("courseSetup")}> <Calendar1 size={24} /> Course Setup </div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "result" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("result")}> <LineChartIcon size={24} /> Result </div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "fees" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("fees")}> <PenBoxIcon size={24} /> Fees</div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "other" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("other")}> <MessageCircle size={24} /> Other</div>
//         <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "mentor" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("mentor")}> < User size={24} /> Mentor</div>
//          <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "mentor" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("feedback")}> <MessageCirclePlusIcon size={24} /> Feedback</div>
//          <div className={`flex flex-col items-center text-gray-700 cursor-pointer ${activeTab === "mentor" && "font-bold text-blue-600"}`} onClick={() => setActiveTab("complaint")}> <PenBox size={24} /> Complaint</div>
//         {/* <div className="flex flex-col items-center text-gray-700 cursor-pointer"><User size={24} /> Mentor</div> */}
//       </nav>

//       {activeTab === "courseSetup" && <CourseSetupStudent />}
//       {activeTab === "schedule" && <Schedule />}
//       {activeTab === "feedback" && <Feedback />}
//       {activeTab === "result" && <Results />}
//       {activeTab === "fees" && <Fees />}
//       {activeTab === "other" && <OtherStudent />}
// {activeTab === "mentor" && <Mentor />}
// {activeTab === "complaint" && <StudentComplaintForm />}


//       {activeTab === "home" && (
//         <>
//           <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8">
//             <section className="bg-white rounded-xl shadow p-6 col-span-2">
//               <div className="flex gap-6 mb-4">
//                 <div className="flex-1 text-center">
//                   <div className="text-2xl font-bold text-blue-500">85%</div>
//                   <div>Present</div>
//                 </div>
//                 <div className="flex-1 text-center">
//                   <div className="text-2xl font-bold text-yellow-500">10%</div>
//                   <div>Late</div>
//                 </div>
//                 <div className="flex-1 text-center">
//                   <div className="text-2xl font-bold text-red-500">5%</div>
//                   <div>Absent</div>
//                 </div>
//               </div>
//               <ResponsiveContainer width="100%" height={200}>
//                 <BarChart data={attendanceData}>
//                   <XAxis dataKey="week" />
//                   <YAxis />
//                   <Tooltip />
//                   <Legend />
//                   <Bar dataKey="Present" fill="#3b82f6" />
//                   <Bar dataKey="Late" fill="#facc15" />
//                   <Bar dataKey="Absent" fill="#ef4444" />
//                 </BarChart>
//               </ResponsiveContainer>
//             </section>

//             <section className="bg-white rounded-xl shadow p-6">
//               <h2 className="font-semibold mb-2">Recent Results</h2>
//               <ul className="text-sm space-y-2 mb-4">
//                 <li>Computer Science - Midterm Exam - May 28, 2025 - <span className="text-green-600 font-semibold">92/100 A</span></li>
//                 <li>Advanced Mathematics - Assignment - June 2, 2025 - <span className="text-blue-600 font-semibold">85/100 B+</span></li>
//                 <li>Physics - Quiz - June 5, 2025 - <span className="text-green-600 font-semibold">88/100 A-</span></li>
//               </ul>
//               <ResponsiveContainer width="100%" height={120}>
//                 <LineChart data={performanceData}>
//                   <XAxis dataKey="subject" />
//                   <YAxis domain={[0, 100]} />
//                   <Tooltip />
//                   <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
//                 </LineChart>
//               </ResponsiveContainer>
//             </section>
//           </main>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-8 mt-6">
//             <section className="bg-white rounded-xl shadow p-6 col-span-2">
//               <h2 className="font-semibold mb-4">Today's Schedule</h2>
//               <div className="space-y-3">
//                 <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
//                   <span>09:00AM - 10:30AM | Introduction to Computer Science | Room 101</span>
//                   <span className="text-green-600 font-semibold">Completed</span>
//                 </div>
//                 <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
//                   <span>11:00AM - 12:30PM | Advanced Mathematics | Room 203</span>
//                   <span className="text-blue-600 font-semibold">Upcoming</span>
//                 </div>
//                 <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
//                   <span>02:00PM - 04:00PM | Physics Laboratory | Lab Building B</span>
//                   <span className="text-blue-600 font-semibold">Upcoming</span>
//                 </div>
//                 <div className="bg-gray-100 rounded p-3 flex justify-between items-center">
//                   <span>04:30PM - 06:00PM | English Literature | Room 305</span>
//                   <span className="text-blue-600 font-semibold">Upcoming</span>
//                 </div>
//               </div>
//             </section>

//             <section className="bg-white rounded-xl shadow p-6">
//               <h2 className="font-semibold mb-2">Announcements</h2>
//               <div className="mb-3">
//                 <div className="text-red-500 font-bold">Campus Closure Notice</div>
//                 <div className="text-sm">Campus closed on Saturday, June 14. Weekend classes online.</div>
//               </div>
//               <div>
//                 <div className="text-blue-500 font-bold">Summer Registration Open</div>
//                 <div className="text-sm">Register for summer courses before June 20.</div>
//               </div>
//             </section>
//           </div>
//         </>
//       )}

//       <footer className="text-center text-sm text-gray-500 mt-10 mb-4">
//         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
//       </footer>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
// } from "recharts";
// import {
//   Home, LayoutDashboard, LineChart as LineChartIcon, Bell, User,
//   Calendar1, PenBoxIcon, MessageCircle,
//   MessageCirclePlusIcon,
//   PenBox
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import logo from "../assets/logo.png";
// import CourseSetupStudent from "../components/CourseSetupStudent";
// import Fees from "../components/Fees";
// import Schedule from "../components/Schedule";
// import Results from "../components/Results";
// import OtherStudent from "../components/OtherStudent";
// import Mentor from "../components/Mentor";
// import StudentComplaintForm from "../components/StudentComplaintForm";
// import Feedback from "../components/Feedback";

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
//   { subject: "English", score: 83 },
//   { subject: "History", score: 81 },
// ];

// export default function StudentHome() {
//   const [activeTab, setActiveTab] = useState("home");
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col text-gray-800 dark:text-white">
//       <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white dark:bg-gray-800 shadow">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Campus Core" className="h-8" />
//           <span className="font-bold text-lg">CAMPUS CORE</span>
//         </div>
//         <div className="flex items-center gap-4 mt-4 md:mt-0">
//           <button onClick={() => navigate("/notifications")}> <Bell size={20} className="hover:text-blue-600 transition" /> </button>
//           <User size={20} />
//           <span className="font-semibold">DEVANSH</span>
//         </div>
//       </header>

//       <div className="mx-4 md:mx-8 mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 md:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white">
//         <div>
//           <h1 className="text-xl md:text-2xl font-semibold">Welcome back, Dev!</h1>
//           <p className="text-sm md:text-base">Wednesday, June 11, 2025 | Spring Semester 2025</p>
//           <p className="text-xs md:text-sm">Student ID: 670234585</p>
//         </div>
//         <div className="bg-indigo-300 bg-opacity-10 rounded-xl px-4 py-3 mt-4 lg:mt-0">
//           <p className="text-sm">Next Class</p>
//           <p className="text-base md:text-lg font-bold">Advanced Mathematics in 45 minutes</p>
//         </div>
//       </div>

//       <nav className="flex flex-wrap justify-center gap-6 mt-6 px-4">
//         {[
//           { key: "home", icon: <Home size={24} />, label: "Home" },
//           { key: "schedule", icon: <LayoutDashboard size={24} />, label: "Schedule" },
//           { key: "courseSetup", icon: <Calendar1 size={24} />, label: "Course Setup" },
//           { key: "result", icon: <LineChartIcon size={24} />, label: "Result" },
//           { key: "fees", icon: <PenBoxIcon size={24} />, label: "Fees" },
//           { key: "other", icon: <MessageCircle size={24} />, label: "Other" },
//           { key: "mentor", icon: <User size={24} />, label: "Mentor" },
//           { key: "feedback", icon: <MessageCirclePlusIcon size={24} />, label: "Feedback" },
//           { key: "complaint", icon: <PenBox size={24} />, label: "Complaint" },
//         ].map(tab => (
//           <div
//             key={tab.key}
//             className={`flex flex-col items-center text-sm cursor-pointer ${activeTab === tab.key ? "font-bold text-blue-600" : "text-gray-700 dark:text-gray-300"}`}
//             onClick={() => setActiveTab(tab.key)}
//           >
//             {tab.icon}
//             {tab.label}
//           </div>
//         ))}
//       </nav>

//       <main className="mx-4 md:mx-8">
//         {activeTab === "courseSetup" && <CourseSetupStudent />}
//         {activeTab === "schedule" && <Schedule />}
//         {activeTab === "feedback" && <Feedback />}
//         {activeTab === "result" && <Results />}
//         {activeTab === "fees" && <Fees />}
//         {activeTab === "other" && <OtherStudent />}
//         {activeTab === "mentor" && <Mentor />}
//         {activeTab === "complaint" && <StudentComplaintForm />}

//         {activeTab === "home" && (
//           <>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//               <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6 col-span-2">
//                 <div className="flex flex-col sm:flex-row gap-4 mb-4 text-center">
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-blue-500">85%</div>
//                     <div>Present</div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-yellow-500">10%</div>
//                     <div>Late</div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-red-500">5%</div>
//                     <div>Absent</div>
//                   </div>
//                 </div>
//                 <ResponsiveContainer width="100%" height={200}>
//                   <BarChart data={attendanceData}>
//                     <XAxis dataKey="week" stroke="#ccc" />
//                     <YAxis stroke="#ccc" />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="Present" fill="#3b82f6" />
//                     <Bar dataKey="Late" fill="#facc15" />
//                     <Bar dataKey="Absent" fill="#ef4444" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </section>

//               <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6">
//                 <h2 className="font-semibold mb-2">Recent Results</h2>
//                 <ul className="text-sm space-y-2 mb-4">
//                   <li>Computer Science - Midterm Exam - May 28, 2025 - <span className="text-green-500 font-semibold">92/100 A</span></li>
//                   <li>Advanced Mathematics - Assignment - June 2, 2025 - <span className="text-blue-500 font-semibold">85/100 B+</span></li>
//                   <li>Physics - Quiz - June 5, 2025 - <span className="text-green-500 font-semibold">88/100 A-</span></li>
//                 </ul>
//                 <ResponsiveContainer width="100%" height={120}>
//                   <LineChart data={performanceData}>
//                     <XAxis dataKey="subject" stroke="#ccc" />
//                     <YAxis domain={[0, 100]} stroke="#ccc" />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </section>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//               <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6 col-span-2">
//                 <h2 className="font-semibold mb-4">Today's Schedule</h2>
//                 <div className="space-y-3">
//                   {["09:00AM - 10:30AM | Introduction to Computer Science | Room 101",
//                     "11:00AM - 12:30PM | Advanced Mathematics | Room 203",
//                     "02:00PM - 04:00PM | Physics Laboratory | Lab Building B",
//                     "04:30PM - 06:00PM | English Literature | Room 305"]
//                     .map((item, idx) => (
//                       <div key={idx} className="bg-gray-100 dark:bg-gray-700 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                         <span className="text-sm">{item}</span>
//                         <span className={`text-sm font-semibold ${idx === 0 ? "text-green-600" : "text-blue-600"}`}>{idx === 0 ? "Completed" : "Upcoming"}</span>
//                       </div>
//                     ))}
//                 </div>
//               </section>

//               <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 md:p-6">
//                 <h2 className="font-semibold mb-2">Announcements</h2>
//                 <div className="mb-3">
//                   <div className="text-red-500 font-bold">Campus Closure Notice</div>
//                   <div className="text-sm">Campus closed on Saturday, June 14. Weekend classes online.</div>
//                 </div>
//                 <div>
//                   <div className="text-blue-500 font-bold">Summer Registration Open</div>
//                   <div className="text-sm">Register for summer courses before June 20.</div>
//                 </div>
//               </section>
//             </div>
//           </>
//         )}
//       </main>

//       <footer className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10 mb-4">
//         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
//       </footer>
//     </div>
//   );
// }
// import React, { useState } from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
// } from "recharts";
// import {
//   Home, LayoutDashboard, LineChart as LineChartIcon, Bell, User,
//   Calendar1, PenBoxIcon, MessageCircle,
//   MessageCirclePlusIcon,
//   PenBox
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import logo from "../assets/logo.png";
// import CourseSetupStudent from "../components/CourseSetupStudent";
// import Fees from "../components/Fees";
// import Schedule from "../components/Schedule";
// import Results from "../components/Results";
// import OtherStudent from "../components/OtherStudent";
// import Mentor from "../components/Mentor";
// import StudentComplaintForm from "../components/StudentComplaintForm";
// import Feedback from "../components/Feedback";

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
//   { subject: "English", score: 83 },
//   { subject: "History", score: 81 },
// ];

// export default function StudentHome() {
//   const [activeTab, setActiveTab] = useState("home");
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800">
//       <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white shadow gap-4">
//         <div className="flex items-center gap-2">
//           <img src={logo} alt="Campus Core" className="h-8" />
//           <span className="font-bold text-lg">CAMPUS CORE</span>
//         </div>
//         <div className="flex items-center gap-4">
//           <button onClick={() => navigate("/notifications")}>
//             <Bell size={20} className="hover:text-blue-600 transition" />
//           </button>
//           <User size={20} />
//           <span className="font-semibold">DEVANSH</span>
//         </div>
//       </header>

//       <div className="mx-4 md:mx-8 mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 md:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white gap-4">
//         <div>
//           <h1 className="text-xl md:text-2xl font-semibold">Welcome back, Dev!</h1>
//           <p className="text-sm md:text-base">Wednesday, June 11, 2025 | Spring Semester 2025</p>
//           <p className="text-xs md:text-sm">Student ID: 670234585</p>
//         </div>
//         <div className="bg-indigo-300 bg-opacity-10 rounded-xl px-4 py-3">
//           <p className="text-sm">Next Class</p>
//           <p className="text-base md:text-lg font-bold">Advanced Mathematics in 45 minutes</p>
//         </div>
//       </div>

//       <nav className="flex flex-wrap justify-center md:justify-align gap-4 md:gap-6 mt-6 px-4">
//         {[
//           { key: "home", icon: <Home size={24} />, label: "Home" },
//           { key: "schedule", icon: <LayoutDashboard size={24} />, label: "Schedule" },
//           { key: "courseSetup", icon: <Calendar1 size={24} />, label: "Course Setup" },
//           { key: "result", icon: <LineChartIcon size={24} />, label: "Result" },
//           { key: "fees", icon: <PenBoxIcon size={24} />, label: "Fees" },
//           { key: "other", icon: <MessageCircle size={24} />, label: "Other" },
//           { key: "mentor", icon: <User size={24} />, label: "Mentor" },
//           { key: "feedback", icon: <MessageCirclePlusIcon size={24} />, label: "Feedback" },
//           { key: "complaint", icon: <PenBox size={24} />, label: "Complaint" },
//         ].map(tab => (
//           <div
//             key={tab.key}
//             className={`flex flex-col items-center text-sm cursor-pointer px-2 py-1 rounded-md transition hover:bg-blue-100 ${
//               activeTab === tab.key ? "font-bold text-blue-600" : "text-gray-700"
//             }`}
//             onClick={() => setActiveTab(tab.key)}
//           >
//             {tab.icon}
//             {tab.label}
//           </div>
//         ))}
//       </nav>

//       <main className="mx-4 md:mx-8 mt-6">
//         {activeTab === "courseSetup" && <CourseSetupStudent />}
//         {activeTab === "schedule" && <Schedule />}
//         {activeTab === "feedback" && <Feedback />}
//         {activeTab === "result" && <Results />}
//         {activeTab === "fees" && <Fees />}
//         {activeTab === "other" && <OtherStudent />}
//         {activeTab === "mentor" && <Mentor />}
//         {activeTab === "complaint" && <StudentComplaintForm />}

//         {activeTab === "home" && (
//           <>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <section className="bg-white rounded-xl shadow p-4 md:p-6 col-span-2">
//                 <div className="flex flex-col sm:flex-row gap-4 mb-4 text-center">
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-blue-500">85%</div>
//                     <div>Present</div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-yellow-500">10%</div>
//                     <div>Late</div>
//                   </div>
//                   <div className="flex-1">
//                     <div className="text-2xl font-bold text-red-500">5%</div>
//                     <div>Absent</div>
//                   </div>
//                 </div>
//                 <ResponsiveContainer width="100%" height={200}>
//                   <BarChart data={attendanceData}>
//                     <XAxis dataKey="week" stroke="#ccc" />
//                     <YAxis stroke="#ccc" />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="Present" fill="#3b82f6" />
//                     <Bar dataKey="Late" fill="#facc15" />
//                     <Bar dataKey="Absent" fill="#ef4444" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </section>

//               <section className="bg-white rounded-xl shadow p-4 md:p-6">
//                 <h2 className="font-semibold mb-2">Recent Results</h2>
//                 <ul className="text-sm space-y-2 mb-4">
//                   <li>Computer Science - Midterm - May 28 - <span className="text-green-500 font-semibold">92/100 A</span></li>
//                   <li>Advanced Mathematics - Assignment - June 2 - <span className="text-blue-500 font-semibold">85/100 B+</span></li>
//                   <li>Physics - Quiz - June 5 - <span className="text-green-500 font-semibold">88/100 A-</span></li>
//                 </ul>
//                 <ResponsiveContainer width="100%" height={120}>
//                   <LineChart data={performanceData}>
//                     <XAxis dataKey="subject" stroke="#ccc" />
//                     <YAxis domain={[0, 100]} stroke="#ccc" />
//                     <Tooltip />
//                     <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </section>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
//               <section className="bg-white rounded-xl shadow p-4 md:p-6 col-span-2">
//                 <h2 className="font-semibold mb-4">Today's Schedule</h2>
//                 <div className="space-y-3">
//                   {[
//                     "09:00AM - 10:30AM | Introduction to Computer Science | Room 101",
//                     "11:00AM - 12:30PM | Advanced Mathematics | Room 203",
//                     "02:00PM - 04:00PM | Physics Laboratory | Lab Building B",
//                     "04:30PM - 06:00PM | English Literature | Room 305"
//                   ].map((item, idx) => (
//                     <div key={idx} className="bg-gray-100 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center">
//                       <span className="text-sm">{item}</span>
//                       <span className={`text-sm font-semibold ${idx === 0 ? "text-green-600" : "text-blue-600"}`}>
//                         {idx === 0 ? "Completed" : "Upcoming"}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </section>

//               <section className="bg-white rounded-xl shadow p-4 md:p-6">
//                 <h2 className="font-semibold mb-2">Announcements</h2>
//                 <div className="mb-3">
//                   <div className="text-red-500 font-bold">Campus Closure Notice</div>
//                   <div className="text-sm">Campus closed on Saturday, June 14. Weekend classes online.</div>
//                 </div>
//                 <div>
//                   <div className="text-blue-500 font-bold">Summer Registration Open</div>
//                   <div className="text-sm">Register for summer courses before June 20.</div>
//                 </div>
//               </section>
//             </div>
//           </>
//         )}
//       </main>

//       <footer className="text-center text-sm text-gray-500 mt-10 mb-4 px-4">
//         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
//       </footer>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, LineChart, Line
} from "recharts";
import {
  Home, LayoutDashboard, LineChart as LineChartIcon, Bell, User,
  Calendar1, PenBoxIcon, MessageCircle,
  MessageCirclePlusIcon,
  PenBox,
  Moon,
  Sun
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";
import CourseSetupStudent from "../components/CourseSetupStudent";
import Fees from "../components/Fees";
import Schedule from "../components/Schedule";
import Results from "../components/Results";
import OtherStudent from "../components/OtherStudent";
import Mentor from "../components/Mentor";
import StudentComplaintForm from "../components/StudentComplaintForm";
import Feedback from "../components/Feedback";

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
  { subject: "English", score: 83 },
  { subject: "History", score: 81 },
];

export default function StudentHome() {
  const [activeTab, setActiveTab] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    // Check if first load: localStorage or prefers-color-scheme
    if (typeof window !== "undefined") {
      return (
        localStorage.getItem("theme") === "dark" ||
        (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  });

  const navigate = useNavigate();

  // Effect for toggling .dark class on <html>
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
    <div className="bg-gray-50 min-h-screen flex flex-col text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200">
      <header className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 bg-white shadow gap-4 dark:bg-gray-800 dark:shadow-md">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Campus Core" className="h-8" />
          <span className="font-bold text-lg">CAMPUS CORE</span>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => navigate("/notifications")}>
            <Bell size={20} className="hover:text-blue-600 transition" />
          </button>
          <User size={20} />
          <span className="font-semibold">DEVANSH</span>
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="rounded-full p-2 bg-gray-200 hover:bg-gray-300 transition dark:bg-gray-700 dark:hover:bg-gray-600"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>
        </div>
      </header>

      <div className="mx-4 md:mx-8 mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl p-4 md:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center text-white gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Welcome back, Dev!</h1>
          <p className="text-sm md:text-base">Wednesday, June 11, 2025 | Spring Semester 2025</p>
          <p className="text-xs md:text-sm">Student ID: 670234585</p>
        </div>
        <div className="bg-indigo-300 bg-opacity-10 rounded-xl px-4 py-3">
          <p className="text-sm">Next Class</p>
          <p className="text-base md:text-lg font-bold">Advanced Mathematics in 45 minutes</p>
        </div>
      </div>

      <nav className="flex flex-wrap justify-center md:justify-align gap-4 md:gap-6 mt-6 px-4">
        {[
          { key: "home", icon: <Home size={24} />, label: "Home" },
          { key: "schedule", icon: <LayoutDashboard size={24} />, label: "Schedule" },
          { key: "courseSetup", icon: <Calendar1 size={24} />, label: "Course Setup" },
          { key: "result", icon: <LineChartIcon size={24} />, label: "Result" },
          { key: "fees", icon: <PenBoxIcon size={24} />, label: "Fees" },
          { key: "other", icon: <MessageCircle size={24} />, label: "Other" },
          { key: "mentor", icon: <User size={24} />, label: "Mentor" },
          { key: "feedback", icon: <MessageCirclePlusIcon size={24} />, label: "Feedback" },
          { key: "complaint", icon: <PenBox size={24} />, label: "Complaint" },
        ].map(tab => (
          <div
            key={tab.key}
            className={`flex flex-col items-center text-sm cursor-pointer px-2 py-1 rounded-md transition
              hover:bg-blue-100 dark:hover:bg-blue-900
              ${activeTab === tab.key
                ? "font-bold text-blue-600 dark:text-blue-400"
                : "text-gray-700 dark:text-gray-300"
              }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.icon}
            {tab.label}
          </div>
        ))}
      </nav>

      <main className="mx-4 md:mx-8 mt-6">
        {activeTab === "courseSetup" && <CourseSetupStudent />}
        {activeTab === "schedule" && <Schedule />}
        {activeTab === "feedback" && <Feedback />}
        {activeTab === "result" && <Results />}
        {activeTab === "fees" && <Fees />}
        {activeTab === "other" && <OtherStudent />}
        {activeTab === "mentor" && <Mentor />}
        {activeTab === "complaint" && <StudentComplaintForm />}

        {activeTab === "home" && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <section className="bg-white rounded-xl shadow p-4 md:p-6 col-span-2 dark:bg-gray-800">
                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-center">
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-blue-500">85%</div>
                    <div>Present</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-yellow-500">10%</div>
                    <div>Late</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-red-500">5%</div>
                    <div>Absent</div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={attendanceData}>
                    <XAxis dataKey="week" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Present" fill="#3b82f6" />
                    <Bar dataKey="Late" fill="#facc15" />
                    <Bar dataKey="Absent" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </section>

              <section className="bg-white rounded-xl shadow p-4 md:p-6 dark:bg-gray-800">
                <h2 className="font-semibold mb-2">Recent Results</h2>
                <ul className="text-sm space-y-2 mb-4">
                  <li>Computer Science - Midterm - May 28 - <span className="text-green-500 font-semibold">92/100 A</span></li>
                  <li>Advanced Mathematics - Assignment - June 2 - <span className="text-blue-500 font-semibold">85/100 B+</span></li>
                  <li>Physics - Quiz - June 5 - <span className="text-green-500 font-semibold">88/100 A-</span></li>
                </ul>
                <ResponsiveContainer width="100%" height={120}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="subject" stroke="#ccc" />
                    <YAxis domain={[0, 100]} stroke="#ccc" />
                    <Tooltip />
                    <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </section>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              <section className="bg-white rounded-xl shadow p-4 md:p-6 col-span-2 dark:bg-gray-800">
                <h2 className="font-semibold mb-4">Today's Schedule</h2>
                <div className="space-y-3">
                  {[
                    "09:00AM - 10:30AM | Introduction to Computer Science | Room 101",
                    "11:00AM - 12:30PM | Advanced Mathematics | Room 203",
                    "02:00PM - 04:00PM | Physics Laboratory | Lab Building B",
                    "04:30PM - 06:00PM | English Literature | Room 305"
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-100 rounded p-3 flex flex-col sm:flex-row justify-between items-start sm:items-center dark:bg-gray-900">
                      <span className="text-sm">{item}</span>
                      <span className={`text-sm font-semibold ${
                        idx === 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}>
                        {idx === 0 ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-4 md:p-6 dark:bg-gray-800">
                <h2 className="font-semibold mb-2">Announcements</h2>
                <div className="mb-3">
                  <div className="text-red-500 font-bold">Campus Closure Notice</div>
                  <div className="text-sm">Campus closed on Saturday, June 14. Weekend classes online.</div>
                </div>
                <div>
                  <div className="text-blue-500 font-bold">Summer Registration Open</div>
                  <div className="text-sm">Register for summer courses before June 20.</div>
                </div>
              </section>
            </div>
          </>
        )}
      </main>

      <footer className="text-center text-sm text-gray-500 mt-10 mb-4 px-4 dark:text-gray-400">
        Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
      </footer>
    </div>
  );
}
