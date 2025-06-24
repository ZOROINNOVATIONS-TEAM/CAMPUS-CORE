
// import React, { useState } from "react";
// import 'remixicon/fonts/remixicon.css';
// import RoleTabs from "../components/RoleTabs";
// import LoginForm from "../components/LoginForm";
// import RegisterForm from "../components/RegisterForm";
// import logo from "../assets/logo.png";

// const LoginRegisterPage = () => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [role, setRole] = useState("Student");

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 font-sans">
//       {/* Main Card */}
//       <div className="flex w-full max-w-5xl bg-white/80 rounded-3xl shadow-2xl overflow-hidden border border-blue-100 backdrop-blur-md">
//         {/* Left Info Panel */}
//         <div className="hidden md:flex w-1/2 bg-blue-700 text-white flex-col justify-center items-center p-12 rounded-l-3xl">
//           <img src={logo} alt="Campus Core" className="mb-8 w-44 drop-shadow-lg animate-bounce" />
//           <h2 className="text-3xl font-extrabold mb-4 tracking-wide drop-shadow-lg">Welcome to Your Academic Journey</h2>
//           <p className="mb-10 text-center text-lg opacity-90">
//             Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
//           </p>
//           <div className="flex space-x-8 mb-10">
//             <div className="text-center">
//               <div className="mb-2 text-3xl animate-spin">📚</div>
//               <div className="text-base">Course Management</div>
//             </div>
//             <div className="text-center">
//               <div className="mb-2 text-3xl animate-bounce">🗓️</div>
//               <div className="text-base">Schedule Tracking</div>
//             </div>
//             <div className="text-center">
//               <div className="mb-2 text-3xl animate-pulse">📈</div>
//               <div className="text-base">Progress Analytics</div>
//             </div>
//           </div>
//           <blockquote className="bg-blue-800 bg-opacity-80 p-6 rounded-xl shadow-lg max-w-md">
//             <p className="italic">
//               As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
//             </p>
//             <footer className="mt-3 text-sm text-right opacity-80">– Dr. Michael T., Engineering Faculty</footer>
//           </blockquote>
//         </div>

//         {/* Right Panel (Form Card) */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 bg-white/70 rounded-r-3xl">
//           <RoleTabs role={role} setRole={setRole} />
//           <div className="w-full max-w-sm bg-white/90 rounded-xl shadow-lg p-8 border border-blue-100">
//             {/* Animated Tabs */}
//             <div className="flex mb-6 border-b border-gray-200 relative">
//               <button
//                 className={`flex-1 py-2 text-center font-semibold tracking-wide transition-colors duration-150 ${
//                   activeTab === "login"
//                     ? "text-blue-700"
//                     : "text-gray-400 hover:text-blue-500"
//                 } relative`}
//                 onClick={() => setActiveTab("login")}
//               >
//                 Login
//                 {activeTab === "login" && (
//                   <span className="absolute left-0 right-0 -bottom-[2px] h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t transition-all duration-300"></span>
//                 )}
//               </button>
//               <button
//                 className={`flex-1 py-2 text-center font-semibold tracking-wide transition-colors duration-150 ${
//                   activeTab === "register"
//                     ? "text-blue-700"
//                     : "text-gray-400 hover:text-blue-500"
//                 } relative`}
//                 onClick={() => setActiveTab("register")}
//               >
//                 Register
//                 {activeTab === "register" && (
//                   <span className="absolute left-0 right-0 -bottom-[2px] h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-t transition-all duration-300"></span>
//                 )}
//               </button>
//             </div>
//             {/* Form */}
//             <div className="animate-fade-in">
//               {activeTab === "login" ? (
//                 <LoginForm role={role} />
//               ) : (
//                 <RegisterForm role={role} />
//               )}
//             </div>
//             {/* Divider */}
//             <div className="flex items-center my-6">
//               <div className="flex-grow h-px bg-gray-200"></div>
//               <span className="mx-3 text-gray-400 text-sm">or continue with</span>
//               <div className="flex-grow h-px bg-gray-200"></div>
//             </div>
//             {/* Social Buttons with Ripple */}
//             <div className="flex justify-between gap-2">
//               <button className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:bg-blue-50 active:scale-95 transition-all duration-150 relative overflow-hidden group shadow-sm">
//                 <i className="ri-google-fill text-lg text-red-500 mr-2"></i>
//                 <span className="hidden sm:inline font-semibold">Google</span>
//                 <span className="absolute inset-0 bg-blue-100 opacity-0 group-active:opacity-30 transition"></span>
//               </button>
//               <button className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:bg-blue-50 active:scale-95 transition-all duration-150 relative overflow-hidden group shadow-sm">
//                 <i className="ri-microsoft-fill text-lg text-blue-700 mr-2"></i>
//                 <span className="hidden sm:inline font-semibold">Microsoft</span>
//                 <span className="absolute inset-0 bg-blue-100 opacity-0 group-active:opacity-30 transition"></span>
//               </button>
//               <button className="flex-1 flex items-center justify-center border border-gray-200 rounded-lg px-4 py-2 bg-gray-50 hover:bg-blue-50 active:scale-95 transition-all duration-150 relative overflow-hidden group shadow-sm">
//                 <i className="ri-apple-fill text-lg text-black mr-2"></i>
//                 <span className="hidden sm:inline font-semibold">Apple</span>
//                 <span className="absolute inset-0 bg-blue-100 opacity-0 group-active:opacity-30 transition"></span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginRegisterPage;
import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';
import RoleTabs from "../components/RoleTabs";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import logo from "../assets/logo.png";

const LoginRegisterPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [role, setRole] = useState("Student");

  return (
    <div className="flex h-screen">
      {/* Left Info Panel */}
      <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-8 rounded-l-lg">
        <img src={logo} alt="Campus Core" className="mb-6 w-40" />
        <h2 className="text-2xl font-bold mb-4">
          {activeTab === "login" ? "Welcome to Your Academic Journey" : "Join Campus Core"}
        </h2>
        <p className="mb-8 text-center">
          {activeTab === "login"
            ? "Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform."
            : "Register today to manage your academic life with ease and efficiency."}
        </p>
        <div className="flex space-x-4 mb-8">
          <div className="text-center">
            <div className="mb-2">📚</div>
            <div>Course Management</div>
          </div>
          <div className="text-center">
            <div className="mb-2">🗓️</div>
            <div>Schedule Tracking</div>
          </div>
          <div className="text-center">
            <div className="mb-2">{activeTab === "login" ? "📈" : "💬"}</div>
            <div>
              {activeTab === "login" ? "Progress Analytics" : "Connect with Faculty"}
            </div>
          </div>
        </div>
        <blockquote className="bg-blue-700 bg-opacity-70 p-4 rounded">
          <p>
            {activeTab === "login"
              ? "As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week."
              : "This platform simplifies registration and enhances collaboration between students and teachers."}
          </p>
          <footer className="mt-2 text-sm">
            {activeTab === "login"
              ? "Dr. Michael T., Engineering Faculty"
              : "Prof. A. Sharma, Academic Coordinator"}
          </footer>
        </blockquote>
      </div>

      {/* Right Panel */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 rounded-r-lg bg-white">
        <RoleTabs role={role} setRole={setRole} />
        <div className="w-full max-w-sm">
          {/* Tab Buttons */}
          <div className="flex mb-4 border-b">
            <button
              className={`flex-1 py-2 text-center ${
                activeTab === "login"
                  ? "border-b-2 border-blue-600 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                activeTab === "register"
                  ? "border-b-2 border-blue-600 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("register")}
            >
              Register
            </button>
          </div>
          {/* Render the correct form, passing setActiveTab and role */}
          {activeTab === "login" ? (
            <LoginPage setActiveTab={setActiveTab} role={role} />
          ) : (
            <RegisterPage setActiveTab={setActiveTab} role={role} />
          )}

          <div className="my-4 text-center text-gray-400">or continue with</div>
          <div className="flex justify-between">
            <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-google-fill"></i></button>
            <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-microsoft-fill"></i></button>
            <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-apple-fill"></i></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
