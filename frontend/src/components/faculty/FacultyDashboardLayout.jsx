import React, { useState } from 'react';
import {
  HomeIcon,
  CalendarIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { FaBookOpen, FaClipboardList, FaChartBar, FaRegFileAlt, FaBriefcase } from 'react-icons/fa';
import { PiStudentFill } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';
import FacultyHeader from './FacultyHeader';
// import FacultyNavigation from './FacultyNavigation';
import FacultyWelcomeBanner from './FacultyWelcomeBanner';

const facultyNavigationItems = [
  { name: 'Home', icon: HomeIcon, href: '/faculty/dashboard/home' },
  { name: 'Exam', icon: FaClipboardList, href: '/faculty/dashboard/exam' },
  { name: 'Course Setup', icon: FaBookOpen, href: '/faculty/dashboard/courses' },
  { name: 'Grading', icon: FaChartBar, href: '/faculty/dashboard/grading' },
  { name: 'Assignment', icon: FaRegFileAlt, href: '/faculty/dashboard/assignment' },
  { name: 'Duties', icon: FaBriefcase, href: '/faculty/dashboard/duties' },
  { name: 'Mentor', icon: UserGroupIcon, href: '/faculty/dashboard/mentor' },
];

const FacultyDashboardLayout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="min-h-screen bg-[#ededed]">
      {/* You can add a FacultyHeader and FacultyWelcomeBanner here if you have them */}
      <FacultyHeader />
      <FacultyWelcomeBanner />
      {/* <FacultyNavigation /> */}

      {/* Faculty Navbar (Desktop & Mobile) */}
      <nav className="w-full flex justify-center py-6 bg-[#ededed]">
        <div className="w-full max-w-[1200px]">
          {/* Desktop Navbar */}
          <div className="hidden lg:flex justify-between bg-white rounded-2xl px-6 py-5 shadow-sm">
            {facultyNavigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-2 min-w-[120px] cursor-pointer group transition
                    ${isActive ? "text-blue-700 font-semibold" : "text-gray-800 font-medium hover:text-blue-700"}
                  `}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Use item.icon as a component */}
                  <item.icon className={`h-6 w-6 ${isActive ? 'text-blue-700' : ''}`} />
                  <span
                    className={`text-base ${isActive ? "text-blue-700 font-semibold" : "group-hover:text-blue-700"
                      }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex justify-end px-2">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
              {menuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden flex flex-col bg-white rounded-2xl mt-2 px-4 py-4 shadow space-y-2">
              {facultyNavigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-2 py-3 rounded-md transition
                      ${isActive ? "text-blue-700 font-semibold bg-blue-50" : "text-gray-800 hover:text-blue-700"}
                    `}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    <item.icon className={`h-6 w-6 ${isActive ? 'text-blue-700' : ''}`} />
                    <span className="text-base">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default FacultyDashboardLayout;