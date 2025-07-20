// import React, { useState } from "react";
// import RoleTabs from "../components/RoleTabs";
// export default function RegisterPage() {
//   const [role, setRole] = useState("Student");
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     alert(`${role} Registered Successfully!`);
//     // You can send form data to backend here
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Info Panel */}
//       <div className="w-1/2 bg-blue-700 text-white flex flex-col justify-center items-center p-8 rounded-l-lg">
//         <img src="/logo.png" alt="Campus Core" className="mb-6 w-40" />
//         <h2 className="text-2xl font-bold mb-4">Join Campus Core</h2>
//         <p className="mb-8 text-center">
//           Register today to manage your academic life with ease and efficiency.
//         </p>
//         <div className="flex space-x-4 mb-8">
//           <div className="text-center">
//             <div className="mb-2">📚</div>
//             <div>Enroll in Courses</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2">🗓️</div>
//             <div>Track Assignments</div>
//           </div>
//           <div className="text-center">
//             <div className="mb-2">💬</div>
//             <div>Connect with Faculty</div>
//           </div>
//         </div>
//         <blockquote className="bg-blue-800 bg-opacity-70 p-4 rounded">
//           <p>
//             This platform simplifies registration and enhances collaboration between students and teachers.
//           </p>
//           <footer className="mt-2 text-sm">Prof. A. Sharma, Academic Coordinator</footer>
//         </blockquote>
//       </div>

//       {/* Right Register Panel */}
//       <div className="w-1/2 flex flex-col justify-center items-center p-8 rounded-r-lg bg-white">
//         <RoleTabs role={role} setRole={setRole} />
//         <div className="w-full max-w-sm">
//           <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               value={form.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email Address"
//               value={form.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={form.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               required
//             />
//             <input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded focus:outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function RegisterPage({ setActiveTab, role }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`${role} Registered Successfully!`);
    // Optionally, switch to login tab after registration:
    // setActiveTab("login");
  };

  return (
    <div>
      <h3 className="text-1xl font-semibold text-center mb-6">Register as {role}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded focus:outline-none"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
      <div className="text-center mt-4">
        <button
          type="button"
          className="text-blue-600 underline"
          onClick={() => setActiveTab("login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
