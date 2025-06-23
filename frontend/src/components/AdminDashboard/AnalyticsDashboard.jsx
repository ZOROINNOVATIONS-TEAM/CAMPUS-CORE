import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  FaBookOpen,
  FaEnvelope,
  FaPoll,
  FaCalendarCheck,
  FaFileDownload,
  FaSync,
  FaBell,
} from "react-icons/fa";

const COLORS = ["#3888FF", "#FEBE3E", "#F24C4C"];

// --- Mock Data ---
const initialWeeklyActiveUsers = [
  { week: "Mon", users: 200 },
  { week: "Tue", users: 400 },
  { week: "Wed", users: 600 },
  { week: "Thu", users: 500 },
  { week: "Fri", users: 700 },
  { week: "Sat", users: 600 },
  { week: "Sun", users: 800 },
];
const initialUserDistribution = [
  { name: "Learner", value: 60 },
  { name: "Staff", value: 25 },
  { name: "Admin", value: 15 },
];
const initialStudentSatisfaction = [
  { sem: "Sem 1", score: 70 },
  { sem: "Sem 2", score: 80 },
  { sem: "Sem 3", score: 60 },
  { sem: "Sem 4", score: 85 },
  { sem: "Sem 5", score: 78 },
];
const initialCoursePopularity = [
  { name: "Course A", value: 55 },
  { name: "Course B", value: 25 },
  { name: "Course C", value: 20 },
];
const initialActivities = [
  {
    icon: <FaBookOpen size={28} color="#3888FF" />,
    title: "New Course Uploaded",
    desc: "Introduction to Data Science",
    time: "3 days ago",
  },
  {
    icon: <FaEnvelope size={28} color="#FEBE3E" />,
    title: "Email Campaign Sent",
    desc: "Welcome series to new users",
    time: "1 week ago",
  },
  {
    icon: <FaPoll size={28} color="#F24C4C" />,
    title: "Survey Results",
    desc: "End of Semester Feedback",
    time: "2 days ago",
  },
  {
    icon: <FaCalendarCheck size={28} color="#3B57F4" />,
    title: "Final Exam Schedule",
    desc: "Download available",
    time: "5 days ago",
  },
];

const initialMetrics = [
  { label: "Total Students", value: 9000 },
  { label: "New Enrollments", value: 150, note: "+20%", color: "#3888FF" },
  { label: "Active Courses", value: 45 },
  { label: "Graduation Rate", value: "95%", note: "↑", color: "#FEBE3E" },
  { label: "Total Instructors", value: 458 },
];

