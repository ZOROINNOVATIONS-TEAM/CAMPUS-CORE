import Topbar from "../components/Topbar";
import Sidebar from "../components/Sidebar";
import WelcomeCard from "../components/WelcomeCard";
import AttendanceSummary from "../components/AttendanceSummary";
import AttendanceChart from "../components/AttendanceChart";
import RecentResults from "../components/RecentResults";

function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 space-y-4">
      <Topbar />
      <Sidebar />
      <WelcomeCard />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <AttendanceSummary />
          <div className="bg-white p-4 rounded-xl shadow">
            <AttendanceChart />
          </div>
        </div>
        <RecentResults />
      </div>
    </div>
  );
}

export default StudentDashboard;
