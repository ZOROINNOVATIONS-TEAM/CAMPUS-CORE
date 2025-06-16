import { BellIcon, BookOpenIcon, CalendarIcon, ChartBarIcon, ChatBubbleLeftIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  { name: 'Home', icon: HomeIcon, href: '/dashboard' },
  { name: 'Schedule', icon: CalendarIcon, href: '/dashboard/schedule' },
  { name: 'Course Setup', icon: BookOpenIcon, href: '/dashboard/courses' },
  { name: 'Analytics', icon: ChartBarIcon, href: '/dashboard/analytics' },
  { name: 'Notification', icon: BellIcon, href: '/dashboard/notifications' },
  { name: 'Message', icon: ChatBubbleLeftIcon, href: '/dashboard/messages' },
  { name: 'Mentor', icon: UserGroupIcon, href: '/dashboard/mentor' },
];

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex h-14">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`inline-flex items-center px-4 border-b-2 text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? 'border-[#3666F6] text-[#3666F6]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
