// src/pages/admin/AdminAnalytics.jsx

import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faCalendarAlt, faBook, faChartBar, faUser, faEnvelope, faPoll, faFileContract,
  faUserGraduate, faUsers, faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Tooltip, Legend } from "chart.js";
import { Line, Pie, Bar } from 'react-chartjs-2';
import { AdminTopBar, AdminBannerAndTabs } from "../../components/dashboard/admin/AdminHeader";

// Chart.js register
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, ArcElement, BarElement, Tooltip, Legend);

function NavLink({ label, icon, path, active = false }) {
  return (
    <Link to={path} className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium ${active
      ? "bg-gray-200 text-indigo-700"
      : "text-gray-500 hover:text-indigo-500 hover:bg-gray-50"
      }`}>
      <FontAwesomeIcon icon={icon} /> {label}
    </Link>
  );
}

const AdminAnalytics = () => {
  // Data constants
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const weeklyActiveData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Active Users",
        data: [340, 290, 410, 285, 430, 480, 410],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 240);
          gradient.addColorStop(0, "rgba(71, 87, 255, 0.6)");
          gradient.addColorStop(1, "rgba(71, 87, 255, 0.05)");
          return gradient;
        },
        borderColor: "#4757ff",
        borderWidth: 2,
        pointBackgroundColor: "#4757ff",
        tension: 0.4,
      },
    ],
  };

  const userRolePieData = {
    labels: ["Students", "Admins", "Faculty"],
    datasets: [
      {
        data: [70, 15, 15],
        backgroundColor: ["#3354FF", "#E2CD36", "#E24B4B"],
      },
    ],
  };

  const keyMetrics = [
    { title: "Total Students", value: 9000, color: "border-blue-500" },
    { title: "Active Courses", value: 45, color: "border-green-500" },
    { title: "Faculty Members", value: 458, color: "border-yellow-500" },
    { title: "New Enrollments", value: "150 (+20%)", color: "border-pink-500" },
    { title: "Graduation Rate", value: "95%", color: "border-indigo-500" },
  ];

  const recentActivities = [
    {
      icon: faBook,
      color: "bg-green-100 text-green-800",
      title: "New Course Uploaded",
      desc: "Introduction to Data Science",
      time: "3 days ago"
    },
    {
      icon: faEnvelope,
      color: "bg-blue-100 text-blue-800",
      title: "Email Campaign Sent",
      desc: "Welcome new students",
      time: "1 week ago"
    },
    {
      icon: faPoll,
      color: "bg-yellow-100 text-yellow-800",
      title: "Survey Results",
      desc: "End of Semester Feedback",
      time: "2 days ago"
    },
    {
      icon: faFileContract,
      color: "bg-purple-100 text-purple-800",
      title: "Final Exam Schedule",
      desc: "Download now",
      time: "5 days ago"
    }
  ];

  const studentSatisfactionData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5"],
    datasets: [
      {
        label: "Satisfaction",
        data: [70, 72, 76, 89, 92],
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 240);
          gradient.addColorStop(0, "rgba(52,211,153,0.6)");
          gradient.addColorStop(1, "rgba(52,211,153,0.05)");
          return gradient;
        },
        borderColor: "#22D3EE",
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: "#22D3EE",
      }
    ]
  };

  const coursePopularityData = {
    labels: ["CS101", "MATH201", "PHYS101", "ENG101"],
    datasets: [
      {
        label: "Enrollment",
        data: [120, 80, 90, 110],
        backgroundColor: ["#3354FF", "#E2CD36", "#E24B4B", "#7F56D9"],
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sticky top bar */}
      <AdminTopBar />

      {/* Scrollable banner and tabs */}
      <AdminBannerAndTabs />

      {/* Analytics content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* User Engagement Trends (exact match to UI) */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-6 mb-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 dark:text-blue-300">User Engagement Trends</h2>
          <p className="text-sm text-center text-gray-600 dark:text-gray-300 mb-4">Analyze the trends in campus user engagement.</p>
          <div className="flex flex-col gap-6">
            {/* Line Chart (full width at top) */}
            <div className="flex-1">
              <div className="bg-white dark:bg-gray-700 p-1.5 rounded-lg h-56">
                <Line
                  data={weeklyActiveData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { grid: { display: false } },
                      y: { beginAtZero: true, grid: { color: "#e5e7eb dark:color-gray-600" } },
                    }
                  }}
                  height={180}
                />
              </div>
            </div>
            {/* Pie Chart and Overview (side by side below) */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 flex flex-col items-center">
                <div className="w-full max-w-xs">
                  <Pie
                    data={userRolePieData}
                    options={{
                      responsive: true,
                      plugins: { legend: { position: 'bottom' } }
                    }}
                  />
                </div>
                <div className="mt-2 text-xs text-center text-gray-600 dark:text-gray-300">
                  <div><span className="inline-block w-3 h-3 mr-1 rounded-full bg-[#3354FF]"></span>Students</div>
                  <div><span className="inline-block w-3 h-3 mr-1 rounded-full bg-[#E2CD36]"></span>Admins</div>
                  <div><span className="inline-block w-3 h-3 mr-1 rounded-full bg-[#E24B4B]"></span>Faculty</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <div className="font-bold text-5xl mb-1 text-gray-900 dark:text-gray-100">Overview</div> 
                <div className="text-lg text-gray-900 dark:text-gray-300 mb-2">Get insights into campus performance</div>
                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold rounded-lg py-2 px-4 w-fit mb-4">
                  Generate Report
                </button>
                <div className="flex gap-1">
                  <button className="px-3 py-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 font-medium text-sm">Overview</button>
                  <button className="px-3 py-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 font-medium text-sm">Recent Activity</button>
                  <button className="px-3 py-4 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 font-medium text-sm">Alerts</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* "Key Metrics" and "Recent Activities" side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-8">
          {/* Recent Activities */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-5 md:col-span-4">
            <div className="font-bold text-lg text-blue-700 dark:text-blue-300">Recent Activities</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">Stay updated with campus happenings</div>
            <div className="grid md:grid-cols-2 gap-5">
              {recentActivities.slice(0,2).map((act, i) => (
                <div className="flex items-center gap-3 mb-2" key={act.title}>
                  <span className={`rounded-full p-3 text-2xl ${act.color} dark:opacity-80`}>
                    <FontAwesomeIcon icon={act.icon} />
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{act.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{act.desc}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{act.time}</div>
                  </div>
                </div>
              ))}
              {recentActivities.slice(2).map((act, i) => (
                <div className="flex items-center gap-3 mb-2" key={act.title}>
                  <span className={`rounded-full p-3 text-2xl ${act.color} dark:opacity-80`}>
                    <FontAwesomeIcon icon={act.icon} />
                  </span>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{act.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{act.desc}</div>
                    <div className="text-xs text-gray-400 dark:text-gray-500">{act.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Key Metrics */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-5 md:col-span-2 flex flex-col justify-between">
            <div className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2">Key Metrics</div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">Explore essential statistics</div>
            <button className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-800 dark:hover:bg-blue-900 text-white py-2 px-4 rounded-lg font-semibold mb-3">
              View More
            </button>
            <div className="grid grid-cols-2 gap-3">
              {keyMetrics.map((item, i) => (
                <div
                  className={`rounded border px-3 py-2 text-center ${item.color}`}
                  key={item.title}
                >
                  <div className="font-medium text-xs text-gray-500 dark:text-gray-300 mb-1">{item.title}</div>
                  <div className="font-bold text-lg text-gray-900 dark:text-gray-100">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Trends (at the bottom) */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow px-6 py-6 mb-10">
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 text-center mb-1">
            Performance Trends
          </div>
          <div className="text-sm text-center text-gray-600 dark:text-gray-300 mb-5">
            Review performance over past semesters
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Satisfaction Area Chart */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Student Satisfaction</div>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">Satisfaction Score</div>
              <div className="h-56">
                <Line 
                  data={studentSatisfactionData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { grid: { display: false }, title: { display: true, text: "Semesters" } },
                      y: { grid: { color: "#e5e7eb dark:color-gray-600" }, beginAtZero: true }
                    }
                  }}
                />
              </div>
            </div>
            {/* Course Popularity Bar Chart */}
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="font-semibold mb-1 text-gray-900 dark:text-gray-100">Course Popularity</div>
              <div className="text-xs text-gray-500 dark:text-gray-300 mb-2">Channels: ASM, Full Stack, UX/UI</div>
              <div className="h-56">
                <Bar 
                  data={coursePopularityData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                      x: { grid: { display: false } },
                      y: { grid: { color: "#e5e7eb dark:color-gray-600" }, beginAtZero: true },
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminAnalytics;
