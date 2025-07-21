
// import React from "react";

// const Fees = () => {
//   return (
//     <section className="p-6 md:p-10 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Spring Semester 2025</h2>
//       </div>

//       {/* Top Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         {/* Fees Overview */}
//         <div className="col-span-2 bg-white p-6 rounded-xl shadow border">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Fees Overview</h3>

//           {/* Summary Boxes */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//             <div className="bg-blue-50 p-4 rounded-lg border">
//               <p className="text-xs text-gray-600">Total Fees</p>
//               <p className="text-xl font-semibold text-blue-700">$12,500</p>
//               <p className="text-xs text-gray-500 mt-1">For Spring Semester 2025</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg border">
//               <p className="text-xs text-gray-600">Amount Paid</p>
//               <p className="text-xl font-semibold text-green-600">$8,750</p>
//               <p className="text-xs text-gray-500 mt-1">70% of total fee</p>
//             </div>
//             <div className="bg-yellow-50 p-4 rounded-lg border">
//               <p className="text-xs text-gray-600">Pending Balance</p>
//               <p className="text-xl font-semibold text-yellow-600">$3,750</p>
//               <p className="text-xs text-gray-500 mt-1">Due by July 15, 2025</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg border">
//               <p className="text-xs text-gray-600">Last Payment</p>
//               <p className="text-xl font-semibold text-purple-700">May 15</p>
//               <p className="text-xs text-gray-500 mt-1">$2,500 via Credit Card</p>
//             </div>
//           </div>

//           {/* Payment History Table */}
//           <h4 className="text-sm font-semibold text-gray-700 mb-2">Payment History</h4>
//           <div className="overflow-x-auto">
//             <table className="min-w-full text-sm">
//               <thead className="bg-gray-100 text-gray-600">
//                 <tr>
//                   <th className="py-2 px-3 text-left">Date</th>
//                   <th className="py-2 px-3 text-left">Transaction ID</th>
//                   <th className="py-2 px-3 text-left">Description</th>
//                   <th className="py-2 px-3 text-left">Amount</th>
//                   <th className="py-2 px-3 text-left">Mode</th>
//                   <th className="py-2 px-3 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white">
//                 {[
//                   {
//                     date: "May 15, 2025",
//                     txn: "#77804127",
//                     desc: "Tuition Fee Installment 3",
//                     amt: "$2,500",
//                     mode: "Credit Card",
//                     status: "Completed",
//                   },
//                   {
//                     date: "April 10, 2025",
//                     txn: "#78483534",
//                     desc: "Tuition Fee Installment 2",
//                     amt: "$2,750",
//                     mode: "Bank Transfer",
//                     status: "Completed",
//                   },
//                   {
//                     date: "February 1, 2025",
//                     txn: "#77820112",
//                     desc: "Tuition Fee Installment 1",
//                     amt: "$2,500",
//                     mode: "Credit Card",
//                     status: "Completed",
//                   },
//                   {
//                     date: "January 20, 2025",
//                     txn: "#76822112",
//                     desc: "Registration Fee",
//                     amt: "$500",
//                     mode: "UPI",
//                     status: "Completed",
//                   },
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="py-2 px-3">{row.date}</td>
//                     <td className="py-2 px-3 text-blue-600 underline">{row.txn}</td>
//                     <td className="py-2 px-3">{row.desc}</td>
//                     <td className="py-2 px-3">{row.amt}</td>
//                     <td className="py-2 px-3">{row.mode}</td>
//                     <td className="py-2 px-3">
//                       <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
//                         {row.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Quick Pay */}
//         <div className="bg-white p-6 rounded-xl shadow border">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Pay</h3>

//           <button className="bg-blue-600 text-white text-sm font-medium w-full py-2 rounded-md mb-4 hover:bg-blue-700">
//             Pay Outstanding Balance
//           </button>

