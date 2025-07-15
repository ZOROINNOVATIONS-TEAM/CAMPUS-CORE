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
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Top Courses</h3>
        <button
          onClick={handleDownloadCSV}
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 dark:text-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800 px-3 py-1 rounded text-xs font-semibold transition"
        >
          Download CSV
        </button>
      </div>
      <ul className="flex flex-col gap-3">
        {mockCourses.map((c, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between border-b last:border-b-0 border-gray-100 dark:border-gray-800 pb-2"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">
              {c.name}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {c.enrollments} students
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
