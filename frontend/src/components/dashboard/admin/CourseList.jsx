import { useState, useMemo } from "react";

const PAGE_SIZE = 5;

export default function CourseList({ courses, onEdit, onDelete, onAssign }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      courses.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.code.toLowerCase().includes(search.toLowerCase()) ||
          c.department.toLowerCase().includes(search.toLowerCase())
      ),
    [courses, search]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function gotoPage(newPage) {
    setPage(Math.max(1, Math.min(newPage, totalPages)));
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Courses</h2>
        <input
          className="border border-gray-300 dark:border-gray-600 rounded px-3 py-2 w-full md:w-64 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-400"
          placeholder="Search by name, code or department"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200">
              <th className="px-2 py-2 text-left">Name</th>
              <th className="px-2 py-2 text-left">Code</th>
              <th className="px-2 py-2 text-left">Department</th>
              <th className="px-2 py-2 text-left">Credits</th>
              <th className="px-2 py-2 text-left">Students</th>
              <th className="px-2 py-2 text-left">Faculty</th>
              <th className="px-2 py-2 text-left">Status</th>
              <th className="px-2 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {visible.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="text-center py-6 text-gray-400 dark:text-gray-500"
                >
                  No courses found.
                </td>
              </tr>
            ) : (
              visible.map((c) => (
                <tr
                  key={c.id}
                  className="border-t dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700"
                >
                  <td className="px-2 py-2 font-medium text-gray-800 dark:text-gray-100">
                    {c.name}
                  </td>
                  <td className="px-2 py-2 text-gray-700 dark:text-gray-300">{c.code}</td>
                  <td className="px-2 py-2 text-gray-700 dark:text-gray-300">{c.department}</td>
                  <td className="px-2 py-2 text-gray-700 dark:text-gray-300">{c.credits}</td>
                  <td className="px-2 py-2 text-gray-700 dark:text-gray-300">{c.students}</td>
                  <td className="px-2 py-2 text-gray-700 dark:text-gray-300">{c.faculty}</td>
                  <td className="px-2 py-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        c.status === "active"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300"
                          : "bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-2 py-2 flex gap-1">
                    <button
                      className="text-blue-600 dark:text-blue-400 hover:underline text-xs"
                      onClick={() => onEdit(c)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 dark:text-red-400 hover:underline text-xs"
                      onClick={() => onDelete(c)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-purple-500 dark:text-purple-300 hover:underline text-xs"
                      onClick={() => onAssign(c)}
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Page {page} of {totalPages || 1}
        </span>
        <div className="flex gap-2">
          <button
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            onClick={() => gotoPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded text-xs bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200"
            onClick={() => gotoPage(page + 1)}
            disabled={page === totalPages || totalPages === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
