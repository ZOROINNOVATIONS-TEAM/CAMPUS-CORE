import React from "react";

const FeesOverview = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Fees Overview</h2>
        <p className="text-gray-600">Spring Semester 2025</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-xl text-center">
          <p className="text-sm text-blue-800">Total Fees</p>
          <h3 className="text-2xl font-bold text-blue-900">$12,500</h3>
          <p className="text-xs text-blue-600">For Spring Semester 2025</p>
        </div>
        <div className="bg-green-100 p-4 rounded-xl text-center">
          <p className="text-sm text-green-800">Amount Paid</p>
          <h3 className="text-2xl font-bold text-green-900">$8,750</h3>
          <p className="text-xs text-green-600">70% of total fees</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-xl text-center">
          <p className="text-sm text-yellow-800">Pending Balance</p>
          <h3 className="text-2xl font-bold text-yellow-900">$3,750</h3>
          <p className="text-xs text-yellow-700">Due by July 15, 2025</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-xl text-center">
          <p className="text-sm text-purple-800">Last Payment</p>
          <h3 className="text-2xl font-bold text-purple-900">May 15</h3>
          <p className="text-xs text-purple-700">$2,500 via Credit Card</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  date: "May 13, 2025",
                  id: "#TXN-78945612",
                  desc: "Tuition Fee (Installment 3)",
                  amount: "$2,500",
                  mode: "Credit Card",
                },
                {
                  date: "April 10, 2025",
                  id: "#TXN-78943258",
                  desc: "Tuition Fee (Installment 2)",
                  amount: "$3,750",
                  mode: "Bank Transfer",
                },
                {
                  date: "February 5, 2025",
                  id: "#TXN-78923112",
                  desc: "Tuition Fee (Installment 1)",
                  amount: "$3,750",
                  mode: "Credit Card",
                },
                {
                  date: "January 20, 2025",
                  id: "#TXN-78922112",
                  desc: "Registration Fee",
                  amount: "$500",
                  mode: "UPI",
                },
              ].map((item, idx) => (
                <tr key={idx} className="border-t border-gray-200">
                  <td>{item.date}</td>
                  <td className="text-blue-600">{item.id}</td>
                  <td>{item.desc}</td>
                  <td>{item.amount}</td>
                  <td>{item.mode}</td>
                  <td>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeesOverview;
