
// import React from "react";
// import LoginForm from "../components/LoginForm";

// export default function LoginPage({ setActiveTab, role }) {
//   return (
//     <div>
//       <h4 className="text-1xl font-semibold text-center mb-6">Logging in as {role}</h4>
      
//       {/* Use existing login logic */}
//       <LoginForm role={role} />

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

export default function LoginPage({ setActiveTab, role, setLoading, setError }) {
  const handleLogin = async (credentials) => {
    setLoading(true);
    setError(null);

    try {
      // Replace this with real login logic (e.g., axios.post...)
      await fakeLoginApi(credentials);
      // redirect or update UI
    } catch (err) {
      const msg = err?.response?.data?.message || "Login failed. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h4 className="text-1xl font-semibold text-center mb-6">Logging in as {role}</h4>

      <LoginForm role={role} onSubmit={handleLogin} />

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

// Fake API for demonstration
const fakeLoginApi = (creds) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      creds.email === "admin@example.com" && creds.password === "admin"
        ? resolve()
        : reject(new Error("Invalid credentials"));
    }, 1000);
  });
