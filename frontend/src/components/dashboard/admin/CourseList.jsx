import { useState, useMemo } from "react";

const PAGE_SIZE = 5; // number of courses per page

export default function CourseList({ courses, onEdit, onDelete, onAssign }) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  // Filter courses by search
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

  // Paginate
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function gotoPage(newPage) {
    setPage(Math.max(1, Math.min(newPage, totalPages)));
  }

  // Reset to page 1 when searching
  function handleSearch(e) {
    setSearch(e.target.value);
    setPage(1);
  }

  return (
    <div className="bg-white rounded-xl shadow border border-gray-200 p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
        <h2 className="text-lg font-bold">Courses</h2>
        <input
          className="border rounded px-3 py-2 w-full md:w-64"
          placeholder="Search by name, code or department"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm">
          <thead>
            <tr className="bg-gray-50">
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
                <td colSpan={8} className="text-center py-6 text-gray-400">
                  No courses found.
                </td>
              </tr>
            ) : (
              visible.map((c) => (
                <tr key={c.id} className="border-t hover:bg-blue-50/40">
                  <td className="px-2 py-2 font-medium">{c.name}</td>
                  <td className="px-2 py-2">{c.code}</td>
                  <td className="px-2 py-2">{c.department}</td>
                  <td className="px-2 py-2">{c.credits}</td>
                  <td className="px-2 py-2">{c.students}</td>
                  <td className="px-2 py-2">{c.faculty}</td>
                  <td className="px-2 py-2">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs ${
                        c.status === "active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="px-2 py-2 flex gap-1">
                    <button
                      className="text-blue-600 hover:underline text-xs"
                      onClick={() => onEdit(c)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline text-xs"
                      onClick={() => onDelete(c)}
                    >
                      Delete
                    </button>
                    <button
                      className="text-purple-500 hover:underline text-xs"
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

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4 gap-2">
        <span className="text-xs text-gray-500">
          Page {page} of {totalPages || 1}
        </span>
        <div className="flex gap-2">
          <button
            className="px-2 py-1 border rounded text-xs"
            onClick={() => gotoPage(page - 1)}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="px-2 py-1 border rounded text-xs"
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
