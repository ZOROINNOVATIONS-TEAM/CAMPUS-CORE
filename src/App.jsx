import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import ForgotPassword from './pages/ForgotPassword';
import AuthPage from './components/auth/AuthPage';
import Dashboard from "./pages/StudentDashboard.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import FacultyDashboard from "./pages/FacultyDashboard.jsx";
import { useAuth } from "./hooks/useAuth.js";
import Unauthorized from "./pages/Unauthorized";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
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
        path="/admindashboard"
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

