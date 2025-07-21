const QuickReports = ({ reports = [] }) => {
  const dummyReports = reports.length
    ? reports
    : [
        { name: "Attendance Report", updated: "Today" },
        { name: "Performance Stats", updated: "Yesterday" },
        { name: "Course Report", updated: "2 days ago" },
        { name: "Financial Summary", updated: "3 days ago" },
      ];

  return (
   <div className="px-4 sm:px-6">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h3 className="font-semibold mb-3">Quick Reports</h3>
          <ul className="text-sm space-y-2 mt-5">
            {dummyReports.map((r, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{r.name}</span>
                <span className="text-gray-500 text-xs">Last updated {r.updated}</span>
              </li>
            ))}
          </ul>
        </div>
   </div>
  );
};

export default QuickReports;
