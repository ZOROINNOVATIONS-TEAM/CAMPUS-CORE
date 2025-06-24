export default function TopCoursesCard({ courses }) {
  const mockCourses = courses || [
    { name: "Advanced Algorithms", enrollments: 120 },
    { name: "Data Structures", enrollments: 98 },
    { name: "Database Systems", enrollments: 75 },
    { name: "Operating Systems", enrollments: 69 },
    { name: "Web Development", enrollments: 62 },
  ];

  // CSV Export Logic
  const handleDownloadCSV = () => {
    const data = mockCourses.map(c => `${c.name},${c.enrollments}`).join("\n");
    const csv = `Course,Enrollments\n${data}`;
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "top_courses.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">Top Courses</h3>
        <button
          className="bg-blue-100 text-blue-600 px-3 py-1 rounded text-xs font-semibold"
          onClick={handleDownloadCSV}
        >
          Download CSV
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {mockCourses.map((c, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">{c.name}</span>
            <span className="text-xs text-gray-500">{c.enrollments} students</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
