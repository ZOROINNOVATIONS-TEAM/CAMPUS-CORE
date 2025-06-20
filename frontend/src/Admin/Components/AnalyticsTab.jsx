import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell,
} from "recharts";

const lineData = [
  { week: "Week 1", users: 400 },
  { week: "Week 2", users: 200 },
  { week: "Week 3", users: 300 },
  { week: "Week 4", users: 500 },
];

const pieData = [
  { name: "Admin", value: 10 },
  { name: "Mentor", value: 20 },
  { name: "Student", value: 70 },
];

const COLORS = ["#EF4444", "#FACC15", "#3B82F6"];

const AnalyticsTab = () => {
  return (
    <div className="px-4 py-8 bg-gray-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* User Engagement Trends */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-center text-blue-600">User Engagement Trends</h2>
          <p className="text-center text-gray-500 text-sm mb-6">Analyze the trends in course usage engagement</p>

          {/* Full Width Line Chart */}
          <div className="w-full h-[250px] mb-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#6366F1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Below Chart: PieChart + Overview */}
          <div className="grid md:grid-cols-2 gap-6 shadow-2xl">
            {/* Pie Chart: User Distribution by Role */}
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-lg font-semibold mb-4">User Distribution by Role</h3>
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>

            {/* Overview Section */}
          <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-4">
  <h2 className="text-lg font-extrabold text-center">Overview</h2>
  <p className="text-gray-600">Get insights into Campus Performance</p>

  <button className="px-4 py-2 rounded bg-indigo-600 text-white w-fit text-center">Generate Report</button>

  <div className="flex flex-wrap gap-3 justify-center md:justify-start">
    <button className="px-4 py-2 rounded border border-gray-300">Overview</button>
    <button className="px-4 py-2 rounded border border-gray-300">Recent Activity</button>
    <button className="px-4 py-2 rounded border border-gray-300">Alert</button>
  </div>
         </div>


          </div>
        </div>

        {/* Activities and Metrics */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Recent Activities */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-md h-full">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Recent Activities</h3>
            <p> State Updated With Campus Happening </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <ActivityCard imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKmDd9eSHMUk3AjI9EnACOysd5RFXiwOVKXduZGR7q8JP39xYd7A67Trbe4Xp1HzVNK8&usqp=CAU" title="New Course Uploaded" time="3 days ago" />
              <ActivityCard imageSrc="https://img.freepik.com/free-psd/phone-icon-design_23-2151311652.jpg?semt=ais_hybrid&w=740" title="Email Campaign Sent" time="1 week ago" />
              <ActivityCard imageSrc="https://img.freepik.com/free-vector/feedback-survey-concept-illustration_114360-29972.jpg?semt=ais_hybrid&w=740" title="Survey Results Checked" time="2 days ago" />
              <ActivityCard imageSrc="https://cdn-icons-png.flaticon.com/512/9913/9913467.png" title="Final Exam Schedule" time="5 days ago" />
            </div>
          </div>

          {/* Key Metrics */}
          <div className="bg-white p-6 rounded-2xl shadow-md h-full text-center">
            <h3 className="text-lg font-semibold text-blue-600 mb-4">Key Metrics</h3>
            <h4 className="mb-2 text-gray-600">Explore essential Statistics </h4>
            <button className="bg-blue-500 text-white px-4 py-2 mb-4 rounded-lg">View More</button>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard label="Total Students" value="9000" bgColor="bg-blue-100" textColor="text-blue-700" />
              <MetricCard label="New Enrollments" value="150" bgColor="bg-green-100" textColor="text-green-700" />
              <MetricCard label="Active Courses" value="45" bgColor="bg-purple-100" textColor="text-purple-700" />
              <MetricCard label="Satisfaction Rate" value="95%" bgColor="bg-red-100" textColor="text-red-700" />
              <MetricCard label="Faculty Online" value="458" bgColor="bg-yellow-100" textColor="text-yellow-700" />
            </div>
          </div>
        </div>

        {/* Performance Trends */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="text-xl font-semibold text-blue-600 text-center">Performance Trends</h3>
          <p className="text-center text-sm text-gray-500 mb-6">Review performance across key user segments</p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>

            <div className="flex flex-col items-center">
              <PieChart width={200} height={200}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  cx="50%"
                  cy="50%"
                  outerRadius={70}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <h3 className="font-semibold mt-2">Course Popularity</h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

const ActivityCard = ({ imageSrc, title, time }) => (
  <div className="flex items-center gap-4 bg-gray-50 hover:bg-white border rounded-xl shadow-sm p-4 transition-all">
    <img src={imageSrc} alt={title} className="w-12 h-12 object-contain rounded-lg" />
    <div>
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-sm text-gray-500">{time}</p>
    </div>
  </div>
);

const MetricCard = ({ label, value, bgColor, textColor }) => (
  <div className={`rounded-xl p-4 shadow-md ${bgColor}`}>
    <p className="text-sm text-gray-600">{label}</p>
    <p className={`text-xl font-bold ${textColor}`}>{value}</p>
  </div>
);

export default AnalyticsTab;
