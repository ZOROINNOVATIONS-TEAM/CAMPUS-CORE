import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, allowedRoles, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};


export default ProtectedRoute;


