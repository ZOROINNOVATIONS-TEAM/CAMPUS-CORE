import React from 'react';
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

const HomeTab = () => {
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
};

export default HomeTab;