import SubjectResultCard from "./SubjectResultCard";

export default function AssessmentSection({ type, title, actionLabel }) {
  // Dummy data for demo
  const results = [
    { subject: "Mathematics", score: type === "ISA" ? 85 : 75, status: "Passed" },
    { subject: "Physics", score: type === "ISA" ? 78 : 68, status: "Passed" },
    { subject: "Chemistry", score: type === "ISA" ? 90 : 88, status: type === "ISA" ? "Excellent" : "Passed" },
    { subject: "Biology", score: type === "ISA" ? 82 : 80, status: "Passed" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            View your {type} results for the semester.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-medium px-3 py-1 rounded-md hover:bg-blue-200 dark:hover:bg-blue-800 transition">
            {actionLabel}
          </button>
          <button className="bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-300 font-medium px-3 py-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            View Detail
          </button>
        </div>
      </div>

      {/* Result Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((res, idx) => (
          <SubjectResultCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
}
