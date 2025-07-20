// // import React from "react";

// // const Fees = () => {
// //   return (
// //     <section className="p-8 bg-gray-100 min-h-screen">
// //       {/* Header Section */}
// //       <div className="mb-6">
// //         <h2 className="text-xl font-semibold text-gray-800">Fees Dashboard</h2>
// //         <p className="text-sm text-gray-500">Spring Semester 2025</p>
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
// //         {/* Fees Overview */}
// //         <div className="col-span-2 bg-white rounded-xl p-6 shadow border">
// //           <h3 className="font-semibold text-gray-800 mb-4">Fees Overview</h3>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
// //             <div className="bg-gray-50 p-4 rounded-md border">
// //               <p className="text-sm text-gray-500">Total Fees</p>
// //               <p className="font-semibold text-blue-700 text-lg">$12,500</p>
// //             </div>
// //             <div className="bg-gray-50 p-4 rounded-md border">
// //               <p className="text-sm text-gray-500">Amount Paid</p>
// //               <p className="font-semibold text-green-600 text-lg">$8,750</p>
// //             </div>
// //             <div className="bg-gray-50 p-4 rounded-md border">
// //               <p className="text-sm text-gray-500">Pending</p>
// //               <p className="font-semibold text-yellow-600 text-lg">$3,750</p>
// //             </div>
// //             <div className="bg-gray-50 p-4 rounded-md border">
// //               <p className="text-sm text-gray-500">Last Payment</p>
// //               <p className="font-semibold text-gray-800 text-lg">May 15</p>
// //             </div>
// //           </div>

// //           {/* Payment History Table */}
// //           <h4 className="text-sm font-semibold text-gray-700 mb-2">Payment History</h4>
// //           <div className="overflow-x-auto">
// //             <table className="min-w-full text-sm">
// //               <thead className="bg-gray-100 text-gray-600">
// //                 <tr>
// //                   <th className="py-2 px-3 text-left">Date</th>
// //                   <th className="py-2 px-3 text-left">Transaction</th>
// //                   <th className="py-2 px-3 text-left">Description</th>
// //                   <th className="py-2 px-3 text-left">Amount</th>
// //                   <th className="py-2 px-3 text-left">Mode</th>
// //                   <th className="py-2 px-3 text-left">Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white">
// //                 {[
// //                   {
// //                     date: "Mar 12, 2025",
// //                     txn: "#112398",
// //                     desc: "Spring Term Payment",
// //                     amt: "$3000",
// //                     mode: "Card",
// //                     status: "Completed",
// //                   },
// //                   {
// //                     date: "Feb 20, 2025",
// //                     txn: "#112350",
// //                     desc: "Lab Fee",
// //                     amt: "$500",
// //                     mode: "UPI",
// //                     status: "Completed",
// //                   },
// //                   {
// //                     date: "Jan 12, 2025",
// //                     txn: "#112300",
// //                     desc: "Library Charge",
// //                     amt: "$250",
// //                     mode: "Cash",
// //                     status: "Pending",
// //                   },
// //                 ].map((row, i) => (
// //                   <tr key={i} className="border-t">
// //                     <td className="py-2 px-3">{row.date}</td>
// //                     <td className="py-2 px-3">{row.txn}</td>
// //                     <td className="py-2 px-3">{row.desc}</td>
// //                     <td className="py-2 px-3">{row.amt}</td>
// //                     <td className="py-2 px-3">{row.mode}</td>
// //                     <td className="py-2 px-3">
// //                       <span
// //                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
// //                           row.status === "Completed"
// //                             ? "bg-green-100 text-green-700"
// //                             : "bg-yellow-100 text-yellow-700"
// //                         }`}
// //                       >
// //                         {row.status}
// //                       </span>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //         {/* Quick Pay */}
// //         <div className="bg-white p-6 rounded-xl shadow border">
// //           <h3 className="font-semibold text-gray-800 mb-4">Quick Pay</h3>
// //           <button className="bg-blue-600 text-white text-sm font-medium w-full py-2 rounded-md mb-4 hover:bg-blue-700">
// //             💳 Pay Outstanding Balance
// //           </button>

// //           <h4 className="text-sm text-gray-700 font-semibold mb-2">
// //             Saved Payment Methods
// //           </h4>
// //           <ul className="space-y-2 mb-4">
// //             <li className="text-sm text-gray-600 border p-2 rounded-md">Visa ending in 4622</li>
// //             <li className="text-sm text-gray-600 border p-2 rounded-md">Bank Account</li>
// //           </ul>

