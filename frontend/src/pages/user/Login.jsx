import { useState } from "react";
import FeatureCarousel from "../../components/FeatureCarousel";
import {
    EnvelopeIcon,
    EyeIcon,
    EyeSlashIcon,
  } from "@heroicons/react/24/outline";
  

export default function Login() {
    const [role, setRole] = useState("student");
    const [mode, setMode] =useState("login");
    const [showPassword, setShowPassword] = useState(false);

    //Login details
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    //Errors
    const [loginError, setLoginError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        
        
        setLoginError("");
        setEmailError("");
        setPasswordError("");

        let valid = true;

        if (!loginEmail || !loginPassword){
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
        
          //API request here
          console.log("Logging in with:", loginEmail, loginPassword);
          localStorage.setItem("token", "dummy-auth-token"); // API token later

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
                    src="src/assets/logo.png"
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

            

            {/*Rightside*/}
            <div className="w-1/2 bg-gray-100 p-10 flex flex-col justify-center">
                <div className="flex justify-center gap-4 mb-6">
                    {["student", "faculty"].map((r) => (
                        <button
                        key={r}
                        onClick={() => setRole(r)}
                        className={`px-5 py-1.5 rounded-full font-medium capitalize text-sm shadow-sm transition ${
                            role === r
                            ? "bg-indigo-600 text-white"
                            : "bg-white text-gray-600"
                        }`}
                    >
                        {r}
                    </button>
                    ))}
                </div>

                <h2 className="text-center text-l mb-4 text-gray-600">
                    Logging in as <span className="capitalize">{role}</span>
                </h2>
                <div className="w-full max-w-md mx-auto min-h-[400px] flex flex-col justify-between">

                
                {/*Form*/}
                <div className=" p-6 rounded-md  flex flex-col justify-between">

                {loginError && (
                            <p className="text-red-500 text-sm mb-4 text-center">{loginError}</p>
                        )}

                        
                        <form onSubmit={handleLogin} key="login" className="space-y-4 transition-all duration-300 ease-in-out">
                            
                            <div className="relative">
                                <EnvelopeIcon className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                type="text"
                                placeholder={`${role.charAt(0).toUpperCase() + role.slice(1)} ID or Email`}
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                className="w-full !bg-white pr-10 pl-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            </div>
                            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
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
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                <EyeIcon className="w-5 h-5 text-gray-400" />
                                ) : (
                                <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                                )}
                            </button>
                            </div>
                            {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}

                            <div className="flex justify-between items-center">
                                <label className="text-sm flex items-center gap-2">
                                    <input type="checkbox" />
                                    Remember me
                                </label>
                                <a href="#" className="text-sm text-indigo-600 hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                            >
                                Login
                            </button>
                        </form>
                    
                    
                <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300" />
                    <span className="px-3 text-sm text-gray-500">or continue with</span>
                    <div className="flex-grow h-px bg-gray-300" />
                </div>
                {/*Social icons*/}
                <div className="mt-4">
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 b rounded-md py-2 hover:bg-gray-200 transition"
                    >
                        <img src="src/assets/google.svg" alt="Google" className="h-5 w-5" />
                        <span className="text-sm text-gray-700">Continue with Google</span>
                    </button>
                    </div>

                </div>
                
                </div>
                

            </div>
        </div>
    );
}