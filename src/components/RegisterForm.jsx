// // // // // import React, { useState } from "react";

// // // // // export default function RegisterForm({ role }) {
// // // // //   const [form, setForm] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     password: "",
// // // // //     confirmPassword: "",
// // // // //   });

// // // // //   const handleChange = (e) =>
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });

// // // // //   const handleSubmit = (e) => {
// // // // //     e.preventDefault();
// // // // //     if (form.password !== form.confirmPassword) {
// // // // //       alert("Passwords do not match");
// // // // //       return;
// // // // //     }
// // // // //     alert(`${role} Registered Successfully!`);
// // // // //     // Send form to backend here if needed
// // // // //   };

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="space-y-4">
// // // // //       <input
// // // // //         type="text"
// // // // //         name="name"
// // // // //         placeholder="Full Name"
// // // // //         value={form.name}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border rounded"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="email"
// // // // //         name="email"
// // // // //         placeholder="Email"
// // // // //         value={form.email}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border rounded"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="password"
// // // // //         name="password"
// // // // //         placeholder="Password"
// // // // //         value={form.password}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border rounded"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="password"
// // // // //         name="confirmPassword"
// // // // //         placeholder="Confirm Password"
// // // // //         value={form.confirmPassword}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border rounded"
// // // // //         required
// // // // //       />
// // // // //       <button
// // // // //         type="submit"
// // // // //         className="w-full bg-blue-600 text-white py-2 rounded"
// // // // //       >
// // // // //         Register
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // }
// // // // import React, { useState } from "react";
// // // // import axios from "axios";

// // // // const API_BASE_URL = "https://reqres.in/api"; // Change to your backend

// // // // export default function RegisterForm({ role, setActiveTab }) {
// // // //   const [form, setForm] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     password: "",
// // // //     confirmPassword: ""
// // // //   });
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //     setError("");
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     setLoading(true);

