import React, { useEffect, useState } from "react";

export function WelcomeBanner({ studentName, studentId }) {
  const [greeting, setGreeting] = useState("Welcome");
  const [currentTime, setCurrentTime] = useState(new Date());

  // Set greeting based on time of day
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting("Good morning");
      else if (hour < 18) setGreeting("Good afternoon");
      else setGreeting("Good evening");
    };
    updateGreeting();

    // Optional: Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format date and time
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const formattedTime = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <div className="mb-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-2">
        {greeting}, {studentName}!
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Student ID: {studentId} | Spring Semester 2025
      </p>

      {/* Date and Time */}
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {formattedDate} | {formattedTime}
      </p>
    </div>
  );
}

export default WelcomeBanner;