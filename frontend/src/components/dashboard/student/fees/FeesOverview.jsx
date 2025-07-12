import { CreditCard, CalendarCheck, AlertCircle, ReceiptText } from "lucide-react";

export default function FeesOverview() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Fees Overview</h3>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950 p-4 rounded-lg">
            <CreditCard className="text-blue-600 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Total Fees</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">$12,500</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950 p-4 rounded-lg">
            <CalendarCheck className="text-green-600 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Amount Paid</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">$8,750</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-2 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
            <AlertCircle className="text-yellow-600 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Pending Balance</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">$3,750</div>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950 p-4 rounded-lg">
            <ReceiptText className="text-purple-600 w-6 h-6" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Last Payment</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">May 15</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
