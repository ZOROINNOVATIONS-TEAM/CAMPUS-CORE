import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../../pages/StudentDashboard";
import { AuthProvider } from "./context/AuthProvider";
import StudentDashboard from "../../pages/StudentDashboard";

test("redirects to login when user is not authenticated", () => {
  render(
    <AuthProvider>
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route
            path="/studentdashboard"
            element={
              <ProtectedRoute user={null}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/home" element={<div>Login Page</div>} />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  // Check if you are redirected to login (or see login page content)
  expect(screen.queryByText("Dashboard")).not.toBeInTheDocument();
  // Optionally, check for login page content if you render it
});

test("shows dashboard when user is authenticated", () => {
  const mockUser = { name: "Test User", role: "user" };

  render(
    <AuthProvider>
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Routes>
          <Route
            path="/Studentdashboard"
            element={
              <ProtectedRoute user={mockUser}>
                <StudentDashboardDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MemoryRouter>
    </AuthProvider>
  );

  // Check if dashboard content is visible
  expect(screen.getByText("Dashboard")).toBeInTheDocument();
});
