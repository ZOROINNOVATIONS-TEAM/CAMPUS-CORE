import FacultyAnnouncements from '../components/faculty/FacultyAnnouncements';
import FacultyAttendance from '../components/faculty/FacultyAttendance';
import FacultyDashboardLayout from '../components/faculty/FacultyDashboardLayout';
import FacultySchedule from '../components/faculty/FacultySchedule';
import FacultyUpcomingEvents from '../components/faculty/FacultyUpcomingEvents';

const FacultyDashboard = () => {
  return (
    <FacultyDashboardLayout>
      <div className="w-full max-w-[1200px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <FacultyAttendance />
            <FacultySchedule />
          </div>
          {/* Sidebar - Right Side */}
          <div className="flex flex-col gap-8">
            <FacultyUpcomingEvents />
            <FacultyAnnouncements />
          </div>
        </div>
      </div>
    </FacultyDashboardLayout>
  );
};

export default FacultyDashboard;