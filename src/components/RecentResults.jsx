function RecentResults() {
  const results = [
    { subject: 'Computer Science', type: 'Mid-term Exam', date: 'May 28, 2025', grade: 'A' },
    { subject: 'Advanced Mathematics', type: 'Assignment', date: 'June 2, 2025', grade: 'B+' },
    { subject: 'Physics', type: 'Quiz', date: 'June 5, 2025', grade: 'A-' },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">Recent Results</h3>
        <button className="text-blue-600 text-sm">All Results</button>
      </div>
      <ul className="space-y-2 text-sm">
        {results.map((item) => (
          <li key={item.subject} className="flex justify-between border-b pb-1">
            <div>
              <p className="font-medium">{item.subject}</p>
              <p className="text-xs text-gray-500">{item.type} - {item.date}</p>
            </div>
            <span className="text-green-600 font-bold">{item.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
 export default RecentResults;