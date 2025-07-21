import React, { useState } from "react";
import { FiSearch, FiCreditCard, FiDownload, FiPrinter } from "react-icons/fi";
import { FaCheckCircle, FaRegClock, FaRegCreditCard, FaUniversity } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

// Dummy payment methods for demonstration
const initialPaymentMethods = [
  { icon: <FiCreditCard />, label: "Visa ending in 4562" },
  { icon: <BsBank />, label: "Bank Account" }
];

const feesOverview = [
  { title: "Total Fees", value: "$12,500", color: "bg-blue-50 text-blue-600" },
  { title: "Amount Paid", value: "$8,750", color: "bg-green-50 text-green-600" },
  { title: "Pending Balance", value: "$3,750", color: "bg-yellow-50 text-yellow-600" },
  { title: "Last Payment", value: "May 15", color: "bg-purple-50 text-purple-600" }
];

const initialPaymentHistory = [
  {
    date: "May 15, 2025",
    id: "7789-5666821",
    desc: "Tuition Fee Installment 3",
    amount: "$2,500",
    mode: "Credit Card",
    status: "Completed",
    link: "#"
  },
  {
    date: "April 10, 2025",
    id: "7789-9854623",
    desc: "Tuition Fee Installment 2",
    amount: "$2,500",
    mode: "Bank Transfer",
    status: "Completed",
    link: "#"
  },
  {
    date: "February 5, 2025",
    id: "7789-7963418",
    desc: "Tuition Fee Installment 1",
    amount: "$3,750",
    mode: "Credit Card",
    status: "Completed",
    link: "#"
  },
  {
    date: "January 23, 2025",
    id: "7789-7853272",
    desc: "Registration Fee",
    amount: "$500",
    mode: "UPI",
    status: "Completed",
    link: "#"
  },
];

const upcomingDues = [
  {
    title: "Tuition Fee (Final Installment)",
    due: "Due by July 19, 2025",
    desc: "Late payment fee of $50 applies after due date",
    amount: "$3,750",
    action: "Pay Now"
  },
  {
    title: "Library Fee",
    due: "Due by August 15, 2025",
    desc: "Annual library access fee",
    amount: "$120",
    action: "Pay Later"
  },
  {
    title: "Computer Lab Access",
    due: "Due by August 25, 2025",
    desc: "Semester computer lab access fee",
    amount: "$85",
    action: "Pay Later"
  }
];

const helpSupport = [
  {
    title: "Payment FAQs",
    desc: "Find answers to common questions about fees and payments.",
    link: "#",
    linkText: "View FAQs"
  },
  {
    title: "Contact Finance Office",
    desc: "Reach out to our support team if you need help or to report an issue.",
    link: "mailto:finance@campuscore.edu",
    linkText: "finance@campuscore.edu"
  },
  {
    title: "Schedule an Appointment",
    desc: "Book a meeting with a financial advisor for personalized support.",
    link: "#",
    linkText: "Book Appointment"
  }
];

