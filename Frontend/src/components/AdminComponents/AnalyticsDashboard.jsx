import { useState } from "react";
import {
    LineChart,
    Line,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const lineData = [
    { week: "W1", users: 400 },
    { week: "W2", users: 300 },
    { week: "W3", users: 500 },
    { week: "W4", users: 600 },
];

const pieData = [
    { name: "Users", value: 60 },
    { name: "Admins", value: 25 },
    { name: "Faculty", value: 15 }
];

const COLORS = ["#4f46e5", "#f59e0b", "#ef4444"];

const recentActivities = [
    { title: "New Course Uploaded", date: "3 days ago" },
    { title: "Email Campaign Sent", date: "1 week ago" },
    { title: "Survey Results", date: "2 days ago" },
    { title: "Final Exam Schedule", date: "5 days ago" }
];

const keyMetrics = [
    { label: "Total Students", value: "9000", change: null },
    { label: "New Enrollments", value: "150", change: "+25%" },
    { label: "Active Courses", value: "45", change: null },
    { label: "Graduation Rate", value: "95%", change: "-4%" },
    { label: "Faculty Members", value: "458", change: null }
];

const performanceLineData = [
    { semester: "S1", score: 60 },
    { semester: "S2", score: 80 },
    { semester: "S3", score: 65 },
    { semester: "S4", score: 85 },
    { semester: "S5", score: 55 },
    { semester: "S6", score: 90 },
];

const coursePieData = [
    { name: "AI&ML", value: 40 },
    { name: "Full Stack", value: 35 },
    { name: "UI/UX", value: 25 },
];

const COURSE_COLORS = ["#4f46e5", "#facc15", "#ef4444"];

const AnalyticsDashboard = () => {
    return (
        <div className="p-6 bg-violet-100 min-h-screen space-y-6">
            {/* User Engagement Trends */}
            <div className="bg-white p-4 rounded-xl shadow space-y-4">
                <div className="shadow-1xl border border-blue-600 rounded-2xl py-3 px-3">
                    <h2 className="text-lg font-bold text-center text-indigo-600">User Engagement Trends</h2>
                    <ResponsiveContainer width="100%" height={200}>
                        <h3>Weekly Active</h3>
                        <LineChart data={lineData}>
                            <Tooltip />
                            <Line type="monotone" dataKey="users" stroke="#4f46e5" strokeWidth={2} fill="#c7d2fe" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 shadow-1xl border border-blue-600 rounded-2xl py-3 px-3">
                    <div className="w-full md:w-1/2 flex justify-center py-3">
                        <div className="w-full max-w-xs md:max-w-full">

                            {/* Heading */}
                            <h3 className="text-indigo-600 font-semibold text-center md:text-left mb-4">
                                User Distribution By Roles
                            </h3>

                            {/* Chart + Legend side by side on desktop */}
                            <div className="flex flex-col md:flex-row items-center gap-6">

                                {/* Pie Chart */}
                                <PieChart width={200} height={200}>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={60}
                                        fill="#8884d8"
                                        dataKey="value"
                                        label
                                    >
                                        {pieData.map((_, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip />
                                </PieChart>

                                {/* Legend */}
                                <div className="flex flex-col justify-center text-sm space-y-2">
                                    {pieData.map((entry, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span
                                                className="inline-block w-3 h-3 rounded-full"
                                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                                            ></span>
                                            <span>{entry.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>



                    <div className="w-full md:w-1/2 text-center space-y-6 border border-blue-600 rounded-2xl py-3 px-3">
                        <h3 className="font-bold text-3xl">Overview</h3>
                        <p className="text-sm text-gray-600">Get insights into campus performance</p>
                        <button className="bg-indigo-600 text-white text-sm px-4 py-1 rounded">Generate Report</button>
                        <div className="flex justify-center gap-2 mt-2">
                            <button className="text-sm border px-3 py-1 rounded">Overview</button>
                            <button className="text-sm border px-3 py-1 rounded">Recent Activity</button>
                            <button className="text-sm border px-3 py-1 rounded">Alerts</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activities + Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6">
                {/* Recent Activities */}
                <div className="md:col-span-2 bg-white rounded-xl shadow p-4">
                    <h3 className="text-indigo-600 font-semibold mb-2">Recent Activities</h3>
                    <p className="text-sm text-gray-500 mb-4">Stay updated with campus happenings</p>
                    <ul className="space-y-2">
                        {recentActivities.map((activity, index) => (
                            <li key={index} className="flex justify-between items-center border-b pb-2">
                                <span>{activity.title}</span>
                                <span className="text-xs text-gray-500">{activity.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Key Metrics */}
                <div className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-4">
                    <h3 className="text-indigo-600 font-semibold">Key Metrics</h3>
                    <p className="text-sm text-gray-500">Explore essential statistics</p>
                    <button className="bg-indigo-600 text-white w-full py-1 rounded text-sm">View More</button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {keyMetrics.map((metric, idx) => (
                            <div key={idx} className="border p-2 rounded text-center text-sm bg-gray-50">
                                <p className="font-semibold">{metric.label}</p>
                                <p className="text-lg font-bold">{metric.value}</p>
                                {metric.change && (
                                    <p className={`text-xs ${metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                                        {metric.change}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 my-6">
                <h2 className="text-2xl font-bold text-center text-blue-600">Performance Trends</h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Review performance over past semesters
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Student Satisfaction Line Chart */}
                    <div className="bg-gray-50 p-4 rounded-xl border">
                        <h3 className="font-semibold mb-2">Student Satisfaction</h3>
                        <p className="text-sm text-gray-500 mb-2">Satisfaction Score</p>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={performanceLineData}>
                                <Tooltip />
                                <Line
                                    type="monotone"
                                    dataKey="score"
                                    stroke="#4ade80"
                                    strokeWidth={3}
                                    fill="url(#gradient)"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4ade80" stopOpacity={0.7} />
                                        <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                            </LineChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-right text-gray-400 mt-1">Semesters</p>
                    </div>

                    {/* Course Popularity Pie Chart */}
                    <div className="bg-gray-50 p-4 rounded-xl border">
                        <h3 className="font-semibold mb-2">Course Popularity</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={coursePieData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    label
                                >
                                    {coursePieData.map((entry, index) => (
                                        <Cell key={index} fill={COURSE_COLORS[index % COURSE_COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>

                        {/* Legend */}
                        <div className="mt-4 space-y-2 text-sm">
                            {coursePieData.map((entry, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span
                                        className="inline-block w-3 h-3 rounded-full"
                                        style={{ backgroundColor: COURSE_COLORS[index % COURSE_COLORS.length] }}
                                    ></span>
                                    <span>{entry.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;
