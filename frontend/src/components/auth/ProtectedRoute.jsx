import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuthenticated = true; // <=== hardcoded for now
  return isAuthenticated ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
