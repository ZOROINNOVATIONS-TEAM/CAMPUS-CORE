// import { useEffect } from "react";
// import { X } from "lucide-react"; // Optional: use lucide for icons

// export default function Notification({ type = "info", message, onClose }) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, 4000); // auto-dismiss after 4s
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   const typeStyles = {
//     success: "bg-green-100 text-green-800 border-green-400",
//     error: "bg-red-100 text-red-800 border-red-400",
//     info: "bg-blue-100 text-blue-800 border-blue-400",
//     warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
//   };

//   return (
//     <div
//       className={`max-w-sm w-full border-l-4 p-4 rounded shadow-md animate-slide-in ${typeStyles[type]} relative`}
//     >
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-xl text-gray-500 hover:text-black"
//       >
//         <X size={16} />
//       </button>
//       <p className="text-sm font-medium">{message}</p>
//     </div>
//   );
// }
import { useEffect } from "react";
import { X } from "lucide-react"; // Optional: use lucide for icons

export default function Notification({ type = "info", message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // auto-dismiss after 4s
    return () => clearTimeout(timer);
  }, [onClose]);

  // Add dark: variants for all notification types:
  const typeStyles = {
    success:
      "bg-green-100 text-green-800 border-green-400 dark:bg-green-900 dark:text-green-100 dark:border-green-500",
    error:
      "bg-red-100 text-red-800 border-red-400 dark:bg-red-900 dark:text-red-100 dark:border-red-500",
    info:
      "bg-blue-100 text-blue-800 border-blue-400 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-500",
    warning:
      "bg-yellow-100 text-yellow-800 border-yellow-400 dark:bg-yellow-900 dark:text-yellow-100 dark:border-yellow-500",
  };

  return (
    <div
      className={`max-w-sm w-full border-l-4 p-4 rounded shadow-md transition-colors duration-200 animate-slide-in ${typeStyles[type]} relative`}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-xl text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
