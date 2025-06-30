import React from 'react';
import { FaBook, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const UpcomingDues = () => {
  const dues = [
    {
      title: "Tuition Fee (Final Installment)",
      amount: "₹3,750",
      dueDate: "July 15, 2025",
      lateFee: "Late payment fee of ₹50 applies after due date",
      icon: <FaGraduationCap />,
    },
    {
      title: "Library Fee",
      amount: "₹120",
      dueDate: "August 10, 2025",
      lateFee: "Annual library access fee",
      icon: <FaBook />,
    },
    {
      title: "Computer Lab Access Fee",
      amount: "₹85",
      dueDate: "August 20, 2025",
      lateFee: "Semester computer lab access fee",
      icon: <FaLaptopCode />,
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Upcoming Dues</h3>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 float-right mb-80">
        View All
      </button>
      <div>
        {dues.map((due) => (
          <div key={due.title} className="bg-yellow-50 p-4 mb-4 rounded-lg flex items-start justify-between">
            <div className="flex items-start space-x-4">
              {due.icon && <span className="text-2xl text-green-500">{due.icon}</span>}
              <div>
                <p className="text-sm font-medium">{due.title}</p>
                <p className="text-xs text-gray-500">Due by {due.dueDate}</p>
                <p className="text-xs text-red-500">{due.lateFee}</p>
              </div>
            </div>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300">
              Pay Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingDues;