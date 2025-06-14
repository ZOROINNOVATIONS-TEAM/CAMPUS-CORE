// import React from "react";
// import { useNavigate } from "react-router-dom";

// export default function AdminHome() {
//   const navigate = useNavigate();
//   const user = JSON.parse(localStorage.getItem("currentUser"));

//   const handleLogout = () => {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("currentUser");
//     navigate("/admin/login");
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
//       <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-lg text-center">
//         <h1 className="text-2xl font-bold text-blue-700 mb-4">Welcome, Admin!</h1>
//         <p className="mb-6 text-gray-600">You are now logged in as <b>{user?.email}</b>.</p>
//         <button
//           onClick={handleLogout}
//           className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//         >
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }
// src/pages/AdminHome.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHome() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-4">Welcome, {user?.name}</h1>
        <p className="text-gray-600 text-center mb-6">
          You're logged in as an administrator
        </p>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
