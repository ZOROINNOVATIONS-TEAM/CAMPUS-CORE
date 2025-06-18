import React from "react";
import {
  CreditCard,
  Banknote,
  Download,
  Printer,
  HelpCircle,
  Calendar,
  Mail,
  Phone,
  DollarSign,
  BadgeCheck,
  Hourglass,
  CalendarCheck,
  WalletCards,
  FileText,
} from "lucide-react";

const FeesTab = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Fees Overview */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-blue-500" /> Fees Overview
              </h2>
              <p className="text-gray-500 text-sm">Spring Semester 2025</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                {
                  label: "Total Fees",
                  value: "$12,500",
                  desc: "for Spring Semester 2025",
                  icon: <DollarSign className="w-6 h-6 text-blue-600" />,
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  label: "Amount Paid",
                  value: "$8,750",
                  desc: "70% of total paid",
                  icon: <BadgeCheck className="w-6 h-6 text-green-600" />,
                  color: "bg-green-100 text-green-700",
                },
                {
                  label: "Pending Balance",
                  value: "$3,750",
                  desc: "Due by July 15, 2025",
                  icon: <Hourglass className="w-6 h-6 text-yellow-600" />,
                  color: "bg-yellow-100 text-yellow-700",
                },
                {
                  label: "Last Payment",
                  value: "May 15",
                  desc: "$3,000 via Credit Card",
                  icon: <CalendarCheck className="w-6 h-6 text-purple-600" />,
                  color: "bg-purple-100 text-purple-700",
                },
              ].map((item, i) => (
                <div key={i} className={`rounded-lg p-4 ${item.color} shadow-sm`}>
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h3 className="text-md font-semibold">{item.label}</h3>
                  <p className="text-lg font-bold">{item.value}</p>
                  <p className="text-xs">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Payment History */}
            <div className="mt-8">
              <h3 className="text-md font-semibold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-600" /> Payment History
              </h3>
              <div className="overflow-x-auto rounded-lg shadow">
                <table className="min-w-full text-sm bg-white">
                  <thead className="bg-gray-50 text-gray-700">
                    <tr>
                      {["Date", "Transaction ID", "Description", "Amount", "Mode", "Status"].map((th, i) => (
                        <th key={i} className="px-4 py-3 border-b">{th}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {[
                      ["May 13, 2025", "PTXN-98214512", "Tuition Fee Installment 3", "$3,000", "Credit Card", "Completed"],
                      ["April 13, 2025", "PTXN-79823451", "Tuition Fee Installment 2", "$2,750", "Bank Transfer", "Completed"],
                      ["Feb 5, 2025", "PTXN-19282292", "Tuition Fee Installment 1", "$2,500", "Credit Card", "Completed"],
                      ["Jan 20, 2025", "PTXN-19823112", "Registration Fee", "$500", "UPI", "Completed"]
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-gray-50 border-t">
                        {row.slice(0, 5).map((cell, j) => (
                          <td key={j} className="px-4 py-3">{cell}</td>
                        ))}
                        <td className="px-4 py-3">
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">Completed</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Upcoming Dues */}
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-semibold flex items-center gap-2">
                <Hourglass className="w-5 h-5 text-yellow-600" /> Upcoming Dues
              </h3>
              <button className="text-blue-600 text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Tuition Fee (Final Installment)",
                  due: "Due by July 15, 2025",
                  amount: "$3,750",
                  button: "Pay Now",
                  lateFee: "Late fee of $50 applies after due date",
                },
                {
                  title: "Library Fee",
                  due: "Due by August 10, 2025",
                  amount: "$120",
                  button: "Pay Later",
                },
                {
                  title: "Computer Lab Access",
                  due: "Due by August 20, 2025",
                  amount: "$85",
                  button: "Pay Later",
                },
              ].map((item, i) => (
                <div key={i} className="border p-4 rounded-md shadow-sm bg-gray-50">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.due}</p>
                      {item.lateFee && <p className="text-xs text-red-500 mt-1">{item.lateFee}</p>}
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">{item.amount}</p>
                      <button className={`mt-1 px-4 py-1 rounded text-sm font-medium shadow ${item.button === "Pay Now"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        }`}>
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* ✅ Updated Quick Pay Section */}
          <div className="bg-white rounded-xl shadow p-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <WalletCards className="w-5 h-5 text-blue-600" /> Quick Pay
            </h3>

            {/* Outstanding Balance Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm space-y-2">
              <p className="text-sm text-gray-700">You have an outstanding balance:</p>
              <p className="text-xl font-bold text-blue-700">$3,750</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded font-medium shadow hover:bg-blue-700">
                Pay Now
              </button>
            </div>

            {/* Saved Methods */}
            <div className="space-y-3">
              <div className="bg-white border border-gray-200 p-3 rounded-lg flex items-center gap-3 shadow-sm">
                <CreditCard className="w-5 h-5 text-blue-600" />
                <span>Visa ending in 4582</span>
              </div>
              <div className="bg-white border border-gray-200 p-3 rounded-lg flex items-center gap-3 shadow-sm">
                <Banknote className="w-5 h-5 text-green-600" />
                <span>Bank Account - ****0928</span>
              </div>
              <button className="text-blue-600 text-sm hover:underline">+ Add Payment Method</button>
            </div>

            {/* Utilities */}
            <div className="space-y-2 pt-2 border-t mt-4">
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center gap-2 shadow-sm">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Download All Receipts</span>
              </div>
              <div className="bg-gray-50 border p-3 rounded-lg flex items-center gap-2 shadow-sm">
                <Printer className="w-4 h-4 text-gray-600" />
                <span>Print Fee Statement</span>
              </div>
            </div>
          </div>

          {/* Help & Support */}
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <HelpCircle className="text-indigo-600 w-5 h-5" /> Help & Support
            </h3>

            <div className="space-y-4 text-sm">
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg shadow-sm flex items-start gap-3">
                <HelpCircle className="text-yellow-500 w-5 h-5" />
                <div>
                  <p className="font-medium">Payment FAQs</p>
                  <a href="#" className="text-blue-600 hover:underline">View FAQs</a>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg shadow-sm flex items-start gap-3">
                <Mail className="text-green-500 w-5 h-5" />
                <div>
                  <p className="font-medium">Contact Finance Office</p>
                  <p>Email: <a className="text-blue-600 hover:underline" href="mailto:finance@campuscore.edu">finance@campuscore.edu</a></p>
                  <p>Phone: <a className="text-blue-600 hover:underline" href="tel:+1234567890">+1 (555) 123-4567</a></p>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg shadow-sm flex items-start gap-3">
                <Calendar className="text-purple-500 w-5 h-5" />
                <div>
                  <p className="font-medium">Schedule an Appointment</p>
                  <a href="#" className="text-blue-600 hover:underline">Book Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesTab;
