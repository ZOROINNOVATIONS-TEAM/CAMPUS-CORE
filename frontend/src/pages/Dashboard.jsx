import React from "react";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import IconMenu from "../components/dashboard/Menu";
import AttendanceSummary from "../components/dashboard/AttendanceSummary";
import RecentResults from "../components/dashboard/RecentResults";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Topbar />

      <div className="px-8 py-6 space-y-6">
        <WelcomeCard />
        <IconMenu />

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3">
            <AttendanceSummary />
          </div>
          <div className="w-full lg:w-1/3">
            <RecentResults />
          </div>
        </div>
      </div>
    </div>
  );
}
