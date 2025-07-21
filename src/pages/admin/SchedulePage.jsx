// src/pages/admin/SchedulePage.jsx
import React, { useState } from "react";
import { AdminTopBar, AdminBannerAndTabs } from "../../components/dashboard/admin/AdminHeader";
import UpcomingEventsCard from "../../components/dashboard/admin/UpcomingEventsCard"; // Reuse existing component
import EventCalendar from "@/components/dashboard/student/event/EventCalendar";

// Sample weekly data (expand with real data/API)
const weeklySchedule = [
  { day: "Monday", events: ["Team Meeting", "Project Kickoff"] },
  { day: "Tuesday", events: ["Client Review", "Training Session"] },
  { day: "Wednesday", events: ["Workshop", "Feedback Meeting"] },
  { day: "Thursday", events: ["Code Review", "Planning"] },
  { day: "Friday", events: ["Demo Day", "Wrap-up"] },
];

const SchedulePage = () => {
  const [selectedDay, setSelectedDay] = useState("Today"); // State for day selection

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-stone-900 text-gray-900 dark:text-gray-900">
      {/* Sticky top bar */}
      <AdminTopBar />

      {/* Scrollable banner and tabs */}
      <AdminBannerAndTabs />

      {/* Schedule content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Weekly Overview */}
        <div className="bg-red-50 dark:bg-gray-600 rounded-xl shadow p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Weekly Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {weeklySchedule.map((day, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition ${selectedDay === day.day ? "bg-blue-100 dark:bg-blue-700" : "bg-gray-100 dark:bg-gray-700"}`}
                onClick={() => setSelectedDay(day.day)}
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{day.day}</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-900">
                  {day.events.map((event, i) => (
                    <li key={i}>{event}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

            <EventCalendar/>

            
        {/* Detailed View (reusing TodaySchedule for "Today") */}
        <div className="bg-white dark:bg-gray-600 rounded-xl shadow p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-300">{selectedDay}'s Schedule</h2>
          {selectedDay === "Today" ? (
            <UpcomingEventsCard/> // Reuse your existing component
          ) : (
            <p className="text-gray-600 dark:text-gray-300">Detailed schedule for {selectedDay} (add custom logic here).</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default SchedulePage;
