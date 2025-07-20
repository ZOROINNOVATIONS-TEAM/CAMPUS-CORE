// // // import React from "react";
// // // import 'remixicon/fonts/remixicon.css';
// // // import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// // // import LoginPage from "./pages/LoginPage";
// // // import RegisterPage from "./pages/RegisterPage";
// // // import StudentHome from "./pages/StudentHome";
// // // import FacultyHome from "./pages/FacultyHome";
// // // import AdminHome from "./pages/AdminHome";
// // // import LoginRegisterPage from "./pages/LoginRegisterPage";
// // // function App() {
// // //   return (
// // //     <Routes>
// // //       <Route path="/" element={<LoginPage />} /> 
// // //       <Route path="/register" element={<RegisterPage />} />
// // //       <Route path="/student" element={<StudentHome />} />
// // //       <Route path="/faculty" element={<FacultyHome />} />
// // //       <Route path="/admin" element={<AdminHome />} />
// // //       { <Route path="/" element={<LoginRegisterPage />} />}
// // //     </Routes>
// // //   );
// // // }

// // // export default function AppWrapper() {
// // //   return (
// // //     <Router>
// // //       <App />
// // //     </Router>
// // //   );
// // // }
// // // // // // // // // }
// import React from "react";
// import 'remixicon/fonts/remixicon.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoginRegisterPage from "./pages/LoginRegisterPage";
// import StudentHome from "./pages/StudentHome";
// import FacultyHome from "./pages/FacultyHome";
// import AdminHome from "./pages/AdminHome";
// import ProtectedRoute from "./utils/ProtectedRoute";
// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<LoginRegisterPage />} />
//       <Route path="/student" element={<StudentHome />} />
//       <Route path="/faculty" element={<FacultyHome />} />
//       <Route path="/admin" element={<AdminHome />} />
//     </Routes>
//   );
// }

// export default function AppWrapper() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
// // // // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // // // import LoginRegisterPage from "./pages/LoginRegisterPage";
// // // // // import StudentHome from "./pages/StudentHome";
// // // // // import FacultyHome from "./pages/FacultyHome";
// // // // // import AdminHome from "./pages/AdminHome";

// // // // // function App() {
// // // // //   return (
// // // // //     <Router>
// // // // //       <Routes>
// // // // //         {/* Public route */}
// // // // //         <Route path="/" element={<LoginRegisterPage />} />
      
// // // // //         {/* Protected routes */}
// // // // //         <Route element={<ProtectedRoutes />}>
// // // // //           <Route path="/student" element={<StudentHome />} />
// // // // //           <Route path="/faculty" element={<FacultyHome />} />
// // // // //           <Route path="/admin" element={<AdminHome />} />
// // // // //         </Route>
// // // // //       </Routes>
// // // // //     </Router>
// // // // //   );
// // // // // }

// // // // // export default App;
// // // import React from "react";
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // // import LoginRegisterPage from "./pages/LoginRegisterPage";
// // // import StudentHome from "./pages/StudentHome";
// // // import FacultyHome from "./pages/FacultyHome";
// // // import AdminHome from "./pages/AdminHome";
// // // import ProtectedRoute from "./utils/ProtectedRoute";
// // // function App() {
// // //   return (
// // //     <Router>
// // //       <Routes>
// // //         <Route path="/" element={<LoginRegisterPage />} />
// // //         <Route element={<ProtectedRoute />}>
// // //           <Route path="/student" element={<StudentHome />} />
// // //           <Route path="/faculty" element={<FacultyHome />} />
// // //           <Route path="/admin" element={<AdminHome />} />
// // //         </Route>
// // //       </Routes>
// // //     </Router>
// // //   );
// // // }
// // // export default App;
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import LoginRegisterPage from "./pages/LoginRegisterPage";
// // import StudentHome from "./pages/StudentHome";
// // import FacultyHome from "./pages/FacultyHome";
// // import AdminHome from "./pages/AdminHome";
// // import ProtectedRoute from "./utils/ProtectedRoute";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         {/* Public route for login/register */}
// //         <Route path="/" element={<LoginRegisterPage />} />

// //         {/* Protected routes */}
// //         <Route element={<ProtectedRoute />}>
// //           <Route path="/student" element={<StudentHome />} />
// //           <Route path="/faculty" element={<FacultyHome />} />
// //           <Route path="/admin" element={<AdminHome />} />
// //         </Route>
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;
// AppWrapper.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import StudentHome from "./pages/StudentHome";
import FacultyHome from "./pages/FacultyHome";
import AdminHome from "./pages/AdminHome";
import ProtectedRoute from "./utils/ProtectedRoute";
import NotificationPage from "./pages/NotificationPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginRegisterPage />} />
      <Route
        path="/student"
        element={
          <ProtectedRoute role="Student">
            
            <StudentHome />
            
          </ProtectedRoute>
        }
      />
       <Route
        path="/notifications"
        element={
          <ProtectedRoute role="Student">
            <NotificationPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/faculty"
        element={
          <ProtectedRoute role="Faculty">
            <FacultyHome />
          </ProtectedRoute>
        }
      />
      {/* <Route
        path="/admin"
        element={
          <ProtectedRoute role="Admin">
            <AdminHome />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
