
import React from "react";

const HelpSupport = () => {
  return (
    <div className="bg-[#2b2f3d] p-6 rounded-xl text-sm">
      <h2 className="text-lg font-semibold mb-4">Help & Support</h2>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">Payment FAQs</h4>
          <p className="text-gray-400">Find answers to common questions about fees and payments.</p>
          <a href="#" className="text-blue-400">View FAQs</a>
        </div>
        <div>
          <h4 className="font-semibold">Contact Finance Office</h4>
          <p className="text-gray-400">Need help with your payment? Reach out to our finance team.</p>
          <p className="text-blue-300">finance@campuscore.edu</p>
          <p className="text-blue-300">(555) 123-4567</p>
        </div>
        <div>
          <h4 className="font-semibold">Schedule an Appointment</h4>
          <p className="text-gray-400">Book a meeting with a financial advisor for personalized help.</p>
          <a href="#" className="text-blue-400">Book Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
