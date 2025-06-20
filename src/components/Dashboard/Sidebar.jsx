import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate, faCalendarAlt, faBook, faChartBar,
  faUser, faBell, faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-16 md:w-64 bg-blue-800 text-white flex flex-col items-center md:items-start p-4">
      <div className="mb-8 mt-4 font-bold text-xl hidden md:block">Smart Campus</div>
      <nav className="w-full space-y-4">
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faUserGraduate} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Home</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faCalendarAlt} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Schedule</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Courses</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faChartBar} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Analytics</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faUser} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Mentor</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faBell} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Notifications</span>
        </a>
        <a href="#" className="flex items-center p-2 rounded hover:bg-blue-700">
          <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
          <span className="ml-2 hidden md:inline">Messages</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

