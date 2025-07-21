import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";
import logo from '../../assets/logo.png';

const TopNav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setShowSearch(prev => !prev);
  };

  return (
    <div className="sticky top-0 z-50 w-full flex items-center justify-between px-6 py-1 bg-white shadow border-white">
        <div className="flex items-center gap-4">
            <img
            src={logo}
            alt="CampusCore"
            className="w-15 h-15 cursor-pointer"
            onClick={() => navigate('/dashboard')}
            />
        </div>

        {/* Right Section: Icons */}
        <div className="flex items-center gap-6 text-gray-600">
                {showSearch && (
                <input
                    type="text"
                    placeholder="Search..."
                    className="px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring"
                />
                )}
                <FaSearch
                className="text-lg cursor-pointer hover:text-blue-600"
                onClick={handleSearchToggle}
                />
                <FaBell
                className="text-lg cursor-pointer hover:text-blue-600"
                onClick={() => navigate('/notifications')}
                />
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate('/profile')}
                    >
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <FaUser />
                    </div>
                    <span className="font-medium">User_Name</span>
            </div>
        </div>
    </div>
  );
};

export default TopNav;
