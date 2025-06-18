export async function getTodaySchedule() {
 //simulation
  await new Promise((res) => setTimeout(res, 500));

  return [
    {
      id: "1",
      course: { name: "Web Programming", room: "Lab-2" },
      startTime: "09:00",
      endTime: "10:30",
      status: "completed",
    },
    {
      id: "2",
      course: { name: "Maths", room: "Room 101" },
      startTime: "11:00",
      endTime: "12:30",
      status: "current",
    },
    {
      id: "3",
      course: { name: "Physics", room: "Room 102" },
      startTime: "14:00",
      endTime: "15:30",
      status: "upcoming",
    },
  ];
}

export async function getFullSchedule() {
  
  await new Promise((res) => setTimeout(res, 500));

  return [
    {
      id: "1",
      course: { name: "Web Programming", room: "Lab-2" },
      startTime: "09:00",
      endTime: "10:30",
      day: "Monday",
      status: "completed",
    },
    {
      id: "2",
      course: { name: "Maths", room: "Room 101" },
      startTime: "11:00",
      endTime: "12:30",
      day: "Tuesday",
      status: "current",
    },
    {
      id: "3",
      course: { name: "Physics", room: "Room 102" },
      startTime: "14:00",
      endTime: "15:30",
      day: "Wednesday",
      status: "upcoming",
    },
    {
      id: "4",
      course: { name: "English", room: "Room 103" },
      startTime: "10:00",
      endTime: "11:30",
      day: "Thursday",
      status: "upcoming",
    },
  ];
}
