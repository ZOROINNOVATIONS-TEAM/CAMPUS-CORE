import React from "react";

const RecentResults = () => {
  const results = [
    { subject: "Advanced Mathematics", type: "Quiz", score: "92%", date: "June 10" },
    { subject: "Advanced Mathematics", type: "Assignment", score: "87%", date: "June 12" },
    { subject: "Physics", type: "Mid-term", score: "88%", date: "June 5" }
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Results</h2>
      <div className="space-y-3">
        {results.map((result, index) => (
          <div key={index} className="p-3 hover:bg-gray-50 rounded-lg">
            <h3 className="font-bold">{result.subject}</h3>
            <p className="text-sm text-gray-600">{result.type}: {result.score} ({result.date})</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentResults;
