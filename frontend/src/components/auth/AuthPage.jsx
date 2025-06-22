import React from 'react';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-3xl shadow-lg flex overflow-hidden w-[900px] max-w-full">
        {/* Left Section */}
        <div className="w-1/2 relative bg-blue-600 flex flex-col justify-center items-center text-white p-8">
          <img src="/camplogo.jpg" alt="Campus Core Logo" className="w-40" />
          <h2 className="text-2xl font-bold mb-2">Welcome to Your Academic Journey</h2>
          <p className="mb-8 text-center text-sm">
            Manage your courses, track your schedule, and stay organized throughout your academic term with our comprehensive management platform.
          </p>
          <div className="flex space-x-4 mb-8">
            <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
              <span className="text-2xl mb-2">📚</span>
              <span className="text-xs">Course Management</span>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
              <span className="text-2xl mb-2">⏰</span>
              <span className="text-xs">Schedule Tracking</span>
            </div>
            <div className="flex flex-col items-center bg-white bg-opacity-20 rounded-lg p-4 w-28">
              <span className="text-2xl mb-2">📈</span>
              <span className="text-xs">Progress Analytics</span>
            </div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-4 text-xs italic">
            As a professor, I appreciate how simple it is to communicate schedule changes to my students. The platform is intuitive and saves me hours each week.
            <br />
            <span className="font-semibold">Dr. Michael T., Engineering Faculty</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-10 flex flex-col justify-center relative z-10">
          {/* Your login/register form */}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
