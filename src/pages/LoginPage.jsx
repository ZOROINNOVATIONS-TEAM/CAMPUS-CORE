
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
