// src/pages/admin/AdminFeesPage.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faUsers, faCheckCircle, faTimesCircle, faMoneyBillWave, faBuilding, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { AdminTopBar, AdminBannerAndTabs } from "../../components/dashboard/admin/AdminHeader";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement } from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, PointElement, LineElement);

// Reused student components (adjust paths as needed)
import QuickPay from "../../components/dashboard/student/FeesPage/QuickPay";

// Sample admin data (replace with API calls)
const adminFeeData = {
  totalStudents: 1200,
  paidStudents: 850,
  unpaidStudents: 350,
  totalDue: 150000,
  feesReceived: 850000,
  facultySalary: { totalPaid: 200000, pending: 50000 },
  maintenanceFees: { allocated: 100000, spent: 60000 },
  // Sample chart data
  monthlyFees: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    received: [50000, 60000, 70000, 80000, 90000, 100000],
    due: [60000, 70000, 80000, 90000, 100000, 110000],
  },
};

const AdminFeesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  // Pie chart for fee distribution (Paid vs Unpaid)
  const feeDistributionData = {
    labels: ["Paid", "Unpaid"],
    datasets: [
      {
        data: [adminFeeData.feesReceived, adminFeeData.totalDue - adminFeeData.feesReceived],
        backgroundColor: ["#4CAF50", "#F44336"],
        hoverBackgroundColor: ["#66BB6A", "#EF5350"],
      },
    ],
  };

  // Bar chart for monthly fees received vs due
  const monthlyFeesData = {
    labels: adminFeeData.monthlyFees.labels,
    datasets: [
      {
        label: "Fees Received",
        data: adminFeeData.monthlyFees.received,
        backgroundColor: "#2196F3",
      },
      {
        label: "Fees Due",
        data: adminFeeData.monthlyFees.due,
        backgroundColor: "#FFC107",
      },
    ],
  };

  // Line chart for salary trends (example data)
  const salaryTrendsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Salary Paid",
        data: [30000, 35000, 40000, 45000, 50000, 55000],
        borderColor: "#4CAF50",
        fill: false,
      },
      {
        label: "Pending Salary",
        data: [10000, 8000, 12000, 9000, 11000, 7000],
        borderColor: "#F44336",
        fill: false,
      },
    ],
  };

  // Pie chart for maintenance fees (Allocated vs Spent)
  const maintenanceData = {
    labels: ["Allocated", "Spent"],
    datasets: [
      {
        data: [adminFeeData.maintenanceFees.allocated, adminFeeData.maintenanceFees.spent],
        backgroundColor: ["#2196F3", "#FFC107"],
        hoverBackgroundColor: ["#42A5F5", "#FFCA28"],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Sticky top bar */}
      <AdminTopBar />

      {/* Scrollable banner and tabs */}
      <AdminBannerAndTabs />

      {/* Fees content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Admin-Specific Tools */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Admin Fee Management</h2>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <FontAwesomeIcon icon={faDollarSign} />
              Generate Fee Report
            </button>
            <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <FontAwesomeIcon icon={faMoneyBillWave} />
              Bulk Payment Processing
            </button>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100"
            >
              <option value="all">All Students</option>
              <option value="pending">Pending Dues</option>
              <option value="overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Fees Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
          <div className="bg-blue-50 dark:bg-blue-900 rounded-xl p-4 text-center">
            <FontAwesomeIcon icon={faUsers} className="text-blue-600 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-2xl font-bold">{adminFeeData.totalStudents}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 rounded-xl p-4 text-center">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Paid Students</h3>
            <p className="text-2xl font-bold">{adminFeeData.paidStudents}</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900 rounded-xl p-4 text-center">
            <FontAwesomeIcon icon={faTimesCircle} className="text-red-600 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Unpaid Students</h3>
            <p className="text-2xl font-bold">{adminFeeData.unpaidStudents}</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 rounded-xl p-4 text-center">
            <FontAwesomeIcon icon={faDollarSign} className="text-yellow-600 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Total Due</h3>
            <p className="text-2xl font-bold">${adminFeeData.totalDue.toLocaleString()}</p>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900 rounded-xl p-4 text-center">
            <FontAwesomeIcon icon={faMoneyBillWave} className="text-purple-600 text-2xl mb-2" />
            <h3 className="text-lg font-semibold">Fees Received</h3>
            <p className="text-2xl font-bold">${adminFeeData.feesReceived.toLocaleString()}</p>
          </div>
        </div>

        {/* Fees Distribution Chart (Pie) with Text */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Fees Distribution (Paid vs Unpaid)</h2>
            <Pie data={feeDistributionData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Insights</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>70% of fees have been paid, covering {adminFeeData.paidStudents} students.</li>
              <li>Unpaid portion represents high risk—focus on reminders for {adminFeeData.unpaidStudents} students.</li>
              <li>Recommendation: Implement automated payment reminders to reduce unpaid fees by 20%.</li>
            </ul>
          </div>
        </div>

        {/* Monthly Fees Chart (Bar) with Text */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Monthly Fees Received vs Due</h2>
            <Bar data={monthlyFeesData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Insights</h3>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              <li>Fees received have increased by 20% month-over-month.</li>
              <li>June shows the highest due amount—monitor for delays.</li>
              <li>Recommendation: Analyze trends to forecast future collections and adjust budgets.</li>
            </ul>
          </div>
        </div>

        {/* Faculty Salary Overview with Chart and Text */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Faculty Salary Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 dark:bg-green-900 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faChalkboardTeacher} className="text-green-600 text-2xl mb-2" />
              <h3 className="text-lg font-semibold">Total Salary Paid</h3>
              <p className="text-2xl font-bold">${adminFeeData.facultySalary.totalPaid.toLocaleString()}</p>
            </div>
            <div className="bg-red-50 dark:bg-red-900 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faDollarSign} className="text-red-600 text-2xl mb-2" />
              <h3 className="text-lg font-semibold">Pending Salary</h3>
              <p className="text-2xl font-bold">${adminFeeData.facultySalary.pending.toLocaleString()}</p>
            </div>
          </div>
          {/* Salary Trends Chart with Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Salary Trends</h3>
              <Line data={salaryTrendsData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Insights</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>Salary payments have been consistent, with a slight increase in June.</li>
                <li>Pending amounts are decreasing—good sign of timely processing.</li>
                <li>Recommendation: Budget for potential increases in pending salaries next quarter.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Maintenance Fees Overview with Chart and Text */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Maintenance Fees Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 dark:bg-blue-900 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faBuilding} className="text-blue-600 text-2xl mb-2" />
              <h3 className="text-lg font-semibold">Total Allocated</h3>
              <p className="text-2xl font-bold">${adminFeeData.maintenanceFees.allocated.toLocaleString()}</p>
            </div>
            <div className="bg-orange-50 dark:bg-orange-900 rounded-lg p-4 text-center">
              <FontAwesomeIcon icon={faDollarSign} className="text-orange-600 text-2xl mb-2" />
              <h3 className="text-lg font-semibold">Spent</h3>
              <p className="text-2xl font-bold">${adminFeeData.maintenanceFees.spent.toLocaleString()}</p>
            </div>
          </div>
          {/* Maintenance Fees Chart with Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="h-64">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Maintenance Fees Distribution</h3>
              <Pie data={maintenanceData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Insights</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li>60% of allocated funds have been spent on maintenance.</li>
                <li>Remaining budget is sufficient for upcoming projects.</li>
                <li>Recommendation: Monitor spending to avoid over-allocation in high-cost areas.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reused Quick Pay */}
        <QuickPay />
      </main>
    </div>
  );
};

export default AdminFeesPage;
