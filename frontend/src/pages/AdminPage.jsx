import React from "react";

const AdminPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-blue-50 flex flex-col justify-center items-center px-10 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Your Academic Journey
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Manage your courses, track your schedule, and stay organized
          throughout your academic term with our comprehensive management platform.
        </p>
        <div className="mt-8 text-left">
          <p className="italic font-semibold text-gray-700 mb-1">Dr. Michael T., Engineering Faculty</p>
          <p className="text-gray-600">
            As a professor, I appreciate how simple it is to communicate schedule changes
            to my students. The platform is intuitive and saves me hours each week.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 flex flex-col justify-center px-10">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">Logging in as Admin</h3>

        <button className="bg-red-500 text-white py-2 px-4 rounded mb-4 hover:bg-red-600">
          Log In with Google
        </button>

        <div className="mb-4 text-gray-500">or continue with</div>

        <input
          type="email"
          placeholder="Admin ID or Email"
          className="border rounded w-full px-4 py-2 mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="border rounded w-full px-4 py-2 mb-3"
        />

        <div className="flex justify-between items-center mb-4">
          <label className="text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
          Login
        </button>

        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
