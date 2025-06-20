export default function SubjectResultCard({ subject, score, status }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center gap-4">
      <div className="flex-1">
        <div className="font-semibold text-gray-900">{subject}</div>
        <div className="text-sm text-gray-500">Final Score</div>
        <div className="text-xl font-bold">{score}%</div>
        <div className={`text-xs mt-1 px-2 py-0.5 rounded ${status === "Passed" ? "bg-green-100 text-green-700" : status === "Excellent" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"}`}>{status}</div>
      </div>
    </div>
  );
}
