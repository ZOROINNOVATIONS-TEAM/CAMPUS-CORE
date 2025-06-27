import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import logo from '../assets/images/logo.png';
import {
  Bell,
  User,
  Home,
  FileText,
  BookOpen,
  CheckCircle,
  ClipboardList,
  Briefcase,
  Users,
} from 'lucide-react';
import CourseSetup from './CourseSetup'; // Adjust path if needed
import Fees from './Fess';
import Schedule from './Schedule ';
import Result from './Result';


const tabs = [
  { label: 'Home', icon: Home },
  { label: 'Schedule', icon: FileText },
  { label: 'Course Setup', icon: BookOpen },
  { label: 'Result', icon: CheckCircle },
  { label: 'Fees', icon: ClipboardList },
  { label: 'Other', icon: Briefcase },
  { label: 'Mentor', icon: Users },
];

const attendanceData = [
  { week: 'Week 1', present: 85, late: 10, absent: 5 },
  { week: 'Week 2', present: 80, late: 12, absent: 8 },
  { week: 'Week 3', present: 88, late: 6, absent: 6 },
  { week: 'Week 4', present: 90, late: 7, absent: 3 },
  { week: 'Week 5', present: 84, late: 10, absent: 6 },
  { week: 'Week 6', present: 82, late: 11, absent: 7 },
  { week: 'Week 7', present: 87, late: 9, absent: 4 },
  { week: 'Week 8', present: 85, late: 10, absent: 5 },
];



