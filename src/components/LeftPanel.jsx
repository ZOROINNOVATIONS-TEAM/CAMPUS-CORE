import React, { useRef, useState } from 'react';
import logo from '../assets/logo.png';

function LeftPanel() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = 160 + 16;
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  return (
    <div className="w-1/2 h-screen bg-blue-600 text-white p-10 flex flex-col justify-between overflow-hidden">
      
      {/* Top section */}
      <div>
        <div className="flex justify-center items-center">
          <img src={logo} alt="Campus Core Logo" className="w-20 mb-6 rounded-full" />
        </div>

        <p className="text-lg mb-6 text-center">
          Welcome to Your Academic Journey <br />
          Manage courses, track schedule, and stay organized.
        </p>

        {/* Scrollable feature cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex space-x-4 w-max">
            {[
              { icon: '📚', label: 'Course Management' },
              { icon: '🕒', label: 'Schedule Tracking' },
              { icon: '📊', label: 'Progress Analytics' },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-blue-500 w-40 h-40 p-4 rounded-lg flex flex-col justify-center items-center text-center shrink-0"
              >
                <span className="text-3xl">{item.icon}</span>
                <span className="mt-2 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`inline-block w-3 h-3 rounded-full ${
                activeIndex === i ? 'bg-white' : 'bg-gray-400'
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Quote section at bottom */}
      <div className="mt-6 text-sm text-center">
        <p>
          "The platform is intuitive and saves me hours." <br />
          <span className="text-xs">– Dr. Michael T., Engineering Faculty</span>
        </p>
      </div>
    </div>
  );
}

export default LeftPanel;
