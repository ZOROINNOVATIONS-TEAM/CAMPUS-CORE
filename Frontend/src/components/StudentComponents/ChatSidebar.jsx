import React from "react";

const ChatSidebar = ({ contacts, selected, onSelect }) => {
    return (
        <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r p-4 bg-white dark:bg-gray-900 dark:border-gray-800">
            <div className="flex justify-between mb-4">
                <button className="text-sm font-semibold border-b-2 border-black dark:border-white pb-1 text-black dark:text-white">
                    CHAT
                </button>
                <button className="text-sm font-medium text-gray-400 dark:text-gray-500">
                    CALLS
                </button>
            </div>

            <input
                type="text"
                placeholder="Search faculty"
                className="w-full mb-4 p-2 text-sm border rounded-md dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            />

            <ul className="space-y-3">
                {contacts.map((user, idx) => (
                    <li
                        key={idx}
                        onClick={() => onSelect(user)}
                        className={`p-3 rounded-lg cursor-pointer transition ${selected?.name === user.name
                            ? "bg-gray-200 dark:bg-gray-700"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                    >
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-300 dark:bg-gray-600 rounded-full w-7 h-7 flex items-center justify-center">
                                <i className="ri-user-line text-sm text-black dark:text-white"></i>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <span className="text-sm font-medium text-black dark:text-white">{user.name}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">{user.time}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatSidebar;
