import React, { useState } from 'react';
import { 
  ClipboardList, 
  Calendar as CalendarIcon,
  Clock,
  Plus,
  User,
  Users,
  BookOpen,
  Flag,
  Mic,
  ChevronDown,
  ChevronUp,
  Check
} from 'lucide-react';

const ScheduleTab = () => {
  const [expandedDay, setExpandedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [eventFilters, setEventFilters] = useState({
    lecture: true,
    groupStudy: true,
    coaching: true
  });

  // Activity types
  const activityTypes = [
    { 
      id: 1, 
      name: "Personal Coaching", 
      type: "personal-coaching", 
      color: "blue", 
      icon: <User className="w-5 h-5" /> 
    },
    { 
      id: 2, 
      name: "Group Study", 
      type: "group-study", 
      color: "purple", 
      icon: <Users className="w-5 h-5" /> 
    },
    { 
      id: 3, 
      name: "Inductory Lecture", 
      type: "inductory-lecture", 
      color: "green", 
      icon: <BookOpen className="w-5 h-5" /> 
    },
    { 
      id: 4, 
      name: "Assignment Deadline", 
      type: "assignment-deadline", 
      color: "yellow", 
      icon: <Flag className="w-5 h-5" /> 
    },
    { 
      id: 5, 
      name: "Presentation Day", 
      type: "presentation-day", 
      color: "pink", 
      icon: <Mic className="w-5 h-5" /> 
    }
  ];

  // Calendar generation
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const today = new Date().getDate();
  
  const generateCalendarDays = () => {
    const days = [];
    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-8"></div>);
    }
    
    // Add actual days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today && currentMonth === new Date().getMonth();
      const hasEvent = [5, 10, 15, 20, 25].includes(day); // Example days with events
      
      days.push(
        <div 
          key={`day-${day}`}
          className={`h-8 w-8 flex items-center justify-center rounded-full text-sm cursor-pointer
            ${isToday ? 'bg-blue-100 text-blue-600 font-medium' : ''}
            ${hasEvent ? 'relative' : ''}
            hover:bg-gray-100`}
        >
          {day}
          {hasEvent && (
            <span className="absolute bottom-0 w-1 h-1 bg-blue-500 rounded-full"></span>
          )}
        </div>
      );
    }
    return days;
  };

  // Upcoming events
  const upcomingEvents = [
    { id: 1, title: "Registration Complete", date: "June 25, 2025", time: "10:00 AM", type: "registration", color: "green" },
    { id: 2, title: "Personal Coaching With Nik", date: "June 28, 2025", time: "2:00 PM", type: "coaching", color: "blue" },
    { id: 3, title: "Group Study Session", date: "July 2, 2025", time: "4:00 PM", type: "group-study", color: "purple" }
  ];

  const toggleDayExpand = (day) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const handleMonthChange = (increment) => {
    setCurrentMonth(prev => {
      let newMonth = prev + increment;
      if (newMonth < 0) {
        setCurrentYear(prevYear => prevYear - 1);
        return 11;
      }
      if (newMonth > 11) {
        setCurrentYear(prevYear => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  };

  const handleActivitySelect = (activity) => {
    setSelectedActivity(activity);
    alert(`Selected: ${activity.name}. In a real app, this would open a scheduling form.`);
  };

  const toggleEventFilter = (filter) => {
    setEventFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: { bg: 'bg-blue-50', border: 'border-blue-500', text: 'text-blue-600' },
      purple: { bg: 'bg-purple-50', border: 'border-purple-500', text: 'text-purple-600' },
      green: { bg: 'bg-green-50', border: 'border-green-500', text: 'text-green-600' },
      yellow: { bg: 'bg-yellow-50', border: 'border-yellow-500', text: 'text-yellow-600' },
      pink: { bg: 'bg-pink-50', border: 'border-pink-500', text: 'text-pink-600' },
      red: { bg: 'bg-red-50', border: 'border-red-500', text: 'text-red-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", 
                     "July", "August", "September", "October", "November", "December"];

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-blue-600">
        <ClipboardList className="w-5 h-5" />
        Academic Schedule Planner
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column - Calendar & Filters */}
        <div className="lg:col-span-3 space-y-6">
          {/* Calendar */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={() => handleMonthChange(-1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronDown className="w-4 h-4 transform rotate-90" />
              </button>
              <h4 className="font-medium">
                {monthNames[currentMonth]} {currentYear}
              </h4>
              <button 
                onClick={() => handleMonthChange(1)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <ChevronDown className="w-4 h-4 transform -rotate-90" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-xs text-gray-500 text-center mb-2">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays()}
            </div>
          </div>

          {/* Event Type Filters */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h4 className="font-medium mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-blue-500" />
              Filter Events
            </h4>
            <div className="space-y-2">
              <div 
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${eventFilters.lecture ? 'bg-blue-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleEventFilter('lecture')}
              >
                <div className={`w-4 h-4 border rounded flex items-center justify-center ${eventFilters.lecture ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`}>
                  {eventFilters.lecture && <Check className="w-3 h-3 text-white" />}
                </div>
                <span>Lecture</span>
              </div>
              <div 
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${eventFilters.groupStudy ? 'bg-purple-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleEventFilter('groupStudy')}
              >
                <div className={`w-4 h-4 border rounded flex items-center justify-center ${eventFilters.groupStudy ? 'bg-purple-500 border-purple-500' : 'border-gray-300'}`}>
                  {eventFilters.groupStudy && <Check className="w-3 h-3 text-white" />}
                </div>
                <span>Group Study</span>
              </div>
              <div 
                className={`flex items-center gap-2 p-2 rounded cursor-pointer ${eventFilters.coaching ? 'bg-green-50' : 'hover:bg-gray-50'}`}
                onClick={() => toggleEventFilter('coaching')}
              >
                <div className={`w-4 h-4 border rounded flex items-center justify-center ${eventFilters.coaching ? 'bg-green-500 border-green-500' : 'border-gray-300'}`}>
                  {eventFilters.coaching && <Check className="w-3 h-3 text-white" />}
                </div>
                <span>Coaching</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Upcoming Events */}
        <div className="lg:col-span-6">
          <div className="bg-white border rounded-lg p-4 shadow-sm h-full">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              Upcoming Events
            </h4>
            <div className="space-y-3">
              {upcomingEvents
                .filter(event => {
                  if (event.type === 'coaching' && !eventFilters.coaching) return false;
                  if (event.type === 'group-study' && !eventFilters.groupStudy) return false;
                  if (event.type === 'registration' && !eventFilters.lecture) return false;
                  return true;
                })
                .map(event => {
                  const colors = getColorClasses(event.color);
                  return (
                    <div 
                      key={event.id} 
                      className={`p-3 rounded-lg border-l-4 ${colors.border} ${colors.bg} flex items-start gap-3`}
                    >
                      <div className={`p-1.5 rounded-full ${colors.bg} ${colors.text}`}>
                        {getColorClasses(event.color).icon}
                      </div>
                      <div>
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          {event.date} • {event.time}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/* Right Column - Activity Selection */}
        <div className="lg:col-span-3">
          <div className="bg-white border rounded-lg p-4 shadow-sm h-full">
            <h4 className="font-medium mb-4 flex items-center gap-2">
              <Plus className="w-4 h-4 text-blue-500" />
              Add Event 
            </h4>
            
            <div className="space-y-3">
              <div className="bg-blue-500 text-white rounded-lg text-center py-3 px-4 mb-3">
                <h3 className="font-medium">Add New Event</h3>
              </div>
              {activityTypes.map(activity => {
                const colors = getColorClasses(activity.color);
                return (
                  <div
                    key={activity.id}
                    className={`p-3 rounded-lg border-l-4 ${colors.border} ${colors.bg} cursor-pointer hover:opacity-90 transition-opacity flex items-center gap-3`}
                    onClick={() => handleActivitySelect(activity)}
                  >
                    <div className={`p-2 rounded-full ${colors.bg} ${colors.text}`}>
                      {activity.icon}
                    </div>
                    <div className="font-medium">{activity.name}</div>
                  </div>
                );
              })}
            </div>

            {/* Selected Activity Preview */}
            {selectedActivity && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h5 className="text-sm font-medium text-gray-700 mb-3">
                  Selected: {selectedActivity.name}
                </h5>
                <div className={`p-3 rounded-lg border-l-4 ${getColorClasses(selectedActivity.color).border} ${getColorClasses(selectedActivity.color).bg} flex items-center gap-3`}>
                  <div className={`p-2 rounded-full ${getColorClasses(selectedActivity.color).bg} ${getColorClasses(selectedActivity.color).text}`}>
                    {selectedActivity.icon}
                  </div>
                  <div>
                    <div className="font-medium">{selectedActivity.name}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      Click to schedule this activity
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTab;