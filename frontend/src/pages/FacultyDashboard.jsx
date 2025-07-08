import { Navigate, Route, Routes } from 'react-router';
import FacultyDashboardLayout from '../components/faculty/FacultyDashboardLayout';
import DashboardMain from '../components/faculty/DashboardMain';
import Assignment from '../components/faculty/Assignment';
import FacultyCoursesDashboard from '../components/faculty/FacultyCoursesDashboard';
import Duties from '../components/faculty/Duties';
import Exam from '../components/faculty/Exam';
import Grading from '../components/faculty/Grading';
import Mentor from '../components/faculty/Mentor';
import Footer from './footer';



const FacultyDashboard = () => {
  return (
    <FacultyDashboardLayout>
     <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path='home' element={<DashboardMain />} />
      <Route path='assignment' element={<Assignment/>} />
      <Route path='courses' element={<FacultyCoursesDashboard/>} />
      <Route path='duties' element={<Duties/>} />
      <Route path='exam' element={<Exam/>} />
      <Route path='grading' element={<Grading/>} />
      <Route path='mentor' element={<Mentor/>} />
      
     </Routes>
               <Footer/>

    </FacultyDashboardLayout>
  );
};

export default FacultyDashboard;

