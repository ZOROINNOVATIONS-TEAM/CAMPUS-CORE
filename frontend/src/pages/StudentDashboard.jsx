import React from 'react'
import CourseSetup from '../components/StudentDashboard/CourseSetup'
import DashboardMain from '../components/faculty/DashboardMain'
import Schedule from '../components/StudentDashboard/Schedule'
import Result from '../components/StudentDashboard/Result'
import StudentFees from '../components/StudentDashboard/StudentFees'
import OthersPage from '../components/StudentDashboard/OthersPage'
import Mentor from '../components/StudentDashboard/Mentor'
import StudentDashboardLayout from '../components/StudentDashboard/StudentDashboardLayout'
import { Navigate, Route, Routes } from 'react-router'
import Footer from './footer'
import StudentHome from '../components/StudentDashboard/StudentHome'

const StudentDashboard = () => {
  return (
    <StudentDashboardLayout>
      <Routes>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path='home' element={<StudentHome />} />
        <Route path='schedule' element={<Schedule/>} />
        <Route path='courses' element={<CourseSetup/>} />
        <Route path='result' element={<Result />} />
        <Route path='fees' element={<StudentFees />} />
        <Route path='other' element={<OthersPage />} />
        <Route path='mentor' element={<Mentor/>} />
      </Routes>
      <Footer/>
    </StudentDashboardLayout>

  )
}

export default StudentDashboard