// //           <button className="text-blue-600 text-sm mb-2 underline">
// //             + Add Payment Method
// //           </button>

// //           <h4 className="text-sm text-gray-700 font-semibold mt-4 mb-2">Receipts & Docs</h4>
// //           <div className="space-y-2 text-sm text-blue-600">
// //             <button className="underline">📄 Download All Receipts</button>
// //             <button className="underline">📄 Print Fee Statement</button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Section */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         {/* Upcoming Dues */}
// //         <div className="bg-white p-6 rounded-xl shadow border">
// //           <h3 className="font-semibold text-gray-800 mb-4">Upcoming Dues</h3>
// //           <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-md flex justify-between items-center mb-3">
// //             <div>
// //               <p className="font-medium text-yellow-800">Tuition Fee 2nd Installment</p>
// //               <p className="text-sm text-yellow-700">Due by July 15, 2025</p>
// //             </div>
// //             <div className="text-right">
// //               <p className="font-semibold text-gray-800">$3,750</p>
// //               <button className="text-sm text-blue-600 underline">Pay Now</button>
// //             </div>
// //           </div>
// //           <ul className="text-sm text-gray-600 space-y-2">
// //             <li>📚 Library Fee - $100</li>
// //             <li>🧪 Computer Lab Access - $85</li>
// //           </ul>
// //           <div className="text-right mt-4">
// //             <button className="text-blue-600 underline text-sm">View All</button>
// //           </div>
// //         </div>

// //         {/* Help & Support */}
// //         <div className="bg-white p-6 rounded-xl shadow border">
// //           <h3 className="font-semibold text-gray-800 mb-4">Help & Support</h3>
// //           <ul className="text-sm text-blue-600 space-y-2">
// //             <li>📘 Payment FAQs</li>
// //             <li>📞 Contact Finance Office</li>
// //             <li>📅 Schedule an Appointment</li>
// //             <li>📄 Download Statement</li>
// //           </ul>
// //         </div>
// //       </div>

// //       {/* Footer Notes */}
// //       <footer className="mt-10 text-sm text-gray-500 text-center">
// //         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
// //       </footer>
// //     </section>
// //   );
// // };

// // export default Fees;
// import React from "react";

// const Fees = () => {
//   return (
//     <section className="p-8 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Fees Dashboard</h2>
//         <p className="text-sm text-gray-500">Spring Semester 2025</p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//         {/* Fees Overview */}
//         <div className="col-span-2 bg-white rounded-xl p-6 shadow border">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="font-semibold text-gray-800 text-lg">Fees Overview</h3>
//             <p className="text-sm text-gray-500">Spring Semester 2025</p>
//           </div>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
//             <div className="bg-blue-50 p-4 rounded-lg border">
//               <p className="text-sm text-gray-500">Total Fees</p>
//               <p className="font-bold text-blue-700 text-xl">$12,500</p>
//               <p className="text-xs text-gray-500">for Spring Semester 2025</p>
//             </div>
//             <div className="bg-green-50 p-4 rounded-lg border">
//               <p className="text-sm text-gray-500">Amount Paid</p>
//               <p className="font-bold text-green-700 text-xl">$8,750</p>
//               <p className="text-xs text-gray-500">70% of total fee</p>
//             </div>
//             <div className="bg-yellow-50 p-4 rounded-lg border">
//               <p className="text-sm text-gray-500">Pending Balance</p>
//               <p className="font-bold text-yellow-700 text-xl">$3,750</p>
//               <p className="text-xs text-gray-500">Due by July 15, 2025</p>
//             </div>
//             <div className="bg-purple-50 p-4 rounded-lg border">
//               <p className="text-sm text-gray-500">Last Payment</p>
//               <p className="font-bold text-purple-700 text-xl">May 15</p>
//               <p className="text-xs text-gray-500">$2,500 via Credit Card</p>
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
//                     txn: "#TXN-7894132",
//                     desc: "Tuition Fee Installment 3",
//                     amt: "$2,500",
//                     mode: "Credit Card",
//                     status: "Complete",
//                   },
//                   {
//                     date: "April 10, 2025",
//                     txn: "#TXN-7843852",
//                     desc: "Tuition Fee Installment 2",
//                     amt: "$2,750",
//                     mode: "Bank Transfer",
//                     status: "Complete",
//                   },
//                   {
//                     date: "February 1, 2025",
//                     txn: "#TXN-7800211",
//                     desc: "Tuition Fee Installment 1",
//                     amt: "$2,500",
//                     mode: "Credit Card",
//                     status: "Complete",
//                   },
//                   {
//                     date: "January 20, 2025",
//                     txn: "#TXN-7692212",
//                     desc: "Registration Fee",
//                     amt: "$500",
//                     mode: "UPI",
//                     status: "Complete",
//                   },
//                 ].map((row, i) => (
//                   <tr key={i} className="border-t">
//                     <td className="py-2 px-3">{row.date}</td>
//                     <td className="py-2 px-3 text-blue-600 underline">{row.txn}</td>
//                     <td className="py-2 px-3">{row.desc}</td>
//                     <td className="py-2 px-3">{row.amt}</td>
//                     <td className="py-2 px-3">{row.mode}</td>
//                     <td className="py-2 px-3">
//                       <span
//                         className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                           row.status === "Complete"
//                             ? "bg-green-100 text-green-700"
//                             : "bg-yellow-100 text-yellow-700"
//                         }`}
//                       >
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
//           <h3 className="font-semibold text-gray-800 mb-4">Quick Pay</h3>
//           <button className="bg-blue-600 text-white text-sm font-medium w-full py-2 rounded-md mb-4 hover:bg-blue-700">
//             Pay Outstanding Balance
//           </button>

