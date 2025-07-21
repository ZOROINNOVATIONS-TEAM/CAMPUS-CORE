const Announcements = ({ announcements = [] }) => {
  const dummy = announcements.length
    ? announcements
    : [
        {
          title: "Faculty Senate Meeting",
          text: "Please attend the Senate meeting at 3:00 PM.",
          time: "2 hours ago",
        },
        {
          title: "Summer Registration Open",
          text: "Register for summer courses online before the deadline.",
          time: "5 hours ago",
        },
      ];

  return (
    <div className="px-4 sm:px-6">
		<div className="bg-white p-4 rounded-xl shadow-md">
			<h3 className="font-semibold mb-3">Announcements</h3>
			{dummy.map((a, idx) => (
			<div key={idx} className="mb-3 text-sm">
				<p className="font-medium">{a.title}</p>
				<p className="text-gray-600">{a.text}</p>
				<p className="text-xs text-gray-500">{a.time}</p>
			</div>
			))}
		</div>
    </div>
  );
};

export default Announcements;
