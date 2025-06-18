export function getMentors() {
  return Promise.resolve([
    {
      id: 1,
      name: "Dr. Alice Johnson",
      email: "alice.johnson@example.edu",
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      phone: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Prof. Robert Smith",
      email: "robert.smith@example.edu",
      photo: "https://randomuser.me/api/portraits/men/46.jpg",
      phone: "+1 (555) 987-6543",
    },
  ]);
}

export function getSessions() {
  return Promise.resolve([
    {
      id: 101,
      mentorId: 1,
      date: "2025-06-20",
      time: "14:00",
      status: "Upcoming",
      topic: "Project Guidance",
    },
    {
      id: 102,
      mentorId: 2,
      date: "2025-05-30",
      time: "10:00",
      status: "Completed",
      topic: "Research Methodology",
    },
  ]);
}
