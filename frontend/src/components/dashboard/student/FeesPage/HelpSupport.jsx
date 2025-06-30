import React from 'react';

import { FaQuestionCircle, FaCommentDots, FaCalendarAlt } from 'react-icons/fa';

const HelpSupport = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Help & Support</h3>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-blue-200 text-blue-500 rounded-full p-2 mr-2">
            <FaQuestionCircle />
          </div>
          <div>
            <p className="text-sm font-medium">Payment FAQs</p>
            <p className="text-xs text-gray-500">Find answers to common questions about fees and payments.</p>
            <a href="#" className="text-indigo-500 hover:text-indigo-700 mt-2 block">View FAQs</a>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="bg-blue-200 text-blue-500 rounded-full p-2 mr-2">
            <FaCommentDots />
          </div>
          <div>
            <p className="text-sm font-medium">Contact Finance Office</p>
            <p className="text-xs text-gray-500">Need help with your payment? Reach out to our finance team.</p>
            <div className="mt-2">
              <span className="mr-2"><i className="fas fa-envelope"></i></span>
              <a href="mailto:finance@campuscore.edu" className="text-indigo-500 hover:text-indigo-700">finance@campuscore.edu</a>
            </div>
            <div>
              <span className="mr-2"><i className="fas fa-phone"></i></span>
              <a href="tel:+15551234567" className="text-indigo-500 hover:text-indigo-700">(555) 123-4567</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <div className="bg-yellow-200 text-yellow-500 rounded-full p-2 mr-2">
            <FaCalendarAlt />
          </div>
          <div>
            <p className="text-sm font-medium">Schedule an Appointment</p>
            <p className="text-xs text-gray-500">Book a meeting with a financial advisor for personalized help.</p>
            <a href="#" className="text-indigo-500 hover:text-indigo-700 mt-2 block">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;