// // // //     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
// // // //       setError("Please fill in all fields.");
// // // //       setLoading(false);
// // // //       return;
// // // //     }
// // // //     if (form.password !== form.confirmPassword) {
// // // //       setError("Passwords do not match.");
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await axios.post(
// // // //         `${API_BASE_URL}/register`,
// // // //         { name: form.name, email: form.email, password: form.password, role },
// // // //         { headers: { "Content-Type": "application/json" } }
// // // //       );
// // // //       setActiveTab && setActiveTab("login");
// // // //       alert("Registration successful! Please log in.");
// // // //     } catch (err) {
// // // //       setError(
// // // //         err.response?.data?.message ||
// // // //         err.message ||
// // // //         "Registration failed"
// // // //       );
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="space-y-5">
// // // //       <input
// // // //         type="text"
// // // //         name="name"
// // // //         placeholder="Full Name"
// // // //         value={form.name}
// // // //         onChange={handleChange}
// // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="email"
// // // //         name="email"
// // // //         placeholder="Email Address"
// // // //         value={form.email}
// // // //         onChange={handleChange}
// // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="password"
// // // //         name="password"
// // // //         placeholder="Password"
// // // //         value={form.password}
// // // //         onChange={handleChange}
// // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // //         required
// // // //       />
// // // //       <input
// // // //         type="password"
// // // //         name="confirmPassword"
// // // //         placeholder="Confirm Password"
// // // //         value={form.confirmPassword}
// // // //         onChange={handleChange}
// // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // //         required
// // // //       />
// // // //       {error && (
// // // //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// // // //       )}
// // // //       <button
// // // //         type="submit"
// // // //         disabled={loading}
// // // //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// // // //       >
// // // //         {loading ? "Registering..." : "Register"}
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // }
// // // import React, { useState } from "react";

// // // export default function RegisterForm({ role, setActiveTab }) {
// // //   const [form, setForm] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: "",
// // //     confirmPassword: ""
// // //   });
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //     setError("");
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setLoading(true);

// // //     // Basic validation
// // //     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
// // //       setError("Please fill in all fields.");
// // //       setLoading(false);
// // //       return;
// // //     }
// // //     if (form.password !== form.confirmPassword) {
// // //       setError("Passwords do not match.");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     // Mock API delay and response
// // //     setTimeout(() => {
// // //       setLoading(false);
// // //       // Simulate success if email is not already "taken"
// // //       if (
// // //         ["student@example.com", "faculty@example.com", "admin@example.com"].includes(form.email)
// // //       ) {
// // //         setError("Email already registered (mock)");
// // //       } else {
// // //         alert("Registration successful! (mock)\nNow log in with your new credentials.");
// // //         setActiveTab && setActiveTab("login");
// // //       }
// // //     }, 1200);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="space-y-5">
// // //       <input
// // //         type="text"
// // //         name="name"
// // //         placeholder="Full Name"
// // //         value={form.name}
// // //         onChange={handleChange}
// // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // //         required
// // //       />
// // //       <input
// // //         type="email"
// // //         name="email"
// // //         placeholder="Email Address"
// // //         value={form.email}
// // //         onChange={handleChange}
// // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // //         required
// // //       />
// // //       <input
// // //         type="password"
// // //         name="password"
// // //         placeholder="Password"
// // //         value={form.password}
// // //         onChange={handleChange}
// // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // //         required
// // //       />
// // //       <input
// // //         type="password"
// // //         name="confirmPassword"
// // //         placeholder="Confirm Password"
// // //         value={form.confirmPassword}
// // //         onChange={handleChange}
// // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // //         required
// // //       />
// // //       {error && (
// // //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// // //       )}
// // //       <button
// // //         type="submit"
// // //         disabled={loading}
// // //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// // //       >
// // //         {loading ? "Registering..." : "Register"}
// // //       </button>
// // //       <div className="text-xs text-gray-400 mt-2 text-center">
// // //         <span className="font-semibold">Note:</span> You can't register with <b>student@example.com</b>, <b>faculty@example.com</b>, or <b>admin@example.com</b> (mock: already taken).
// // //       </div>
// // //     </form>
// // //   );
// // // }
import React, { useState } from "react";

export default function RegisterForm({ role, setActiveTab }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    // Mock API delay and always succeed
//     setTimeout(() => {
//       setLoading(false);
//       alert("Registration successful! (mock)\nNow log in with your new credentials.");
//       setActiveTab && setActiveTab("login");
//     }, 1200);
//   };

  setTimeout(() => {
    setLoading(false);
    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // Check if email already exists
    if (users.some(u => u.email === form.email)) {
      setError("Email already registered.");
      return;
    }
    // Add new user
    users.push({ ...form, role });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful!");
    setActiveTab && setActiveTab("login");
  }, 1000);
};


  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
        required
      />
      {error && (
        <div className="text-red-500 text-sm font-medium text-center">{error}</div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
// import React, { useState } from "react";

// export default function RegisterForm({ role, setActiveTab }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     // Basic validation
//     if (!form.name || !form.email || !form.password || !form.confirmPassword) {
//       setError("Please fill in all fields.");
//       setLoading(false);
//       return;
//     }
//     if (form.password !== form.confirmPassword) {
//       setError("Passwords do not match.");
//       setLoading(false);
//       return;
//     }

//     // Mock API delay and always succeed
//     setTimeout(() => {
//       setLoading(false);
//       alert("Registration successful! (mock)\nNow log in with your new credentials.");
//       setActiveTab && setActiveTab("login");
//     }, 1200);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={form.name}
//         onChange={handleChange}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email Address"
//         value={form.email}
//         onChange={handleChange}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={form.password}
//         onChange={handleChange}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//         required
//       />
//       <input
//         type="password"
//         name="confirmPassword"
//         placeholder="Confirm Password"
//         value={form.confirmPassword}
//         onChange={handleChange}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
//         required
//       />
//       {error && (
//         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
//       )}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
//       >
//         {loading ? "Registering..." : "Register"}
//       </button>
//     </form>
//   );
// }
