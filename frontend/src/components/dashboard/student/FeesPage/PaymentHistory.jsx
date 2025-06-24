import React from 'react';

const PaymentHistory = () => {
  const transactions = [
    { date: "May 15, 2025", tid: "TXN-78945612", desc: "Tuition Fee (Installment 3)", amount: "$2,500", mode: "Credit Card", status: "Completed" },
    { date: "April 10, 2025", tid: "TXN-78945238", desc: "Tuition Fee (Installment 2)", amount: "$3,750", mode: "Bank Transfer", status: "Completed" },
    { date: "February 5, 2025", tid: "TXN-78932112", desc: "Tuition Fee (Installment 1)", amount: "$2,500", mode: "Credit Card", status: "Completed" },
    { date: "January 20, 2025", tid: "TXN-78922112", desc: "Registration Fee", amount: "$500", mode: "UPI", status: "Completed" },
  ];

  // Simulate pagination logic
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentTransactions = transactions.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h3 className="text-lg font-semibold mb-3">Payment History</h3>
      <div className="flex justify-between items-center mb-3">
        <input
          type="text"
          placeholder="Search Transactions..."
          className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-indigo-500 w-full md:w-1/2"
        />
        <select className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-indigo-500 ml-2">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <table className="w-full text-left min-w-max">
        <thead>
          <tr className="border-b">
            <th className="px-2 py-2 ">Date</th>
            <th className="px-2 py-2">Transaction ID</th>
            <th className="px-2 py-2">Description</th>
            <th className="px-2 py-2">Amount</th>
            <th className="px-2 py-2">Mode</th>
            <th className="px-2 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((t) => (
            <tr key={t.tid} className="border-b">
              <td className="px-2 py-2 text-sm">{t.date}</td>
              <td className="px-2 py-2 text-sm"><a href="#" className="text-blue-500 hover:text-blue-700">#TXN-{t.tid}</a></td>
              <td className="px-2 py-2 text-sm">{t.desc}</td>
              <td className="px-2 py-2 text-sm">{t.amount}</td>
              <td className="px-2 py-2 text-sm">{t.mode}</td>
              <td className="px-2 py-2 text-sm">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-sm">{t.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div>
          <label htmlFor="rowsPerPage" className="mr-2 text-sm">Show entries</label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border border-gray-300 px-2 py-1 rounded-md focus:outline-none focus:border-indigo-500"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          
        </div>
        <nav aria-label="Table navigation">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage * rowsPerPage >= transactions.length}
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaymentHistory;