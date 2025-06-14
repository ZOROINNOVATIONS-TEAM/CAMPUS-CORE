function AttendanceSummary() {
  const stats = [
    { label: 'Present', value: '85%', color: 'bg-blue-100', icon: '🟦' },
    { label: 'Late', value: '10%', color: 'bg-yellow-100', icon: '🟨' },
    { label: 'Absent', value: '5%', color: 'bg-red-100', icon: '🟥' },
  ];

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <div className="flex justify-between mb-3">
        <h3 className="font-semibold">Attendance Summary</h3>
        <button className="text-blue-600 text-sm">View Details</button>
      </div>
      <div className="flex space-x-4">
        {stats.map((stat) => (
          <div key={stat.label} className={`w-1/3 ${stat.color} p-3 rounded text-center`}>
            <p className="text-xl">{stat.icon}</p>
            <p className="font-bold">{stat.value}</p>
            <p className="text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AttendanceSummary;