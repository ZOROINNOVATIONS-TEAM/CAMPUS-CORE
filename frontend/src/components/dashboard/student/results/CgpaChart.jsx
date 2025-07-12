import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Download, Printer } from "lucide-react";

const cgpaData = [
  { sem: "Sem 1", value: 7 },
  { sem: "Sem 2", value: 8 },
  { sem: "Sem 3", value: 6.5 },
  { sem: "Sem 4", value: 7.5 },
];

export default function CgpaChart() {
  const chartRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => chartRef.current,
    documentTitle: "SGPA_CGPA_Report",
  });

  const handleDownloadCSV = () => {
    const csv =
      "Semester,SGPA/CGPA\n" +
      cgpaData.map((row) => `${row.sem},${row.value}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "SGPA_CGPA.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      ref={chartRef}
      className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 flex flex-col"
    >
      <h4 className="text-md font-semibold mb-4 text-blue-600 dark:text-blue-400">
        SGPA / CGPA Progress
      </h4>

      {/* Chart Section */}
      <div className="w-full h-56">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={cgpaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="sem" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: "#6366f1" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-xs flex items-center gap-2 transition"
        >
          <Printer className="w-4 h-4" />
          Print SGPA/CGPA
        </button>

        <button
          onClick={handleDownloadCSV}
          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-1.5 rounded text-xs flex items-center gap-2 transition dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200"
        >
          <Download className="w-4 h-4" />
          Download as CSV
        </button>
      </div>
    </div>
  );
}
