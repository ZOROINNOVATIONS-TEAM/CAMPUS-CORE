import React from "react";

const QuickPay = () => {
  return (
    <div className="bg-[#2b2f3d] p-6 rounded-xl">
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md font-semibold">
        Pay Outstanding Balance
      </button>

      <div className="mt-6">
        <p className="text-sm font-semibold mb-2">Saved Payment Methods</p>
        <div className="bg-black p-3 rounded-lg mb-2 text-sm">💳 Visa ending in 4582 <br /> <span className="text-gray-400">Expires 09/27</span></div>
        <div className="bg-black p-3 rounded-lg mb-4 text-sm">🏦 Bank Account <br /> <span className="text-gray-400">Chase - ****6769</span></div>
        <button className="w-full border border-gray-500 text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700">
          + Add Payment Method
        </button>
      </div>

      <div className="mt-6">
        <button className="w-full bg-black text-white py-2 px-4 rounded-md text-sm mb-2 hover:bg-gray-700">
          ⬇ Download All Receipts
        </button>
        <button className="w-full bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-700">
          🧾 Print Fee Statement
        </button>
      </div>
    </div>
  );
};

export default QuickPay;
