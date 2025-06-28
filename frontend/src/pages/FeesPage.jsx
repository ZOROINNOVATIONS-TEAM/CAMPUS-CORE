import React from "react";
import FeesOverview from "../components/fees/FeesOverview";
import QuickPay from "../components/fees/QuickPay";
import UpcomingDues from "../components/fees/UpcomingDues";
import HelpSupport from "../components/fees/HelpSupport";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import Menu from "../components/dashboard/Menu";
import NotificationBell from "../components/NotificationBell";

export default function FeesPage() {
  return (
    <div className="bg-gray-100 text-black min-h-screen mt-6">
   
      <Topbar />

      <div className="p-4 space-y-6">
        <WelcomeCard />
        <Menu />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <FeesOverview />
            <UpcomingDues />
          </div>
          <div className="space-y-6">
            <QuickPay />
            <HelpSupport />
          </div>
        </div>
      </div>
    </div>
  );
}
