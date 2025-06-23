export default function MentorChatModal({ open, onClose, mentor, children }) {
  if (!open) return null;

  // Full screen on mobile, modal on desktop
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
    
      <div
        className="fixed inset-0 bg-black bg-opacity-30"
        onClick={onClose}
      />
      
      <div className={`
        bg-white rounded-t-2xl md:rounded-2xl shadow-xl
        w-full h-[95vh] max-w-none md:max-w-md md:h-[80vh]
        fixed left-0 bottom-0 md:static
        flex flex-col
        animate-slide-up
      `}
        style={{
          maxWidth: window.innerWidth < 768 ? "100vw" : "28rem"
        }}
      >
        {/* Close button, mobile only */}
        <div className="flex items-center justify-between p-3 border-b">
          <div className="font-bold">{mentor ? mentor.name : ""}</div>
          <button onClick={onClose} className="text-2xl text-gray-400 hover:text-gray-600 px-2">&times;</button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