//           <h4 className="text-sm text-gray-700 font-semibold mb-2">
//             Saved Payment Methods
//           </h4>
//           <ul className="space-y-2 mb-4">
//             <li className="text-sm text-gray-600 border p-2 rounded-md">Visa ending in 4582</li>
//             <li className="text-sm text-gray-600 border p-2 rounded-md">Bank Account</li>
//           </ul>

//           <button className="text-blue-600 text-sm mb-2 underline">
//             + Add Payment Method
//           </button>

//           <h4 className="text-sm text-gray-700 font-semibold mt-4 mb-2">Receipts & Documents</h4>
//           <div className="space-y-2 text-sm text-blue-600">
//             <button className="underline">Download All Receipts</button>
//             <button className="underline">Print Fee Statement</button>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Upcoming Dues */}
//         <div className="bg-white p-6 rounded-xl shadow border">
//           <h3 className="font-semibold text-gray-800 mb-4">Upcoming Dues</h3>
//           <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-md flex justify-between items-center mb-3">
//             <div>
//               <p className="font-medium text-yellow-800">Tuition Fee Final Installment</p>
//               <p className="text-sm text-yellow-700">Due by July 15, 2025</p>
//             </div>
//             <div className="text-right">
//               <p className="font-semibold text-gray-800">$3,750</p>
//               <button className="text-sm text-blue-600 underline">Pay Now</button>
//             </div>
//           </div>
//           <div className="space-y-2">
//             <div className="flex justify-between items-center border p-2 rounded-md">
//               <p className="text-sm text-gray-600">Library Fee</p>
//               <div className="flex items-center space-x-4">
//                 <p className="text-sm font-medium text-gray-800">$120</p>
//                 <button className="text-sm text-blue-600 underline">Pay Later</button>
//               </div>
//             </div>
//             <div className="flex justify-between items-center border p-2 rounded-md">
//               <p className="text-sm text-gray-600">Computer Lab Access</p>
//               <div className="flex items-center space-x-4">
//                 <p className="text-sm font-medium text-gray-800">$85</p>
//                 <button className="text-sm text-blue-600 underline">Pay Later</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Help & Support */}
//         <div className="bg-white p-6 rounded-xl shadow border">
//           <h3 className="font-semibold text-gray-800 mb-4">Help & Support</h3>
//           <ul className="text-sm text-blue-600 space-y-3">
//             <li><span className="font-medium">Payment FAQs</span><br /><span className="text-gray-500">Find answers to common questions about fees and payments.</span></li>
//             <li><span className="font-medium">Contact Finance Office</span><br /><span className="text-gray-500">finance@campuscore.edu | (123) 123-4567</span></li>
//             <li><span className="font-medium">Schedule an Appointment</span><br /><span className="text-gray-500">Book a meeting with a financial advisor for personalized help.</span></li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Notes */}
//       <footer className="mt-10 text-sm text-gray-500 text-center">
//         Designed and developed by <span className="font-semibold">ZoroTeam</span> &copy; 2025 CampusCore
//       </footer>
//     </section>
//   );
// };

