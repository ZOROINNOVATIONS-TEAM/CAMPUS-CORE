import React from "react";
import { Link } from "react-router-dom";
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdminRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Register</h2>
        <form className="space-y-4">
          {/* Add College Name Field */}
          <div>
            <label htmlFor="collegeName" className="block text-sm font-medium text-gray-700 mb-1">
              College Name
            </label>
            <input
              type="text"
              id="collegeName"
              name="collegeName"
              placeholder="Enter your college name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your admin email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Register
          </button>
        </form>

            <div className="mt-6">
            <p className="text-center text-sm text-gray-600">or continue with</p>
            <div className="flex justify-center space-x-4 mt-2">
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-4 text-red-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-4 text-blue-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faApple} className="w-5 h-4" />
                </button>
            </div>
            </div>


        <p className="mt-6 text-center text-sm text-gray-600">
          Already registered?{" "}
          <Link to="/admin/login" className="font-medium text-blue-600 hover:text-blue-500">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminRegister;

