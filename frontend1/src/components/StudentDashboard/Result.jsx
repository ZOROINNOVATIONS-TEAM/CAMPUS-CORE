import React, { useState } from "react";

// Pie chart and line chart: SVG, replace with Chart.js/Recharts for dynamic
function AssignmentPieChart() {
  // Control, Copy, Fail, Miss values for pie chart
  const data = [
    { label: "Control", value: 65, color: "#33d17a" },
    { label: "Copy", value: 20, color: "#ffd43b" },
    { label: "Fail", value: 10, color: "#fa5252" },
    { label: "Miss", value: 5, color: "#868e96" },
  ];
  const total = data.reduce((sum, d) => sum + d.value, 0);
  let startAngle = 0;
  return (
    <svg width="180" height="180" viewBox="0 0 180 180">
      {data.map((d, i) => {
        const angle = (d.value / total) * 2 * Math.PI;
        const x1 = 90 + 80 * Math.cos(startAngle);
        const y1 = 90 + 80 * Math.sin(startAngle);
        const x2 = 90 + 80 * Math.cos(startAngle + angle);
        const y2 = 90 + 80 * Math.sin(startAngle + angle);
        const largeArc = angle > Math.PI ? 1 : 0;
        const path = `
          M 90 90
          L ${x1} ${y1}
          A 80 80 0 ${largeArc} 1 ${x2} ${y2}
          Z
        `;
        startAngle += angle;
        return <path key={i} d={path} fill={d.color} />;
      })}
    </svg>
  );
}

