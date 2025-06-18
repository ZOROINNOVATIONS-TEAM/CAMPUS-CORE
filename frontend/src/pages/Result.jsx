import React from "react";
import OverallPerformance from "../components/Result/OverallPerformance";
import SubjectResults from "../components/Result/SubjectResults";
import AssignmentResults from "../components/Result/AssignmentResults";
import CGPAChart from "../components/Result/CGPAChart";
import Topbar from "../components/AdminDashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";

const Result = () => {
  return (
    <div className="min-h-screen bg-[#1a1d29] p-8 text-white">
      <Topbar/>
      <div className="mt-6 mb-6"><WelcomeCard/></div>
   
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          <OverallPerformance />
          <SubjectResults />
        </div>
        <div className="space-y-6">
          <AssignmentResults />
          <CGPAChart />
        </div>
      </div>
    </div>
  );
};

export default Result;
