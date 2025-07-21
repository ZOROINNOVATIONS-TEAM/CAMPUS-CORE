import { useEffect, useState } from "react";
import ResultTable from "./ResultTable";
import ResultForm from "./ResultForm";
import FilterBar from "./FilterBar";
import { Plus, FileText } from "lucide-react";

// Mock data (for first-time load)
const MOCK_DATA = [
  {
    id: 1,
    student: "Amit Sharma",
    course: "Data Structures",
    semester: "4",
    department: "CSE",
    marks: 87,
    grade: "A",
  },
  {
    id: 2,
    student: "Riya Verma",
    course: "Digital Electronics",
    semester: "3",
    department: "ECE",
    marks: 72,
    grade: "B+",
  },
  {
    id: 3,
    student: "Rohan Patel",
    course: "Thermodynamics",
    semester: "2",
    department: "ME",
    marks: 91,
    grade: "A+",
  },
];

const ResultsPage = () => {
  const [results, setResults] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);
  const [filters, setFilters] = useState({ department: "", semester: "" });

  // Load from localStorage or fallback to mock
  useEffect(() => {
    const stored = localStorage.getItem("adminResults");
    if (stored) {
      setResults(JSON.parse(stored));
    } else {
      setResults(MOCK_DATA);
      localStorage.setItem("adminResults", JSON.stringify(MOCK_DATA));
    }
  }, []);

  // Save on updates
  useEffect(() => {
    localStorage.setItem("adminResults", JSON.stringify(results));
  }, [results]);

  const handleAdd = () => {
    setEditData(null);
    setShowForm(true);
  };

  const handleEdit = (result) => {
    setEditData(result);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setResults(results.filter((r) => r.id !== id));
  };

  const handleSave = (data) => {
    if (editData) {
      setResults(results.map((r) => (r.id === data.id ? data : r)));
    } else {
      setResults([...results, { ...data, id: Date.now() }]);
    }
    setShowForm(false);
  };

  const filteredResults = results.filter((r) => {
    return (
      (!filters.department || r.department === filters.department) &&
      (!filters.semester || r.semester === filters.semester)
    );
  });

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-white text-black dark:bg-zinc-900 dark:text-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <FileText size={24} className="text-blue-600" />
          <span>Results Management</span>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          <Plus size={18} />
          <span className="text-sm font-medium">Add Result</span>
        </button>
      </div>

      {/* Filter & Table */}
      <FilterBar filters={filters} setFilters={setFilters} />
      <ResultTable results={filteredResults} onEdit={handleEdit} onDelete={handleDelete} />

      {/* Form Modal */}
      {showForm && (
        <ResultForm
          onClose={() => setShowForm(false)}
          onSave={handleSave}
          defaultValues={editData}
        />
      )}
    </div>
  );
};

export default ResultsPage;
