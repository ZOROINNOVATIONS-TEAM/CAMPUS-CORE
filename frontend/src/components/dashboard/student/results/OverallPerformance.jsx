import { useState } from "react";
import { ArrowUpCircle, ArrowDownCircle, Info } from "lucide-react";
import Modal from "../../../common/Modal";

export default function OverallPerformance() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col gap-6 items-center">
      <h2 className="text-3xl font-bold mb-2 text-center">Overall Performance</h2>
      <p className="text-gray-500 text-center mb-3">
        Summary of your performance across assessments.
      </p>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-6 py-2 mb-4 transition"
      >
        Analyze Performance
      </button>

      <Modal isOpen={open} title="Performance Analysis" onClose={() => setOpen(false)}>
        {/* === Modal content goes here === */}
        <div className="space-y-4">
          <div className="text-base text-gray-700">
            <strong>Performance Analytics:</strong>
          </div>
          {/* Example content – replace with charts/stats as needed */}
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
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

          <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-800 p-3 rounded">
            Tip: Focus on consistent study habits for lower scoring subjects.
          </div>
          {/* (Optional) Add a mini chart or progress bar */}
          {/* <CgpaMiniChart /> */}
        </div>
      </Modal>

      <div className="flex flex-col sm:flex-row w-full gap-3">
        <div className="flex-1 bg-blue-50 p-4 rounded-lg flex items-center gap-3">
          <span className="text-blue-500"><Info /></span>
          <div>
            <div className="text-xs text-blue-700 font-semibold">Average Score</div>
            <div className="text-2xl font-bold text-blue-800">80.25%</div>
          </div>
        </div>
        <div className="flex-1 bg-green-50 p-4 rounded-lg flex items-center gap-3">
          <span className="text-green-500"><ArrowUpCircle /></span>
          <div>
            <div className="text-xs text-green-700 font-semibold">Passed Subjects</div>
            <div className="text-2xl font-bold text-green-800">
              6 <span className="ml-2 text-xs text-green-500 font-medium">+1</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-red-50 p-4 rounded-lg flex items-center gap-3">
          <span className="text-red-500"><ArrowDownCircle /></span>
          <div>
            <div className="text-xs text-red-700 font-semibold">Failed Subjects</div>
            <div className="text-2xl font-bold text-red-800">
              2 <span className="ml-2 text-xs text-red-500 font-medium">-1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
