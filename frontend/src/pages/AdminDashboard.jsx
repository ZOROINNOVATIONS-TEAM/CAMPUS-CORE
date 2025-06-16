// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import {
  Home, CalendarDays, BookOpen, BarChart2, Bell,
  MessageCircle, Search, User, CalendarCheck, Clock
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import logo from '../assets/images/logo.png';

const tabs = [
  { name: 'Home', icon: <Home size={18} /> },
  { name: 'Schedule', icon: <CalendarDays size={18} /> },
  { name: 'Course Setup', icon: <BookOpen size={18} /> },
  { name: 'Analytics', icon: <BarChart2 size={18} /> },
  { name: 'Notification', icon: <Bell size={18} /> },
  { name: 'Message', icon: <MessageCircle size={18} /> },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    if (activeTab === 'Home') {
      return (
        <>
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Total Users */}
          <div className="bg-white p-5 rounded-xl shadow-md lg:col-span-1">
  <h2 className="font-semibold text-base mb-4">Total Users</h2>
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">Students</h3>
      <p className="text-2xl font-bold mt-1">2,847</p>
      <p className="text-xs text-white/80 mt-1">+12.5% from last month</p>
    </div>
    <div className="flex-1 bg-gradient-to-br from-green-400 to-emerald-600 text-white p-4 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold">Faculty</h3>
      <p className="text-2xl font-bold mt-1">164</p>
      <p className="text-xs text-white/80 mt-1">+6.2% from last month</p>
    </div>
  </div>

  <div className="mt-5 h-48 bg-blue-50 rounded-lg p-3">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={[
          { month: 'Jan', students: 2100, faculty: 120 },
          { month: 'Feb', students: 2200, faculty: 130 },
          { month: 'Mar', students: 2350, faculty: 135 },
          { month: 'Apr', students: 2500, faculty: 140 },
          { month: 'May', students: 2847, faculty: 164 },
        ]}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="faculty" stroke="#10b981" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
       </div>


            {/* Upcoming Events */}
            <div className="bg-white p-5 rounded-xl shadow-md lg:col-span-2">
              <h2 className="font-semibold text-base mb-4">Upcoming Events</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    date: '6/14',
                    title: 'Faculty Development Workshop',
                    time: '9:00 AM',
                    color: 'bg-blue-100',
                  },
                  {
                    date: '6/15',
                    title: 'Student Orientation Day',
                    time: '10:30 AM',
                    color: 'bg-yellow-100',
                  },
                  {
                    date: '6/18',
                    title: 'Board Meeting',
                    time: '2:00 PM',
                    color: 'bg-green-100',
                  },
                ].map((event, i) => (
                  <div key={i} className={`p-4 rounded-xl shadow-sm ${event.color}`}>
                    <div className="flex items-center gap-2 text-blue-600">
                      <CalendarCheck size={16} />
                      <span className="font-semibold">{event.date}</span>
                    </div>
                    <p className="mt-2 font-medium text-gray-800">{event.title}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                      <Clock size={14} />
                      {event.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* System Notifications */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h2 className="font-semibold text-base mb-4">System Notifications</h2>
              <ul className="text-sm space-y-3">
                <li className="border-l-4 border-red-500 bg-red-50 p-3 rounded">
                  System maintenance scheduled for June 19th
                </li>
                <li className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded">
                  New course registration opens next week
                </li>
                <li className="border-l-4 border-green-500 bg-green-50 p-3 rounded">
                  Final year grades have been finalized
                </li>
              </ul>
            </div>

            {/* Quick Reports */}
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h2 className="font-semibold text-base mb-4">Quick Reports</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-600">Attendance Report</p>
                  <p className="text-gray-500">Last updated today</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-purple-600">Performance Stats</p>
                  <p className="text-gray-500">Last updated yesterday</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-green-600">Course Report</p>
                  <p className="text-gray-500">Updated 2 days ago</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                  <p className="font-semibold text-pink-600">Financial Summary</p>
                  <p className="text-gray-500">Updated 3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }

    // Placeholder for other tabs
    return (
      <div className="mt-6 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">{activeTab}</h2>
        <p className="text-sm text-gray-600">
          {activeTab === 'Schedule' && 'View and manage upcoming events and schedules.'}
          {activeTab === 'Course Setup' && 'Create, update or delete courses.'}
          {activeTab === 'Analytics' && 'Track reports and system metrics.'}
          {activeTab === 'Notification' && 'Send alerts and announcements.'}
          {activeTab === 'Message' && 'Read and reply to messages from users.'}
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {activeTab === 'Schedule' && 'Add New Event'}
          {activeTab === 'Course Setup' && 'Add New Course'}
          {activeTab === 'Analytics' && 'View Charts'}
          {activeTab === 'Notification' && 'Send Notification'}
          {activeTab === 'Message' && 'Open Chat'}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-6">
      {/* Top Bar */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <img src={logo} alt="Campus Core" className="h-12" />
        <div className="flex items-center gap-4 w-full justify-between md:justify-end">
          <Search className="text-gray-600 w-5 h-5" />
          <Bell className="text-gray-600 w-5 h-5" />
          <User className="text-gray-600 w-5 h-5" />
          <span className="font-medium text-sm md:text-base">NIKH</span>
        </div>
      </header>

      {/* Welcome Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white p-6 mt-6 shadow-md">
        <h1 className="text-lg md:text-xl font-semibold">Welcome, Admin</h1>
        <p className="text-sm">Friday, June 13, 2025</p>
      </section>

      {/* Tabs */}
      <nav className="mt-4 grid grid-cols-3 sm:flex sm:flex-wrap justify-center gap-2 bg-white p-3 rounded-lg shadow">
        {tabs.map(tab => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`flex items-center justify-center gap-1 px-3 py-2 rounded-full text-sm transition ${
              activeTab === tab.name
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 hover:bg-gray-100'
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

export default AdminDashboard;
