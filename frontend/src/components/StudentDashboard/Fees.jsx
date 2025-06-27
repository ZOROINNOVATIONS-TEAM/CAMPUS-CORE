import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Fees = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 text-gray-800">
      {/* Fees Overview Section */}
      <div className="bg-white p-6 rounded-xl shadow col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Fees Overview</h2>
          <p className="text-sm text-gray-500">Spring Semester 2025</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Fees", value: "$12,500", color: "bg-blue-100 text-blue-600" },
            { label: "Amount Paid", value: "$8,750", color: "bg-green-100 text-green-600" },
            { label: "Pending Balance", value: "$3,750", color: "bg-yellow-100 text-yellow-600" },
            { label: "Last Payment", value: "May 15", color: "bg-purple-100 text-purple-600" },
          ].map((item, i) => (
            <div key={i} className={`p-4 rounded-xl ${item.color}`}>
              <p className="text-sm font-semibold">{item.label}</p>
              <p className="text-lg font-bold">{item.value}</p>
            </div>
          ))}
        </div>

        <h3 className="text-md font-semibold mb-3">Payment History</h3>
        <div className="overflow-auto">
          <table className="w-full text-sm border-t mb-6">
            <thead>
              <tr className="text-left text-gray-600 bg-gray-50">
                <th className="p-2">Date</th>
                <th className="p-2">Transaction ID</th>
                <th className="p-2">Description</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Mode</th>
                <th className="p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { date: "May 15, 2025", id: "7TX-76945218", desc: "Tuition Fee (Installment 3)", amount: "$2500", mode: "Credit Card", status: "Completed" },
                { date: "Apr 10, 2025", id: "7TX-76945238", desc: "Tuition Fee (Installment 2)", amount: "$3750", mode: "Bank Transfer", status: "Completed" },
                { date: "Feb 6, 2025", id: "7TX-76932112", desc: "Tuition Fee (Installment 1)", amount: "$2500", mode: "Credit Card", status: "Completed" },
                { date: "Jan 20, 2025", id: "7TX-76932112", desc: "Registration Fee", amount: "$500", mode: "UPI", status: "Completed" },
              ].map((row, i) => (
                <tr key={i} className="border-b">
                  <td className="p-2">{row.date}</td>
                  <td className="p-2 text-blue-600">{row.id}</td>
                  <td className="p-2">{row.desc}</td>
                  <td className="p-2">{row.amount}</td>
                  <td className="p-2">{row.mode}</td>
                  <td className="p-2">
                    <span className="text-green-600 font-medium">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Column - Quick Pay */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Quick Pay</h3>
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium mb-4 hover:bg-blue-700 transition">
          Pay Outstanding Balance
        </button>
        <div className="space-y-2 mb-4">
          <p className="text-sm font-semibold">Saved Payment Methods</p>
          <div className="bg-gray-100 p-2 rounded">💳 Visa ending in 4582</div>
          <div className="bg-gray-100 p-2 rounded">🏦 Bank Account (****1270)</div>
          <button className="text-sm text-blue-600 underline">+ Add Payment Method</button>
        </div>
        <div className="border-t pt-4">
          <button className="block text-sm text-blue-600 underline mb-2">⬇️ Download All Receipts</button>
          <button className="block text-sm text-blue-600 underline">🖨️ Print Fee Statement</button>
        </div>
      </div>

      {/* Left Column - Upcoming Dues */}
      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Upcoming Dues</h3>
          <button className="text-sm text-blue-600 underline">View All</button>
        </div>
        {[
          { title: "Tuition Fee (Final Installment)", due: "Due by July 15, 2025", amount: "$3,750", action: "Pay Now" },
          { title: "Library Fee", due: "Due by August 10, 2025", amount: "$120", action: "Pay Later" },
          { title: "Computer Lab Access", due: "Due by August 20, 2025", amount: "$85", action: "Pay Later" },
        ].map((item, i) => (
          <div key={i} className="flex justify-between items-center border p-3 rounded-lg mb-3 hover:bg-gray-50">
            <div>
              <p className="font-semibold text-sm">{item.title}</p>
              <p className="text-xs text-gray-600">{item.due}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{item.amount}</p>
              <button className="text-xs text-blue-600 underline">{item.action}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column - Help & Support */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="text-lg font-bold mb-4">Help & Support</h3>
        <div className="text-sm space-y-3">
          <div>
            <p className="font-semibold">Payment FAQs</p>
            <a href="#" className="text-blue-600 underline">View FAQs</a>
          </div>
          <div>
            <p className="font-semibold">Contact Finance Office</p>
            <p>📧 finance@campuscore.edu</p>
            <p>📞 (555) 123-4567</p>
          </div>
          <div>
            <p className="font-semibold">Schedule an Appointment</p>
            <a href="#" className="text-blue-600 underline">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;