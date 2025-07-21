const SystemNotifications = ({ notifications = [] }) => {
  const dummyNotifications = notifications.length
    ? notifications
    : [
        { text: "System maintenance scheduled for June 10th", time: "2 hours ago" },
        { text: "New course registration opens next week", time: "5 hours ago" },
        { text: "Semester grades have been finalized", time: "1 day ago" },
      ];

  return (
		<div className="px-4 sm:px-6">
			<div className="bg-white p-4 rounded-xl shadow-md">
				<h3 className="font-semibold mb-3">System Notifications</h3>
				<ul className="space-y-2 text-sm text-gray-700">
					{dummyNotifications.map((n, idx) => (
					<li key={idx}>
						<p>{n.text}</p>
						<p className="text-xs text-gray-500">{n.time}</p>
					</li>
					))}
				</ul>
			</div>
		</div>
  );
};

export default SystemNotifications;
