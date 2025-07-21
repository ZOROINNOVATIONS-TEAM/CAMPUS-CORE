import React from 'react';

const QuickPay = () => {
  return (
    <div className="bg-white dark:bg-indigo-900 shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-2">Quick Pay</h3>
      <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300 w-full mb-3">
        Pay Outstanding Balance
      </button>
      <div className="mb-2">
        <div className="bg-white dark:bg-slate-500 shadow-md rounded-lg p-2 ">
          <p className="text-sm text-center">Visa ending in 4582</p>
        </div>
      </div>
      <button className="bg-white border border-gray-300 text-indigo-500 px-4 py-2 rounded-md hover:bg-indigo-100 transition duration-300 w-full">
        + Add Payment Method
      </button>
    </div>
  );
};

export default QuickPay;