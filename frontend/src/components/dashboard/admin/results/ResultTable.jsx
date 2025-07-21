import { Pencil, Trash2 } from "lucide-react";

const ResultTable = ({ results, onEdit, onDelete }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
        <thead className="bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Student</th>
            <th className="px-4 py-2 text-left">Course</th>
            <th className="px-4 py-2 text-left">Semester</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left">Marks</th>
            <th className="px-4 py-2 text-left">Grade</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {results.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center px-4 py-6 text-muted-foreground">
                No results found.
              </td>
            </tr>
          ) : (
            results.map((res) => (
              <tr
                key={res.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-zinc-800 transition"
              >
                <td className="px-4 py-2">{res.student}</td>
                <td className="px-4 py-2">{res.course}</td>
                <td className="px-4 py-2">{res.semester}</td>
                <td className="px-4 py-2">{res.department}</td>
                <td className="px-4 py-2">{res.marks}</td>
                <td className="px-4 py-2">{res.grade}</td>
                <td className="px-4 py-2 text-center">
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={() => onEdit(res)}
                      className="text-blue-600 dark:text-blue-400 hover:scale-110 transition"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(res.id)}
                      className="text-red-500 dark:text-red-400 hover:scale-110 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
