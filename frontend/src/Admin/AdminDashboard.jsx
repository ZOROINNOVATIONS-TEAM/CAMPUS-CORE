import React, { useState } from "react";
import {
  Home,
  CalendarDays,
  BookOpen,
  BarChart2,
  Bell,
  Search,
  User,
  Megaphone,
  Users,
  UserPlus,
  Clock,
  CalendarCheck,
  AlertTriangle,
  FileText,
  ShieldAlert,
  FileBarChart2,
  ClipboardList,
  CreditCard,
  Bookmark,
  MessageSquare,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import logo from "../assets/images/logo.png";
import ScheduleTab from "./Components/ScheduleTab";
import CourseSetupTab from "./Components/CourseSetupTab";
import AnalyticsTab from "./Components/AnalyticsTab";
import NotificationTab from "./Components/NotificationTab";
import MessageTab from "./Components/MessageTab";
import TabButton from "./Components/TabButton";

const tabs = [
  { name: "Home", icon: <Home size={18} /> },
  { name: "Schedule", icon: <CalendarDays size={18} /> },
  { name: "Course Setup", icon: <BookOpen size={18} /> },
  { name: "Analytics", icon: <BarChart2 size={18} /> },
  { name: "Notification", icon: <Bell size={18} /> },
  { name: "Message", icon: <MessageSquare size={18} /> },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Schedule":
        return <ScheduleTab />;
      case "Course Setup":
        return <CourseSetupTab />;
      case "Analytics":
        return <AnalyticsTab />;
      case "Notification":
        return <NotificationTab />;
      case "Message":
        return <MessageTab />;
      case "Home":
      default:
        return (
          <div className="mt-6 space-y-6">
            {/* Top Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Total Users */}
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h2 className="font-semibold text-base mb-4">Total Users</h2>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-semibold">Students</h3>
                    <p className="text-3xl font-bold mt-1">2,847</p>
                    <p className="text-xs opacity-80 mt-1">+12.5% from last month</p>
                  </div>
                  <div className="flex-1 bg-gradient-to-br from-green-400 to-emerald-600 text-white p-4 rounded-xl shadow">
                    <h3 className="text-lg font-semibold">Faculty</h3>
                    <p className="text-3xl font-bold mt-1">164</p>
                    <p className="text-xs opacity-80 mt-1">+6.2% from last month</p>
                  </div>
                </div>
                <div className="mt-5 h-48 bg-blue-50 rounded-lg p-3">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { month: "Jan", students: 2100, faculty: 120 },
                        { month: "Feb", students: 2200, faculty: 130 },
                        { month: "Mar", students: 2350, faculty: 135 },
                        { month: "Apr", students: 2500, faculty: 140 },
                        { month: "May", students: 2847, faculty: 164 },
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
              <div className="bg-white p-6 rounded-xl shadow-md lg:col-span-2">
                <h2 className="font-semibold text-base mb-4">Upcoming Events</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { date: "6/14", title: "Faculty Development Workshop", time: "9:00 AM", color: "bg-blue-100" },
                    { date: "6/15", title: "Student Orientation Day", time: "10:30 AM", color: "bg-yellow-100" },
                    { date: "6/18", title: "Board Meeting", time: "2:00 PM", color: "bg-green-100" },
                  ].map((event, i) => (
                    <div key={i} className={`p-4 rounded-xl shadow-sm ${event.color}`}>
                      <div className="flex items-center gap-2 text-blue-600">
                        <CalendarCheck size={16} />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <p className="mt-2 font-medium text-gray-800">{event.title}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <Clock size={14} /> {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* System Notifications */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <div className="text-red-500 bg-red-100 p-1.5 rounded-lg">
                      <ShieldAlert size={18} />
                    </div>
                    System Notifications
                  </h2>
                  <button className="text-sm text-blue-600 hover:underline">View all</button>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="border-l-4 border-red-500 bg-red-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="text-red-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-medium">System maintenance scheduled for June 19th</p>
                        <p className="text-xs text-gray-500 mt-1">2 days ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-4 border-yellow-500 bg-yellow-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <BookOpen className="text-yellow-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-medium">New course registration opens next week</p>
                        <p className="text-xs text-gray-500 mt-1">1 week ago</p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-4 border-green-500 bg-green-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <FileText className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-medium">Final year grades have been finalized</p>
                        <p className="text-xs text-gray-500 mt-1">2 weeks ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Quick Reports */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <div className="text-purple-500 bg-purple-100 p-1.5 rounded-lg">
                      <FileBarChart2 size={18} />
                    </div>
                    Quick Reports
                  </h2>
                  <button className="text-sm text-blue-600 hover:underline">Generate</button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Attendance", icon: <ClipboardList className="text-blue-500" size={16} /> },
                    { name: "Performance", icon: <BarChart2 className="text-green-500" size={16} /> },
                    { name: "Courses", icon: <BookOpen className="text-orange-500" size={16} /> },
                    { name: "Finance", icon: <CreditCard className="text-purple-500" size={16} /> },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-white rounded-md shadow-sm">
                          {item.icon}
                        </div>
                        <p className="font-semibold text-sm text-blue-600">{item.name}</p>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Recently Updated</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Announcements */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <div className="text-orange-500 bg-orange-100 p-1.5 rounded-lg">
                      <Megaphone size={18} />
                    </div>
                    Announcements
                  </h2>
                  <button className="text-sm text-blue-600 hover:underline">View all</button>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="border-l-4 border-blue-500 bg-blue-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Bookmark className="text-blue-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-medium">Faculty Senate Meeting scheduled for June 21st</p>
                        <p className="text-xs text-gray-500 mt-1">Yesterday</p>
                      </div>
                    </div>
                  </li>
                  <li className="border-l-4 border-purple-500 bg-purple-50 p-3 rounded-lg">
                    <div className="flex items-start gap-2">
                      <CalendarDays className="text-purple-500 mt-0.5 flex-shrink-0" size={16} />
                      <div>
                        <p className="font-medium">Summer Registration is now open!</p>
                        <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* User Management */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <div className="text-indigo-500 bg-indigo-100 p-1.5 rounded-lg">
                      <Users size={18} />
                    </div>
                    User Management
                  </h2>
                  <button className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 text-sm">
                    <UserPlus size={14} /> Add
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
                    <h3 className="text-xl font-bold text-blue-700">2,847</h3>
                    <p className="text-xs text-blue-700">Students</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-100 text-center">
                    <h3 className="text-xl font-bold text-green-700">164</h3>
                    <p className="text-xs text-green-700">Faculty</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm mb-2">Recent Registrations</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="text-gray-500" size={14} />
                        <span className="text-sm">Nikhil W.</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded-full">Student</span>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 p-2 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2">
                        <User className="text-gray-500" size={14} />
                        <span className="text-sm">Priya S.</span>
                      </div>
                      <span className="text-xs text-gray-500 bg-green-100 px-2 py-1 rounded-full">Faculty</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 md:p-6">
      {/* Header */}
      <header className="flex justify-between items-center">
        <img src={logo} alt="Campus Core" className="h-12" />
        <div className="flex items-center gap-4">
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

      {/* Tab Navigation */}
      <nav className="mt-4 gap-40 grid grid-cols-3 sm:flex sm:flex-wrap bg-white p-3 rounded-lg shadow">
        {tabs.map((tab) => (
          <TabButton
            key={tab.name}
            name={tab.name}
            icon={tab.icon}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </nav>

      {/* Tab Content */}
      <div className="mt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;