import React from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";

// You may want to pass these props or fetch them dynamically
const userName = "Dev";
const dateStr = "Wednesday, June 11, 2025 | Spring Semester 2025";
const studentId = "Student ID: ST2023656";
const nextClass = {
  name: "Advanced Mathematics",
  time: "in 45 minutes",
};

const StudentWelcomeBanner = () => {
  return (
    <div className="w-full flex justify-center pt-4 pb-6 bg-[#ededed]">
      <div className="w-full max-w-[1200px]">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between
            rounded-xl px-8 py-6"
          style={{
            background: "linear-gradient(90deg, #5B8DF6 0%, #8766D6 100%)",
          }}
        >
          {/* Left Section */}
          <div className="text-white">
            <h2 className="text-lg font-semibold mb-1">Welcome back, {userName}!</h2>
            <div className="text-sm opacity-90">{dateStr}</div>
            <div className="text-xs mt-1 opacity-80">{studentId}</div>
          </div>
          {/* Right Section */}
          <div className="flex items-center mt-4 md:mt-0 md:ml-8">
            <div className="bg-white/20 rounded-lg px-5 py-3 flex items-center gap-3">
              <CalendarIcon className="w-7 h-7 text-white opacity-90" />
              <div>
                <div className="text-xs text-white/80 font-medium">Next Class</div>
                <div className="text-sm text-white font-semibold">
                  {nextClass.name}
                </div>
                <div className="text-xs text-white/80">{nextClass.time}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentWelcomeBanner;