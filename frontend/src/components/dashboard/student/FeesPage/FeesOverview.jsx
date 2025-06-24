import React from 'react';

const FeesOverview = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Fees Overview</h3>
      <div className="flex justify-between gap-4">
        <div className="w-1/3 text-center bg-green-100 p-4 rounded-lg">
          <p className="text-xl font-bold">Total Fees</p>
          <p className="text-sm">₹12,500</p>
        </div>
        <div className="w-1/3 text-center bg-green-200 p-4 rounded-lg">
          <p className="text-xl font-bold">Amount Paid</p>
          <p className="text-sm">₹8,750</p>
        </div>
        <div className="w-1/3 text-center bg-red-100 p-4 rounded-lg">
          <p className="text-xl font-bold">Pending Balance</p>
          <p className="text-sm">₹3,750</p>
        </div>
      </div>
      <p className="mt-2 text-sm">Last Payment: May 15</p>
    </div>
  );
};

export default FeesOverview;