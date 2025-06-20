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
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="text-xs text-gray-500">View your {type} results for the semester.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-blue-100 text-blue-600 font-medium px-3 py-1 rounded-md">{actionLabel}</button>
          <button className="bg-gray-100 text-blue-600 font-medium px-3 py-1 rounded-md">View Detail</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((res, idx) => (
          <SubjectResultCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
}
