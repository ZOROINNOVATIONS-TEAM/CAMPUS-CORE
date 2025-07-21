import { useState } from "react";
import TopNav from "../components/AdminComponents/TopNav";
import Header from "../components/AdminComponents/Header";
import NavBar from "../components/AdminComponents/NavBar";
import TotalUsersCard from "../components/AdminComponents/TotalUsersCard";
import UpcomingEvents from "../components/AdminComponents/UpcomingEvents";
import SystemNotifications from "../components/AdminComponents/SystemNotifications";
import QuickReports from "../components/AdminComponents/QuickReports";
import Announcements from "../components/AdminComponents/Announcements";
import UserManagement from "../components/AdminComponents/UserManagement";
import Footer from "../components/Footer";
import CourseSetupMain from "../components/AdminComponents/CourseSetupMain";
import AnalyticsDashboard from "../components/AdminComponents/AnalyticsDashboard";


const AdminDashboard = () => {

    const totalUsers = 1310;
    const studentCount = 1247;
    const facultyCount = 63;

    const recentRegistrations = [
        { name: "Emily Parker", course: "Data Science", date: "2hr ago" },
        { name: "Taylor Williams", course: "Physics", date: "1 day ago" },
    ];

    const upcomingEvents = [
        { date: "3 JUN", title: "Faculty Development Workshop", time: "9:00 AM" },
        { date: "5 JUN", title: "Student Orientation", time: "10:30 AM" },
        { date: "8 JUN", title: "Board Meeting", time: "2:00 PM" },
    ];

    const notifications = [
        { text: "System maintenance scheduled for June 10th", time: "2 hours ago" },
        { text: "New course registration opens next week", time: "5 hours ago" },
        { text: "Semester grades have been finalized", time: "1 day ago" },
    ];

    const reports = [
        { name: "Attendance Report", updated: "Today" },
        { name: "Performance Stats", updated: "Yesterday" },
        { name: "Course Report", updated: "2 days ago" },
        { name: "Financial Summary", updated: "3 days ago" },
    ];

    const announcements = [
        {
            title: "Faculty Senate Meeting",
            text: "Please attend the Senate meeting at 3:00 PM.",
            time: "2 hours ago",
        },
        {
            title: "Summer Registration Open",
            text: "Register for summer courses online before the deadline.",
            time: "5 hours ago",
        },
    ];

    const userChartData = [
        { month: "Jan", users: 500 },
        { month: "Feb", users: 800 },
        { month: "Mar", users: 1200 },
        { month: "Apr", users: 1500 },
        { month: "May", users: 2000 },
        { month: "Jun", users: 2800 },
    ];


    const [activeSection, setActiveSection] = useState(null);

    const handleToggle = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    return (
        <div className="min-h-screen bg-violet-100 flex flex-col">
            <TopNav />
            <Header name="Admin" date="Friday, June 13, 2025" />
            <NavBar
                activeSection={activeSection}
                onCourseSetupToggle={() => handleToggle("course")}
                onFeesToggle={() => handleToggle("fees")}
                onScheduleToggle={() => handleToggle("schedule")}
                onAnalyticsToggle={() => handleToggle("analytics")}
                onOthersToggle={() => handleToggle("others")}
            />

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6">
                {activeSection === "analytics" && <AnalyticsDashboard />}
                {activeSection === "course" && <CourseSetupMain />}
            </div>

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 mt-6 px-4 sm:px-6">
                <TotalUsersCard studentCount={studentCount} facultyCount={facultyCount} chartData={userChartData} />
                <UpcomingEvents events={upcomingEvents} />
                <SystemNotifications notifications={notifications} />
                <QuickReports reports={reports} />
                <Announcements announcements={announcements} />
                <UserManagement totalUsers={totalUsers} recent={recentRegistrations} />
            </div>

            <Footer />
        </div>
    );
};

export default AdminDashboard;
