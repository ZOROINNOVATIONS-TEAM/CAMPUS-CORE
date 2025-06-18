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
} from 'lucide-react';
import logo from '../assets/images/logo.png';
import HomeTab from './Components/HomeTab';
import ScheduleTab from './Components/ScheduleTab ';
import CourseSetupTab from './Components/CourseSetupTab';
import ResultTab from './Components/ResultTab';
import FeesTab from './Components/FeesTab';
import OtherTab from './Components/OtherTab';
import MentorTab from './Components/MentorTab';

// Import components


const tabs = [
  { label: 'Home', icon: <Home className="w-4 h-4 mr-1" />, component: <HomeTab /> },
  { label: 'Schedule', icon: <FileText className="w-4 h-4 mr-1" />, component: <ScheduleTab /> },
  { label: 'Course Setup', icon: <BookOpen className="w-4 h-4 mr-1" />, component: <CourseSetupTab /> },
  { label: 'Result', icon: <BarChart2 className="w-4 h-4 mr-1" />, component: <ResultTab /> },
  { label: 'Fees', icon: <ClipboardList className="w-4 h-4 mr-1" />, component: <FeesTab /> },
  { label: 'Other', icon: <ClipboardCheck className="w-4 h-4 mr-1" />, component: <OtherTab /> },
  { label: 'Mentor', icon: <Users className="w-4 h-4 mr-1" />, component: <MentorTab /> },

];

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderTabContent = () => {
    const tab = tabs.find(tab => tab.label === activeTab);
    return tab ? tab.component : <div className="mt-6 text-sm text-gray-500">Select a tab to see content.</div>;
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