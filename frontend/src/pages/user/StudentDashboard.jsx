import React, { useState } from "react";
import { TopNavigation } from "../../components/dashboard/TopNavigation";
import { WelcomeBanner } from "../../components/dashboard/student/WelcomeBanner";
import { NavTabs } from "../../components/dashboard/student/NavTabs";
import { AttendanceSummary } from "../../components/dashboard/student/AttendanceSummary";
import { TodaySchedule } from "../../components/dashboard/student/TodaySchedule";
import { RecentResults } from "../../components/dashboard/student/RecentResults";
import { Announcements } from "../../components/dashboard/student/Announcements";
import CourseSetup from "../../components/dashboard/student/course/CourseSetup"; 
import Mentoring from "../../components/dashboard/student/Mentoring";
import FeesPage from "../../components/dashboard/student/fees/FeesPage";
import ResultsPage from "../../components/dashboard/student/results/ResultsPage";
import EventPage from "../../components/dashboard/student/EventPage";

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />

      <div className="px-4 py-4 md:px-10 md:py-6">
        <section id="top" className="min-h-[50vh] p-4 md:p-6 bg-gray-50">
          <WelcomeBanner studentName="Shi" studentId="ST2023456" />

          <NavTabs activeTab={activeTab} onChange={setActiveTab} />

        
          {activeTab === "dashboard" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="space-y-6 md:col-span-2">
                  <AttendanceSummary />
                  <section id="schedule">
                    <TodaySchedule />
                  </section>
                </div>

                <div className="space-y-6">
                  <RecentResults />
                  <section id="announcements">
                    <Announcements />
                  </section>
                </div>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <TodaySchedule />
            </div>
          )}

          {activeTab === "results" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <ResultsPage />
            </div>
          )}

          {activeTab === "courses" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <CourseSetup />
            </div>
          )}

          {activeTab === "events" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <EventPage />
            </div>
          )}

          {activeTab === "mentoring" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <Mentoring />
            </div>
          )}
          {activeTab === "fees" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <FeesPage />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
