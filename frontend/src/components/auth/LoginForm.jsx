import { useState } from 'react';
import { BsMicrosoft } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { HiEye, HiEyeOff, HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

const LoginForm = ({ userType }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    showPassword: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submission logic here
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
          {userType === 'student' ? 'Student ID or Email' : 'Email Address'}
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <HiOutlineMail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full pl-10 pr-3 py-2.5 border rounded-xl focus:outline-none focus:border-[#3666F6] focus:ring-1 focus:ring-[#3666F6]/20`}
            placeholder={userType === 'student' ? 'Enter your student ID or email' : 'Enter your email address'}
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="password" className="block text-sm text-gray-600">
            Password
          </label>
          <a href="#" className="text-sm text-[#3666F6] hover:text-blue-700">
            Forgot password?
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type={formData.showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full pl-10 pr-10 py-2.5 border rounded-xl focus:outline-none focus:border-[#3666F6] focus:ring-1 focus:ring-[#3666F6]/20`}
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setFormData(prev => ({ ...prev, showPassword: !prev.showPassword }))}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
          >
            {formData.showPassword ? (
              <HiEyeOff className="h-5 w-5" />
            ) : (
              <HiEye className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="remember"
          name="rememberMe"
          checked={formData.rememberMe}
          onChange={handleChange}
          className="w-4 h-4 border border-gray-300 rounded text-[#3666F6] focus:ring-[#3666F6]/20"
        />
        <label htmlFor="remember" className="text-sm text-gray-600">
          Remember me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#3666F6] text-white py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Login
      </button>

      <div className="mt-6">
        <p className="text-center text-sm text-gray-500 mb-4">or continue with</p>
        <div className="flex justify-center space-x-4">
          <button
            type="button"
            className="p-2.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <FcGoogle className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="p-2.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <BsMicrosoft className="w-5 h-5 text-[#00A4EF]" />
          </button>
          {/* <button
            type="button"
            className="p-2.5 border border-gray-200 rounded hover:bg-gray-50 transition-colors flex items-center justify-center"
          >
            <FaApple className="w-5 h-5 text-gray-900" />
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
