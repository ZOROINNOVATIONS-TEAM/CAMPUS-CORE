import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, landingRoute } from "../../auth/AuthContext";
import FeatureCarousel from "../../components/FeatureCarousel";
import {
  EnvelopeIcon,
  UserIcon,
  LockClosedIcon,
  KeyIcon,
  EyeIcon,
  EyeSlashIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import google from "/src/assets/google.svg";

export default function AdminAuth() {
  const [mode, setMode] = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  // Login state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Register state
  const [fullName, setFullName] = useState("");
  const [college, setCollege] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Register errors
  const [registerError, setRegisterError] = useState("");
  const [nameError, setNameError] = useState("");
  const [collegeError, setCollegeError] = useState("");
  const [regEmailError, setRegEmailError] = useState("");
  const [regPassError, setRegPassError] = useState("");
  const [regConfirmError, setRegConfirmError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError(""); setEmailError(""); setPasswordError("");
    let valid = true;
    if (!loginEmail || !loginPassword) {
      setLoginError("Fill all fields"); valid = false;
    }
    if (loginEmail && !/\S+@\S+\.\S+/.test(loginEmail)) {
      setEmailError("Invalid email"); valid = false;
    }
    if (loginPassword && loginPassword.length < 6) {
      setPasswordError("Password too short"); valid = false;
    }
    if (!valid) return;

    // Dummy admin login
    login("dummy-auth-token", 'admin');
    navigate(landingRoute(['admin']), { replace: true });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError(""); setNameError(""); setCollegeError("");
    setRegEmailError(""); setRegPassError(""); setRegConfirmError("");
    let valid = true;
    if (!fullName || !college || !registerEmail || !registerPassword || !confirmPassword) {
      setRegisterError("Fill all fields"); valid = false;
    }
    if (fullName && fullName.length < 3) {
      setNameError("Name too short"); valid = false;
    }
    if (college && college.length < 3) {
      setCollegeError("College name too short"); valid = false;
    }
    if (registerEmail && !/\S+@\S+\.\S+/.test(registerEmail)) {
      setRegEmailError("Invalid email"); valid = false;
    }
    if (registerPassword && registerPassword.length < 6) {
      setRegPassError("Password too short"); valid = false;
    }
    if (confirmPassword !== registerPassword) {
      setRegConfirmError("Passwords do not match"); valid = false;
    }
    if (!valid) return;

    // Dummy register action
    console.log("Admin registering:", { fullName, college, registerEmail });
    // After register, switch to login
    setMode("login");
  };
return (
  <div className="h-screen flex flex-col md:flex-row bg-white dark:bg-gray-900 transition-colors duration-300">
    {/* Leftside hidden on mobile */}
    <div className="hidden md:flex md:w-1/2 bg-blue-700 dark:bg-blue-900 text-white relative overflow-hidden flex items-center justify-center">
      <img
        src="src/assets/CampusSample.jpeg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-blue-700 dark:bg-blue-900 opacity-90" />
      <div className="relative z-10 text-center px-8 max-w-md flex flex-col items-center">
        <img
          src="src/assets/logo.png"
          alt="CampusCore Logo"
          className="mb-6 h-32 w-32 object-contain"
        />
        <h1 className="text-2xl font-bold mb-2">Welcome to Your Academic Journey</h1>
        <p className="text-sm mb-6">
          Manage your courses, track your schedule, and stay organized throughout your academic term.
        </p>
        <FeatureCarousel />
        <div className="grid grid-cols-3 gap-4 mb-6" />
        <div className="bg-white dark:bg-white/10 bg-opacity-10 p-4 rounded text-xs">
          <p>"As a professor, I appreciate how simple it is to communicate changes to my students."</p>
          <p className="mt-2 text-[11px] text-blue-100">– Dr. Shi, Faculty</p>
        </div>
      </div>
    </div>

    {/* Right side admin panel */}
    <div className="w-full md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 md:p-10 flex flex-col justify-center transition-colors duration-300">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-center text-xl font-semibold mb-6 text-gray-700 dark:text-gray-100">
          Admin {mode === "login" ? "Login" : "Registration"}
        </h2>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setMode("login")}
            className={`px-5 py-2 rounded-md font-medium ${
              mode === "login"
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-gray-700 dark:text-gray-300 text-gray-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("register")}
            className={`px-5 py-2 rounded-md font-medium ${
              mode === "register"
                ? "bg-indigo-600 text-white"
                : "bg-white dark:bg-gray-700 dark:text-gray-300 text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            {loginError && <p className="text-red-500 text-sm text-center dark:text-red-400">{loginError}</p>}
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Admin Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {emailError && <p className="text-red-500 text-xs dark:text-red-400">{emailError}</p>}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {showPassword ? <EyeIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" /> : <EyeSlashIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />}
              </button>
            </div>
            {passwordError && <p className="text-red-500 text-xs dark:text-red-400">{passwordError}</p>}
            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md">Login</button>
          </form>
        ) : (
          <form onSubmit={handleRegister} className="space-y-4">
            {registerError && <p className="text-red-500 text-sm text-center dark:text-red-400">{registerError}</p>}
            <div className="relative">
              <UserIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {nameError && <p className="text-red-500 text-xs dark:text-red-400">{nameError}</p>}

            <div className="relative">
              <BuildingOfficeIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="College Name"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {collegeError && <p className="text-red-500 text-xs dark:text-red-400">{collegeError}</p>}

            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="text"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {regEmailError && <p className="text-red-500 text-xs dark:text-red-400">{regEmailError}</p>}

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {showPassword ? <EyeIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" /> : <KeyIcon className="w-5 h-5 text-gray-400 dark:text-gray-300" />}
              </button>
            </div>
            {regPassError && <p className="text-red-500 text-xs dark:text-red-400">{regPassError}</p>}

            <div className="relative">
              <LockClosedIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            {regConfirmError && <p className="text-red-500 text-xs dark:text-red-400">{regConfirmError}</p>}

            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md">Register</button>
          </form>
        )}

        <div className="mt-6">
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
            <span className="px-3 text-sm text-gray-500 dark:text-gray-300">or continue with</span>
            <div className="flex-grow h-px bg-gray-300 dark:bg-gray-600" />
          </div>
          <button type="button" className="w-full flex items-center justify-center gap-3 rounded-md py-2 bg-white dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm text-gray-700 dark:text-gray-200">
            <img src={google} alt="Google" className="h-5 w-5" />
            <span>
              {mode === "login" ? "Log in" : "Sign up"} with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
}