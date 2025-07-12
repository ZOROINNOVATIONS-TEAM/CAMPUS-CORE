import { useState, useRef, useEffect } from "react";
import { Pencil, Trash2 } from "lucide-react";

export default function MentorMessageBubble({
  message,
  onEdit,
  onDelete,
  isOwn,
  isMobile,
}) {
  const [showActions, setShowActions] = useState(false);
  const actionsRef = useRef(null);
  const bubbleRef = useRef(null);
  const longPressTimer = useRef(null);

  const handleDoubleClick = () => {
    if (isOwn && !isMobile) setShowActions(true);
  };

  const handleTouchStart = () => {
    if (isOwn && isMobile) {
      longPressTimer.current = setTimeout(() => setShowActions(true), 500);
    }
  };

  const handleTouchEnd = () => {
    clearTimeout(longPressTimer.current);
  };

  useEffect(() => {
    if (!showActions) return;
    const handleClickOutside = (e) => {
      if (
        !actionsRef.current?.contains(e.target) &&
        !bubbleRef.current?.contains(e.target)
      ) {
        setShowActions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showActions]);

  return (
    <div
      ref={bubbleRef}
      className={`flex flex-col relative select-text ${
        isOwn ? "items-end" : "items-start"
      }`}
      onDoubleClick={handleDoubleClick}
      tabIndex={isOwn && !isMobile ? 0 : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Message bubble */}
      <div
        className={`rounded-xl px-4 py-2 max-w-xs shadow-md transition ${
          isOwn
            ? "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200"
            : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100"
        }`}
      >
        <div>{message.text}</div>
        <div className="text-xs text-right text-gray-500 dark:text-gray-400">
          {message.time}
        </div>
      </div>

      {/* Edited label */}
      {message.edited && (
        <div className="text-xs italic text-gray-400 dark:text-gray-500 mt-1 px-2">
          edited
        </div>
      )}

      {/* Actions (Edit/Delete) */}
      {isOwn && showActions && (
        <div
          ref={actionsRef}
          className="flex space-x-2 mt-2 px-3 py-2 bg-white/90 dark:bg-gray-800/90 border dark:border-gray-600 rounded-xl shadow-lg backdrop-blur-sm animate-fade-in z-20"
        >
          <button
            type="button"
            className="flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium px-2 py-1 rounded-md transition"
            onClick={() => {
              setShowActions(false);
              onEdit(message);
            }}
            title="Edit"
          >
            <Pencil size={15} className="mr-1" />
            <span className="text-xs">Edit</span>
          </button>

          <button
            type="button"
            className="flex items-center text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-medium px-2 py-1 rounded-md transition"
            onClick={() => {
              setShowActions(false);
              onDelete(message.id);
            }}
            title="Delete"
          >
            <Trash2 size={15} className="mr-1" />
            <span className="text-xs">Delete</span>
          </button>
        </div>
      )}

      {/* Fade-in animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadein 0.2s cubic-bezier(.45,1,.53,1);
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
