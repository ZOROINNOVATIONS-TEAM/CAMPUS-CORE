import { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle, Info } from "lucide-react";
import Modal from "../../../common/Modal";

export default function OverallPerformance() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col gap-6 items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-100">
        Overall Performance
      </h2>

      <p className="text-gray-500 dark:text-gray-400 text-center">
        Summary of your performance across assessments.
      </p>

      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-2 transition"
      >
        Analyze Performance
      </button>

      {/* === Modal === */}
      <Modal isOpen={open} title="Performance Analysis" onClose={() => setOpen(false)}>
        <div className="space-y-4">
          <div className="text-base text-gray-700 dark:text-gray-300 font-semibold">
            Performance Analytics:
          </div>

          <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>
              Strongest Subject: <span className="font-semibold">Mathematics</span> (Consistently &gt;85%)
            </li>
            <li>
              Area for Improvement: <span className="font-semibold">Physics</span> (Score trend down this semester)
            </li>
            <li>
              CGPA Trend: <span className="text-blue-600 font-semibold">Stable</span>
            </li>
            <li>
              Assignments: Good submission rate and accuracy
            </li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/50 border-l-4 border-blue-400 dark:border-blue-600 text-blue-800 dark:text-blue-200 p-3 rounded">
            Tip: Focus on consistent study habits for lower scoring subjects.
          </div>
        </div>
      </Modal>

      {/* === Stats Cards === */}
      <div className="flex flex-col sm:flex-row w-full gap-3">
        {/* Average Score */}
        <div className="flex-1 bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg flex items-center gap-3 hover:shadow transition">
          <Info className="text-blue-500 w-6 h-6" />
          <div>
            <div className="text-xs text-blue-700 dark:text-blue-300 font-semibold">Average Score</div>
            <div className="text-2xl font-bold text-blue-800 dark:text-blue-100">80.25%</div>
          </div>
        </div>

        {/* Passed Subjects */}
        <div className="flex-1 bg-green-50 dark:bg-green-900/30 p-4 rounded-lg flex items-center gap-3 hover:shadow transition">
          <ArrowUpCircle className="text-green-500 w-6 h-6" />
          <div>
            <div className="text-xs text-green-700 dark:text-green-300 font-semibold">Passed Subjects</div>
            <div className="text-2xl font-bold text-green-800 dark:text-green-100">
              6 <span className="ml-2 text-xs text-green-500 font-medium">+1</span>
            </div>
          </div>
        </div>

        {/* Failed Subjects */}
        <div className="flex-1 bg-red-50 dark:bg-red-900/30 p-4 rounded-lg flex items-center gap-3 hover:shadow transition">
          <ArrowDownCircle className="text-red-500 w-6 h-6" />
          <div>
            <div className="text-xs text-red-700 dark:text-red-300 font-semibold">Failed Subjects</div>
            <div className="text-2xl font-bold text-red-800 dark:text-red-100">
              2 <span className="ml-2 text-xs text-red-500 font-medium">-1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