export default function StudentFees() {
  const [search, setSearch] = useState("");
  const [paymentMethods, setPaymentMethods] = useState(initialPaymentMethods);
  const [newMethod, setNewMethod] = useState("");
  const [paymentHistory, setPaymentHistory] = useState(initialPaymentHistory);

  // Filter payment history by search
  const filteredPaymentHistory = paymentHistory.filter(
    item =>
      item.id.includes(search) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
  );

  // Add Payment Method (demo, not persistent)
  function handleAddPaymentMethod() {
    if (newMethod.trim()) {
      setPaymentMethods([
        ...paymentMethods,
        { icon: <FaUniversity />, label: newMethod }
      ]);
      setNewMethod("");
    }
  }

  // Dummy pay action
  function handlePayDue(idx) {
    alert(`Payment initiated for: ${upcomingDues[idx].title}`);
  }

  // Dummy download/print actions
  function handleDownloadReceipts() {
    alert("Receipts downloaded!");
  }
  function handlePrintStatement() {
    alert("Fee statement sent to printer!");
  }

  return (
    <div className="min-h-screen bg-[#ededed] p-0 flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Fees Overview and Payment History */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-6">
              <span className="font-semibold text-lg">Fees Overview</span>
              <span className="text-xs text-gray-500">
                Spring Semester 2025
              </span>
            </div>
            {/* Overview Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {feesOverview.map((item, idx) => (
                <div key={idx} className={`flex flex-col gap-1 items-center px-3 py-2 rounded-lg shadow-sm ${item.color}`}>
                  <span className="font-bold text-xl">{item.value}</span>
                  <span className="text-xs">{item.title}</span>
                </div>
              ))}
            </div>
            {/* Payment History Table */}
            <div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <span className="font-semibold text-base">Payment History</span>
                <div className="flex items-center gap-2 relative">
                  <input
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="pl-8 pr-2 py-1.5 rounded-md border border-gray-200 text-xs focus:ring-[#3666F6] focus:border-[#3666F6] w-[150px]"
                    placeholder="Search Transaction..."
                  />
                  <FiSearch className="absolute left-2 top-2 text-gray-400" />
                  <select className="bg-gray-100 border border-gray-200 rounded-md px-2 py-1 text-xs font-medium">
                    <option>All Modes</option>
                    <option>Credit Card</option>
                    <option>Bank Transfer</option>
                    <option>UPI</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="text-gray-400">
                      <th className="py-1">Date</th>
                      <th className="py-1">Transaction ID</th>
                      <th className="py-1">Description</th>
                      <th className="py-1">Amount</th>
                      <th className="py-1">Mode</th>
                      <th className="py-1">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPaymentHistory.map((item, idx) => (
                      <tr key={idx} className="border-b last:border-none">
                        <td className="py-2">{item.date}</td>
                        <td className="py-2">
                          <a
                            href={item.link}
                            className="text-[#3666F6] hover:underline font-semibold"
                          >
                            {item.id}
                          </a>
                        </td>
                        <td className="py-2">{item.desc}</td>
                        <td className="py-2">{item.amount}</td>
                        <td className="py-2">{item.mode}</td>
                        <td className="py-2">
                          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full font-semibold">
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
                Show <span className="font-bold">10</span> entries
                <span className="ml-auto flex gap-1">
                  <button className="px-2 py-0.5 rounded bg-gray-100">{"<"}</button>
                  <button className="px-2 py-0.5 rounded bg-gray-100">{">"}</button>
                </span>
              </div>
            </div>
          </div>
          {/* Quick Pay */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="font-semibold text-lg mb-4">Quick Pay</div>
            <button className="w-full bg-[#3666F6] hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow mb-4 transition"
              onClick={() => alert("Outstanding balance payment initiated!")}>
              Pay Outstanding Balance
            </button>
            <div className="font-semibold text-base mb-2">Saved Payment Methods</div>
            <div className="flex flex-col gap-2 mb-4">
              {paymentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg"
                >
                  <span className="text-xl">{method.icon}</span>
                  <span className="text-xs font-semibold">{method.label}</span>
                </div>
              ))}
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  value={newMethod}
                  onChange={e => setNewMethod(e.target.value)}
                  className="px-2 py-1 text-xs border rounded"
                  placeholder="Add payment method"
                />
                <button
                  className="text-[#3666F6] text-xs font-semibold hover:underline"
                  onClick={handleAddPaymentMethod}
                >
                  + Add Payment Method
                </button>
              </div>
            </div>
            <div className="font-semibold text-base mb-2">Receipts & Documents</div>
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200"
                onClick={handleDownloadReceipts}>
                <FiDownload />
                Download All Receipts
              </button>
              <button className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-gray-200"
                onClick={handlePrintStatement}>
                <FiPrinter />
                Print Fee Statement
              </button>
            </div>
          </div>
        </div>
        {/* Upcoming Dues and Help & Support */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {/* Upcoming Dues */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-lg">Upcoming Dues</span>
              <a href="#" className="text-[#3666F6] text-sm font-medium hover:underline">
                View All
              </a>
            </div>
            <div className="flex flex-col gap-3">
              {upcomingDues.map((due, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-1 px-4 py-3 rounded-lg border ${idx === 0 ? "bg-yellow-50 border-yellow-100" : "bg-gray-50 border-gray-200"}`}
                >
                  <div className="flex items-center gap-2">
                    <FaRegClock className="text-yellow-500" />
                    <span className="font-semibold text-sm">{due.title}</span>
                  </div>
                  <div className="text-xs text-gray-400">{due.due}</div>
                  <div className="text-xs text-gray-400">{due.desc}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-bold text-lg">{due.amount}</span>
                    <button
                      className={`px-6 py-2 rounded-lg font-semibold text-xs shadow-sm ${
                        due.action === "Pay Now"
                          ? "bg-[#3666F6] text-white"
                          : "bg-gray-200 text-gray-700"
                      }`}
                      onClick={() => handlePayDue(idx)}
                    >
                      {due.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Help & Support */}
          <div className="bg-white rounded-xl shadow p-6 flex-1">
            <div className="font-semibold text-lg mb-4">Help & Support</div>
            <ul className="flex flex-col gap-4">
              {helpSupport.map((item, idx) => (
                <li key={idx}>
                  <div className="font-semibold text-sm text-[#3666F6]">{item.title}</div>
                  <div className="text-xs text-gray-500 mb-1">{item.desc}</div>
                  <a
                    href={item.link}
                    className="text-xs text-[#3666F6] font-semibold hover:underline"
                  >
                    {item.linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}