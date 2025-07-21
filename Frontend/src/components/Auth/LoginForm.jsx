import { useState, useEffect } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const LoginForm = ({ role, mode, setMode }) => {
    const [formData, setFormData] = useState({
        identifier: "",
        password: "",
    });

    const labelMap = {
        student: "Student ID or Email",
        faculty: "Faculty ID or Email",
    };

    const placeholderMap = {
        student: "Enter your student ID or email",
        faculty: "Enter your faculty ID or email",
    };

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [loginMessage, setLoginMessage] = useState("");

    useEffect(() => {
        setFormData({ identifier: "", password: "" });
        setRememberMe(false);
        setLoginMessage("");
    }, [mode, role]);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{5,}$/;
        return regex.test(password);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.identifier || !formData.password) {
            setLoginMessage("Please fill all fields.");
            return;
        }

        if (!validatePassword(formData.password)) {
            setLoginMessage("Password must be at least 5 characters and include letters, numbers, and symbols.");
            return;
        }

        setIsSubmitting(true);
        setLoginMessage("Logging in...");

        try {
            // Simulate API call
            await new Promise((res) => setTimeout(res, 1500));

            localStorage.setItem("token", "mock-token");
            localStorage.setItem("role", role.charAt(0).toUpperCase() + role.slice(1));

            setLoginMessage("Login Successful ✅");

            setTimeout(() => {
                if (role === "student") {
                    window.location.assign("/studentdashboard");
                } else if (role === "faculty") {
                    window.location.assign("/facultydashboard");
                }
            }, 1000);
        } catch (err) {
            setLoginMessage("Login failed. Try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
            <label className="block mb-2 text-sm">{labelMap[role]}</label>
            <div className="relative mb-4">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleInputChange}
                    placeholder={placeholderMap[role]}
                    className="w-full pl-10 py-2 border rounded focus:outline-none"
                />
            </div>

            <div className="flex justify-between items-center mb-2">
                <label className="text-sm">Password</label>
                {mode === "login" && (
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                )}
            </div>

            <div className="relative mb-4">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none"
                />
                <div
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    onClick={togglePasswordVisibility}
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
            </div>

            {mode === "login" && (
                <div className="flex items-center mb-4">
                    <input
                        type="checkbox"
                        id="rememberMe"
                        checked={rememberMe}
                        onChange={handleCheckboxChange}
                        className="mr-2 cursor-pointer"
                    />
                    <label htmlFor="rememberMe" className="text-sm">
                        Remember Me
                    </label>
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-60"
            >
                {isSubmitting ? loginMessage : mode === "login" ? "Login" : "Register"}
            </button>

            {loginMessage && !isSubmitting && (
                <p className={`text-sm mt-3 ${loginMessage.includes("Successful") ? "text-green-600" : "text-red-500"}`}>
                    {loginMessage}
                </p>
            )}
        </form>
    );
};

export default LoginForm;
