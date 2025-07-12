import { X } from "lucide-react";

export default function MentorChatModal({ open, onClose, mentor, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`
          bg-white dark:bg-gray-800 shadow-xl
          rounded-t-2xl md:rounded-2xl
          w-full h-[95vh] max-w-none md:max-w-md md:h-[80vh]
          fixed left-0 bottom-0 md:static
          flex flex-col animate-slide-up
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="text-base font-semibold text-gray-800 dark:text-white">
            {mentor?.name || "Mentor"}
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white p-1 rounded"
            aria-label="Close chat modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
