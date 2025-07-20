import React, { useState } from "react";
import { MagnifyingGlassIcon, BellIcon, UserIcon } from "@heroicons/react/24/outline";

const logoURL = "/images/logo.png"; // Update path if needed

const StudentHeader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="w-full bg-white border-b shadow-sm">
      <div className="max-w-[100vw] flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoURL}
            alt="Campus Core Logo"
            className="w-[64px] h-[36px] object-contain"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button className="hover:opacity-80">
            <MagnifyingGlassIcon className="w-5 h-5 text-black" />
          </button>
          {/* Toggle Switch */}
          <button
            onClick={() => setToggle((t) => !t)}
            className="relative w-9 h-5 flex items-center"
            aria-label="Toggle"
          >
            <span
              className={`absolute left-0 top-0 w-9 h-5 rounded-full transition bg-gray-200`}
            />
            <span
              className={`absolute top-1 left-1 w-3 h-3 rounded-full transition ${
                toggle ? "translate-x-4 bg-[#3666F6]" : "bg-white"
              }`}
              style={{
                transform: toggle ? "translateX(16px)" : "translateX(0)",
                boxShadow: "0 1px 4px rgb(0 0 0 / 10%)"
              }}
            />
          </button>
          {/* Bell Icon */}
          <button className="hover:opacity-80 relative">
            <BellIcon className="w-5 h-5 text-black" />
            {/* Notification dot */}
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#3666F6]" />
          </button>
          {/* User */}
          <div className="flex items-center gap-2">
            <UserIcon className="w-5 h-5 text-black" />
            <span className="text-xs font-semibold tracking-wide text-black">DEVANSH</span>
            <span className="ml-1 text-xs">&#9660;</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;