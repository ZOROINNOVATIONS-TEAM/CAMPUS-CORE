import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import { format, differenceInMinutes } from "date-fns";

export default function FacultyWelcomeBanner({
  facultyName = "Dr. Smith",
  facultyId = "F1023456",
}) {
  const today = format(new Date(), "EEEE, MMMM d, yyyy");
  const [nextLecture, setNextLecture] = useState(null);

  useEffect(() => {
    async function fetchNextLecture() {
      await new Promise((r) => setTimeout(r, 500));

      const lectures = [
        { name: "Data Structures - CS201", startTime: new Date(new Date().setHours(9, 0)) },
        { name: "Mentoring Session", startTime: new Date(new Date().setHours(13, 30)) },
      ];

      const now = new Date();
      const upcoming = lectures.find((lec) => lec.startTime > now);

      if (upcoming) {
        const minutesLeft = differenceInMinutes(upcoming.startTime, now);
        setNextLecture({ name: upcoming.name, minutesLeft });
      } else {
        setNextLecture(null);
      }
    }

    fetchNextLecture();
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 dark:from-blue-700 dark:via-indigo-700 dark:to-violet-800 rounded-2xl text-white p-4 sm:p-6 md:p-8 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Welcome back, {facultyName}!
          </h1>
          <p className="text-xs sm:text-sm md:text-base mt-1">{today} | Spring Semester 2025</p>
          <p className="text-xs sm:text-sm md:text-base mt-1">Faculty ID: {facultyId}</p>
        </div>

        <div className="bg-white/20 dark:bg-white/10 px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-xs sm:text-sm md:text-base text-center md:text-right w-full md:w-auto animate-pulse">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-3">
            <CalendarDays className="w-5 h-5 sm:w-6 sm:h-6" />
            <div>
              <p className="font-medium">Upcoming Lecture</p>
              {nextLecture ? (
                <>
                  <p>{nextLecture.name}</p>
                  <p>in {nextLecture.minutesLeft} minutes</p>
                </>
              ) : (
                <p>No more lectures today</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
