import { useState } from 'react';
import RoleTabs from './RoleTabs';
import SocialLogin from './SocialLogin';

export default function AuthForm() {
  const [role, setRole] = useState('Student');
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <RoleTabs role={role} setRole={setRole} />
      <div className="text-center text-gray-600 mb-6">
        Logging in as <span className="font-semibold">{role.toLowerCase()}</span>
      </div>
      <div className="flex mb-6">
        <button
          className={`w-1/2 py-2 border-b-2 ${isLogin ? 'border-blue-600 text-blue-600' : 'border-gray-200 text-gray-400'}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-2 border-b-2 ${!isLogin ? 'border-blue-600 text-blue-600' : 'border-gray-200 text-gray-400'}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your student ID or email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-2 flex items-center justify-between">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <a href="#" className="text-xs text-blue-500 ml-2">Forgot password?</a>
        </div>
        <div className="mb-4 flex items-center">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember" className="text-xs">Remember me</label>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mb-4">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-2 text-xs text-gray-400">or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>
      <SocialLogin />
    </div>
  );
}
