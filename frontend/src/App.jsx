import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './auth/ProtectedRoute';

import Login from './pages/user/Login';
import AdminAuth from './pages/admin/AdminAuth';
import StudentDashboard from './pages/user/StudentDashboard';
import AttendanceDetails from './components/dashboard/student/AttendanceDetails';
import SchedulePage from './components/dashboard/student/SchedulePage';
import CourseSetup from './components/dashboard/student/course/CourseSetup';
import FacultyDashboard from './pages/user/FacultyDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsers from './components/dashboard/admin/ManageUsers';
import DashboardLayout from './layouts/DashboardLayout';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminAuth />} />

          {/* All authenticated dashboard pages share the same layout */}
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            {/* Student */}
            <Route
              path="/student-dashboard"
              element={<ProtectedRoute roles={[ 'student' ]}><StudentDashboard /></ProtectedRoute>}
            />
            <Route
              path="/attendance"
              element={<ProtectedRoute roles={[ 'student' ]}><AttendanceDetails /></ProtectedRoute>}
            />
            <Route
              path="/schedule"
              element={<ProtectedRoute roles={[ 'student' ]}><SchedulePage /></ProtectedRoute>}
            />
            <Route
              path="/course-setup"
              element={<ProtectedRoute roles={[ 'student' ]}><CourseSetup /></ProtectedRoute>}
            />

            {/* Faculty */}
            <Route
              path="/faculty-dashboard"
              element={<ProtectedRoute roles={[ 'faculty', 'admin' ]}><FacultyDashboard /></ProtectedRoute>}
            />

            {/* Admin */}
            <Route
              path="/admin-dashboard"
              element={<ProtectedRoute roles={[ 'admin' ]}><AdminDashboard /></ProtectedRoute>}
            />
            <Route
              path="/admin/manage-users"
              element={<ProtectedRoute permissions={[ 'manage:users' ]}><ManageUsers /></ProtectedRoute>}
            />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}