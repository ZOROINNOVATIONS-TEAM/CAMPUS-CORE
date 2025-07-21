const UserManagement = ({ totalUsers = 1310, recent = [] }) => {
  const dummy = recent.length
    ? recent
    : [
        { name: "Emily Parker", course: "Data Science", date: "2hr ago" },
        { name: "Taylor Williams", course: "Physics", date: "1 day ago" },
      ];

  return (
	<div className="px-4 sm:px-6">
	    <div className="bg-white p-4 rounded-xl shadow-md">
			<div className="flex justify-between mb-2 text-sm">
				<span>Total Users: <strong>{totalUsers}</strong></span>
				<span>+ Register New</span>
			</div>
			<h4 className="font-semibold mb-2 mt-10">Recent Registrations</h4>
			<ul className="text-sm space-y-2 mt-8">
				{dummy.map((user, idx) => (
				<li key={idx} className="flex justify-between">
					<span>{user.name}</span>
					<span className="text-gray-500">{user.course}</span>
					<span className="text-xs">{user.date}</span>
				</li>
				))}
			</ul>
		</div>
	</div>
  );
};

export default UserManagement;
