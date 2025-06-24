import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import AnalyticsOverviewCard from "./AnalyticsOverviewCard";
import TopCoursesCard from "./TopCoursesCard";
import AttendanceTrendsCard from "./AttendanceTrendsCard";
import PerformanceTrendsCard from "./PerformanceTrendsCard";
import KeyInsightsCard from "./KeyInsightsCard";

// Animated number for stat cards
import { useEffect, useState } from "react";
function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ""), 10);
    if (isNaN(end)) return;
    let increment = Math.ceil(end / 50);
    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      setDisplay(current);
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
    <div className="w-full">
      {/* Print Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Print Analytics
        </button>
      </div>

      {/* Main Dashboard Content */}
      <div ref={printRef} className="flex flex-col gap-6 lg:gap-8">
        {/* Overview */}
        <AnalyticsOverviewCard AnimatedNumber={AnimatedNumber} />

        {/* Main grid: trends + right panel */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Trends (left 2/3 on desktop) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AttendanceTrendsCard />
              <PerformanceTrendsCard />
            </div>
          </div>
          {/* Side panel (right 1/3) */}
          <div className="flex flex-col gap-6">
            <TopCoursesCard />
            <KeyInsightsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
