// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRegisterPage from "./pages/AdminRegisterPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin/home" element={<AdminHome />} />
        </Route>
        <Route path="*" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
}
