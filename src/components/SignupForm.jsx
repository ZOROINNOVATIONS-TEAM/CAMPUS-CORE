import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match! ❌");
      return;
    }
    alert("Signup successful! 🎉 Now you can login.");
  };

  return (
    <div className="w-full bg-gray-100 p-4  max-w-sm space-y-2 text-gray-800 mt-4">
      <h1 className="text-lg font-semibold text-center">Sign up</h1>
      <form onSubmit={handleSubmit} className="space-y-2 text-sm">
        <div>
          <label className="block text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded border-gray-300 focus:border-blue-500"
            placeholder="Username"
          />
        </div>

        <div>
          <label className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded border-gray-300 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded border-gray-300 focus:border-blue-500"
            placeholder="Password"
          />
        </div>

        <div>
          <label className="block text-gray-600">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full px-2 py-1 border rounded border-gray-300 focus:border-blue-500"
            placeholder="Confirm Password"
          />
        </div>

        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-blue-800">
          Sign Up
        </button>
            <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="p-3 rounded-sm">🟥</button>
        <button className="p-3 rounded-sm">🟦</button>
        <button className="p-3 rounded-sm">⬛</button>
      </div>

      <p className="text-xs text-center sm:px-6 text-gray-600">
        Don't have an account? <a href="#" className="underline text-gray-800">Sign up</a>
      </p>
      </form>
    </div>
  );
}

export default SignupForm;
