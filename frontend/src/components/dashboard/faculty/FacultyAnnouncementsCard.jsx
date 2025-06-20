
const announcements = [
  {
    title: "Building C Renovation",
    content: "Room C203 is unavailable until July 7th. Please relocate sessions.",
    tag: "Important",
    date: "June 20, 2025",
  },
  {
    title: "Conference Travel Grants",
    content: "Apply by July 1st for partial funding to present at CS conferences.",
    tag: "Action Required",
    date: "June 18, 2025",
  },
  {
    title: "Faculty Meeting",
    content: "Monthly meeting on June 30, 3pm, Conference Room B.",
    tag: "Information",
    date: "June 17, 2025",
  },
];

const tagColor = {
  Important: "bg-red-100 text-red-800",
  "Action Required": "bg-yellow-100 text-yellow-800",
  Information: "bg-green-100 text-green-800",
};

export default function FacultyAnnouncementsCard() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-gray-800">Announcements</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
      </div>
      <div className="flex flex-col gap-4">
        {announcements.map((a, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg p-4 flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="font-medium text-gray-700">{a.title}</div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${tagColor[a.tag]}`}>{a.tag}</span>
            </div>
            <div className="text-xs text-gray-500">{a.content}</div>
            <div className="text-xs text-gray-400 mt-1">{a.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
