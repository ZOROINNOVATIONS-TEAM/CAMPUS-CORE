const UpcomingEvents = ({ events = [] }) => {
  const dummyEvents = events.length
    ? events
    : [
        { date: "3 JUN", title: "Faculty Development Workshop", time: "9:00 AM" },
        { date: "5 JUN", title: "Student Orientation", time: "10:30 AM" },
        { date: "8 JUN", title: "Board Meeting", time: "2:00 PM" },
      ];

  return (
	<div className="px-4 sm:px-6">
		    <div className="bg-white p-4 rounded-xl shadow-md">
				<h3 className="font-semibold mb-3">Upcoming Events</h3>
				<ul className="space-y-2 text-sm mt-5 mb-8">
					{dummyEvents.map((event, idx) => (
					<li key={idx} className="flex justify-between">
						<span>{event.date}</span>
						<div className="flex-1 px-3">{event.title}</div>
						<span>{event.time}</span>
					</li>
					))}
				</ul>
			</div>
	</div>
  );
};

export default UpcomingEvents;
