import React from 'react'
import FacultyAttendance from './FacultyAttendance'
import FacultySchedule from './FacultySchedule'
import FacultyUpcomingEvents from './FacultyUpcomingEvents'
import FacultyAnnouncements from './FacultyAnnouncements'

const DashboardMain = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content - Left Side */}
        <div className="lg:col-span-2">
          <FacultyAttendance />
          <div className="mt-6">
            <FacultySchedule />
          </div>
        </div>

        {/* Sidebar - Right Side */}
        <div className="space-y-6">
          <FacultyUpcomingEvents />
          <FacultyAnnouncements />
        </div>
      </div>
    </div>
  )
}

export default DashboardMain