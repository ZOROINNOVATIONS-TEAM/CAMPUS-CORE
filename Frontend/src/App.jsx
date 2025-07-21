import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./index.css";

function App() {

    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        if (darkMode) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <div className="min-h-screen transition-colors duration-300 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
            <Routes>
                <Route path="/" element={<UserLogin darkMode={darkMode} setDarkMode={setDarkMode} />} />
                <Route path="/admin" element={<AdminLogin darkMode={darkMode} setDarkMode={setDarkMode} />} />
                <Route
                    path="/studentdashboard"
                    element={
                        <ProtectedRoute allowedRoles={["Student"]}>
                            <StudentDashboard darkMode={darkMode} setDarkMode={setDarkMode} />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/facultydashboard"
                    element={
                        <ProtectedRoute allowedRoles={["Faculty"]}>
                            <FacultyDashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/adminboard"
                    element={
                        <ProtectedRoute allowedRoles={["Admin"]}>
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;