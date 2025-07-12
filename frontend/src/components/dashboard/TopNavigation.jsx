import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, LogOut, User, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useDropdownMenu } from "../ui/dropdown-menu";
import Notification from "../ui/Notification";
import ThemeToggle from "../ThemeToggle";
import { useAuth } from "../../auth/AuthContext";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function TopNavigation() {
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  function DropdownToggle() {
    const { isOpen } = useDropdownMenu();
    return (
      <div className="flex items-center space-x-2 pr-3 pl-2 cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
        <Avatar>
          <AvatarFallback>
            {user?.name?.[0] || <User className="w-5 h-5 text-gray-600 dark:text-gray-200" />}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 hidden sm:inline">
          {user?.name || 'User'}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-500 dark:text-gray-300 transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    );
  }

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-950 shadow-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="src/assets/logo.png" alt="Campus Core Logo" className="h-12 w-auto" />
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4 ml-auto">
        {/* Search */}
        <div className="relative">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-md w-64 transition">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              <Input
                autoFocus
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
                placeholder="Search..."
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-200" />
            </Button>
          )}
        </div>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Notifications */}
        <div className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition cursor-pointer">
          <Notification />
        </div>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <DropdownToggle />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-100 shadow-xl rounded-lg transition-colors duration-300">
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <User className="w-4 h-4 mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <Settings className="w-4 h-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-gray-200 dark:border-gray-800" />
            <DropdownMenuItem
              onClick={handleLogout}
              className="hover:bg-red-50 dark:hover:bg-red-900 text-red-600 dark:text-red-400"
            >
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
