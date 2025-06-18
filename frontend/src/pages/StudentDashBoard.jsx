import React, { useState } from 'react';
import {
  Bell,
  User,
  Home,
  FileText,
  BookOpen,
  BarChart2,
  ClipboardList,
  ClipboardCheck,
  Users,
  CheckCircle,
  Clock,
  Bookmark,
  Award,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
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
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import logo from '../assets/images/logo.png';

const tabs = [
  { label: 'Home', icon: <Home className="w-4 h-4 mr-1" /> },
  { label: 'Schedule', icon: <FileText className="w-4 h-4 mr-1" /> },
  { label: 'Course Setup', icon: <BookOpen className="w-4 h-4 mr-1" /> },
  { label: 'Analytics', icon: <BarChart2 className="w-4 h-4 mr-1" /> },
  { label: 'Notification', icon: <ClipboardList className="w-4 h-4 mr-1" /> },
  { label: 'Message', icon: <ClipboardCheck className="w-4 h-4 mr-1" /> },
  { label: 'Mentor', icon: <Users className="w-4 h-4 mr-1" /> },
];

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

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const courses = [
  {
    id: 1,
    title: "Introduction to Computer Science",
    code: "CS101",
    professor: "Dr. Smith",
    credits: 4,
    status: "In Progress",
    progress: 65,
    grade: "A-",
    lastAccessed: "2 days ago",
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    code: "MATH202",
    professor: "Prof. Johnson",
    credits: 3,
    status: "In Progress",
    progress: 45,
    grade: "B+",
    lastAccessed: "1 day ago",
  },
  {
    id: 3,
    title: "Physics Fundamentals",
    code: "PHYS101",
    professor: "Dr. Lee",
    credits: 4,
    status: "Completed",
    progress: 100,
    grade: "A",
    lastAccessed: "1 week ago",
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    code: "CS401",
    professor: "Dr. Gupta",
    credits: 3,
    status: "In Progress",
    progress: 30,
    grade: "B",
    lastAccessed: "3 days ago",
  },
  {
    id: 5,
    title: "Statistics for Engineers",
    code: "STAT301",
    professor: "Prof. Wilson",
    credits: 3,
    status: "In Progress",
    progress: 55,
    grade: "A-",
    lastAccessed: "Yesterday",
  },
];

const performanceData = [
  { name: 'Completed', value: 2 },
  { name: 'In Progress', value: 3 },
  { name: 'Not Started', value: 0 },
];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [expandedCourse, setExpandedCourse] = useState(null);
  const [showAddCourseForm, setShowAddCourseForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    code: "",
    professor: "",
    credits: 3,
  });

  const toggleCourseExpand = (courseId) => {
    if (expandedCourse === courseId) {
      setExpandedCourse(null);
    } else {
      setExpandedCourse(courseId);
    }
  };

  const handleAddCourse = () => {
    // In a real app, you would add the course to your state/backend here
    setShowAddCourseForm(false);
    setNewCourse({
      title: "",
      code: "",
      professor: "",
      credits: 3,
    });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Home':
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
                  <div className="flex justify-between p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                    <span>Artificial Intelligence</span>
                    <span className="text-purple-700 font-semibold">88/100</span>
                  </div>
                  <div className="flex justify-between p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                    <span>Statistics</span>
                    <span className="text-pink-700 font-semibold">78/100</span>
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

      case 'Schedule':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-6 flex items-center gap-2 text-blue-600">
              <ClipboardList className="w-5 h-5" />
              Full Class Schedule
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="p-3 bg-blue-50 rounded-md border-l-4 border-blue-500 shadow-sm">📘 Monday: <strong>Computer Science, Maths</strong></li>
              <li className="p-3 bg-purple-50 rounded-md border-l-4 border-purple-500 shadow-sm">🔬 Tuesday: <strong>Physics Lab, English</strong></li>
              <li className="p-3 bg-green-50 rounded-md border-l-4 border-green-500 shadow-sm">📐 Wednesday: <strong>Advanced Maths, AI</strong></li>
              <li className="p-3 bg-yellow-50 rounded-md border-l-4 border-yellow-500 shadow-sm">💻 Thursday: <strong>CS Lab, Statistics</strong></li>
              <li className="p-3 bg-pink-50 rounded-md border-l-4 border-pink-500 shadow-sm">📊 Friday: <strong>Seminar & Presentations</strong></li>
            </ul>
          </div>
        );

      case 'Course Setup':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold text-xl flex items-center gap-2 text-indigo-600">
                <BookOpen className="w-6 h-6" />
                My Courses
              </h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowAddCourseForm(!showAddCourseForm)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                >
                  <Bookmark className="w-4 h-4" /> Add Course
                </button>
              </div>
            </div>

            {showAddCourseForm && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-700 mb-3">Add New Course</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newCourse.title}
                      onChange={(e) => setNewCourse({...newCourse, title: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Course Code</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newCourse.code}
                      onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Professor</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newCourse.professor}
                      onChange={(e) => setNewCourse({...newCourse, professor: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      value={newCourse.credits}
                      onChange={(e) => setNewCourse({...newCourse, credits: parseInt(e.target.value)})}
                    >
                      <option value="1">1 Credit</option>
                      <option value="2">2 Credits</option>
                      <option value="3">3 Credits</option>
                      <option value="4">4 Credits</option>
                      <option value="5">5 Credits</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => setShowAddCourseForm(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handleAddCourse}
                    className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700"
                  >
                    Add Course
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="border rounded-lg overflow-hidden shadow-sm">
                  <div 
                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => toggleCourseExpand(course.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        course.status === "Completed" ? "bg-green-500" : "bg-blue-500"
                      }`}></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{course.title}</h4>
                        <p className="text-sm text-gray-500">{course.code} • {course.professor}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        course.status === "Completed" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                      }`}>
                        {course.status}
                      </span>
                      {expandedCourse === course.id ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  {expandedCourse === course.id && (
                    <div className="p-4 bg-gray-50 border-t">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-500">Progress</p>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-blue-600 h-2.5 rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-sm text-gray-700">{course.progress}% complete</p>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-500">Grade</p>
                          <div className="flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-500" />
                            <span className="text-lg font-semibold">{course.grade}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-gray-500">Details</p>
                          <div className="flex gap-4 text-sm">
                            <span className="flex items-center gap-1">
                              <Bookmark className="w-4 h-4 text-gray-400" />
                              {course.credits} credits
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4 text-gray-400" />
                              {course.lastAccessed}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-end gap-2">
                        <button className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                          View Materials
                        </button>
                        <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                          Contact Professor
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'Analytics':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-pink-600">
              <BarChart2 className="w-6 h-6" />
              Performance Analytics
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Overall Performance */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Overall Performance</p>
                    <p className="text-3xl font-bold text-blue-600 mt-2">86%</p>
                    <p className="text-sm text-gray-500 mt-1">Current Semester</p>
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <Award className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Target</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full" 
                      style={{ width: '86%' }}
                    ></div>
                  </div>
                </div>
              </div>
              
              {/* Course Progress */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Course Progress</p>
                    <p className="text-3xl font-bold text-green-600 mt-2">3/5</p>
                    <p className="text-sm text-gray-500 mt-1">Courses in progress</p>
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>
                <div className="mt-4">
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        data={performanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={30}
                        outerRadius={40}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {performanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              {/* Attendance */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-100">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Attendance</p>
                    <p className="text-3xl font-bold text-purple-600 mt-2">85%</p>
                    <p className="text-sm text-gray-500 mt-1">Current Semester</p>
                  </div>
                  <div className="bg-white p-2 rounded-full shadow-sm">
                    <User className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-green-600 font-bold">85%</span>
                    </div>
                    <p className="text-xs mt-1">Present</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-yellow-600 font-bold">10%</span>
                    </div>
                    <p className="text-xs mt-1">Late</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-red-600 font-bold">5%</span>
                    </div>
                    <p className="text-xs mt-1">Absent</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subject-wise Performance */}
            <div className="mb-8">
              <h4 className="font-semibold text-lg mb-4 text-gray-700">Subject-wise Performance</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={resultChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="subject" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Bar dataKey="score" fill="#8884d8" radius={[4, 4, 0, 0]}>
                      {resultChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Weekly Progress */}
            <div>
              <h4 className="font-semibold text-lg mb-4 text-gray-700">Weekly Progress</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={barChartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="present" 
                      stroke="#3B82F6" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                      activeDot={{ r: 6 }} 
                      name="Present %" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="late" 
                      stroke="#FACC15" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                      activeDot={{ r: 6 }} 
                      name="Late %" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="absent" 
                      stroke="#EF4444" 
                      strokeWidth={2} 
                      dot={{ r: 4 }} 
                      activeDot={{ r: 6 }} 
                      name="Absent %" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        );

      case 'Notification':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4 flex items-center gap-2 text-orange-600">
              <Bell className="w-5 h-5" />
              Notifications
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="p-3 rounded-md bg-yellow-50 border-l-4 border-yellow-500 shadow-sm">📣 <strong>Exam Date:</strong> July 10</li>
              <li className="p-3 rounded-md bg-red-50 border-l-4 border-red-500 shadow-sm">🧾 <strong>Fees Due:</strong> June 25</li>
              <li className="p-3 rounded-md bg-blue-50 border-l-4 border-blue-500 shadow-sm">🎓 <strong>AI Lecture:</strong> June 22</li>
            </ul>
          </div>
        );

      case 'Message':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4 flex items-center gap-2 text-green-600">
              <ClipboardCheck className="w-5 h-5" />
              Messages
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="border rounded p-4 bg-gray-50 shadow-sm">
                ✉️ <strong>Prof. Sharma:</strong> Please review the AI assignment before Friday.
              </li>
              <li className="border rounded p-4 bg-gray-50 shadow-sm">
                🎉 <strong>Mentor:</strong> Congrats on your top performance last week!
              </li>
            </ul>
          </div>
        );

      case 'Mentor':
        return (
          <div className="bg-white rounded-lg shadow p-6 mt-6">
            <h3 className="font-semibold text-base mb-4 flex items-center gap-2 text-purple-600">
              <Users className="w-5 h-5" />
              Your Mentor
            </h3>
            <div className="text-sm space-y-3">
              <p>👩‍🏫 <strong>Name:</strong> <span className="text-gray-800">Dr. Aditi Verma</span></p>
              <p>📧 <strong>Email:</strong> <a href="mailto:aditi.verma@campuscore.edu" className="text-blue-600 hover:underline">aditi.verma@campuscore.edu</a></p>
              <p>🕒 <strong>Office Hours:</strong> <span className="text-gray-700">Mon, Wed 3–5 PM</span></p>
            </div>
          </div>
        );

      default:
        return <div className="mt-6 text-sm text-gray-500">Select a tab to see content.</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center py-4">
        <img src={logo} alt="Campus Core" className="h-16" />
        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-700" />
          <User className="w-5 h-5 text-gray-700" />
          <span className="font-medium text-sm md:text-base">Nik</span>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white p-6 mb-6 shadow">
        <h2 className="text-lg font-semibold">Welcome back, Nik!</h2>
        <p className="text-sm">Wednesday, June 18, 2025 | Spring Semester 2025</p>
        <p className="text-sm mt-2">Student ID: S12304566</p>
        <div className="mt-3 text-sm">
          <span className="bg-white text-black px-3 py-1 rounded-full">
            Next Class: <b>Advanced Mathematics</b> in Just 45 minutes
          </span>
        </div>
      </div>

      {/* Tabs */}
      <nav className="flex flex-wrap justify-center gap-2 md:gap-6 bg-white p-3 rounded-lg shadow">
        {tabs.map(({ label, icon }) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={`flex items-center px-3 py-2 rounded-full text-sm md:text-base transition-all ${
              activeTab === label
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-800 hover:bg-gray-100'
            }`}
          >
            {icon} {label}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default StudentDashboard;