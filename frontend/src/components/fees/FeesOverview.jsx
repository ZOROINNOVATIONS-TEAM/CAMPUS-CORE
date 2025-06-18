import React from "react";

const FeesOverview = () => {
  return (
    <div className="bg-[#2b2f3d] rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Fees Overview</h2>
        <p className="text-gray-400">Spring Semester 2025</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-600 p-4 rounded-xl text-center">
          <p className="text-sm">Total Fees</p>
          <h3 className="text-2xl font-bold">$12,500</h3>
          <p className="text-xs">For Spring Semester 2025</p>
        </div>
        <div className="bg-green-600 p-4 rounded-xl text-center">
          <p className="text-sm">Amount Paid</p>
          <h3 className="text-2xl font-bold">$8,750</h3>
          <p className="text-xs">70% of total fees</p>
        </div>
        <div className="bg-yellow-600 p-4 rounded-xl text-center">
          <p className="text-sm">Pending Balance</p>
          <h3 className="text-2xl font-bold">$3,750</h3>
          <p className="text-xs">Due by July 15, 2025</p>
        </div>
        <div className="bg-purple-700 p-4 rounded-xl text-center">
          <p className="text-sm">Last Payment</p>
          <h3 className="text-2xl font-bold">May 15</h3>
          <p className="text-xs">$2,500 via Credit Card</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Payment History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-400">
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
                <tr key={idx} className="border-t border-gray-700">
                  <td>{item.date}</td>
                  <td className="text-blue-400">{item.id}</td>
                  <td>{item.desc}</td>
                  <td>{item.amount}</td>
                  <td>{item.mode}</td>
                  <td>
                    <span className="bg-green-700 px-2 py-1 rounded text-xs">Completed</span>
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