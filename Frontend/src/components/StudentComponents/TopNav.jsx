import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaUser, FaMoon, FaSun } from "react-icons/fa";
import logo from '../../assets/logo.png';

const TopNav = ({ darkMode, setDarkMode }) => {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    const toggleTheme = () => {
        setDarkMode(prev => !prev);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="relative sticky top-0 z-50 w-full flex items-center justify-between px-6 py-3 sm:py-1 bg-white text-gray-800 shadow border-b border-white 
                        dark:bg-gray-800 dark:text-white border dark:border-violet-700 transition-colors duration-300">
            <div className="flex items-center gap-4">
                <img
                    src={logo}
                    alt="CampusCore"
                    className="w-15 h-15 cursor-pointer hidden sm:block"
                    onClick={() => navigate('/dashboard')}
                />
            </div>

            <div className="flex items-center gap-6 relative">
                <FaBell
                    className="text-lg cursor-pointer hover:text-blue-600"
                    onClick={() => navigate('/notifications')}
                />

                <div onClick={toggleTheme} className="cursor-pointer text-lg">
                    {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                </div>

                <div className="relative">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => setShowMenu(prev => !prev)}
                    >
                        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                            <FaUser />
                        </div>
                        <span className="font-medium">User_Name</span>
                    </div>

                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded shadow-lg z-50">
                            <button
                                onClick={() => {
                                    setShowMenu(false);
                                    navigate('/profile');
                                }}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                                Profile
                            </button>
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-red-600 dark:text-red-400"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TopNav;
