import { Calendar, Library, Monitor } from "lucide-react";

export default function UpcomingDues() {
  const dues = [
    {
      icon: <Calendar className="text-yellow-500 w-5 h-5" />,
      title: "Tuition Fee (Final Installment)",
      due: "Due by July 15, 2025",
      desc: "Late payment fee of $50 applies after due date",
      amount: "$3,750",
      action: "Pay Now"
    },
    {
      icon: <Library className="text-blue-500 w-5 h-5" />,
      title: "Library Fee",
      due: "Due by August 10, 2025",
      desc: "Annual library access fee",
      amount: "$120",
      action: "Pay Later"
    },
    {
      icon: <Monitor className="text-green-500 w-5 h-5" />,
      title: "Computer Lab Access",
      due: "Due by August 20, 2025",
      desc: "Semester computer lab access fee",
      amount: "$85",
      action: "Pay Later"
    },
  ];
  
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="font-semibold text-gray-800 dark:text-gray-100">Upcoming Dues</div>
        <button className="text-xs text-blue-600 dark:text-blue-400 font-medium">View All</button>
      </div>

      <div className="flex flex-col gap-4">
        {dues.map((d, i) => (
          <div
            key={i}
            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
          >
            <div>{d.icon}</div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 dark:text-gray-100">{d.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{d.due}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{d.desc}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-base font-bold text-gray-800 dark:text-gray-100">{d.amount}</div>
              <button
                className={`mt-2 px-4 py-1 text-xs font-semibold rounded transition ${
                  d.action === "Pay Now"
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {d.action}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