// export default Fees;
import React from "react";

const Fees = () => {
  return (
    <section className="p-6 md:p-10 bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Spring Semester 2025</h2>
      </div>

      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Fees Overview */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Fees Overview</h3>

          {/* Summary Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border">
              <p className="text-xs text-gray-600">Total Fees</p>
              <p className="text-xl font-semibold text-blue-700">$12,500</p>
              <p className="text-xs text-gray-500 mt-1">For Spring Semester 2025</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border">
              <p className="text-xs text-gray-600">Amount Paid</p>
              <p className="text-xl font-semibold text-green-600">$8,750</p>
              <p className="text-xs text-gray-500 mt-1">70% of total fee</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border">
              <p className="text-xs text-gray-600">Pending Balance</p>
              <p className="text-xl font-semibold text-yellow-600">$3,750</p>
              <p className="text-xs text-gray-500 mt-1">Due by July 15, 2025</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border">
              <p className="text-xs text-gray-600">Last Payment</p>
              <p className="text-xl font-semibold text-purple-700">May 15</p>
              <p className="text-xs text-gray-500 mt-1">$2,500 via Credit Card</p>
            </div>
          </div>

          {/* Payment History Table */}
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Payment History</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-2 px-3 text-left">Date</th>
                  <th className="py-2 px-3 text-left">Transaction ID</th>
                  <th className="py-2 px-3 text-left">Description</th>
                  <th className="py-2 px-3 text-left">Amount</th>
                  <th className="py-2 px-3 text-left">Mode</th>
                  <th className="py-2 px-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white">
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
                  <tr key={i} className="border-t">
                    <td className="py-2 px-3">{row.date}</td>
                    <td className="py-2 px-3 text-blue-600 underline">{row.txn}</td>
                    <td className="py-2 px-3">{row.desc}</td>
                    <td className="py-2 px-3">{row.amt}</td>
                    <td className="py-2 px-3">{row.mode}</td>
                    <td className="py-2 px-3">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
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
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Pay</h3>

          <button className="bg-blue-600 text-white text-sm font-medium w-full py-2 rounded-md mb-4 hover:bg-blue-700">
            Pay Outstanding Balance
          </button>

          <h4 className="text-sm font-semibold text-gray-700 mb-2">Saved Payment Methods</h4>
          <div className="space-y-2 mb-4">
            <div className="border p-2 rounded-md text-sm text-gray-700">💳 Visa ending in 4582</div>
            <div className="border p-2 rounded-md text-sm text-gray-700">🏦 Bank Account</div>
          </div>

          <button className="text-blue-600 text-sm underline mb-4">+ Add Payment Method</button>

          <h4 className="text-sm font-semibold text-gray-700 mt-4 mb-2">Receipts & Documents</h4>
          <div className="space-y-2 text-sm text-blue-600">
            <button className="underline">📄 Download All Receipts</button>
            <button className="underline">📄 Print Fee Statement</button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Upcoming Dues */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Upcoming Dues</h3>
          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-md flex justify-between items-center mb-3">
            <div>
              <p className="font-medium text-yellow-800">Tuition Fee (Final Installment)</p>
              <p className="text-xs text-yellow-700">Due by July 15, 2025</p>
              <p className="text-xs text-red-500 mt-1">Late payment fee of $50 applies after due date</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800 text-lg">$3,750</p>
              <button className="text-sm text-blue-600 underline">Pay Now</button>
            </div>
          </div>

          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>📚 Library Fee</span>
              <span>$120 <button className="text-blue-600 ml-2 underline">Pay Later</button></span>
            </div>
            <div className="flex justify-between">
              <span>🧪 Computer Lab Access</span>
              <span>$85 <button className="text-blue-600 ml-2 underline">Pay Later</button></span>
            </div>
          </div>

          <div className="text-right mt-4">
            <button className="text-sm text-blue-600 underline">View All</button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-white p-6 rounded-xl shadow border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Help & Support</h3>
          <div className="text-sm text-blue-600 space-y-3">
            <div>❓ <span className="underline">Payment FAQs</span></div>
            <div>📞 <span className="underline">Contact Finance Office</span><br /><span className="text-gray-600">finance@campuscore.edu | (123) 987-4567</span></div>
            <div>📅 <span className="underline">Schedule an Appointment</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fees;