function SGPAChart() {
  // Dummy SGPA/CGPA chart for 5 semesters
  const data = [7.5, 6.8, 7.2, 8.0, 8.2];
  const maxY = 10;
  const points = data
    .map((d, i) => `${30 + i * 40},${160 - (d / maxY) * 120}`)
    .join(" ");
  return (
    <svg width="220" height="180" viewBox="0 0 220 180">
      {/* Axes */}
      <line x1={30} y1={160} x2={210} y2={160} stroke="#e5e7eb" strokeWidth="2" />
      {/* Line */}
      <polyline
        fill="rgba(91,141,246,0.2)"
        stroke="#5B8DF6"
        strokeWidth="3"
        points={points}
      />
      {/* Points */}
      {data.map((d, i) => (
        <circle
          key={i}
          cx={30 + i * 40}
          cy={160 - (d / maxY) * 120}
          r="4"
          fill="#fff"
          stroke="#5B8DF6"
          strokeWidth="2"
        />
      ))}
      {/* Sem labels */}
      {["Sem1", "Sem2", "Sem3", "Sem4", "Sem5"].map((label, i) => (
        <text
          key={i}
          x={30 + i * 40}
          y={175}
          textAnchor="middle"
          fontSize="12"
          fill="#888"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}

const isaSubjects = [
  {
    name: "Mathematics",
    score: "87%",
    status: "Passed",
    img: "/math-book.png",
    remark: "Passed",
  },
  {
    name: "Physics",
    score: "78%",
    status: "Passed",
    img: "/physics-book.png",
    remark: "Passed",
  },
  {
    name: "Chemistry",
    score: "90%",
    status: "Excellent",
    img: "/chem-book.png",
    remark: "Excellent",
  },
  {
    name: "Biology",
    score: "92%",
    status: "Passed",
    img: "/bio-book.png",
    remark: "Passed",
  },
];

const esaSubjects = [
  {
    name: "Mathematics",
    score: "75%",
    status: "Passed",
    img: "/math-book.png",
    remark: "Passed",
  },
  {
    name: "Physics",
    score: "68%",
    status: "Passed",
    img: "/physics-book.png",
    remark: "Passed",
  },
  {
    name: "Chemistry",
    score: "88%",
    status: "Excellent",
    img: "/chem-book.png",
    remark: "Excellent",
  },
  {
    name: "Biology",
    score: "82%",
    status: "Passed",
    img: "/bio-book.png",
    remark: "Passed",
  },
];

export default function Result() {
  // Demo: print/download actions
  function handlePrintAssignment() {
    alert("Assignment results sent to printer!");
  }
  function handleDownloadAssignment() {
    alert("Assignment results downloaded!");
  }
  function handlePrintSGPA() {
    alert("SGPA/CGPA sent to printer!");
  }
  function handleDownloadSGPA() {
    alert("SGPA/CGPA downloaded!");
  }
  function handleAnalyze() {
    alert("Performance analysis started!");
  }
  function handleReevaluate() {
    alert("Re-evaluation requested for ISA!");
  }
  function handleISAViewDetail() {
    alert("ISA details opened!");
  }
  function handleESARequestReview() {
    alert("Review requested for ESA!");
  }
  function handleESAViewDetail() {
    alert("ESA details opened!");
  }

  return (
    <div className="min-h-screen bg-[#ededed] flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto px-4 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Left: Performance */}
          <div className="bg-white rounded-xl shadow p-6 flex-1 col-span-2">
            <div className="text-center mb-2">
              <div className="font-bold text-2xl mb-1">Overall Performance</div>
              <div className="text-gray-500 text-sm mb-2">
                Summary of your performance across assessments.
              </div>
              <button onClick={handleAnalyze} className="bg-[#3666F6] hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow mb-5 transition">
                Analyze Performance
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-[#eef4fe] rounded-lg px-4 py-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-500">Average Score</span>
                <span className="text-[#3666F6] font-bold text-xl mt-1">80.25%</span>
              </div>
              <div className="bg-[#eaffea] rounded-lg px-4 py-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-500">Passed Subjects</span>
                <span className="text-green-600 font-bold text-xl mt-1">6</span>
                <span className="text-green-400 text-xs">+1</span>
              </div>
              <div className="bg-[#ffecec] rounded-lg px-4 py-3 flex flex-col items-center">
                <span className="text-xs font-semibold text-gray-500">Failed Subjects</span>
                <span className="text-red-600 font-bold text-xl mt-1">2</span>
                <span className="text-red-400 text-xs">-1</span>
              </div>
            </div>
            {/* Internal Summative Assessment */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-base">
                  Internal Summative Assessment (ISA)
                </span>
                <div className="flex gap-2">
                  <button onClick={handleReevaluate}
                    className="bg-[#3666F6] text-white px-4 py-1 rounded-md text-xs font-semibold hover:bg-blue-600 transition">
                    Re-evaluate
                  </button>
                  <button onClick={handleISAViewDetail}
                    className="bg-[#eef4fe] text-[#3666F6] px-4 py-1 rounded-md text-xs font-semibold hover:bg-blue-100 transition">
                    View Detail
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {isaSubjects.map((subj, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafafa] border border-gray-200 rounded-lg px-2 py-2 flex items-center gap-2"
                  >
                    <img
                      src={subj.img}
                      alt={subj.name}
                      className="w-12 h-12 rounded object-cover border"
                    />
                    <div>
                      <div className="font-semibold text-sm">{subj.name}</div>
                      <div className="text-xs text-gray-500">Final Score</div>
                      <div className="text-lg font-bold">{subj.score}</div>
                      <div
                        className={`text-xs mt-1 ${
                          subj.status === "Passed"
                            ? "text-green-600"
                            : subj.status === "Excellent"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                      >
                        {subj.remark}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* External Summative Assessment */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-base">
                  External Summative Assessment (ESA)
                </span>
                <div className="flex gap-2">
                  <button onClick={handleESARequestReview}
                    className="bg-[#3666F6] text-white px-4 py-1 rounded-md text-xs font-semibold hover:bg-blue-600 transition">
                    Request Review
                  </button>
                  <button onClick={handleESAViewDetail}
                    className="bg-[#eef4fe] text-[#3666F6] px-4 py-1 rounded-md text-xs font-semibold hover:bg-blue-100 transition">
                    View Detail
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {esaSubjects.map((subj, idx) => (
                  <div
                    key={idx}
                    className="bg-[#fafafa] border border-gray-200 rounded-lg px-2 py-2 flex items-center gap-2"
                  >
                    <img
                      src={subj.img}
                      alt={subj.name}
                      className="w-12 h-12 rounded object-cover border"
                    />
                    <div>
                      <div className="font-semibold text-sm">{subj.name}</div>
                      <div className="text-xs text-gray-500">Final Score</div>
                      <div className="text-lg font-bold">{subj.score}</div>
                      <div
                        className={`text-xs mt-1 ${
                          subj.status === "Passed"
                            ? "text-green-600"
                            : subj.status === "Excellent"
                            ? "text-blue-600"
                            : "text-red-600"
                        }`}
                      >
                        {subj.remark}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Right side: Assignment Results + SGPA/CGPA */}
          <div className="flex flex-col gap-6">
            {/* Assignment Pie Chart */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="font-semibold text-lg mb-2">Assignment Results</div>
              <AssignmentPieChart />
              <div className="text-xs text-gray-400 mt-2">
                View your performance in the assignment.
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                <button onClick={handlePrintAssignment}
                  className="bg-[#3666F6] text-white px-2 py-2 rounded font-semibold text-xs hover:bg-blue-600 transition">
                  Print Assignment Results
                </button>
                <button className="bg-[#eef4fe] text-[#3666F6] px-2 py-2 rounded font-semibold text-xs hover:bg-blue-100 transition">
                  Internal Assess.
                </button>
                <button onClick={handleDownloadAssignment}
                  className="bg-[#faedd9] text-[#3666F6] px-2 py-2 rounded font-semibold text-xs hover:bg-yellow-100 transition">
                  Download Assignment Results
                </button>
                <button className="bg-[#eef4fe] text-[#3666F6] px-2 py-2 rounded font-semibold text-xs hover:bg-blue-100 transition">
                  External Assess.
                </button>
              </div>
            </div>
            {/* SGPA/CGPA Chart */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
              <div className="font-semibold text-lg mb-2">View SGPA/CGPA</div>
              <SGPAChart />
              <div className="grid grid-cols-2 gap-2 mt-4 w-full">
                <button onClick={handlePrintSGPA}
                  className="bg-[#3666F6] text-white px-2 py-2 rounded font-semibold text-xs hover:bg-blue-600 transition">
                  Print SGPA/CGPA
                </button>
                <button onClick={handleDownloadSGPA}
                  className="bg-[#eef4fe] text-[#3666F6] px-2 py-2 rounded font-semibold text-xs hover:bg-blue-100 transition">
                  Download SGPA/CGPA
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}