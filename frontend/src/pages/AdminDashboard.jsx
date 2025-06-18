import React from "react";
import Topbar from "../components/AdminDashboard/Topbar";
import Header from "../components/AdminDashboard/Header";
import Navbar from "../components/AdminDashboard/Navbar";
import CourseStats from "../components/AdminDashboard/CourseStats";
import CourseGrid from "../components/AdminDashboard/CourseGrid";

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Topbar/>
      <Header />
      <Navbar />
      <CourseStats />
      <CourseGrid />
    </div>
  );
};

export default AdminDashboard;
