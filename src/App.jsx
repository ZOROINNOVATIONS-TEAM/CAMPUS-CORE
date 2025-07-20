import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/auth/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminMapPage from "./pages/admin/AdminMapPage";
import AdminRegister from "./pages/admin/AdminRegister";
import ForgotPassword from './pages/auth/ForgotPassword';
import AuthPage from './components/auth/AuthPage';
import AdminFeesPage from "./pages/admin/AdminFeesPage";
import Dashboard from "./pages/student/StudentDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import FacultyGradingPage from "./pages/faculty/FacultyGradingPage";
import ResultsPage from './pages/student/ResultsPage';
import SchedulePage from "./pages/admin/SchedulePage";
import FacultyExamPage from "./pages/faculty/FacultyExamPage";
import CourseSetupPage from "./pages/admin/CourseSetupPage";
import { useAuth } from "./hooks/useAuth";
import Unauthorized from "./pages/auth/Unauthorized";
import Students from "./pages/admin/Students";
import FeedbackManagement from './components/dashboard/student/FeedbackManagement'; 
import CourseCard from './components/dashboard/faculty/CourseCard';
import FacultyCourseSetup from "./pages/faculty/FacultyCourseSetup";
import AdminAnalytics from "./pages/admin/AdminAnalytics"
import FacultyAssignmentsPage from "./pages/faculty/FacultyAssignmentsPage"

function App() {
  const { user } = useAuth();
 

  return (
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/admin/analytics" element={<AdminAnalytics />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/admin/fees" element={<AdminFeesPage />} />
      <Route path="/admin/schedule" element={<SchedulePage />} />
      <Route path="/admin/map" element={<AdminMapPage />} />
      <Route path="/admin/students" element={<Students />} />
      <Route path="/feedback" element={<FeedbackManagement />} />
      <Route path="/admin/course-setup" element={<CourseSetupPage />} />
      <Route path="/faculty/course-setup" element={<FacultyCourseSetup />} />
      <Route path="/faculty/exam" element={<FacultyExamPage />} />
      <Route path="/faculty/grading" element={<FacultyGradingPage />} />
      <Route path="/faculty/assignment" element={<FacultyAssignmentsPage />} />
      <Route
        path="/facultydashboard"
        element={
          <ProtectedRoute user={user} allowedRoles={['faculty']} redirectPath="/">
            <FacultyDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute user={user} allowedRoles={['student']} redirectPath="/">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute user={user} allowedRoles={["admin"]} redirectPath="/admin/login">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;

