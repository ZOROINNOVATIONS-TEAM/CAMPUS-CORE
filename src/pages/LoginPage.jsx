
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.png";
// import RoleTabs from "../components/RoleTabs";
// import LoginForm from "../components/LoginForm";

// export default function LoginPage({ setActiveTab }) {
//   const [role, setRole] = useState("Student");
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     if (role === "Student") navigate("/student");
//     else if (role === "Faculty") navigate("/faculty");
//     else if (role === "Admin") navigate("/admin");
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left panel */}
//       <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-8 rounded-l-lg">
//         <img src={logo} alt="Campus Core" className="mb-6 w-40" />
//         <h2 className="text-2xl font-bold mb-4">Welcome to Your Academic Journey</h2>
//         <p className="mb-8 text-center">
//           Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
//         </p>

//         <div className="flex space-x-6 mb-8">
//           <div className="text-center">
//             <div className="mb-2 text-2xl">📚</div>
//             <div>Course Management</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2 text-2xl">🗓️</div>
//             <div>Schedule Tracking</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2 text-2xl">📈</div>
//             <div>Progress Analytics</div>
//           </div>
//         </div>

//         <blockquote className="bg-blue-800 bg-opacity-70 p-4 rounded w-full max-w-md">
//           <p className="italic">
//             As a professor, I appreciate how simple it is to communicate schedule changes to my students.
//             The platform is intuitive and saves me hours each week.
//           </p>
//           <footer className="mt-2 text-sm text-right">– Dr. Michael T., Engineering Faculty</footer>
//         </blockquote>
//       </div>

//       {/* Right panel */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8 rounded-r-lg bg-white">
//         <RoleTabs role={role} setRole={setRole} />
//         <div className="w-full max-w-sm">
//           {/* Tabs */}
//           <div className="flex mb-4">
//             <button className="flex-1 border-b-2 border-blue-600 py-2 font-semibold">Login</button>
//             <button className="flex-1 border-b-2 border-gray-300 py-2 font-semibold" onClick={() => setActiveTab("register")}>
//               Register
//             </button>
//           </div>

//           {/* Login form */}
//           <LoginForm role={role} onLogin={handleLogin} />

//           {/* Social login */}
//           <div className="my-4 text-center text-gray-400">or continue with</div>
//           <div className="flex justify-between">
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i class="ri-google-fill"></i></button>
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i class="ri-microsoft-fill"></i></button>
//             <button className="border rounded px-4 py-2 flex-1 mx-1"><i class="ri-apple-fill"></i></button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import React, { useState } from "react";

// export default function LoginPage({ setActiveTab, role }) {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`${role} logged in successfully!`);
//     // Add your login logic here
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none"
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       </form>
//       <div className="text-center mt-4">
//         <button
//           type="button"
//           className="text-blue-600 underline"
//           onClick={() => setActiveTab("register")}
//         >
//           Don't have an account? Register
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";
import LoginForm from "../components/LoginForm";

export default function LoginPage({ setActiveTab, role }) {
  return (
    <div>
      <h4 className="text-1xl font-semibold text-center mb-6">Logging in as {role}</h4>
      
      {/* Use existing login logic */}
      <LoginForm role={role} />

      <div className="text-center mt-4">
        <button
          type="button"
          className="text-blue-600 underline"
          onClick={() => setActiveTab("register")}
        >
          Don't have an account? Register
        </button>
      </div>
    </div>
  );
}
