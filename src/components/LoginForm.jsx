
// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";

// // // export default function LoginForm({ role }) {
// // //   const [form, setForm] = useState({ email: "", password: "" });
// // //   const [error, setError] = useState("");
// // //   const [loading, setLoading] = useState(false);
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setForm({ ...form, [e.target.name]: e.target.value });
// // //     setError("");
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setError("");
// // //     setLoading(true);

// // //     // Basic validation (still required for UX)
// // //     if (!form.email || !form.password) {
// // //       setError("Please fill in all fields.");
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     // Mock API delay and always succeed
// // //     setTimeout(() => {
// // //       setLoading(false);
// // //       // Redirect by role
// // //       if (role === "Student") navigate("/student");
// // //       else if (role === "Faculty") navigate("/faculty");
// // //       else if (role === "Admin") navigate("/admin");
// // //     }, 1000);
// // //   };
// // // // setTimeout(() => {
// // // //   setLoading(false);
// // // //   localStorage.setItem("isAuthenticated", "true"); // <-- set auth flag
// // // //   // Redirect by role
// // // //   if (role === "Student") navigate("/student");
// // // //   else if (role === "Faculty") navigate("/faculty");
// // // //   else if (role === "Admin") navigate("/admin");
// // // // }, 1000);
// // // //   };


// // // //   setTimeout(() => {
// // // //     setLoading(false);
// // // //     const users = JSON.parse(localStorage.getItem("users") || "[]");
// // // //     const user = users.find(u => u.email === form.email && u.password === form.password && u.role === role);
// // // //     if (user) {
// // // //       localStorage.setItem("isAuthenticated", "true");
// // // //       // redirect by role...
// // // //     } else {
// // // //       setError("Invalid credentials.");
// // // //     }
// // // //   }, 1000);
// // // // };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="space-y-5">
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
// // //       {error && (
// // //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// // //       )}
// // //       <button
// // //         type="submit"
// // //         disabled={loading}
// // //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// // //       >
// // //         {loading ? "Logging in..." : "Login"}
// // //       </button>
// // //     </form>
// // //   );
// // // }
// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // export default function LoginForm({ role }) {
// // // //   const [form, setForm] = useState({ email: "", password: "" });
// // // //   const [error, setError] = useState("");
// // // //   const [loading, setLoading] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // //     setError("");
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setError("");
// // // //     setLoading(true);

// // // //     // Basic validation
// // // //     if (!form.email || !form.password) {
// // // //       setError("Please fill in all fields.");
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     // Mock API delay and always succeed
// // // //     setTimeout(() => {
// // // //       setLoading(false);
// // // //       localStorage.setItem("isAuthenticated", "true");
// // // //       if (role === "Student") navigate("/student");
// // // //       else if (role === "Faculty") navigate("/faculty");
// // // //       else if (role === "Admin") navigate("/admin");
// // // //     }, 1000);
// // // //   };

// // // //   return (
// // // //     <form onSubmit={handleSubmit} className="space-y-5">
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
// // // //       {error && (
// // // //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// // // //       )}
// // // //       <button
// // // //         type="submit"
// // // //         disabled={loading}
// // // //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// // // //       >
// // // //         {loading ? "Logging in..." : "Login"}
// // // //       </button>
// // // //     </form>
// // // //   );
// // // // }
// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { toast } from "react-toastify";
// // // // // import "react-toastify/dist/ReactToastify.css";
// // // // // // import axios from "axios"; // Uncomment if you want real API integration

// // // // // export default function LoginForm({ role }) {
// // // // //   const [form, setForm] = useState({ email: "", password: "" });
// // // // //   const [error, setError] = useState("");
// // // // //   const [loading, setLoading] = useState(false);
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     setForm({ ...form, [e.target.name]: e.target.value });
// // // // //     setError("");
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setError("");
// // // // //     setLoading(true);

// // // // //     // --- MOCK API CALL: Accept any credentials ---
// // // // //     setTimeout(() => {
// // // // //       setLoading(false);
// // // // //       localStorage.setItem("isAuthenticated", "true"); // For protected routes
// // // // //       toast.success(`${role} logged in successfully!`);
// // // // //       setTimeout(() => {
// // // // //         if (role === "Student") navigate("/student");
// // // // //         else if (role === "Faculty") navigate("/faculty");
// // // // //         else if (role === "Admin") navigate("/admin");
// // // // //       }, 1200);
// // // // //     }, 1000);

// // // // //     // --- REAL API CALL (Uncomment to use Axios) ---
// // // // //     /*
// // // // //     try {
// // // // //       const res = await axios.post("https://your-backend-url.com/api/login", {
// // // // //         email: form.email,
// // // // //         password: form.password,
// // // // //         role,
// // // // //       });
// // // // //       localStorage.setItem("isAuthenticated", "true");
// // // // //       toast.success(`${role} logged in successfully!`);
// // // // //       setTimeout(() => {
// // // // //         if (role === "Student") navigate("/student");
// // // // //         else if (role === "Faculty") navigate("/faculty");
// // // // //         else if (role === "Admin") navigate("/admin");
// // // // //       }, 1200);
// // // // //     } catch (err) {
// // // // //       setError(err.response?.data?.message || err.message || "Login failed");
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //     */
// // // // //   };

