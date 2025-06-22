import { useState } from "react";
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

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    setEmailError("");
    setPasswordError("");
    let valid = true;

    if (!loginEmail || !loginPassword) {
      setLoginError("Please fill in all the fields");
      valid = false;
    }

    if (loginEmail && !/\S+@\S+\.\S+/.test(loginEmail)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }

    if (loginPassword && loginPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    if (!valid) return;

    console.log("Admin logging in:", loginEmail, loginPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setRegisterError("");
    setNameError("");
    setCollegeError("");
    setRegEmailError("");
    setRegPassError("");
    setRegConfirmError("");

    let valid = true;

    if (!fullName || !college || !registerEmail || !registerPassword || !confirmPassword) {
      setRegisterError("Please fill in all fields.");
      valid = false;
    }

    if (fullName && fullName.length < 3) {
      setNameError("Name must be at least 3 characters.");
      valid = false;
    }

    if (college && college.length < 3) {
      setCollegeError("College name must be valid.");
      valid = false;
    }

    if (registerEmail && !/\S+@\S+\.\S+/.test(registerEmail)) {
      setRegEmailError("Invalid email format.");
      valid = false;
    }

    if (registerPassword && registerPassword.length < 6) {
      setRegPassError("Password must be at least 6 characters.");
      valid = false;
    }

    if (confirmPassword !== registerPassword) {
      setRegConfirmError("Passwords do not match.");
      valid = false;
    }

    if (!valid) return;

    console.log("Admin registering...");
  };

  return (
    <div className="min-h-screen flex">
     {/*Leftside*/}
            <div className="w-1/2 relative bg-blue-700 text-white overflow-hidden flex items-center justify-center rounded-md">
                <div className="absolute inset-0">
                    <img
                    src="src/assets/CampusSample.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-700 opacity-90" />
                </div>

                <div className="relative z-10 text-center px-8 max-w-md flex flex-col items-center">
                    
                    <img
                    src="src/assets/images/logo.png"
                    alt="CampusCore Logo"
                    className="h-1/2 w-1/2 object-contain drop-shadow-[0_0_1x_white] mb-6"
                    />
                    <h1 className="text-2xl font-bold mb-2">Welcome to Your Academic Journey</h1>
                    <p className="text-sm mb-6">
                    Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
                    </p>

                    <FeatureCarousel />
                    <div className="grid grid-cols-3 gap-4 mb-6" />


                <div className="bg-white bg-opacity-10 p-4 rounded text-xs">
                    <p>
                        "As a professor, I appreciate how simple it is to communicate schedule
                        changes to my students. The platform is intuitive and saves me hours each week."
                    </p>
                    <p className="mt-2 text-[11px] text-blue-100">– Dr. Shi, Engineering Faculty</p>
                </div>
            </div>
      </div>


      {/* Right side */}
      <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center">


        <div className="w-full max-w-md mx-auto min-h-[400px] flex flex-col justify-between">
        <h2 className="text-center text-lg font-semibold mb-4 text-gray-700">
  Admin {mode === "login" ? "Login" : "Registration"}
</h2>

          <div className="flex w-full mb-6 shadow-sm">
            <button
              onClick={() => setMode("login")}
              className={`w-1/2 py-2 text-sm font-medium border rounded-l-md transition-all ${
                mode === "login"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setMode("register")}
              className={`w-1/2 py-2 text-sm font-medium border rounded-r-md transition-all ${
                mode === "register"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-600 border-gray-300"
              }`}
            >
              Register
            </button>
          </div>
          

          <div className=" backdrop-blur-md p-6 rounded-md flex flex-col justify-between">

            {mode === "login" ? (
              <form onSubmit={handleLogin} className="space-y-4">
                {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}
                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Admin Email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                {emailError && <p className="text-red-500 text-xs">{emailError}</p>}

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {passwordError && <p className="text-red-500 text-xs">{passwordError}</p>}

                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md">
                  Login
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                {registerError && <p className="text-red-500 text-sm text-center">{registerError}</p>}

                <div className="relative">
                  <UserIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                {nameError && <p className="text-red-500 text-xs">{nameError}</p>}

                <div className="relative">
                  <BuildingOfficeIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="College Name"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                {collegeError && <p className="text-red-500 text-xs">{collegeError}</p>}

                <div className="relative">
                  <EnvelopeIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                {regEmailError && <p className="text-red-500 text-xs">{regEmailError}</p>}

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                    value={registerPassword}
                    onChange={(e) => setRegisterPassword(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <KeyIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {regPassError && <p className="text-red-500 text-xs">{regPassError}</p>}

                <div className="relative">
                  <LockClosedIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pr-10 pl-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                </div>
                {regConfirmError && <p className="text-red-500 text-xs">{regConfirmError}</p>}

                <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-md">
                  Register
                </button>
              </form>
            )}
            <div className="mt-6">
  <div className="flex items-center my-4">
    <div className="flex-grow h-px bg-gray-300" />
    <span className="px-3 text-sm text-gray-500">or continue with</span>
    <div className="flex-grow h-px bg-gray-300" />
  </div>

  <button
    type="button"
    className="w-full flex items-center justify-center gap-3 rounded-md py-2 hover:bg-gray-200 transition"
  >
    <img src="src/assets/google.svg" alt="Google" className="h-5 w-5" />
    <span className="text-sm text-gray-700">
      {mode === "login" ? "Log in" : "Sign up"} with Google
    </span>
  </button>
</div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
