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
  Important: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "Action Required": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  Information: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

export default function FacultyAnnouncementsCard() {
  return (
    <div className="bg-white dark:bg-[#121212] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100">
          Announcements
        </h2>
        <a
          href="#"
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          View All
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {announcements.map((a, idx) => (
          <div
            key={idx}
            className="bg-gray-50 dark:bg-[#1a1a1a] hover:bg-gray-100 dark:hover:bg-[#232323] transition rounded-lg p-4 border border-gray-100 dark:border-gray-800"
          >
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-medium text-gray-800 dark:text-gray-100">
                {a.title}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tagColor[a.tag]}`}
              >
                {a.tag}
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
              {a.content}
            </p>
            <div className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              {a.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
