import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const ChatBox = ({ messages, selectedUser }) => {
    return (
        <div className="w-full md:w-2/3 flex flex-col h-[65vh] md:h-auto bg-gray-50 dark:bg-gray-800">
            <div className="bg-white dark:bg-gray-900 px-4 py-3 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                    {selectedUser?.name || "Select a chat"}
                </h3>
                <i className="ri-phone-line text-lg text-gray-600 dark:text-gray-300"></i>
            </div>

            <div className="flex-1 px-4 py-4 space-y-3 overflow-y-auto">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${msg.from === "me"
                            ? "ml-auto bg-[#cfdffb] dark:bg-blue-500 text-black dark:text-white"
                            : "mr-auto bg-white dark:bg-gray-700 border dark:border-gray-600 text-black dark:text-gray-100"
                            }`}
                    >
                        <p>{msg.text}</p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1 text-right">
                            {msg.time}
                        </p>
                    </div>
                ))}
            </div>

            <div className="px-4 py-3 bg-white dark:bg-gray-900 border-t dark:border-gray-700 flex items-center gap-3">
                <i className="ri-attachment-2 text-xl text-gray-600 dark:text-gray-300 cursor-pointer"></i>
                <input
                    type="text"
                    placeholder="Type a message"
                    className="flex-1 px-3 py-2 border dark:border-gray-600 bg-white dark:bg-gray-800 text-sm text-black dark:text-white rounded"
                />
                <i className="ri-mic-line text-xl text-gray-600 dark:text-gray-300 cursor-pointer"></i>
                <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
                    <FaPaperPlane className="text-white text-sm" />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;
