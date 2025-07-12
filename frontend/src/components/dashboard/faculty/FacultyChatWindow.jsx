import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";
import MentorMessageBubble from "../student/mentor/MentorMessageBubble";

export default function FacultyChatWindow({
  student,
  messages,
  onSend,
  onEdit,
  onDelete,
  isMobile,
  onClose,
}) {
  const [text, setText] = useState("");
  const [editingMsgId, setEditingMsgId] = useState(null);
  const [editText, setEditText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleEdit = (msg) => {
    setEditingMsgId(msg.id);
    setEditText(msg.text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingMsgId) {
      onEdit(editingMsgId, editText.trim());
      setEditingMsgId(null);
      setEditText("");
    } else if (text.trim()) {
      onSend(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#121212] text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 font-bold text-lg flex items-center justify-between">
        <span>{student.name}</span>
        {isMobile && (
          <button
            onClick={onClose}
            className="ml-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Close chat"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-[#1c1c1c] space-y-3">
        {messages.map((m) => (
          <MentorMessageBubble
            key={m.id}
            message={m}
            onEdit={handleEdit}
            onDelete={() => onDelete(m.id)}
            isOwn={m.from === "mentor"}
            isMobile={isMobile}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#121212]"
      >
        <input
          type="text"
          placeholder={editingMsgId ? "Edit your message..." : "Type a message..."}
          className="flex-1 px-3 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1c1c1c] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
          value={editingMsgId ? editText : text}
          onChange={(e) =>
            editingMsgId ? setEditText(e.target.value) : setText(e.target.value)
          }
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          {editingMsgId ? "Update" : "Send"}
        </button>
        {editingMsgId && (
          <button
            type="button"
            className="ml-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => {
              setEditingMsgId(null);
              setEditText("");
            }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
