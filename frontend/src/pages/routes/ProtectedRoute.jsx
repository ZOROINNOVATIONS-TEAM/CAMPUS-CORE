import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ chiildren }) {

    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? chiildren : <Navigate to="/login" replace />;

}