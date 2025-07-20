// import React from "react";

// const RoleTabs = ({ role, setRole }) => {
//   const roles = ["Student", "Faculty", "Admin"];
//   return (
//     <div className="flex space-x-2 mb-6">
//       {roles.map((r) => (
//         <button
//           key={r}
//           className={`px-4 py-2 rounded ${
//             role === r ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//           onClick={() => setRole(r)}
//         >
//           {r}
//         </button>
//       ))}
//     </div>
//   );
// };
// export default RoleTabs;
// // import React from "react";

// // export default function RoleTabs({ role, setRole }) {
// //   return (
// //     <div className="flex justify-center mb-6">
// //       {["Student", "Faculty", "Admin"].map((r) => (
// //         <button
// //           key={r}
// //           className={`px-4 py-2 font-semibold rounded mx-1 ${
// //             role === r ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
// //           }`}
// //           onClick={() => setRole(r)}
// //         >
// //           {r}
// //         </button>
// //       ))}
// //     </div>
// //   );
// // }
import React from "react";

const RoleTabs = ({ role, setRole }) => {
  // const roles = ["Student", "Faculty", "Admin"];
  const roles = ["Student", "Faculty"];
  return (
    <div className="flex justify-center mb-6">
      {roles.map((r) => (
        <button
          key={r}
          type="button"
          className={`px-4 py-2 font-semibold rounded-full mx-1 transition-all duration-150 ${
            role === r
              ? "bg-blue-600 text-white shadow"
              : "bg-gray-100 text-gray-600 hover:bg-blue-100"
          }`}
          onClick={() => setRole(r)}
          aria-pressed={role === r}
        >
          {r}
        </button>
      ))}
    </div>
  );
};
export default RoleTabs;
