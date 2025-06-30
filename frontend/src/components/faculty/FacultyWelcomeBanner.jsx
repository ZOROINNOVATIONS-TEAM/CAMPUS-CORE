import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function WelcomeBanner({
  name = "Dr.kab",
  date = "Friday, June 13, 2025",
  semester = "Spring Semester 2025",
  facultyId = "Ft10529",
  nextClass = {
    title: "Advanced Mathematics",
    timeToClass: 45, // in minutes
  },
}) {
  return (
    <div className="w-full flex justify-center bg-[#f1f1f1] py-8">
      <div className="w-full max-w-[1200px]">
        <div className="bg-gradient-to-r from-[#5392f9] to-[#7277d6] rounded-2xl flex items-center justify-between px-10 py-8 min-h-[150px]">
          {/* Left Side: Welcome Info */}
          <div className="text-white">
            <div className="text-2xl md:text-3xl font-bold mb-2">
              Welcome,
              <span className="ml-1">{name}</span>
            </div>
            <div className="text-base md:text-lg mb-2 opacity-90">
              {date} | {semester}
            </div>
            <div className="text-base opacity-80">
              Faculty ID: {facultyId}
            </div>
          </div>
          {/* Right Side: Next Class Info */}
          <div className="flex-shrink-0">
            <div className="bg-white bg-opacity-20 rounded-xl px-8 py-6 flex items-center gap-4 min-w-[270px]">
              <FaRegCalendarAlt className="text-4xl text-white opacity-90" />
              <div className="text-white text-base md:text-lg">
                <div className="font-semibold">Next Class</div>
                <div>{nextClass.title}</div>
                <div className="text-sm opacity-90">
                  in {nextClass.timeToClass} minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}