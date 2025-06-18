import { FileText, BookOpen, ClipboardList, Calendar } from "lucide-react";

const iconsMap = {
  syllabus: <FileText className="w-5 h-5" />,
  resources: <BookOpen className="w-5 h-5" />,
  assignments: <ClipboardList className="w-5 h-5" />,
  schedule: <Calendar className="w-5 h-5" />,
};

export function CourseInfoBlock({ type, label, sublabel }) {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-200 rounded-md p-3 w-24 text-center cursor-pointer hover:bg-gray-100 transition">
      <div className="text-indigo-600">{iconsMap[type]}</div>
      <span className="text-xs font-semibold">{label}</span>
      {sublabel && <span className="text-xs text-gray-500">{sublabel}</span>}
    </div>
  );
}
