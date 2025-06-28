import React from "react";

const UpcomingDues = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Dues</h2>
        <a href="#" className="text-blue-600 text-sm">View All</a>
      </div>
      <div className="space-y-4">
        <div className="bg-yellow-100 p-4 rounded-xl text-yellow-900">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Tuition Fee (Final Installment)</h4>
              <p className="text-sm">Due by July 15, 2025</p>
              <p className="text-xs mt-1">Late payment fee of $50 applies after due date</p>
            </div>
            <button className="bg-yellow-700 text-white font-semibold px-4 py-2 rounded">Pay Now</button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Library Fee</h4>
              <p className="text-sm text-gray-600">Due by August 10, 2025</p>
              <p className="text-xs">Annual library access fee</p>
            </div>
            <button className="bg-gray-300 text-black px-4 py-2 rounded">Pay Later</button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold">Computer Lab Access</h4>
              <p className="text-sm text-gray-600">Due by August 20, 2025</p>
              <p className="text-xs">Semester computer lab access fee</p>
            </div>
            <button className="bg-gray-300 text-black px-4 py-2 rounded">Pay Later</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingDues;
