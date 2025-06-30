import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/auth/Home";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminRegister from "./pages/admin/AdminRegister";
import ForgotPassword from './pages/auth/ForgotPassword';
import AuthPage from './components/auth/AuthPage';
import Dashboard from "./pages/student/StudentDashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import ResultsPage from './pages/student/ResultsPage';
import { useAuth } from "./hooks/useAuth";
import Unauthorized from "./pages/auth/Unauthorized";
import Students from "./pages/admin/Students";


function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/admin/students" element={<Students />} />
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

