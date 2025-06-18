export async function getCourses() {
  
  await new Promise((res) => setTimeout(res, 400));

  return [
    {
      id: "1",
      name: "Advanced Mathematics",
      instructor: "Prof. Sarah Wilson",
      code: "MATH-301",
      assignments: { pending: 2, completed: 3 },
      schedule: { days: "Mon, Wed", time: "11:00 AM - 12:30 PM" },
    },
    {
      id: "2",
      name: "Introduction to Computer Science",
      instructor: "Prof. Michael Chen",
      code: "CS-101",
      assignments: { pending: 1, completed: 1 },
      schedule: { days: "Tue, Thu", time: "09:00 AM - 10:30 AM" },
    },
    {
      id: "3",
      name: "Physics Laboratory",
      instructor: "Prof. David Thompson",
      code: "PHY-201",
      assignments: { pending: 3, completed: 0 },
      schedule: { days: "Fri", time: "02:00 PM - 04:00 PM" },
    },
  ];
}
