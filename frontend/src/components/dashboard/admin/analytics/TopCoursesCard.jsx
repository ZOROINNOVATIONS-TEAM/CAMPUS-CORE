// src/components/dashboard/admin/analytics/TopCoursesCard.jsx
export default function TopCoursesCard({ courses }) {
  const mockCourses = courses || [
    { name: "Advanced Algorithms", enrollments: 120 },
    { name: "Data Structures", enrollments: 98 },
    { name: "Database Systems", enrollments: 75 },
    { name: "Operating Systems", enrollments: 69 },
    { name: "Web Development", enrollments: 62 },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Courses</h3>
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
