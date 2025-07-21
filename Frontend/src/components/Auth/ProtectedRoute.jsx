import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/v1/user_info", {
                    withCredentials: true,
                });

                const userType = res.data?.type;

                if (allowedRoles.includes(userType)) {
                    localStorage.setItem("role", userType);
                    setAuthorized(true);
                } else {
                    setAuthorized(false);
                }
            } catch (err) {
                console.error("Auth check failed:", err);
                setAuthorized(false);
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [allowedRoles]);

    if (loading) return <div className="text-center mt-10">Checking authentication...</div>;

    return authorized ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