const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [attendanceSubmitted, setAttendanceSubmitted] = useState(false);

  const handleAttendanceSubmit = () => setAttendanceSubmitted(true);

  const renderTabContent = () => {
    if (activeTab === 'Home') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="col-span-1 md:col-span-2 bg-white rounded-xl shadow-lg p-6">
            {!attendanceSubmitted ? (
              <>
                <h3 className="text-base sm:text-lg font-semibold mb-4 text-gray-800">Submit Attendance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 text-center mb-6 gap-4">
                  <div className="bg-blue-100 p-4 rounded-xl">
                    <p className="text-xl sm:text-2xl font-bold text-blue-700">65%</p>
                    <p className="text-sm text-gray-600">Student Present</p>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-xl">
                    <p className="text-xl sm:text-2xl font-bold text-yellow-700">21%</p>
                    <p className="text-sm text-gray-600">Student Late</p>
                  </div>
                  <div className="bg-red-100 p-4 rounded-xl">
                    <p className="text-xl sm:text-2xl font-bold text-red-700">9%</p>
                    <p className="text-sm text-gray-600">Student Absent</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <select className="border p-2 rounded text-sm focus:outline-none">
                    <option>Select Class</option>
                    <option>Dsa</option>
                    <option>Java</option>
                    <option>Python</option>
                  </select>
                  <select className="border p-2 rounded text-sm focus:outline-none">
                    <option>Status</option>
                    <option>Present</option>
                    <option>Absent</option>
                    <option>Late</option>
                  </select>
                  <div className="flex justify-end gap-3 mt-3">
                    <button className="px-4 py-2 border rounded text-sm hover:bg-gray-100 transition">Cancel</button>
                    <button
                      onClick={handleAttendanceSubmit}
                      className="px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-gray-800">Attendance Summary</h3>
                  <div className="flex items-center gap-3">
                    <img src={logo} alt="student" className="w-9 h-9 rounded-full" />
                    <span className="text-sm font-medium text-gray-800">Shubham Uprade</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-100 text-blue-700 rounded-xl p-4 text-center shadow">
                    <p className="text-xl font-bold">85%</p>
                    <p className="text-sm">Present</p>
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 rounded-xl p-4 text-center shadow">
                    <p className="text-xl font-bold">10%</p>
                    <p className="text-sm">Late</p>
                  </div>
                  <div className="bg-red-100 text-red-700 rounded-xl p-4 text-center shadow">
                    <p className="text-xl font-bold">5%</p>
                    <p className="text-sm">Absent</p>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={attendanceData} barGap={3}>
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="present" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="late" stackId="a" fill="#facc15" />
                    <Bar dataKey="absent" stackId="a" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-semibold mb-4 text-sm sm:text-base border-b pb-2">📅 Upcoming Events</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Applied Science Assignment', date: 'Jun 14', color: 'red' },
                { name: 'Technology Exam', date: 'Jun 15', color: 'yellow' },
                { name: 'AI Workshop', date: 'Jun 16', color: 'green' },
                { name: 'UX Design Conference', date: 'Jun 17', color: 'blue' },
              ].map((event, idx) => (
                <li
                  key={idx}
                  className={`flex justify-between items-center p-3 rounded border-l-4 border-${event.color}-500 bg-${event.color}-50`}
                >
                  <span>{event.name}</span>
                  <span className="text-gray-600">{event.date}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 col-span-1 md:col-span-3">
            <div className="md:col-span-2 bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm sm:text-base">Today's Class Schedule</h3>
                <a href="#" className="text-sm text-blue-500 hover:underline">Full Schedule</a>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  { name: 'Intro to Computer Science', time: '09:00AM - 10:30AM • Room 101', status: 'Completed', color: 'green' },
                  { name: 'Advanced Mathematics', time: '11:00AM - 12:30PM • Room 203', status: 'Upcoming', color: 'blue' },
                  { name: 'Physics Lab', time: '02:00PM - 04:00PM • Lab B', status: 'Upcoming', color: 'blue' },
                  { name: 'English Literature', time: '04:30PM - 06:00PM • Room 305', status: 'Upcoming', color: 'blue' },
                ].map((cls, idx) => (
                  <li key={idx} className={`flex justify-between items-center p-3 rounded bg-${cls.color}-50`}>
                    <div className="flex gap-2 items-center">
                      <span className={`text-${cls.color}-600`}>📘</span>
                      <div>
                        <p className="font-medium">{cls.name}</p>
                        <p className="text-xs text-gray-500">{cls.time}</p>
                      </div>
                    </div>
                    <span className={`text-xs text-${cls.color}-600 font-medium`}>{cls.status}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-sm sm:text-base">Announcements</h3>
                <a href="#" className="text-sm text-blue-500 hover:underline">View All</a>
              </div>
              <ul className="space-y-4 text-sm">
                <li>
                  <p className="text-red-600 font-medium">
                    Campus Closure Notice <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded ml-2">Important</span>
                  </p>
                  <p className="text-gray-500 text-xs">Administration • June 10</p>
                  <p className="text-gray-600 mt-1 text-xs">
                    Due to maintenance, the campus will be closed on Saturday. All classes will be online.
                  </p>
                  <a href="#" className="text-blue-500 text-xs hover:underline">Read More</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    if (activeTab === 'Course Setup') {
    return <CourseSetup/>;
  }
 
    if (activeTab === 'Fees') {
    return <Fees/>;
  }
    if (activeTab === 'Schedule') {
    return <Schedule/>;
  }
    if (activeTab === 'Result') {
    return <Result/>;
  }


    return (
       <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
      <p className="text-gray-800 text-base">📁 Content for <span className="font-semibold">{activeTab}</span> tab.</p>
    </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 font-sans overflow-x-hidden">
      <div className="bg-blue-600 rounded-2xl p-4 sm:p-6 text-white shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold">👋 Welcome, Shubham</h2>
          <p className="text-sm sm:text-base">Friday, June 13, 2025 | Spring Semester</p>
          <p className="text-sm sm:text-base">Student Id : ST20789577</p>
        </div>
        <div className="bg-white/10 p-3 rounded-xl text-sm sm:text-base text-white shadow-md">
          📘 Next Class: <br />
          <span className="font-semibold">Advanced Mathematics</span><br />
          in 45 minutes
        </div>
      </div>

      <nav className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-6">
        {tabs.map(({ label, icon: Icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-200 shadow ${
              activeTab === label
                ? 'bg-blue-600 text-white font-semibold'
                : 'bg-white hover:bg-blue-100 text-gray-800'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </nav>

      {renderTabContent()}
    </div>
  );
};

export default StudentDashboard;