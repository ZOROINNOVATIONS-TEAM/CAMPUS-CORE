import {
  FileText,
  BarChart2,
  BookOpen,
  DollarSign,
  DownloadCloud,
} from "lucide-react";

export function QuickReportsCard({ reports }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 sm:p-6 flex flex-col min-h-[220px] relative">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Quick Reports</h3>
        <button className="p-1 rounded hover:bg-gray-100 transition">
          <DownloadCloud className="w-5 h-5 text-gray-400" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
        {reports.map((r, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 p-3 rounded-lg ${
              r.active
                ? "border-2 border-blue-400 bg-blue-50"
                : "border border-gray-100 bg-gray-50"
            }`}
          >
            <span
              className={`p-2 rounded ${
                r.iconColor ? r.iconColor : "bg-blue-100"
              }`}
            >
              {r.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-[15px] font-semibold text-gray-900 truncate">
                {r.title}
              </div>
              <div className="text-xs text-gray-500 truncate">
                {r.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
