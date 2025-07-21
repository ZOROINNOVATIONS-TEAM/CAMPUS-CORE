import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TopNavigation } from '@/components/dashboard/student/TopNavigation.jsx';
import { Sidebar } from '@/components/dashboard/student/Sidebar.jsx';
import { WelcomeBanner } from "@/components/dashboard/student/WelcomeBanner.jsx";
import { AttendanceSummary } from "@/components/dashboard/student/AttendanceSummary.jsx";
import { TodaySchedule } from "@/components/dashboard/student/TodaySchedule.jsx";
import { RecentResults } from "@/components/dashboard/student/RecentResults.jsx";
import { Announcements } from "@/components/dashboard/student/Announcements.jsx";
import { MiniCalendar } from "@/components/dashboard/student/MiniCalendar.jsx";
import { QuickLinks } from "@/components/dashboard/student/QuickLinks.jsx";
import CourseSetup  from "@/components/dashboard/student/CourseSetup.jsx";
import  Mentoring  from "@/components/dashboard/student/Mentoring.jsx";
import  CampusMap  from "./CampusMap.jsx";
import FeesPage from "@/pages/student/FeesPage.jsx";
import  ResultsPage  from "./ResultsPage.jsx";
import EventPage from "./EventPage.jsx";
import FeedbackManagement from '@/components/dashboard/student/FeedbackManagement'; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen flex ${isDark ? "bg-stone-500 text-black-900" : "bg-gray-100 text-zinc-900"}`}>
      {/* Sidebar for navigation */}
      <Sidebar activeTab={activeTab} onChange={setActiveTab} />
      <div className="flex-1 overflow-auto">
        {/* Optional: Keep TopNavigation for branding/logout, or remove it */}
        <TopNavigation isDark={isDark} setIsDark={setIsDark} />
        <div className="px-4 py-4 md:px-10 md:py-6">
          {/* Welcome banner */}
          <WelcomeBanner studentName="San" studentId="ST2023456" />
          
          {/* Main content */}
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                  <div className="md:col-span-2 space-y-6">
                    <AttendanceSummary isDark={isDark} />
                    <TodaySchedule isDark={isDark} />
                  </div>
                  <div className="space-y-6">
                    <RecentResults isDark={isDark} />
                    <MiniCalendar isDark={isDark} />
                    <Announcements isDark={isDark} />
                    <QuickLinks isDark={isDark} />
                  </div>
                </div>
              </motion.div>
            )}
            {activeTab === "schedule" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <TodaySchedule isDark={isDark} />
              </motion.div>
            )}
            {activeTab === "results" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <ResultsPage isDark={isDark} />
              </motion.div>
            )}
            {activeTab === "courses" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <CourseSetup isDark={isDark} />
              </motion.div>
            )}
            {activeTab === "events" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <EventPage isDark={isDark} />
              </motion.div>
            )}
            {activeTab === "mentoring" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <Mentoring isDark={isDark} />
              </motion.div>
            )}
            {activeTab === "fees" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="p-4 sm:p-6 lg:p-8"
              >
                <FeesPage isDark={isDark} />
              </motion.div>
            )}
                  {activeTab === "map" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 sm:p-6 lg:p-8"
          >
            <CampusMap isDark={isDark} />
          </motion.div>
        )}

              {activeTab === "feedback" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-4 sm:p-6 lg:p-8"
          >
            <FeedbackManagement isDark={isDark} />
          </motion.div>
        )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

