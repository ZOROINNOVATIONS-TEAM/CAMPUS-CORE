import React from "react";
import { Link } from "react-router-dom";
import { faGoogle, faMicrosoft, faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-600">

            <div className="mt-8">
            <p className="text-center text-sm text-gray-600">or continue with</p>
            <div className="flex justify-center space-x-4 mt-2">
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 text-red-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faMicrosoft} className="w-5 h-5 text-blue-500" />
                </button>
                <button className="p-2 border border-gray-300 rounded-full">
                <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
                </button>
            </div>
            </div>
        <p className="mt-4"></p>
          New admin?{" "}
          <Link to="/admin/register" className="font-medium text-blue-600 hover:text-blue-500">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
