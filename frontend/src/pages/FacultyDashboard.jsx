import React, { useState } from 'react';
import {
  Home,
  BookOpen,
  FileText,
  ClipboardList,
  UserCheck,
  Users,
  Search,
  Bell,
  User,
  CalendarDays,
  CheckCircle2,
  Clock8,
  LoaderCircle,
} from 'lucide-react';
import logo from '../assets/images/logo.png';

const tabs = [
  { name: 'Home', icon: <Home size={18} /> },
  { name: 'Exam', icon: <FileText size={18} /> },
  { name: 'Course Setup', icon: <BookOpen size={18} /> },
  { name: 'Grading', icon: <ClipboardList size={18} /> },
  { name: 'Assignment', icon: <UserCheck size={18} /> },
  { name: 'Duties', icon: <Users size={18} /> },
  { name: 'Mentor', icon: <CalendarDays size={18} /> },
];

const FacultyDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    if (activeTab === 'Home') {
      return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          {/* Submit Attendance Section */}
          <div className="bg-white p-5 rounded-xl shadow-md xl:col-span-2">
            <h2 className="text-base font-semibold mb-4">Submit Attendance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Attendance Summary */}
              <div className="space-y-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-xl">
                  <p className="text-xl font-bold">65%</p>
                  <p className="text-sm">Attended</p>
                </div>
                <div className="bg-yellow-100 text-yellow-600 p-4 rounded-xl">
                  <p className="text-xl font-bold">21%</p>
                  <p className="text-sm">On Leave</p>
                </div>
                <div className="bg-red-100 text-red-600 p-4 rounded-xl">
                  <p className="text-xl font-bold">9%</p>
                  <p className="text-sm">Absent</p>
                </div>
              </div>

              {/* Class + Status + Submit */}
              <div className="flex flex-col justify-between">
                <div>
                  <label className="text-sm font-semibold">Select Class:</label>
                  <div className="flex gap-2 mt-1 mb-4">
                    <button className="px-3 py-1 bg-gray-200 rounded">Math</button>
                    <button className="px-3 py-1 bg-gray-200 rounded">English</button>
                    <button className="px-3 py-1 bg-gray-200 rounded">Science</button>
                  </div>
                  <label className="text-sm font-semibold">Status:</label>
                  <div className="flex gap-2 mt-1">
                    <button className="px-3 py-1 bg-gray-200 rounded">Present</button>
                    <button className="px-3 py-1 bg-gray-200 rounded">Absent</button>
                    <button className="px-3 py-1 bg-gray-200 rounded">Late</button>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <button className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded">Submit Attendance</button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h2 className="text-base font-semibold mb-4">Upcoming Events</h2>
            <ul className="text-sm space-y-3">
              <li className="border-l-4 border-red-500 bg-red-50 p-3 rounded-md">
                <span className="text-red-600 font-medium">Technology Event - June 15</span>
              </li>
              <li className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-md">
                <span className="text-yellow-600 font-medium">AI Workshop - June 17</span>
              </li>
              <li className="border-l-4 border-green-500 bg-green-50 p-3 rounded-md">
                <span className="text-green-600 font-medium">Unit Test Conference - June 20</span>
              </li>
            </ul>
          </div>

          {/* Today’s Class Schedule */}
          <div className="bg-white p-5 rounded-xl shadow-md xl:col-span-2">
            <h2 className="text-base font-semibold mb-4">Today’s Class Schedule</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-4 h-4" />
                  <span>Intro to Computer Science - 9:00 AM - Room 101</span>
                </div>
                <span className="text-green-600">Completed</span>
              </li>
              <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                <div className="flex items-center gap-2">
                  <LoaderCircle className="text-blue-600 w-4 h-4 animate-spin" />
                  <span>Advanced Mathematics - 11:00 AM - Room 204</span>
                </div>
                <span className="text-blue-600">Ongoing</span>
              </li>
              <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                <div className="flex items-center gap-2">
                  <Clock8 className="text-blue-600 w-4 h-4" />
                  <span>Physics Laboratory - 2:00 PM - Lab 2</span>
                </div>
                <span className="text-blue-600">Upcoming</span>
              </li>
              <li className="flex justify-between items-center bg-gray-100 p-3 rounded">
                <div className="flex items-center gap-2">
                  <Clock8 className="text-blue-600 w-4 h-4" />
                  <span>English Literature - 4:00 PM - Room 306</span>
                </div>
                <span className="text-blue-600">Upcoming</span>
              </li>
            </ul>
          </div>

          {/* Announcements */}
          <div className="bg-white p-5 rounded-xl shadow-md">
            <h2 className="text-base font-semibold mb-4">Announcements</h2>
            <ul className="text-sm space-y-3">
              <li className="border-l-4 border-red-500 bg-red-50 p-3 rounded-md">
                <span className="text-red-600 font-medium">Campus Closure: June 25</span>
              </li>
              <li className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-md">
                <span className="text-yellow-600 font-medium">Summer Registration: June 22</span>
              </li>
              <li className="border-l-4 border-green-500 bg-green-50 p-3 rounded-md">
                <span className="text-green-600 font-medium">Library Hours: June 20–30</span>
              </li>
            </ul>
          </div>
        </div>
      );
    }

    return (
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">{activeTab}</h2>
        <p className="text-sm text-gray-600">You are viewing the {activeTab} tab content.</p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 font-sans">
      {/* Header */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <img src={logo} alt="Campus Core" className="h-12" />
        <div className="flex items-center gap-4 w-full justify-between md:justify-end">
          <Search className="text-gray-600 w-5 h-5" />
          <Bell className="text-gray-600 w-5 h-5" />
          <User className="text-gray-600 w-5 h-5" />
          <span className="font-medium text-sm md:text-base">Mr. Sharma</span>
        </div>
      </header>

      {/* Banner */}
      <section className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-xl mt-6 shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <div>
            <h1 className="text-lg md:text-xl font-semibold">Welcome, Mr. Sharma</h1>
            <p className="text-sm">Friday, June 13, 2025 - Spring Semester</p>
          </div>
          <div className="text-sm bg-white/20 px-4 py-2 rounded-full">Next Class: Advanced Mathematics in 45 mins</div>
        </div>
      </section>

      {/* Tabs */}
      <nav className="mt-4 flex flex-wrap justify-center gap-2 bg-white p-3 rounded-lg shadow">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-full text-sm transition ${
              activeTab === tab.name ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default FacultyDashboard;