//           <h4 className="text-sm font-semibold text-gray-700 mb-2">Saved Payment Methods</h4>
//           <div className="space-y-2 mb-4">
//             <div className="border p-2 rounded-md text-sm text-gray-700">💳 Visa ending in 4582</div>
//             <div className="border p-2 rounded-md text-sm text-gray-700">🏦 Bank Account</div>
//           </div>

//           <button className="text-blue-600 text-sm underline mb-4">+ Add Payment Method</button>

//           <h4 className="text-sm font-semibold text-gray-700 mt-4 mb-2">Receipts & Documents</h4>
//           <div className="space-y-2 text-sm text-blue-600">
//             <button className="underline">📄 Download All Receipts</button>
//             <button className="underline">📄 Print Fee Statement</button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         {/* Upcoming Dues */}
//         <div className="bg-white p-6 rounded-xl shadow border">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Dues</h3>
//           <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-md flex justify-between items-center mb-3">
//             <div>
//               <p className="font-medium text-yellow-800">Tuition Fee (Final Installment)</p>
//               <p className="text-xs text-yellow-700">Due by July 15, 2025</p>
//               <p className="text-xs text-red-500 mt-1">Late payment fee of $50 applies after due date</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold text-gray-800 text-lg">$3,750</p>
//               <button className="text-sm text-blue-600 underline">Pay Now</button>
//             </div>
//           </div>

//           <div className="space-y-2 text-sm text-gray-700">
//             <div className="flex justify-between">
//               <span>📚 Library Fee</span>
//               <span>$120 <button className="text-blue-600 ml-2 underline">Pay Later</button></span>
//             </div>
//             <div className="flex justify-between">
//               <span>🧪 Computer Lab Access</span>
//               <span>$85 <button className="text-blue-600 ml-2 underline">Pay Later</button></span>
//             </div>
//           </div>

//           <div className="text-right mt-4">
//             <button className="text-sm text-blue-600 underline">View All</button>
//           </div>
//         </div>

//         {/* Help & Support */}
//         <div className="bg-white p-6 rounded-xl shadow border">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">Help & Support</h3>
//           <div className="text-sm text-blue-600 space-y-3">
//             <div>❓ <span className="underline">Payment FAQs</span></div>
//             <div>📞 <span className="underline">Contact Finance Office</span><br /><span className="text-gray-600">finance@campuscore.edu | (123) 987-4567</span></div>
//             <div>📅 <span className="underline">Schedule an Appointment</span></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Fees;
import React from "react";

