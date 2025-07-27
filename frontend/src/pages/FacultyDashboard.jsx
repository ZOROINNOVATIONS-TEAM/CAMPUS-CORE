import { Navigate, Route, Routes } from 'react-router';
import FacultyAnnouncements from '../components/faculty/FacultyAnnouncements';
import FacultyAttendance from '../components/faculty/FacultyAttendance';
import FacultyDashboardLayout from '../components/faculty/FacultyDashboardLayout';
import FacultySchedule from '../components/faculty/FacultySchedule';
import FacultyUpcomingEvents from '../components/faculty/FacultyUpcomingEvents';
import DashboardMain from '../components/faculty/DashboardMain';
import Footer from './footer';
import FacultyExamPage from '../components/faculty/FacultyExamPage';
import FacultyCoursesDashboard from '../components/faculty/FacultyCoursesDashboard';
import FacultyGradingPage from '../components/faculty/FacultyGradingPage';
import FacultyAssignmentPage from '../components/faculty/FacultyAssignmentPage';
import FacultyDutiesPage from '../components/faculty/FacultyDutiesPage';
import FacultyMentorPage from '../components/faculty/FacultyMentorPage';
import FacultyCreateUser from '../components/faculty/FaculyCreateUser';

const FacultyDashboard = () => {
  return (
    <FacultyDashboardLayout>
      

       <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path='home' element={<DashboardMain />} />
        <Route path='exam' element={<FacultyExamPage/>} />
        <Route path='courses' element={<FacultyCoursesDashboard/>} />
        <Route path='grading' element={<FacultyGradingPage/>} />
        <Route path='assignment' element={<FacultyAssignmentPage />} />
        <Route path='duties' element={<FacultyDutiesPage />} />
        <Route path='mentor' element={<FacultyMentorPage/>} />
        <Route path='create-user' element={<FacultyCreateUser/>}/>
      </Routes>
      <Footer/>
    </FacultyDashboardLayout >
  );
};

export default FacultyDashboard;
