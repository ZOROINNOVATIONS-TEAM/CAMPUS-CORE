import { Dialog } from "@headlessui/react";
import { UserCheck, Clock, XCircle } from "lucide-react";

export default function AttendanceDetailsModal({ isOpen, onClose, detailData }) {
  if (!isOpen || !detailData) return null;

  const { class: cls, subject, date, analytics } = detailData;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-xl bg-white dark:bg-[#1c1c1c] p-6 shadow-xl">
          <Dialog.Title className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Attendance Details
          </Dialog.Title>

          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
            <p><strong>Class:</strong> {cls}</p>
            <p><strong>Subject:</strong> {subject}</p>
            <p><strong>Date:</strong> {date}</p>
            <hr className="my-2 border-gray-300 dark:border-gray-600" />

            <div className="space-y-1">
              <p className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                <UserCheck className="w-4 h-4" />
                Present: {analytics.present}%
              </p>
              <p className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
                <Clock className="w-4 h-4" />
                Late: {analytics.late}%
              </p>
              <p className="flex items-center gap-2 text-red-700 dark:text-red-300">
                <XCircle className="w-4 h-4" />
                Absent: {analytics.absent}%
              </p>
            </div>
          </div>

          {analytics.students && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="text-left border-b border-gray-300 dark:border-gray-700">
                    <th className="pb-2">Roll No.</th>
                    <th className="pb-2">Name</th>
                    <th className="pb-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.students.map((student) => (
                    <tr key={student.roll} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-2">{student.roll}</td>
                      <td className="py-2">{student.name}</td>
                      <td className="py-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold
                            ${student.status === "present" ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200" :
                              student.status === "late" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200" :
                                "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200"}`}
                        >
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
