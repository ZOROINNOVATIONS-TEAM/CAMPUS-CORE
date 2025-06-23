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

  // Desktop
  const handleDoubleClick = () => {
    if (isOwn && !isMobile) setShowActions(true);
  };

  // Mobile
  let timer;
  const handleTouchStart = () => {
    if (isOwn && isMobile) {
      timer = setTimeout(() => setShowActions(true), 500);
    }
  };
  const handleTouchEnd = () => {
    if (timer) clearTimeout(timer);
  };


  useEffect(() => {
    if (!showActions) return;
    function handleClickOutside(e) {
      if (
        actionsRef.current &&
        !actionsRef.current.contains(e.target) &&
        bubbleRef.current &&
        !bubbleRef.current.contains(e.target)
      ) {
        setShowActions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showActions]);

  return (
    <div
      className={`flex flex-col ${isOwn ? "items-end" : "items-start"} relative select-text`}
      onDoubleClick={handleDoubleClick}
      ref={bubbleRef}
      tabIndex={isOwn && !isMobile ? 0 : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
    >
      {/* Message bubble */}
      <div className={`rounded-xl px-4 py-2 max-w-xs shadow-md transition
        ${isOwn ? "bg-blue-100 text-blue-900" : "bg-gray-200 text-gray-900"}
      `}>
        <div>{message.text}</div>
        <div className="text-xs text-right text-gray-500">{message.time}</div>
      </div>

      
      {message.edited && (
        <div className="text-xs italic text-gray-400 mt-1 px-2">
          edited
        </div>
      )}

     
      {isOwn && showActions && (
        <div
          ref={actionsRef}
          className="flex space-x-2 mt-2 px-3 py-2 bg-white/90 border rounded-xl shadow-lg backdrop-blur-sm animate-fade-in z-20"
        >
          <button
            className="flex items-center text-blue-500 hover:text-blue-700 font-medium px-2 py-1 rounded-md transition"
            onClick={() => { setShowActions(false); onEdit(message); }}
            title="Edit"
            type="button"
          >
            <Pencil size={15} className="mr-1" /> <span className="text-xs"></span>
          </button>
          <button
            className="flex items-center text-red-500 hover:text-red-700 font-medium px-2 py-1 rounded-md transition"
            onClick={() => { setShowActions(false); onDelete(message.id); }}
            title="Delete"
            type="button"
          >
            <Trash2 size={15} className="mr-1" /> <span className="text-xs"></span>
          </button>
        </div>
      )}
      <style>
        {`
          .animate-fade-in {
            animation: fadein 0.2s cubic-bezier(.45,1,.53,1);
          }
          @keyframes fadein {
            from { opacity: 0; transform: translateY(10px);}
            to   { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </div>
  );
}
