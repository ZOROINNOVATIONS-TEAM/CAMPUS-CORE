import { useState } from "react";
import {
  Search,
  Bell,
  ChevronDown,
  LogOut,
  User,
  Settings,
} from "lucide-react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  useDropdownMenu,
} from "../../ui/dropdown-menu";

export function FacultyTopNavigation({ facultyName = "Dr. Shi" }) {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", { method: "POST" });
      if (response.ok) window.location.reload();
    } catch (error) {
      window.location.href = "/api/logout";
    }
  };

  function DropdownToggle() {
    const { isOpen } = useDropdownMenu() || {};
    return (
      <div className="flex items-center space-x-2 pr-3 pl-2 cursor-pointer rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none">
        <Avatar>
          <AvatarFallback>
            {facultyName ? facultyName.charAt(0).toUpperCase() : "F"}
          </AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-100 hidden sm:inline">
          {facultyName}
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
    <header className="flex items-center justify-between px-4 py-2 bg-white dark:bg-neutral-900 shadow-sm border-b border-gray-200 dark:border-neutral-700">
      <div className="flex items-center space-x-2">
        <img
          src="src/assets/logo.png"
          alt="Campus Core Logo"
          className="h-12 w-auto"
        />
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <div className="relative">
          {searchOpen ? (
            <div className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-1.5 rounded-md w-64">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              <Input
                autoFocus
                className="w-full bg-transparent border-0 focus:outline-none focus:ring-0 text-sm text-gray-800 dark:text-gray-100"
                placeholder="Search…"
                onBlur={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </Button>
          )}
        </div>

        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <DropdownToggle />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-100">
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}

export default FacultyTopNavigation;
