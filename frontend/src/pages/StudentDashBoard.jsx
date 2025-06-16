// src/pages/StudentDashboard.jsx
import React, { useState } from 'react';
import {
  Bell,
  User,
  Home,
  FileText,
  BookOpen,
  BarChart2,
  ClipboardList,
  ClipboardCheck,
  Users,
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';
import logo from '../assets/images/logo.png';

const tabs = [
  { label: 'Home', icon: <Home className="w-4 h-4 mr-1" /> },
  { label: 'Schedule', icon: <FileText className="w-4 h-4 mr-1" /> },
  { label: 'Course Setup', icon: <BookOpen className="w-4 h-4 mr-1" /> },
  { label: 'Analytics', icon: <BarChart2 className="w-4 h-4 mr-1" /> },
  { label: 'Notification', icon: <ClipboardList className="w-4 h-4 mr-1" /> },
  { label: 'Message', icon: <ClipboardCheck className="w-4 h-4 mr-1" /> },
  { label: 'Mentor', icon: <Users className="w-4 h-4 mr-1" /> },
];

const barChartData = [
  { week: 'Week 1', present: 85, late: 10, absent: 5 },
  { week: 'Week 2', present: 80, late: 12, absent: 8 },
  { week: 'Week 3', present: 90, late: 5, absent: 5 },
  { week: 'Week 4', present: 85, late: 10, absent: 5 },
  { week: 'Week 5', present: 83, late: 12, absent: 5 },
  { week: 'Week 6', present: 87, late: 8, absent: 5 },
  { week: 'Week 7', present: 85, late: 10, absent: 5 },
  { week: 'Week 8', present: 85, late: 10, absent: 5 },
];

const resultChartData = [
  { subject: "CS", score: 92 },
  { subject: "Math", score: 75 },
  { subject: "Physics", score: 85 },
  { subject: "AI", score: 88 },
  { subject: "Stats", score: 78 },
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <>
            {/* Attendance & Recent Results */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Attendance Summary */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-base mb-4 flex justify-between items-center">
                  Attendance Summary
                  <span className="text-sm text-blue-600 cursor-pointer">View Details</span>
                </h3>
                <div className="flex gap-4 mb-6 text-sm">
                  <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-md">85% Present</div>
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-md">10% Late</div>
                  <div className="bg-red-100 text-red-800 px-3 py-2 rounded-md">5% Absent</div>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="present" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="late" stackId="a" fill="#FACC15" />
                    <Bar dataKey="absent" stackId="a" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Results Box */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                <h3 className="font-semibold text-base mb-4 flex justify-between items-center">
                  Recent Results
                  <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                    All Results
                  </span>
                </h3>
                <div className="grid grid-cols-1 gap-4 mb-6 text-sm">
                  <div className="flex justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <span>Computer Science</span>
                    <span className="text-green-700 font-semibold">92/100</span>
                  </div>
                  <div className="flex justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                    <span>Advanced Mathematics</span>
                    <span className="text-yellow-700 font-semibold">75/100</span>
                  </div>
                  <div className="flex justify-between p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <span>Physics</span>
                    <span className="text-blue-700 font-semibold">85/100</span>
                  </div>
                  <div className="flex justify-between p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <span>Artificial Intelligence</span>
                    <span className="text-purple-700 font-semibold">88/100</span>
                  </div>
                  <div className="flex justify-between p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                    <span>Statistics</span>
                    <span className="text-pink-700 font-semibold">78/100</span>
                  </div>
                </div>
                <div className="w-full h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={resultChartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="subject" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="score" stroke="#3B82F6" strokeWidth={2} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Schedule & Announcements */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
              {/* Today's Schedule */}
              <div className="lg:col-span-2 bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-base mb-4 flex justify-between items-center">
                  Today's Schedule
                  <span className="text-sm text-blue-600 cursor-pointer">Full Schedule</span>
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="p-3 bg-gray-50 rounded border flex justify-between">
                    <span>Intro to CS</span><span className="text-green-600">Completed</span>
                  </li>
                  <li className="p-3 bg-blue-50 rounded border flex justify-between">
                    <span>Maths</span><span className="text-blue-600">Upcoming</span>
                  </li>
                  <li className="p-3 bg-blue-50 rounded border flex justify-between">
                    <span>Physics Lab</span><span className="text-blue-600">Upcoming</span>
                  </li>
                  <li className="p-3 bg-blue-50 rounded border flex justify-between">
                    <span>English</span><span className="text-blue-600">Upcoming</span>
                  </li>
                </ul>
              </div>

              {/* Announcements */}
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="font-semibold text-base mb-4 flex justify-between items-center">
                  Announcements
                  <span className="text-sm text-blue-600 cursor-pointer">View All</span>
                </h3>
                <ul className="space-y-4 text-sm">
                  <li className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                    <p className="font-semibold text-red-700">Campus Closure</p>
                    <p className="text-xs text-gray-600">Campus closed on June 14.</p>
                  </li>
                  <li className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                    <p className="font-semibold text-yellow-700">Registration Open</p>
                    <p className="text-xs text-gray-600">Register by June 20.</p>
                  </li>
                  <li className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <p className="font-semibold text-blue-700">Library Hours</p>
                    <p className="text-xs text-gray-600">Open till 2 AM (June 20–30).</p>
                  </li>
                </ul>
              </div>
            </div>
          </>
        );

      case 'Schedule':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Full Class Schedule</h3>
            <ul className="space-y-4 text-sm">
              <li>Monday: Computer Science, Maths</li>
              <li>Tuesday: Physics Lab, English</li>
              <li>Wednesday: Advanced Maths, AI</li>
              <li>Thursday: CS Lab, Statistics</li>
              <li>Friday: Seminar & Presentations</li>
            </ul>
          </div>
        );

      case 'Course Setup':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Course Setup</h3>
            <p className="text-sm">You're enrolled in multiple courses this semester. Use the portal to add/drop.</p>
          </div>
        );

      case 'Analytics':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Analytics</h3>
            <p className="text-sm">Your average performance is 86%. Keep it up!</p>
          </div>
        );

      case 'Notification':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Notifications</h3>
            <ul className="space-y-3 text-sm">
              <li>📣 Exam Date Announced – July 10</li>
              <li>🧾 Fee Payment Due – June 25</li>
              <li>🎓 Guest Lecture on AI – June 22</li>
            </ul>
          </div>
        );

      case 'Message':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Messages</h3>
            <ul className="space-y-4 text-sm">
              <li className="border rounded p-3">Prof. Sharma: Please review the AI assignment before Friday.</li>
              <li className="border rounded p-3">Mentor: Congrats on your top performance last week!</li>
            </ul>
          </div>
        );

      case 'Mentor':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4">Your Mentor</h3>
            <div className="text-sm space-y-2">
              <p><strong>Name:</strong> Dr. Aditi Verma</p>
              <p><strong>Email:</strong> aditi.verma@campuscore.edu</p>
              <p><strong>Office Hours:</strong> Mon, Wed 3–5 PM</p>
            </div>
          </div>
        );

      default:
        return <div className="mt-6 text-sm text-gray-500">Select a tab to see content.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <img src={logo} alt="Campus Core" className="h-16" />
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-700" />
          <User className="w-5 h-5 text-gray-700" />
          <span className="font-medium text-sm md:text-base">Nik</span>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white p-6 mb-6 shadow">
        <h2 className="text-lg font-semibold">Welcome back, Nik!</h2>
        <p className="text-sm">Wednesday, June 18, 2025 | Spring Semester 2025</p>
        <p className="text-sm mt-2">Student ID: S12304566</p>
        <div className="mt-3 text-sm">
          <span className="bg-white text-black px-3 py-1 rounded-full">
            Next Class: <b>Advanced Mathematics</b> in 45 minutes
          </span>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex flex-wrap justify-center gap-2 md:gap-6 bg-white p-3 rounded-lg shadow">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center px-3 py-2 rounded-full text-sm md:text-base transition-all ${
              activeTab === label
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default StudentDashboard;
