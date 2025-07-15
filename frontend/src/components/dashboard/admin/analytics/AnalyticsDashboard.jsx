import { useRef, useEffect, useState } from "react";
import { useReactToPrint } from "react-to-print";

import AnalyticsOverviewCard from "./AnalyticsOverviewCard";
import TopCoursesCard from "./TopCoursesCard";
import AttendanceTrendsCard from "./AttendanceTrendsCard";
import PerformanceTrendsCard from "./PerformanceTrendsCard";
import KeyInsightsCard from "./KeyInsightsCard";

// Animated count-up number component
function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const end = parseInt(value.toString().replace(/,/g, ""), 10);
    if (isNaN(end)) return;

    let current = 0;
    const increment = Math.ceil(end / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(current);
      }
    }, 12);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{display.toLocaleString()}</span>;
}

export default function AnalyticsDashboard() {
  const printRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "CampusCore_Analytics",
  });

  return (
    <div className="w-full dark:bg-gray-950 dark:text-white">
      {/* Print Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Print Analytics
        </button>
      </div>

      {/* Dashboard Content */}
      <div ref={printRef} className="flex flex-col gap-6 lg:gap-8 print:bg-white print:text-black">
        {/* Overview Section */}
        <AnalyticsOverviewCard AnimatedNumber={AnimatedNumber} />

        {/* Trends & Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Trends (Attendance + Performance) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AttendanceTrendsCard />
              <PerformanceTrendsCard />
            </div>
          </div>

          {/* Side Panel: Top Courses & Insights */}
          <div className="flex flex-col gap-6">
            <TopCoursesCard />
            <KeyInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
