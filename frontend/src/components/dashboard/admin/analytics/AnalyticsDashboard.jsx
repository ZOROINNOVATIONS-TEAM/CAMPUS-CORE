// src/components/dashboard/admin/analytics/AnalyticsDashboard.jsx
import AnalyticsOverviewCard from "./AnalyticsOverviewCard";
import TopCoursesCard from "./TopCoursesCard";
import AttendanceTrendsCard from "./AttendanceTrendsCard";
import PerformanceTrendsCard from "./PerformanceTrendsCard";
import KeyInsightsCard from "./KeyInsightsCard";

export default function AnalyticsDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 flex flex-col gap-8">
        <AnalyticsOverviewCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AttendanceTrendsCard />
          <PerformanceTrendsCard />
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <TopCoursesCard />
        <KeyInsightsCard />
      </div>
    </div>
  );
}
