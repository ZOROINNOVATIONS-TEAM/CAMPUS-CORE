import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import logo from '../assets/images/logo.png';

const tabs = ['Home', 'Exam', 'Course Setup', 'Grading', 'Assignment', 'Duties', 'Mentor'];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Submit Attendance */}
            <div className="col-span-2 bg-white rounded-lg shadow p-4 md:p-6">
              <h3 className="text-lg font-semibold mb-4">Submit Attendance</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 text-center mb-6 gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <p className="text-xl font-bold">65%</p>
                  <p className="text-sm">Student Present</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl">
                  <p className="text-xl font-bold">21%</p>
                  <p className="text-sm">Student Late</p>
                </div>
                <div className="bg-red-100 p-4 rounded-xl">
                  <p className="text-xl font-bold">9%</p>
                  <p className="text-sm">Student Absent</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <select className="border p-2 rounded text-sm">
                  <option>Select Class</option>
                  <option>Dsa</option>
                  <option>Java</option>
                  <option>Python</option>
                </select>
                <select className="border p-2 rounded text-sm">
                  <option>Status</option>
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Late</option>
                </select>
                <div className="flex justify-end gap-3 mt-3">
                  <button className="px-4 py-2 border rounded text-sm">Cancel</button>
                  <button className="px-4 py-2 bg-black text-white rounded text-sm">Submit Attendance</button>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4 text-base border-b pb-2">Upcoming Events</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center p-3 rounded border-l-4 border-red-500 bg-red-50">
                  <span>Applied Science Assignment</span>
                  <span className="text-gray-600">Jun 14</span>
                </li>
                <li className="flex justify-between items-center p-3 rounded border-l-4 border-yellow-500 bg-yellow-50">
                  <span>Technology Exam</span>
                  <span className="text-gray-600">Jun 15</span>
                </li>
                <li className="flex justify-between items-center p-3 rounded border-l-4 border-green-500 bg-green-50">
                  <span>AI Workshop</span>
                  <span className="text-gray-600">Jun 16</span>
                </li>
                <li className="flex justify-between items-center p-3 rounded border-l-4 border-blue-500 bg-blue-50">
                  <span>UX Design Conference</span>
                  <span className="text-gray-600">Jun 17</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'Exam':
        return <div className="mt-8 bg-white p-6 rounded shadow">📘 <strong>Upcoming Exam:</strong> Technology (Jun 15)</div>;

      case 'Course Setup':
        return <div className="mt-8 bg-white p-6 rounded shadow">⚙️ <strong>Course:</strong> Add or edit course details here.</div>;

      case 'Grading':
        return <div className="mt-8 bg-white p-6 rounded shadow">📊 <strong>Grading:</strong> Assign grades to student submissions.</div>;

      case 'Assignment':
        return <div className="mt-8 bg-white p-6 rounded shadow">📝 <strong>Assignments:</strong> View, create, and manage assignments.</div>;

      case 'Duties':
        return <div className="mt-8 bg-white p-6 rounded shadow">📋 <strong>Duties:</strong> Monitor invigilation or admin duties.</div>;

      case 'Mentor':
        return <div className="mt-8 bg-white p-6 rounded shadow">👨‍🏫 <strong>Mentor:</strong> Mentor sessions and progress tracking.</div>;

      default:
        return null;
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
          <span className="font-medium text-sm md:text-base">Stu.Nik</span>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 md:p-6 text-white shadow-md">
        <h2 className="text-lg md:text-xl font-bold">Welcome, Stu.Nik</h2>
        <p className="text-sm md:text-base">Friday, June 13, 2025 | Spring Semester</p>
        <p className="mt-2 text-sm md:text-base">
          Next Class: <span className="font-semibold">Advanced Mathematics</span> in 45 minutes
        </p>
      </div>

      {/* Nav Tabs */}
      <nav className="flex flex-wrap justify-center md:justify-around mt-6 gap-3">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-200 shadow ${
              activeTab === tab
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-white hover:bg-blue-100 text-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {renderTabContent()}

      {/* Bottom Section for Home Tab */}
      {activeTab === 'Home' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          {/* Today's Schedule */}
          <div className="col-span-2 bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-2 text-base">Today's Class Schedule</h3>
            <ul className="space-y-3 text-sm">
              <li className="p-3 bg-gray-50 rounded border">Intro to Computer Science (9:00–10:30 AM) – Room 101</li>
              <li className="p-3 bg-blue-50 rounded border">Advanced Mathematics (10:40–12:30 PM) – Room 205</li>
              <li className="p-3 bg-blue-50 rounded border">Physics Lab (2:00–4:00 PM) – Lab B</li>
              <li className="p-3 bg-blue-50 rounded border">English Literature (4:30–6:00 PM) – Room 305</li>
            </ul>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="font-semibold mb-4 text-base border-b pb-2">Announcements</h3>
            <ul className="space-y-4">
              <li className="bg-red-50 p-3 rounded border-l-4 border-red-500">
                <p className="font-semibold text-red-700">Campus Closure Notice</p>
                <p className="text-xs text-gray-600">Due to scheduled maintenance, the campus will be closed on Saturday, June 14.</p>
              </li>
              <li className="bg-yellow-50 p-3 rounded border-l-4 border-yellow-400">
                <p className="font-semibold text-yellow-700">Summer Registration Open</p>
                <p className="text-xs text-gray-600">Register before June 20 to secure your spot.</p>
              </li>
              <li className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                <p className="font-semibold text-blue-700">Library Extended Hours</p>
                <p className="text-xs text-gray-600">Open from 7 AM to 2 AM from June 20–28.</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
