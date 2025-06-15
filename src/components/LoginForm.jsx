import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Dummy login check
    if (formData.username === 'student' && formData.password === '1234') {
      localStorage.setItem('token', 'dummy-auth-token'); // pretend to save JWT
      alert('Login successful! ✅');
      console.log('Redirect to Dashboard'); // will use useNavigate in Day 4
    } else {
      alert('❌ Invalid credentials. Try again.');
    }
  };

  return (
    <div className="w-full max-w-md p-4 space-y-3 rounded-xl bg-gray-50 text-gray-800">
      <h1 className="text-2xl font-bold text-center">Login</h1>
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
          <label htmlFor="password" className="block text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 focus:border-violet-600"
            required
          />
          <div className="flex justify-end text-xs text-gray-600">
            <a href="#">Forgot Password?</a>
          </div>
        </div>
        <button type="submit" className="block w-full p-3 text-center rounded-sm text-white bg-blue-800">
          Sign in
        </button>
      </form>

      {/* social login UI */}
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
    </div>
  );
}

export default LoginForm;
