import React, { useState } from 'react';
import {
  FaCreditCard,
  FaHistory,
  FaDownload,
  FaFileInvoice,
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaBell,
  FaFilter,
  FaSearch,
  FaUserGraduate,
  FaCalendarAlt,
  FaWallet,
  FaPrint
} from 'react-icons/fa';

// Mock data
const studentInfo = {
  name: "Dharam Chand Patle",
  id: "STU2025001",
  program: "Computer Science",
  balance: 2500,
  dueDate: "2025-07-15",
  semester: "Spring 2025"
};

const feeBreakdown = [
  { type: "Tuition Fee", amount: 8000, paid: 6000, due: 2000 },
  { type: "Laboratory Fee", amount: 1000, paid: 800, due: 200 },
  { type: "Library Fee", amount: 500, paid: 400, due: 100 },
  { type: "Development Fee", amount: 1000, paid: 800, due: 200 }
];

const recentTransactions = [
  {
    id: "TXN001",
    date: "2025-06-20",
    amount: 1000,
    type: "Payment",
    status: "Completed",
    method: "Credit Card"
  },
  {
    id: "TXN002",
    date: "2025-06-15",
    amount: 500,
    type: "Late Fee",
    status: "Pending",
    method: "Bank Transfer"
  },
  {
    id: "TXN003",
    date: "2025-06-10",
    amount: 2000,
    type: "Payment",
    status: "Completed",
    method: "Online Payment"
  }
];

const upcomingPayments = [
  {
    id: "UP001",
    dueDate: "2025-07-15",
    amount: 1500,
    description: "Tuition Fee Installment"
  },
  {
    id: "UP002",
    dueDate: "2025-07-30",
    amount: 500,
    description: "Laboratory Fee"
  }
];

