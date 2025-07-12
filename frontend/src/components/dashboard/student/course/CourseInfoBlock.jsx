import {
  FileText,
  BookOpen,
  ClipboardList,
  Calendar,
} from "lucide-react";

const iconsMap = {
  syllabus: <FileText className="w-5 h-5" />,
  resources: <BookOpen className="w-5 h-5" />,
  assignments: <ClipboardList className="w-5 h-5" />,
  schedule: <Calendar className="w-5 h-5" />,
};

export function CourseInfoBlock({ type, label, sublabel, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center justify-center border border-gray-200 dark:border-gray-700 rounded-md p-3 w-full min-w-[110px] text-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
    >
      <div className="text-indigo-600 dark:text-indigo-400 mb-1">
        {iconsMap[type]}
      </div>
      <span className="text-xs font-semibold text-gray-700 dark:text-gray-100">
        {label}
      </span>
      {sublabel && (
        <span className="text-[11px] text-gray-500 dark:text-gray-400 leading-tight mt-0.5">
          {sublabel}
        </span>
      )}
    </div>
  );
}
