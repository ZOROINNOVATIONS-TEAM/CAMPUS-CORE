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

  // When Edit is requested
  const handleEdit = (msg) => {
    setEditingMsgId(msg.id);
    setEditText(msg.text.replace(/ \(edited\)$/, ""));
  };

  // When submitting
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
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-3 py-4 bg-gray-50 space-y-3">
        {messages.map((m) => (
          <MentorMessageBubble
            key={m.id}
            message={m}
            onEdit={handleEdit}
            onDelete={() => onDelete(m.id)}
            isOwn={m.from === "student"}
            isMobile={isMobile}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 p-3 border-t bg-white"
      >
        <input
          type="text"
          placeholder={editingMsgId ? "Edit your message..." : "Type a message..."}
          className="flex-1 px-3 py-2 rounded border"
          value={editingMsgId ? editText : text}
          onChange={e => editingMsgId ? setEditText(e.target.value) : setText(e.target.value)}
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
            className="ml-1 text-gray-400 hover:text-gray-600"
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
