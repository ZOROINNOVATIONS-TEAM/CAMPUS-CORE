import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaCheck, FaTimes, FaClock, FaUserCheck } from "react-icons/fa";

const statusIcons = {
  Present: <FaCheck className="inline text-green-600" />,
  Absent: <FaTimes className="inline text-red-600" />,
  Late: <FaClock className="inline text-yellow-500" />,
  "Not Marked": <FaUserCheck className="inline text-gray-400" />,
};

const statusOrder = ["Present", "Absent", "Late"];

const FacultyAttendance = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState('');
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [showStats, setShowStats] = useState(true);
  const [bulkStatus, setBulkStatus] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/faculty/courses");
        setCourses(res.data.courses);
        if (res.data.courses.length > 0) {
          setSelectedCourseTitle(res.data.courses[0].name);
        }
      } catch (err) {
        console.error("Failed to fetch courses:", err);
        alert("Unable to load courses.");
      }
    };

    fetchCourses();
  }, []);

  useEffect(() => {
    const fetchStudents = async () => {
      if (!selectedCourseTitle) return;

      try {
        const res = await axios.get("http://localhost:3000/api/v1/faculty/students", {
          params: { course_title: selectedCourseTitle }
        });

        setStudents(res.data.students);
        setAttendance({});
        setShowStats(true);
        setBulkStatus("");
      } catch (err) {
        console.error("Error fetching students:", err);
        alert("Failed to fetch students for the selected course.");
        setStudents([]);
      }
    };

    fetchStudents();
  }, [selectedCourseTitle]);

  const stats = { Present: 0, Late: 0, Absent: 0 };
  students.forEach(student => {
    const status = attendance[student.id];
    if (status) stats[status]++;
  });

  const total = students.length;
  const presentPercent = total ? Math.round((stats.Present / total) * 100) : 0;
  const latePercent = total ? Math.round((stats.Late / total) * 100) : 0;
  const absentPercent = total ? Math.round((stats.Absent / total) * 100) : 0;

  const handleStatusChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const handleBulkMark = (status) => {
    const updated = {};
    students.forEach(stu => {
      updated[stu.id] = status;
    });
    setAttendance(updated);
    setBulkStatus(status);
  };

  const handleSubmit = () => {
    const notMarked = students.filter(stu => !attendance[stu.id]);
    if (notMarked.length > 0 && !window.confirm(`${notMarked.length} students not marked. Submit anyway?`)) return;

    const course = courses.find(c => c.name === selectedCourseTitle);
    const courseId = course?.id || "unknown";

    const attendanceData = students.map(stu => ({
      student_id: stu.id,
      course_id: courseId,
      status: attendance[stu.id] || "Not Marked",
    }));

    axios
      .post("http://localhost:3000/api/v1/faculty/mark-attendance", attendanceData)
      .then(() => {
        alert("Attendance submitted successfully!");
        setAttendance({});
        setShowStats(true);
        setBulkStatus("");
      })
      .catch(error => {
        console.error("Error submitting attendance:", error);
        alert(`Submission failed: ${error.response?.data?.error || "Network or server error"}`);
      });
  };

  const handleCancel = () => {
    setAttendance({});
    setShowStats(true);
    setBulkStatus("");
  };

  return (
    <div className="bg-white rounded-xl shadow p-8 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <FaUserCheck className="text-blue-600" /> Submit Attendance
        </h2>
        <a href="#" className="text-sm text-blue-600 hover:text-blue-800 underline">
          View Details
        </a>
      </div>

      {showStats && (
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-blue-600">{presentPercent}%</p>
            <p className="text-base text-blue-600">Present</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-yellow-600">{latePercent}%</p>
            <p className="text-base text-yellow-600">Late</p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-red-600">{absentPercent}%</p>
            <p className="text-base text-red-600">Absent</p>
          </div>
        </div>
      )}

      <div className="mb-6 flex flex-wrap gap-3">
        {courses.map(course => (
          <button
            key={course.id}
            onClick={() => setSelectedCourseTitle(course.name)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize transition ${selectedCourseTitle === course.name
              ? 'bg-blue-600 text-white shadow'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {course.name}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-base font-semibold text-gray-800">Student List</h3>
          <button className="text-xs text-blue-600 hover:underline" onClick={() => setShowStats(s => !s)}>
            {showStats ? "Hide Stats" : "Show Stats"}
          </button>
        </div>

        <div className="flex gap-2 mb-3">
          {statusOrder.map(status => (
            <button
              key={status}
              onClick={() => handleBulkMark(status)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition border ${bulkStatus === status
                ? status === "Present"
                  ? "bg-blue-600 text-white border-blue-700"
                  : status === "Absent"
                    ? "bg-red-600 text-white border-red-700"
                    : "bg-yellow-500 text-white border-yellow-600"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200"
                }`}
            >
              Mark all {status}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-2 text-left">#</th>
                <th className="py-2 px-2 text-left">Name</th>
                {statusOrder.map(status => (
                  <th key={status} className="py-2 px-2 text-center">{status}</th>
                ))}
                <th className="py-2 px-2 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, i) => {
                const stuStatus = attendance[student.id] || "Not Marked";
                return (
                  <tr key={student.id} className="border-t">
                    <td className="py-2 px-2 text-center">{i + 1}</td>
                    <td className="py-2 px-2 font-medium text-gray-800">{student.name}</td>
                    {statusOrder.map(status => (
                      <td key={status} className="py-2 px-2 text-center">
                        <input
                          type="radio"
                          name={`status_${student.id}`}
                          checked={attendance[student.id] === status}
                          onChange={() => handleStatusChange(student.id, status)}
                          className="accent-blue-600 cursor-pointer scale-125"
                          aria-label={status}
                        />
                      </td>
                    ))}
                    <td className="py-2 px-2 text-center">
                      <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${stuStatus === "Present" ? "bg-blue-100 text-blue-600"
                        : stuStatus === "Absent" ? "bg-red-100 text-red-600"
                          : stuStatus === "Late" ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                        {statusIcons[stuStatus]} {stuStatus}
                      </span>
                    </td>
                  </tr>
                );
              })}
              {students.length === 0 && (
                <tr><td colSpan={6} className="text-center text-gray-500 py-4">No students found for this course.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <button
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-base font-semibold hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default FacultyAttendance;
