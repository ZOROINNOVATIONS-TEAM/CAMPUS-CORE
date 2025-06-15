import React from "react";

const results = [
  { subject: "Computer Science", type: "Mid-term Exam", date: "May 28, 2025", grade: "A", score: "92/100" },
  { subject: "Advanced Mathematics", type: "Assignment", date: "June 2, 2025", grade: "B+", score: "85/100" },
  { subject: "Physics", type: "Quiz", date: "June 5, 2025", grade: "A-", score: "88/100" },
];

export default function RecentResults() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full">
      <div className="flex justify-between mb-2">
        <h3 className="font-semibold">Recent Results</h3>
        <a href="#" className="text-blue-600 text-sm">All Results</a>
      </div>

      <div className="space-y-4">
        {results.map((res, index) => (
          <div key={index} className="flex justify-between text-sm text-gray-700">
            <div>
              <p className="font-semibold">{res.subject}</p>
              <p className="text-xs">{res.type} - {res.date}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">{res.grade}</p>
              <p className="text-xs text-gray-500">{res.score}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Optional mini line chart at bottom */}
      <div className="mt-6">
        <div className="h-20 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-xs">[Mini Chart]</div>
      </div>
    </div>
  );
}
