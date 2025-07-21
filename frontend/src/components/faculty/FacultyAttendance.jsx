import { useState } from 'react';

const studentsByClass = {
  Math: [
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Cathy Lee" },
  ],
  English: [
    { id: 4, name: "David Brown" },
    { id: 5, name: "Ella Stone" },
    { id: 6, name: "Frank White" },
  ],
  Science: [
    { id: 7, name: "Grace Green" },
    { id: 8, name: "Henry Black" },
    { id: 9, name: "Ivy Wilson" },
  ],
};

const statusColors = {
  Present: "bg-blue-50 text-blue-600",
  Late: "bg-yellow-50 text-yellow-600",
  Absent: "bg-red-50 text-red-600",
};

const FacultyAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('Math');
  const [attendance, setAttendance] = useState({});
  const [showStats, setShowStats] = useState(true);

  const students = studentsByClass[selectedClass];

  // Compute statistics
  const stats = { Present: 0, Late: 0, Absent: 0 };
  students.forEach(student => {
    const status = attendance[student.id];
    if (status) stats[status]++;
  });
  const total = students.length;
  const presentPercent = Math.round((stats.Present / total) * 100) || 0;
  const latePercent = Math.round((stats.Late / total) * 100) || 0;
  const absentPercent = Math.round((stats.Absent / total) * 100) || 0;

  // Handle status update for a student
  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  // Handle submit
  const handleSubmit = () => {
    alert(
      "Attendance Submitted!\n" +
        students
          .map(
            stu =>
              `${stu.name}: ${
                attendance[stu.id] ? attendance[stu.id] : "Not marked"
              }`
          )
          .join("\n")
    );
    setAttendance({});
    setShowStats(true);
  };

  // Handle cancel
  const handleCancel = () => {
    setAttendance({});
    setShowStats(true);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Submit Attendance</h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
          View Details
        </a>
      </div>

      {/* Attendance Statistics */}
      {showStats && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-lg font-semibold text-blue-600">{presentPercent}%</p>
            <p className="text-sm text-blue-600">Student Present</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4">
            <p className="text-lg font-semibold text-yellow-600">{latePercent}%</p>
            <p className="text-sm text-yellow-600">Late</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4">
            <p className="text-lg font-semibold text-red-600">{absentPercent}%</p>
            <p className="text-sm text-red-600">Absent</p>
          </div>
        </div>
      )}

      {/* Class Selection */}
      <div className="mb-6">
        <div className="flex space-x-4">
          {Object.keys(studentsByClass).map(subject => (
            <button
              key={subject}
              onClick={() => {
                setSelectedClass(subject);
                setAttendance({});
                setShowStats(true);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedClass === subject
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {subject}
            </button>
          ))}
        </div>
      </div>

      {/* Student List & Attendance Marking */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">
            Student List ({selectedClass})
          </h3>
          <button
            className="text-xs text-blue-600 hover:underline"
            onClick={() => setShowStats(s => !s)}
          >
            {showStats ? "Hide Stats" : "Show Stats"}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border">
            <thead>
              <tr>
                <th className="py-2 px-2 text-gray-600 text-left">Name</th>
                <th className="py-2 px-2 text-gray-600">Present</th>
                <th className="py-2 px-2 text-gray-600">Absent</th>
                <th className="py-2 px-2 text-gray-600">Late</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-t">
                  <td className="py-2 px-2 font-medium text-gray-800 text-left">
                    {student.name}
                  </td>
                  {["Present", "Absent", "Late"].map(status => (
                    <td key={status} className="py-2 px-2 text-center">
                      <input
                        type="radio"
                        name={`status_${student.id}`}
                        checked={attendance[student.id] === status}
                        onChange={() => handleStatusChange(student.id, status)}
                        className="accent-blue-600"
                        aria-label={status}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default FacultyAttendance;