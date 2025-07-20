// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   // Check if user is authenticated (from localStorage)
//   const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
//   return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
// };

// export default ProtectedRoute;
import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user || user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
}