export default function FeesPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [currentDateTime, setCurrentDateTime] = useState(new Date().toISOString());

  // Update time
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date().toISOString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const PaymentModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Make Payment</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              className={`flex-1 py-2 px-4 rounded ${
                paymentMethod === 'card'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <FaCreditCard className="inline mr-2" /> Card
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded ${
                paymentMethod === 'bank'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'
              }`}
              onClick={() => setPaymentMethod('bank')}
            >
              <FaMoneyBillWave className="inline mr-2" /> Bank
            </button>
          </div>
          <input
            type="number"
            placeholder="Amount"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Reference Number"
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2 justify-end">
            <button
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => setShowPaymentModal(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded"
              onClick={() => {
                alert('Payment processed successfully!');
                setShowPaymentModal(false);
              }}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Filtering
  const filteredTransactions = recentTransactions.filter(txn => {
    const matchesSearch = txn.id.toLowerCase().includes(searchQuery.toLowerCase())
      || txn.method.toLowerCase().includes(searchQuery.toLowerCase())
      || txn.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all"
      || (filterStatus === "completed" && txn.status === "Completed")
      || (filterStatus === "pending" && txn.status === "Pending");
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      {showPaymentModal && <PaymentModal />}
      {/* Header */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Fees Management</h1>
              <p className="text-gray-500 text-sm">
                {new Date(currentDateTime).toLocaleString()}
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <button
                onClick={() => setShowPaymentModal(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
              >
                <FaCreditCard /> Make Payment
              </button>
              <button
                onClick={() => alert('Downloading statement...')}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200"
              >
                <FaDownload /> Statement
              </button>
            </div>
          </div>
          {/* Student Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg flex items-center gap-3">
              <FaUserGraduate className="text-blue-600 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Student ID</p>
                <p className="font-semibold">{studentInfo.id}</p>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg flex items-center gap-3">
              <FaWallet className="text-green-600 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Balance Due</p>
                <p className="font-semibold">${studentInfo.balance}</p>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg flex items-center gap-3">
              <FaCalendarAlt className="text-yellow-600 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Next Due Date</p>
                <p className="font-semibold">{studentInfo.dueDate}</p>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg flex items-center gap-3">
              <FaFileInvoice className="text-purple-600 text-xl" />
              <div>
                <p className="text-sm text-gray-600">Semester</p>
                <p className="font-semibold">{studentInfo.semester}</p>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div className="border-b mb-6">
            <div className="flex space-x-6">
              {['overview', 'transactions', 'upcoming', 'history'].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-1 ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600'
                      : 'text-gray-500'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Fee Breakdown */}
              <div className="bg-white rounded-lg border p-4">
                <h3 className="font-semibold mb-4">Fee Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="px-4 py-2 text-left">Type</th>
                        <th className="px-4 py-2 text-right">Amount</th>
                        <th className="px-4 py-2 text-right">Paid</th>
                        <th className="px-4 py-2 text-right">Due</th>
                      </tr>
                    </thead>
                    <tbody>
                      {feeBreakdown.map((fee, index) => (
                        <tr key={index} className="border-t">
                          <td className="px-4 py-2">{fee.type}</td>
                          <td className="px-4 py-2 text-right">${fee.amount}</td>
                          <td className="px-4 py-2 text-right text-green-600">
                            ${fee.paid}
                          </td>
                          <td className="px-4 py-2 text-right text-red-600">
                            ${fee.due}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* Payment History Chart (placeholder) */}
              <div className="bg-white rounded-lg border p-4">
                <h3 className="font-semibold mb-4">Payment History</h3>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 flex items-center gap-2">
                    <FaHistory className="text-xl" /> Payment history visualization
                  </p>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'transactions' && (
            <div>
              {/* Search and Filter */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <select
                  className="px-4 py-2 border rounded-lg"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              {/* Transactions Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-2 text-left">Transaction ID</th>
                      <th className="px-4 py-2 text-left">Date</th>
                      <th className="px-4 py-2 text-right">Amount</th>
                      <th className="px-4 py-2 text-left">Method</th>
                      <th className="px-4 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTransactions.map((transaction) => (
                      <tr key={transaction.id} className="border-t">
                        <td className="px-4 py-2 font-medium">
                          {transaction.id}
                        </td>
                        <td className="px-4 py-2">{transaction.date}</td>
                        <td className="px-4 py-2 text-right">
                          ${transaction.amount}
                        </td>
                        <td className="px-4 py-2">{transaction.method}</td>
                        <td className="px-4 py-2">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              transaction.status === 'Completed'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {transaction.status === 'Completed' ? (
                              <FaCheckCircle className="mr-1" />
                            ) : (
                              <FaClock className="mr-1" />
                            )}
                            {transaction.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredTransactions.length === 0 && (
                  <p className="text-center text-gray-400 mt-4">No transactions found.</p>
                )}
              </div>
            </div>
          )}
          {activeTab === 'upcoming' && (
            <div className="space-y-4">
              {upcomingPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="bg-white border rounded-lg p-4 flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-medium">{payment.description}</h4>
                    <p className="text-sm text-gray-500">
                      Due: {payment.dueDate}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">${payment.amount}</p>
                    <button
                      onClick={() => setShowPaymentModal(true)}
                      className="text-blue-600 text-sm hover:underline"
                    >
                      Pay Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'history' && (
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <FaHistory className="text-blue-600" /> Full Payment History
              </h3>
              <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
                <p className="text-gray-400 flex items-center gap-2">
                  <FaFileInvoice className="text-xl" /> Download your full statement or print
                </p>
              </div>
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => alert('Downloading statement...')}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700"
                >
                  <FaDownload /> Download Statement
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200"
                >
                  <FaPrint /> Print
                </button>
              </div>
            </div>
          )}
        </div>
        {/* Footer */}
        <footer className="text-center text-gray-400 text-xs mt-10 mb-4">
          <span className="mr-2">✂️ Designed and developed by ZoaTeam</span>
          <span>© 2025 Zoa Innovation</span>
        </footer>
      </div>
    </div>
  );
}