// // // // //   return (
// // // // //     <form onSubmit={handleSubmit} className="space-y-5">
// // // // //       <input
// // // // //         type="email"
// // // // //         name="email"
// // // // //         placeholder="Email Address"
// // // // //         value={form.email}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // // //         required
// // // // //       />
// // // // //       <input
// // // // //         type="password"
// // // // //         name="password"
// // // // //         placeholder="Password"
// // // // //         value={form.password}
// // // // //         onChange={handleChange}
// // // // //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// // // // //         required
// // // // //       />
// // // // //       {error && (
// // // // //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// // // // //       )}
// // // // //       <button
// // // // //         type="submit"
// // // // //         disabled={loading}
// // // // //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// // // // //       >
// // // // //         {loading ? "Logging in..." : "Login"}
// // // // //       </button>
// // // // //     </form>
// // // // //   );
// // // // // }
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function LoginForm({ role }) {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //     setError("");
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     // Basic validation
// //     if (!form.email || !form.password) {
// //       setError("Please fill in all fields.");
// //       setLoading(false);
// //       return;
// //     }

// //     // Mock API delay and always succeed
// //     setTimeout(() => {
// //       setLoading(false);
// //       localStorage.setItem("isAuthenticated", "true"); // Set auth flag for protected routes

// //       // Directly redirect by role (no alert)
// //       if (role === "Student") navigate("/student");
// //       else if (role === "Faculty") navigate("/faculty");
// //       else if (role === "Admin") navigate("/admin");
// //     }, 1000);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-5">
// //       <input
// //         type="email"
// //         name="email"
// //         placeholder="Email Address"
// //         value={form.email}
// //         onChange={handleChange}
// //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// //         required
// //       />
// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="Password"
// //         value={form.password}
// //         onChange={handleChange}
// //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// //         required
// //       />
// //       {error && (
// //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// //       )}
// //       <button
// //         type="submit"
// //         disabled={loading}
// //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// //       >
// //         {loading ? "Logging in..." : "Login"}
// //       </button>
// //     </form>
// //   );
// // }
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";

// // export default function LoginForm({ role }) {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const [error, setError] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //     setError("");
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setError("");
// //     setLoading(true);

// //     // Basic validation
// //     if (!form.email || !form.password) {
// //       setError("Please fill in all fields.");
// //       setLoading(false);
// //       return;
// //     }

// //     // Mock API delay and always succeed
// //     setTimeout(() => {
// //       setLoading(false);
// //       localStorage.setItem("isAuthenticated", "true"); // Set auth flag for protected routes

// //       // Directly redirect by role (no alert)
// //       if (role === "Student") navigate("/student");
// //       else if (role === "Faculty") navigate("/faculty");
// //       else if (role === "Admin") navigate("/admin");
// //     }, 1000);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-5">
// //       <input
// //         type="email"
// //         name="email"
// //         placeholder="Email Address"
// //         value={form.email}
// //         onChange={handleChange}
// //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// //         required
// //       />
// //       <input
// //         type="password"
// //         name="password"
// //         placeholder="Password"
// //         value={form.password}
// //         onChange={handleChange}
// //         className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
// //         required
// //       />
// //       {error && (
// //         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
// //       )}
// //       <button
// //         type="submit"
// //         disabled={loading}
// //         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
// //       >
// //         {loading ? "Logging in..." : "Login"}
// //       </button>
// //     </form>
// //   );
// // }
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function LoginForm({ role }) {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//     setError("");
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     if (!form.email || !form.password) {
//       setError("Please fill in all fields.");
//       setLoading(false);
//       return;
//     }

//     // Simulate delay and validate user
//     setTimeout(() => {
//       setLoading(false);

//       const users = JSON.parse(localStorage.getItem("users") || "[]");
//       const matchedUser = users.find(
//         (u) =>
//           u.email === form.email &&
//           u.password === form.password &&
//           u.role === role
//       );

//       if (!matchedUser) {
//         setError("Invalid credentials or role mismatch.");
//         return;
//       }

//       localStorage.setItem("isAuthenticated", "true");
//       localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

//       // Redirect by role
//       if (role === "Student") navigate("/student");
//       else if (role === "Faculty") navigate("/faculty");
//       else if (role === "Admin") navigate("/admin");
//     }, 1000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-5">
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
//       {error && (
//         <div className="text-red-500 text-sm font-medium text-center">{error}</div>
//       )}
//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full py-2 rounded-lg font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg hover:from-blue-600 hover:to-pink-600 active:scale-95 transition-all duration-200 ring-2 ring-transparent hover:ring-blue-300 tracking-wider"
//       >
//         {loading ? "Logging in..." : "Login"}
//       </button>
//     </form>
//   );
// }
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockLogin } from "../services/mockAuthService"; // import your mock service

export default function LoginForm({ role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const user = await mockLogin(email, password, role);
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      // Direct redirect, no alert
      if (role === "Student") navigate("/student");
      else if (role === "Faculty") navigate("/faculty");
      else if (role === "Admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      setError("Mock login failed.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError("");
        }}
        className="w-full px-4 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError("");
        }}
        className="w-full px-4 py-2 border rounded"
        required
      />
      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
    </form>
  );
}