const Fees = () => {
  return (
    <section className="p-2 sm:p-4 md:p-10 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-200">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">Spring Semester 2025</h2>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Fees Overview */}
        <div className="col-span-2 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Fees Overview</h3>

          {/* Summary Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg border dark:border-blue-800">
              <p className="text-xs text-gray-600 dark:text-gray-200">Total Fees</p>
              <p className="text-xl font-semibold text-blue-700 dark:text-blue-200">$12,500</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">For Spring Semester 2025</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg border dark:border-green-800">
              <p className="text-xs text-gray-600 dark:text-gray-200">Amount Paid</p>
              <p className="text-xl font-semibold text-green-600 dark:text-green-300">$8,750</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">70% of total fee</p>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg border dark:border-yellow-800">
              <p className="text-xs text-gray-600 dark:text-gray-200">Pending Balance</p>
              <p className="text-xl font-semibold text-yellow-600 dark:text-yellow-300">$3,750</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">Due by July 15, 2025</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg border dark:border-purple-800">
              <p className="text-xs text-gray-600 dark:text-gray-200">Last Payment</p>
              <p className="text-xl font-semibold text-purple-700 dark:text-purple-400">May 15</p>
              <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">$2,500 via Credit Card</p>
            </div>
          </div>

          {/* Payment History Table */}
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Payment History</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                <tr>
                  <th className="py-2 px-3 text-left">Date</th>
                  <th className="py-2 px-3 text-left">Transaction ID</th>
                  <th className="py-2 px-3 text-left">Description</th>
                  <th className="py-2 px-3 text-left">Amount</th>
                  <th className="py-2 px-3 text-left">Mode</th>
                  <th className="py-2 px-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {[
                  {
                    date: "May 15, 2025",
                    txn: "#77804127",
                    desc: "Tuition Fee Installment 3",
                    amt: "$2,500",
                    mode: "Credit Card",
                    status: "Completed",
                  },
                  {
                    date: "April 10, 2025",
                    txn: "#78483534",
                    desc: "Tuition Fee Installment 2",
                    amt: "$2,750",
                    mode: "Bank Transfer",
                    status: "Completed",
                  },
                  {
                    date: "February 1, 2025",
                    txn: "#77820112",
                    desc: "Tuition Fee Installment 1",
                    amt: "$2,500",
                    mode: "Credit Card",
                    status: "Completed",
                  },
                  {
                    date: "January 20, 2025",
                    txn: "#76822112",
                    desc: "Registration Fee",
                    amt: "$500",
                    mode: "UPI",
                    status: "Completed",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-t dark:border-gray-700">
                    <td className="py-2 px-3">{row.date}</td>
                    <td className="py-2 px-3 text-blue-600 dark:text-blue-400 underline">{row.txn}</td>
                    <td className="py-2 px-3">{row.desc}</td>
                    <td className="py-2 px-3">{row.amt}</td>
                    <td className="py-2 px-3">{row.mode}</td>
                    <td className="py-2 px-3">
                      <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Pay */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Quick Pay</h3>

          <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white text-sm font-medium w-full py-2 rounded-md mb-4 transition">
            Pay Outstanding Balance
          </button>

          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Saved Payment Methods</h4>
          <div className="space-y-2 mb-4">
            <div className="border dark:border-gray-700 p-2 rounded-md text-sm text-gray-700 dark:text-gray-200">💳 Visa ending in 4582</div>
            <div className="border dark:border-gray-700 p-2 rounded-md text-sm text-gray-700 dark:text-gray-200">🏦 Bank Account</div>
          </div>

          <button className="text-blue-600 dark:text-blue-300 text-sm underline mb-4">+ Add Payment Method</button>

          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-4 mb-2">Receipts & Documents</h4>
          <div className="space-y-2 text-sm text-blue-600 dark:text-blue-400">
            <button className="underline">📄 Download All Receipts</button>
            <button className="underline">📄 Print Fee Statement</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Upcoming Dues */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Upcoming Dues</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900 border border-yellow-300 dark:border-yellow-600 p-4 rounded-md flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
            <div>
              <p className="font-medium text-yellow-800 dark:text-yellow-200">Tuition Fee (Final Installment)</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300">Due by July 15, 2025</p>
              <p className="text-xs text-red-500 dark:text-red-300 mt-1">Late payment fee of $50 applies after due date</p>
            </div>
            <div className="text-right mt-2 sm:mt-0">
              <p className="font-semibold text-gray-800 dark:text-gray-100 text-lg">$3,750</p>
              <button className="text-sm text-blue-600 dark:text-blue-300 underline">Pay Now</button>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
            <div className="flex justify-between">
              <span>📚 Library Fee</span>
              <span>$120 <button className="text-blue-600 dark:text-blue-300 ml-2 underline">Pay Later</button></span>
            </div>
            <div className="flex justify-between">
              <span>🧪 Computer Lab Access</span>
              <span>$85 <button className="text-blue-600 dark:text-blue-300 ml-2 underline">Pay Later</button></span>
            </div>
          </div>

          <div className="text-right mt-4">
            <button className="text-sm text-blue-600 dark:text-blue-300 underline">View All</button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Help & Support</h3>
          <div className="text-sm text-blue-600 dark:text-blue-400 space-y-3">
            <div>❓ <span className="underline cursor-pointer">Payment FAQs</span></div>
            <div>
              📞 <span className="underline cursor-pointer">Contact Finance Office</span><br />
              <span className="text-gray-600 dark:text-gray-300">finance@campuscore.edu | (123) 987-4567</span>
            </div>
            <div>📅 <span className="underline cursor-pointer">Schedule an Appointment</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
