
// import React, { useState } from "react";

// export default function RegisterPage({ setActiveTab, role }) {
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
//     // Optionally, switch to login tab after registration:
//     // setActiveTab("login");
//   };

//   return (
//     <div>
//       <h3 className="text-1xl font-semibold text-center mb-6">Register as {role}</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none"
//           required
//         />
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
//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           className="w-full px-4 py-2 border rounded focus:outline-none"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//         >
//           Register
//         </button>
//       </form>
//       <div className="text-center mt-4">
//         <button
//           type="button"
//           className="text-blue-600 underline"
//           onClick={() => setActiveTab("login")}
//         >
//           Already have an account? Login
//         </button>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function RegisterPage({ setActiveTab, role, setLoading, setError }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // Simulated API delay and success/failure logic
      await fakeRegisterApi(form);

      // After success
      alert(`${role} Registered Successfully!`);
      setActiveTab("login");
    } catch (err) {
      const msg = err?.message || "Registration failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
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

// Simulated async registration API
const fakeRegisterApi = (formData) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.email === "already@taken.com") {
        reject(new Error("Email already registered"));
      } else {
        resolve("Registered");
      }
    }, 1200);
  });
