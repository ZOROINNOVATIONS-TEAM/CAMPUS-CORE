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
      alert("Passwords do not match!");
      return;
    }
    console.log('Signup Data:', formData);
  };

  return (
    <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-gray-600">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"

            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
           className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"

            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            required
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="confirmPassword" className="block text-gray-600">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            required
          />
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-blue-800">
          Sign up
        </button>
      </form>

      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-sm text-gray-600">Sign up with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="p-3 rounded-sm" aria-label="Sign up with Google">🟥</button>
        <button className="p-3 rounded-sm" aria-label="Sign up with Twitter">🟦</button>
        <button className="p-3 rounded-sm" aria-label="Sign up with GitHub">⬛</button>
      </div>

      <p className="text-xs text-center sm:px-6 text-gray-600">
        Already have an account?{' '}
        <span className="underline text-gray-800 cursor-pointer">Login</span>
      </p>
    </div>
  );
}

export default SignupForm;
