import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { format, differenceInMinutes } from "date-fns";

export function WelcomeBanner({ studentName = "Dev", studentId = "ST2023456" }) {
  const today = format(new Date(), "EEEE, MMMM d, yyyy");

  const [nextClass, setNextClass] = useState(null);

  // Mock async func
  async function fetchNextClass() {
    await new Promise((r) => setTimeout(r, 500)); 

    const schedule = [
      { name: "Advanced Mathematics", startTime: new Date(new Date().setHours(10, 30)) },
      { name: "Physics Lab", startTime: new Date(new Date().setHours(14, 0)) },
    ];

    const now = new Date();

    const upcoming = schedule.find((cls) => cls.startTime > now);

    if (upcoming) {
      const minutesLeft = differenceInMinutes(upcoming.startTime, now);
      setNextClass({
        name: upcoming.name,
        minutesLeft,
      });
    } else {
      setNextClass(null);
    }
  }

  useEffect(() => {
    fetchNextClass();
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-2xl text-white p-4 sm:p-6 md:p-8 shadow-sm">
      <style>{`
        @keyframes pulse-bg {
          0%, 100% {
            background-color: rgba(255 255 255 / 0.15);
          }
          50% {
            background-color: rgba(255 255 255 / 0.3);
          }
        }
        .animate-pulse-bg {
          animation: pulse-bg 3s ease-in-out infinite;
        }
      `}</style>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Welcome back, {studentName}!
          </h1>
          <p className="text-xs sm:text-sm md:text-base mt-1">{today} | Spring Semester 2025</p>
          <p className="text-xs sm:text-sm md:text-base mt-1">Student ID: {studentId}</p>
        </div>

        {/* Right Section - Next Class */}
        <div className="bg-white/15 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-white text-xs sm:text-sm md:text-base text-center md:text-right w-full md:w-auto animate-pulse-bg">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3">
            <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="font-medium">Next Class</p>
              {nextClass ? (
                <>
                  <p>{nextClass.name}</p>
                  <p>in {nextClass.minutesLeft} minutes</p>
                </>
              ) : (
                <p>No more classes today</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
