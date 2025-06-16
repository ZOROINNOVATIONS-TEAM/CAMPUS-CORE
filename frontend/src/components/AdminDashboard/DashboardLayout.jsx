import {
    BellIcon,
    BookOpenIcon,
    CalendarIcon,
    ChartBarIcon,
    ChatBubbleLeftIcon,
    HomeIcon,
    UserGroupIcon,
} from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const navigationItems = [
  { name: 'Home', icon: HomeIcon, href: '/admin/dashboard/*' },
  { name: 'Schedule', icon: CalendarIcon, href: '/admin/dashboard/*' },
  { name: 'Course Setup', icon: BookOpenIcon, href: '/admin/dashboard/*' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/admin/dashboard/*' },
  { name: 'Notification', icon: BellIcon, href: '/admin/dashboard/*' },
  { name: 'Message', icon: ChatBubbleLeftIcon, href: '/admin/dashboard/*' },
  { name: 'Mentor', icon: UserGroupIcon, href: '/admin/dashboard/*' },
];

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header: Logo + Icons */}
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/dashboard">
              <img src="/images/conectsiksha.png" alt="Campus Core" className="h-10 w-auto" />
            </Link>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-700 p-2">
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
              <button className="relative text-gray-500 hover:text-gray-700 p-2">
                <BellIcon className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500" />
              </button>
              <div className="flex items-center gap-2 border-l pl-4">
                <img
                  className="h-8 w-8 rounded-full ring-2 ring-gray-200"
                  src="https://ui-avatars.com/api/?name=Dev&background=3666F6&color=fff"
                  alt="User"
                />
                <span className="text-sm font-medium text-gray-700">DEVANSH</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Blue Welcome Banner */}
      <div className="relative bg-[#3666F6] overflow-hidden shadow-sm">
        <div className="absolute inset-0">
          <img
            src="/images/pattern.png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-10 mix-blend-overlay"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-2xl font-semibold">Welcome back, Dev!</h1>
              <p className="mt-1 text-sm opacity-90">Mon June 16, 2025 | Spring Semester 2025</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <span className="block text-xs text-white/80">Next Class</span>
                <span className="block text-sm font-medium text-white">College Club Mathematics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar BELOW blue banner */}
      <nav className="bg-white border-b shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-start space-x-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#3666F6] hover:bg-gray-100 rounded-md transition"
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Dashboard Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
