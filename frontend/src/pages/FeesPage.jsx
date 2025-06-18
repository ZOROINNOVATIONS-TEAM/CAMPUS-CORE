import React from "react";
import FeesOverview from "../components/fees/FeesOverview";
import QuickPay from "../components/fees/QuickPay";
import UpcomingDues from "../components/fees/UpcomingDues";
import HelpSupport from "../components/fees/HelpSupport";
import Topbar from "../components/AdminDashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";

export default function FeesPage() {
  return (
  

    <div className="bg-gray-900 min-h-screen text-white p-6 space-y-6">
         <Topbar/>
         <WelcomeCard/>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
         
          <FeesOverview />
        </div>
        <QuickPay />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <UpcomingDues />
        </div>
        <HelpSupport />
      </div>
    </div>
  );
}