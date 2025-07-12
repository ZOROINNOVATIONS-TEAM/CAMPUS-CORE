import { useRef, useEffect, useState } from "react";
import MentorMessageBubble from "./MentorMessageBubble";

export default function MentorChatWindow({
  mentor,
  messages,
  onSend,
  onEdit,
  onDelete,
  onBack,
  isMobile,
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
    setEditText(msg.text.replace(/ \(edited\)$/, ""));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = editingMsgId ? editText.trim() : text.trim();

    if (!value) return;

    if (editingMsgId) {
      onEdit(editingMsgId, value);
      setEditingMsgId(null);
      setEditText("");
    } else {
      onSend(value);
      setText("");
    }
  };

  const handleCancelEdit = () => {
    setEditingMsgId(null);
    setEditText("");
  };

  return (
    <div className="flex flex-col h-full">
      {/* Message List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50 dark:bg-gray-900 space-y-3">
        {messages.map((m) => (
          <MentorMessageBubble
            key={m.id}
            message={m}
            isOwn={m.from === "student"}
            isMobile={isMobile}
            onEdit={handleEdit}
            onDelete={() => onDelete(m.id)}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <input
          type="text"
          placeholder={editingMsgId ? "Edit your message..." : "Type a message..."}
          className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:border-gray-600"
          value={editingMsgId ? editText : text}
          onChange={(e) =>
            editingMsgId ? setEditText(e.target.value) : setText(e.target.value)
          }
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editingMsgId ? "Update" : "Send"}
        </button>

        {editingMsgId && (
          <button
            type="button"
            onClick={handleCancelEdit}
            className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white text-sm font-medium"
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}
