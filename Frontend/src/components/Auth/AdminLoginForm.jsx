import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/logo.png';
import SocialLogin from "./SocialLogin";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

const AdminForm = () => {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      if (!formData.email || !formData.password) {
        alert("Please enter email and password.");
        return;
      }

      localStorage.setItem("token", "mock-token");
      localStorage.setItem("role", "Admin");
      navigate("/adminboard"); // ✅ Proper navigation
    } else {
      // Registration validation
      if (
        !formData.fullName ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      // Simulate registration
      alert("Registration successful! Please log in.");

      // Clear form and switch to login
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setMode("login");
    }
  };

  return (
    <div className="w-full max-w-md px-6 py-4 bg-white rounded-2xl shadow-sm lg:shadow-none mx-4 my-1 lg:my-0">
        <img
            src={logo}
            alt="Campus Core"
            className="w-24 mx-auto mb-6 block lg:hidden"
        />

        <div className="flex justify-center mb-6 gap-2">
            <button
            onClick={() => setMode("register")}
            className={`px-4 py-2 rounded shadow-sm text-sm font-medium cursor-pointer ${
                mode === "register"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            >
            Register
            </button>
            <button
            onClick={() => setMode("login")}
            className={`px-4 py-2 rounded shadow-sm text-sm font-medium cursor-pointer ${
                mode === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700"
            }`}
            >
            Login
            </button>
        </div>

        <h2 className="text-xl font-semibold text-center text-gray-800 mb-6">
            {mode === "register" ? "Register New Admin" : "Admin Login"}
        </h2>

        <form onSubmit={handleSubmit} className="w-full">
            {mode === "register" && (
            <>
                <label className="block mb-2 text-sm">Full Name</label>
                <div className="relative mb-4">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 py-2 border rounded focus:outline-none"
                />
                </div>
            </>
            )}

            <label className="block mb-2 text-sm">Email</label>
            <div className="relative mb-4">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="w-full pl-10 py-2 border rounded focus:outline-none"
                />
            </div>

            <label className="block mb-2 text-sm">Password</label>
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
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
            </div>

            {mode === "register" && (
            <>
                <label className="block mb-2 text-sm">Confirm Password</label>
                <div className="relative mb-4">
                    <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Confirm your password"
                        className="w-full pl-10 pr-10 py-2 border rounded focus:outline-none"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={togglePasswordVisibility} >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </div>
                </div>
            </>
            )}

            <button type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
                {mode === "login" ? "Login" : "Register"}
            </button>
        </form>
            
        <SocialLogin />
    </div>
  );
};

export default AdminForm;
