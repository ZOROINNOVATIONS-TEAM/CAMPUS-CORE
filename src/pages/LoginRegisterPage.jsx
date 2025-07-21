
// import React, { useState } from "react";
// import 'remixicon/fonts/remixicon.css';
// import RoleTabs from "../components/RoleTabs";
// import LoginPage from "./LoginPage";
// import RegisterPage from "./RegisterPage";
// import logo from "../assets/logo.png";

// const LoginRegisterPage = () => {
//   const [activeTab, setActiveTab] = useState("login");
//   const [role, setRole] = useState("Student");

//   return (
//     <div className="flex h-screen">
//       {/* Left Info Panel */}
//       <div className="w-1/2 bg-blue-600 text-white flex flex-col justify-center items-center p-8 rounded-l-lg">
//         <img src={logo} alt="Campus Core" className="mb-6 w-40" />
//         <h2 className="text-2xl font-bold mb-4">
//           {activeTab === "login" ? "Welcome to Your Academic Journey" : "Join Campus Core"}
//         </h2>
//         <p className="mb-8 text-center">
//           {activeTab === "login"
//             ? "Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform."
//             : "Register today to manage your academic life with ease and efficiency."}
//         </p>
//         <div className="flex space-x-4 mb-8">
//           <div className="text-center">
//             <div className="mb-2">📚</div>
//             <div>Course Management</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2">🗓️</div>
//             <div>Schedule Tracking</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2">{activeTab === "login" ? "📈" : "💬"}</div>
//             <div>
//               {activeTab === "login" ? "Progress Analytics" : "Connect with Faculty"}
//             </div>
//           </div>
//         </div>
//         <blockquote className="bg-blue-700 bg-opacity-70 p-4 rounded">
//           <p>
//             {activeTab === "login"
//               ? "As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week."
//               : "This platform simplifies registration and enhances collaboration between students and teachers."}
//           </p>
//           <footer className="mt-2 text-sm">
//             {activeTab === "login"
//               ? "Dr. Michael T., Engineering Faculty"
//               : "Prof. A. Sharma, Academic Coordinator"}
//           </footer>
//         </blockquote>
//       </div>

//       {/* Right Panel */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8 rounded-r-lg bg-white">
//         <RoleTabs role={role} setRole={setRole} />
//         <div className="w-full max-w-sm">
//           {/* Tab Buttons */}
//           <div className="flex mb-4 border-b">
//             <button
//               className={`flex-1 py-2 text-center ${
//                 activeTab === "login"
//                   ? "border-b-2 border-blue-600 font-semibold"
//                   : "text-gray-400"
//               }`}
//               onClick={() => setActiveTab("login")}
//             >
//               Login
//             </button>
//             <button
//               className={`flex-1 py-2 text-center ${
//                 activeTab === "register"
//                   ? "border-b-2 border-blue-600 font-semibold"
//                   : "text-gray-400"
//               }`}
//               onClick={() => setActiveTab("register")}
//             >
//               Register
//             </button>
//           </div>
//           {/* Render the correct form, passing setActiveTab and role */}
//           {activeTab === "login" ? (
//             <LoginPage setActiveTab={setActiveTab} role={role} />
//           ) : (
//             <RegisterPage setActiveTab={setActiveTab} role={role} />
//           )}

//           <div className="my-4 text-center text-gray-400">or continue with</div>
//           <div className="flex justify-between">
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-google-fill"></i></button>
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-microsoft-fill"></i></button>
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i className="ri-apple-fill"></i></button>
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
              onClick={() => {
                setActiveTab("login");
                setError(null);
              }}
            >
              Login
            </button>
            <button
              className={`flex-1 py-2 text-center ${
                activeTab === "register"
                  ? "border-b-2 border-blue-600 font-semibold"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setActiveTab("register");
                setError(null);
              }}
            >
              Register
            </button>
          </div>

          {/* Show loading and error states */}
          {loading && (
            <div className="text-center my-2 text-blue-600 font-medium">Loading...</div>
          )}
          {error && (
            <div className="text-center my-2 text-red-500 text-sm">{error}</div>
          )}

          {/* Render Login or Register */}
          {activeTab === "login" ? (
            <LoginPage
              setActiveTab={setActiveTab}
              role={role}
              setLoading={setLoading}
              setError={setError}
            />
          ) : (
            <RegisterPage
              setActiveTab={setActiveTab}
              role={role}
              setLoading={setLoading}
              setError={setError}
            />
          )}

          <div className="my-4 text-center text-gray-400">or continue with</div>
          <div className="flex justify-between">
            <button className="border rounded px-4 py-2 flex-1 mx-1">
              <i className="ri-google-fill"></i>
            </button>
            <button className="border rounded px-4 py-2 flex-1 mx-1">
              <i className="ri-microsoft-fill"></i>
            </button>
            <button className="border rounded px-4 py-2 flex-1 mx-1">
              <i className="ri-apple-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
