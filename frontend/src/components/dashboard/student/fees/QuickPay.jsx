import { Banknote, Plus, CreditCard, Download } from "lucide-react";

export default function QuickPay() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-6">
      <button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 font-semibold flex items-center justify-center gap-2 hover:bg-blue-700">
        <Banknote className="w-5 h-5" />
        Pay Outstanding Balance
      </button>

      <div>
        <div className="font-semibold text-gray-700 dark:text-gray-100 mb-2">Saved Payment Methods</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
            <CreditCard className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="flex-1 text-gray-800 dark:text-gray-100 text-sm">Visa ending in 4582</span>
            <button className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white p-1">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2">
            <Banknote className="w-4 h-4 text-green-600 dark:text-green-400 mr-2" />
            <span className="flex-1 text-gray-800 dark:text-gray-100 text-sm">Bank Account</span>
            <button className="text-gray-400 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white p-1">
              <Download className="w-4 h-4" />
            </button>
          </div>

          <button className="flex items-center gap-1 mt-1 text-blue-600 dark:text-blue-400 hover:underline text-xs font-semibold">
            <Plus className="w-3 h-3" /> Add Payment Method
          </button>
        </div>
      </div>

      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 rounded-md border border-gray-200 dark:border-gray-700 font-medium text-xs">
          Download All Receipts
        </button>
        <button className="flex-1 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-2 rounded-md border border-gray-200 dark:border-gray-700 font-medium text-xs">
          Print Fee Statement
        </button>
      </div>
    </div>
  );
}
