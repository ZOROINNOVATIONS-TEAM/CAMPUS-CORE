import React from "react";
import OverallPerformance from "../components/Result/OverallPerformance";
import SubjectResults from "../components/Result/SubjectResults";
import AssignmentResults from "../components/Result/AssignmentResults";
import CGPAChart from "../components/Result/CGPAChart";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import Menu from "../components/dashboard/Menu";

const Result = () => {
  return (
    <div className="bg-gray-100 text-black min-h-screen mt-6">
      <Topbar/>
      <div className="mt-6 mb-6"><WelcomeCard/></div>
           <Menu/>
   
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
