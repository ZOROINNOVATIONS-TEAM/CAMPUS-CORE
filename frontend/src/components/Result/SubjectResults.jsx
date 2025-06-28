import React from "react";

const subjects = [
  {
    type: "ISA",
    results: [
      { subject: "Mathematics", score: 85, status: "Passed" },
      { subject: "Physics", score: 78, status: "Passed" },
      { subject: "Chemistry", score: 90, status: "Excellent" },
      { subject: "Biology", score: 92, status: "Passed" },
    ],
    buttons: ["Re-evaluate", "View Detail"],
  },
  {
    type: "ESA",
    results: [
      { subject: "Mathematics", score: 82, status: "Passed" },
      { subject: "Physics", score: 68, status: "Passed" },
      { subject: "Chemistry", score: 88, status: "Passed" },
      { subject: "Biology", score: 80, status: "Passed" },
    ],
    buttons: ["Request Review", "View Detail"],
  },
];

const SubjectResults = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg space-y-8">
      {subjects.map((group, index) => (
        <div key={index}>
          <h3 className="text-md text-gray-600 mb-2">
            {group.type === "ISA" ? "Internal" : "External"} Summative Assessment ({group.type})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {group.results.map((res, idx) => (
              <div key={idx} className="bg-gray-100 rounded-xl p-3">
                <p className="text-gray-800 font-semibold">{res.subject}</p>
                <p className="text-sm text-gray-600">Final Score</p>
                <p className="text-xl font-bold text-blue-800">{res.score}%</p>
                <p className="text-green-600">{res.status}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            {group.buttons.map((btn, idx) => (
              <button
                key={idx}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                {btn}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectResults;
