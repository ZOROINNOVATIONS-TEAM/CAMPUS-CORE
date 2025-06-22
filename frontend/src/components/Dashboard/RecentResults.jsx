import React from "react";

const RecentResults = () => {
  const results = [
    { subject: "Physics", type: "Quiz", score: 88, date: "June 5, 2025", grade: "A-" },
    { subject: "Physics", type: "Assignment", score: 85, date: "June 2, 2025", grade: "B+" },
    { subject: "Advanced Mathematics", type: "Mid-term Exam", score: 92, date: "May 28, 2025", grade: "A" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Academic Results</h2>
      <div className="space-y-4">
        {results.map((result, i) => (
          <div key={i} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold">{result.subject}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">
                {result.type} - {result.date}
              </span>
              <span className="font-bold">{result.score}/100</span>
              <span className="text-gray-600">{result.grade}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: `${result.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-right text-blue-600 cursor-pointer hover:underline">
        All Results
      </p>
      <p className="text-right text-blue-600 cursor-pointer hover:underline">
        Recent Results
      </p>
    </div>
  );
};

export default RecentResults;