export default function Analytics() {
  // State for dynamic/functional options
  const [reportStatus, setReportStatus] = useState("idle");
  const [showRecent, setShowRecent] = useState(true);
  const [showAlerts, setShowAlerts] = useState(false);
  const [activities, setActivities] = useState(initialActivities);
  const [metrics, setMetrics] = useState(initialMetrics);

  // Simulate report generation
  const handleGenerateReport = () => {
    setReportStatus("generating");
    setTimeout(() => {
      setReportStatus("ready");
      setTimeout(() => setReportStatus("idle"), 2000);
    }, 1500);
  };

  // Show/hide recent activities and alerts
  const handleRecentActivity = () => {
    setShowRecent(true);
    setShowAlerts(false);
  };
  const handleAlerts = () => {
    setShowRecent(false);
    setShowAlerts(true);
  };

  // Simulate alerts (mock)
  const alertList = [
    {
      icon: <FaBell size={28} color="#F24C4C" />,
      title: "System Maintenance",
      desc: "Scheduled for tomorrow, 2AM.",
      time: "Just now",
    },
    {
      icon: <FaBell size={28} color="#FEBE3E" />,
      title: "Course Deadline",
      desc: "Submissions close tonight.",
      time: "6 hours ago",
    },
  ];

  // Simulate download report
  const handleDownload = () => {
    const blob = new Blob(
      [
        JSON.stringify({
          metrics: metrics,
          activities: activities,
        }),
      ],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "analytics-report.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Simulate refreshing metrics
  const handleRefreshMetrics = () => {
    setMetrics((prev) =>
      prev.map((m, idx) =>
        idx === 1
          ? { ...m, value: m.value + 1, note: "+21%" }
          : idx === 2
          ? { ...m, value: m.value + 1 }
          : m
      )
    );
  };

  return (
    <div className="bg-[#f5f6fa] min-h-screen p-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow p-6 mb-6 w-full">
        <div className="text-center">
          <h2 className="text-blue-700 text-2xl font-bold mb-1">
            User Engagement Trends
          </h2>
          <p className="text-gray-500 text-sm mb-1">
            Analyze the trends in campus user engagement.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          {/* Area Chart */}
          <div className="flex-2 w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-medium mb-2">Weekly Active Users</div>
              <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={initialWeeklyActiveUsers}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="users"
                      stroke="#8884d8"
                      fill="url(#colorUsers)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* Pie Chart & Overview */}
          <div className="flex-1 flex flex-col gap-3 w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow p-4 mb-1">
              <div className="font-medium mb-2">User Distribution by Roles</div>
              <div className="w-full h-32">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={initialUserDistribution}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={40}
                      label
                    >
                      {initialUserDistribution.map((entry, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-4 flex flex-col gap-2">
              <div className="font-bold text-base mb-1">Overview</div>
              <div className="text-gray-500 text-xs mb-2">
                Get insights into campus performance
              </div>
              <div className="flex gap-2 flex-wrap">
                <button
                  className={`flex items-center gap-1 bg-blue-700 text-white rounded px-2.5 py-1 text-xs font-semibold transition ${
                    reportStatus === "generating" ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  onClick={handleGenerateReport}
                  disabled={reportStatus === "generating"}
                  title="Generate and download analytics report"
                >
                  <FaFileDownload />
                  {reportStatus === "idle" && "Generate Report"}
                  {reportStatus === "generating" && (
                    <>
                      <FaSync className="animate-spin" /> Generating...
                    </>
                  )}
                  {reportStatus === "ready" && "Ready!"}
                </button>
                <button
                  className={`border border-blue-700 text-blue-700 rounded px-2.5 py-1 text-xs font-semibold flex items-center gap-1`}
                  onClick={handleRecentActivity}
                >
                  <FaBookOpen />
                  Recent Activity
                </button>
                <button
                  className={`border border-blue-700 text-blue-700 rounded px-2.5 py-1 text-xs font-semibold flex items-center gap-1`}
                  onClick={handleAlerts}
                >
                  <FaBell />
                  Alerts
                </button>
                <button
                  className="border border-green-600 text-green-600 rounded px-2.5 py-1 text-xs font-semibold flex items-center gap-1"
                  onClick={handleDownload}
                  title="Download JSON Report"
                >
                  <FaFileDownload />
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        {/* Recent Activities or Alerts */}
        <div className="bg-white rounded-2xl shadow p-6 flex-2 w-full md:w-2/3 mb-4 md:mb-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="font-bold text-lg text-blue-700">
              {showRecent ? "Recent Activities" : "Alerts"}
            </div>
            <button
              onClick={handleRecentActivity}
              className={`ml-2 px-2 py-1 text-xs rounded ${
                showRecent ? "bg-blue-100 text-blue-700" : "hover:bg-blue-100 text-blue-700"
              }`}
            >
              Recent
            </button>
            <button
              onClick={handleAlerts}
              className={`px-2 py-1 text-xs rounded ${
                showAlerts ? "bg-yellow-100 text-yellow-700" : "hover:bg-yellow-100 text-yellow-700"
              }`}
            >
              Alerts
            </button>
          </div>
          <div className="text-gray-500 mb-4 text-sm">
            {showRecent
              ? "Stay updated with campus happenings"
              : "Important notifications and alerts"}
          </div>
          <div className="flex gap-5 flex-wrap">
            {(showRecent ? activities : alertList).map((act, i) => (
              <ActivityCard key={i} {...act} />
            ))}
          </div>
        </div>
        {/* Key Metrics */}
        <div className="bg-white rounded-2xl shadow p-6 flex-1 w-full md:w-1/3 min-w-[270px]">
          <div className="flex items-center justify-between mb-2">
            <div className="font-bold text-base">Key Metrics</div>
            <button
              className="flex items-center gap-1 bg-gray-100 px-2 py-1 text-xs rounded text-blue-700 hover:bg-blue-100 transition"
              onClick={handleRefreshMetrics}
              title="Refresh"
            >
              <FaSync className="animate-spin-once group-hover:animate-spin" />
              Refresh
            </button>
          </div>
          <div className="text-gray-500 text-xs mb-3">Explore essential statistics</div>
          <button className="bg-blue-700 text-white rounded w-full py-1 text-xs font-semibold mb-4">
            View More
          </button>
          <div className="flex flex-col gap-2">
            {metrics.map((m, i) => (
              <MetricBox key={i} {...m} />
            ))}
          </div>
        </div>
      </div>
      {/* Performance Trends Section */}
      <div className="bg-white rounded-2xl shadow p-6 w-full">
        <div className="text-center">
          <h2 className="text-blue-700 text-2xl font-bold mb-1">
            Performance Trends
          </h2>
          <p className="text-gray-500 text-sm mb-1">
            Review performance over past semesters
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          {/* Student Satisfaction Area Chart */}
          <div className="flex-2 w-full lg:w-3/4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-medium mb-2">Student Satisfaction</div>
              <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={initialStudentSatisfaction}>
                    <defs>
                      <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#43e97b" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#38f9d7" stopOpacity={0.1} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="sem" />
                    <YAxis />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#43e97b"
                      fill="url(#colorSatisfaction)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          {/* Course Popularity Pie Chart */}
          <div className="flex-1 w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="font-medium mb-2">Course Popularity</div>
              <div className="w-full h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={initialCoursePopularity}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={50}
                      label
                    >
                      {initialCoursePopularity.map((entry, idx) => (
                        <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-center text-gray-400 text-xs mt-10 mb-4">
        <span className="mr-2">✂️ Designed and developed by ZoaTeam</span>
        <span>© 2025 Zoa Innovation</span>
      </div>
    </div>
  );
}

// --- Components ---

function ActivityCard({ icon, title, desc, time }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow p-4 min-w-[120px] max-w-[140px] flex flex-col items-center text-center">
      <div>{icon}</div>
      <div className="font-semibold text-[15px] mt-2">{title}</div>
      <div className="text-xs text-gray-500 mb-2">{desc}</div>
      <div className="text-xs text-blue-600 font-medium">{time}</div>
    </div>
  );
}

function MetricBox({ label, value, note, color }) {
  return (
    <div
      className={`bg-gray-100 rounded-lg px-4 py-2 flex justify-between items-center font-medium text-[15px] border-l-4 ${
        color ? "" : "border-gray-200"
      }`}
      style={color ? { borderColor: color } : {}}
    >
      <span>{label}</span>
      <span>
        {value}
        {note && (
          <span className="ml-2" style={{ color: color }}>
            {note}
          </span>
        )}
      </span>
    </div>
  );
}