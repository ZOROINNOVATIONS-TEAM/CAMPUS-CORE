
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import StudentHome from "./pages/StudentHome";
import FacultyHome from "./pages/FacultyHome";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotificationPage from "./pages/NotificationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route
        path="/student"
        element={
          <ProtectedRoute role="Student">
            
            <StudentHome />
            
          </ProtectedRoute>
        }
      />
       <Route
        path="/notifications"
        element={
          <ProtectedRoute role="Student">
            <NotificationPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/faculty"
        element={
          <ProtectedRoute role="Faculty">
            <FacultyHome />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <AdminHome />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
