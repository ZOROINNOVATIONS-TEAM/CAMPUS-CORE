export default function PaymentHistory() {
  const payments = [
    {
      date: "May 15, 2025",
      id: "#7734-7894512",
      desc: "Tuition Fee Installment 3",
      amount: "$2,500",
      mode: "Credit Card",
      status: "Completed",
    },
    {
      date: "Apr 10, 2025",
      id: "#7734-7894528",
      desc: "Tuition Fee Installment 2",
      amount: "$3,750",
      mode: "Bank Transfer",
      status: "Completed",
    },
    {
      date: "Feb 5, 2025",
      id: "#7734-7894372",
      desc: "Tuition Fee Installment 1",
      amount: "$3,750",
      mode: "Credit Card",
      status: "Completed",
    },
    {
      date: "Jan 20, 2025",
      id: "#7734-7894212",
      desc: "Registration Fee",
      amount: "$500",
      mode: "UPI",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Payment History</div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              <th className="font-medium px-3 py-2 text-left">Date</th>
              <th className="font-medium px-3 py-2 text-left">Transaction ID</th>
              <th className="font-medium px-3 py-2 text-left">Description</th>
              <th className="font-medium px-3 py-2 text-left">Amount</th>
              <th className="font-medium px-3 py-2 text-left">Mode</th>
              <th className="font-medium px-3 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 dark:border-gray-800 last:border-b-0"
              >
                <td className="px-3 py-2 whitespace-nowrap text-gray-700 dark:text-gray-200">
                  {p.date}
                </td>
                <td className="px-3 py-2 text-blue-600 dark:text-blue-400">{p.id}</td>
                <td className="px-3 py-2 text-gray-700 dark:text-gray-300">{p.desc}</td>
                <td className="px-3 py-2 text-gray-900 dark:text-gray-100">{p.amount}</td>
                <td className="px-3 py-2 text-gray-600 dark:text-gray-300">{p.mode}</td>
                <td className="px-3 py-2">
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
