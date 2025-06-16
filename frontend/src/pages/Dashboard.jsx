import Announcements from '../components/AdminDashboard/Announcements';
import AttendanceSummary from '../components/AdminDashboard/AttendanceSummary';
import DashboardLayout from '../components/AdminDashboard/DashboardLayout';
import RecentResults from '../components/AdminDashboard/RecentResults';
import TodaySchedule from '../components/AdminDashboard/TodaySchedule';

const Dashboard = ({ isAdmin = false }) => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2 space-y-6">
          <AttendanceSummary />
          <TodaySchedule />
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-6">
          <RecentResults />
          <Announcements />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
