import React, { useState } from "react";
import {
  Bell,
  User,
  Home,
  Calendar,
  BookOpenCheck,
  BarChart2,
  MessageSquare,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy chart data
const chartData = [
  { name: "Feb", users: 1800 },
  { name: "Mar", users: 2000 },
  { name: "Apr", users: 2400 },
  { name: "May", users: 2800 },
  { name: "Jun", users: 3000 },
];

// Tab navigation items
const navItems = [
  { icon: Home, label: "Home" },
  { icon: Calendar, label: "Schedule" },
  { icon: BookOpenCheck, label: "Course Setup" },
  { icon: BarChart2, label: "Analytics" },
  { icon: Bell, label: "Notification" },
  { icon: MessageSquare, label: "Message" },
];

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("Home");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
            {/* Total Users */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <div className="flex justify-between text-center">
                <div>
                  <p className="text-xl font-bold text-indigo-600">2,847</p>
                  <p className="text-gray-500 text-sm">Students (+12.5%)</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-purple-600">164</p>
                  <p className="text-gray-500 text-sm">Faculty (+3.2%)</p>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={chartData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="users" fill="#6366F1" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <h3 className="text-lg font-semibold">Upcoming Events</h3>
              <ul className="text-sm space-y-2">
                <li className="border-l-4 border-indigo-500 pl-2">
                  <strong>17 JUN:</strong> Faculty Development Workshop — 10:00 AM
                </li>
                <li className="border-l-4 border-indigo-500 pl-2">
                  <strong>19 JUN:</strong> Student Orientation Day — 8:30 AM
                </li>
                <li className="border-l-4 border-indigo-500 pl-2">
                  <strong>20 JUN:</strong> Board Meeting — 2:00 PM
                </li>
              </ul>
            </div>

            {/* System Notifications */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <h3 className="text-lg font-semibold">System Notifications</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2 text-red-500">
                  🔧 System maintenance scheduled for June 15th — 2 hours ago
                </li>
                <li className="flex items-center gap-2 text-green-600">
                  🆕 New course registration opens next week — 5 hours ago
                </li>
                <li className="flex items-center gap-2 text-blue-500">
                  📘 Semester grades finalized — 1 day ago
                </li>
              </ul>
            </div>

            {/* Quick Reports */}
            <div className="bg-white p-6 rounded-2xl shadow space-y-4">
              <h3 className="text-lg font-semibold">Quick Reports</h3>
              <ul className="text-sm space-y-2">
                <li className="hover:bg-gray-50 p-2 rounded">
                  📄 <strong>Attendance Report:</strong> Updated today
                </li>
                <li className="hover:bg-gray-50 p-2 rounded">
                  📊 <strong>Performance Stats:</strong> Updated yesterday
                </li>
                <li className="hover:bg-gray-50 p-2 rounded">
                  📘 <strong>Course Report:</strong> Updated 2 days ago
                </li>
                <li className="hover:bg-gray-50 p-2 rounded">
                  💰 <strong>Financial Summary:</strong> Updated 3 days ago
                </li>
              </ul>
            </div>
          </div>
        );

      case "Schedule":
        return (
          <div className="bg-white p-6 rounded-2xl shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Schedule</h3>
            <p className="text-sm text-gray-600">📅 Upcoming schedules and calendar integration will go here.</p>
          </div>
        );

      case "Course Setup":
        return (
          <div className="bg-white p-6 rounded-2xl shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Course Setup</h3>
            <p className="text-sm text-gray-600">📝 Create, edit, and manage course modules and syllabi.</p>
          </div>
        );

      case "Analytics":
        return (
          <div className="bg-white p-6 rounded-2xl shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">📊 User analytics, engagement stats, and usage reports.</p>
          </div>
        );

      case "Notification":
        return (
          <div className="bg-white p-6 rounded-2xl shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <p className="text-sm text-gray-600">🔔 View and manage recent system notifications here.</p>
          </div>
        );

      case "Message":
        return (
          <div className="bg-white p-6 rounded-2xl shadow mt-4">
            <h3 className="text-lg font-semibold mb-2">Messages</h3>
            <p className="text-sm text-gray-600">💬 All direct and broadcast messages will appear here.</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-500 p-4 md:p-6 rounded-2xl shadow flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Welcome, Admin</h2>
          <p className="text-sm text-white">Friday, June 13, 2025</p>
        </div>
        <div className="flex items-center gap-4">
          <Bell className="w-6 h-6 text-white cursor-pointer" />
          <User className="w-6 h-6 text-white cursor-pointer" />
          <span className="font-bold text-white">Shubham</span>
        </div>
      </header>

      {/* Tab Navigation */}
      <nav className="bg-white p-4 rounded-2xl shadow grid grid-cols-3 md:flex justify-around items-center gap-4 mb-4">
        {navItems.map(({ icon: Icon, label }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex flex-col items-center text-sm ${
              activeTab === label ? "text-indigo-600 font-semibold" : "text-gray-600"
            } hover:text-indigo-500 transition`}
          >
            <Icon className="w-6 h-6 mb-1" />
            {label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default AdminDashboard;
