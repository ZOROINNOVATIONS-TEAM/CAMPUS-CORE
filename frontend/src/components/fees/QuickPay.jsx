import React from "react";

const QuickPay = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold">
        Pay Outstanding Balance
      </button>

      <div className="mt-6">
        <p className="text-sm font-semibold mb-2">Saved Payment Methods</p>
        <div className="bg-gray-100 p-3 rounded-lg mb-2 text-sm">💳 Visa ending in 4582 <br /> <span className="text-gray-500">Expires 09/27</span></div>
        <div className="bg-gray-100 p-3 rounded-lg mb-4 text-sm">🏦 Bank Account <br /> <span className="text-gray-500">Chase - ****6769</span></div>
        <button className="w-full border border-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm hover:bg-gray-200">
          + Add Payment Method
        </button>
      </div>

      <div className="mt-6">
        <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md text-sm mb-2 hover:bg-gray-200">
          ⬇ Download All Receipts
        </button>
        <button className="w-full bg-gray-100 text-gray-800 py-2 px-4 rounded-md text-sm hover:bg-gray-200">
          🧾 Print Fee Statement
        </button>
      </div>
    </div>
  );
};

export default QuickPay;
