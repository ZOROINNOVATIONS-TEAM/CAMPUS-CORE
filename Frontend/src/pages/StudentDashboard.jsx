import { useState } from "react";
import TopNav from "../components/StudentComponents/TopNav";
import Header from "../components/StudentComponents/Header";
import NavBar from "../components/StudentComponents/NavBar";
import AttendanceSummary from "../components/StudentComponents/Attendance";
import RecentResults from "../components/StudentComponents/RecentResult";
import TodaySchedule from "../components/StudentComponents/TodaySchedule";
import Announcements from "../components/StudentComponents/Announcements";
import CourseSetup from "../components/StudentComponents/CourseSetup";
import Fees from "../components/StudentComponents/Fees";
import Schedule from "../components/StudentComponents/Schedule";
import OverallResult from "../components/StudentComponents/ResultPerformance";
import Feedback from "../components/StudentComponents/Feedback";
import CampusMap from "../components/StudentComponents/CampusMap";
import Footer from "../components/Footer";
import ChatPanel from "../components/StudentComponents/ChatPanel";
import {
    FaChalkboardTeacher,
    FaUsers,
    FaBookOpen,
    FaClipboardList,
    FaMicrophone,
    FaCheckCircle,
    FaExclamationCircle,
    FaTimesCircle
} from "react-icons/fa";


const summaryData = [
    { label: "Present", value: 85, icon: <FaCheckCircle />, bg: "bg-blue-100 dark:bg-blue-900", color: "text-blue-600 dark:text-blue-300" },
    { label: "Late", value: 10, icon: <FaExclamationCircle />, bg: "bg-yellow-100 dark:bg-yellow-900", color: "text-yellow-600 dark:text-yellow-300" },
    { label: "Absent", value: 5, icon: <FaTimesCircle />, bg: "bg-red-100 dark:bg-red-900", color: "text-red-600 dark:text-red-300" },
];

const chartData = [
    { name: "Week 1", Present: 85, Late: 10, Absent: 5 },
    { name: "Week 2", Present: 83, Late: 12, Absent: 5 },
    { name: "Week 3", Present: 78, Late: 15, Absent: 7 },
    { name: "Week 4", Present: 88, Late: 7, Absent: 5 },
    { name: "Week 5", Present: 90, Late: 6, Absent: 4 },
    { name: "Week 6", Present: 85, Late: 10, Absent: 5 },
    { name: "Week 7", Present: 87, Late: 9, Absent: 4 },
    { name: "Week 8", Present: 86, Late: 8, Absent: 6 },
];

const recentSubjects = [
    {
        name: "Computer Science",
        type: "Mid-term Exam",
        date: "May 28, 2025",
        grade: "A",
        score: "92/100",
    },
    {
        name: "Advanced Mathematics",
        type: "Assignment",
        date: "June 2, 2025",
        grade: "B+",
        score: "85/100",
    },
    {
        name: "Physics",
        type: "Quiz",
        date: "June 5, 2025",
        grade: "A-",
        score: "88/100",
    },
];

const scheduleData = [
    {
        subject: "Introduction to Computer Science",
        time: "09:00AM–10:30AM",
        room: "Room 101",
        status: "Completed",
    },
    {
        subject: "Advanced Mathematics",
        time: "11:00AM–12:30PM",
        room: "Room 203",
        status: "Upcoming",
    },
    {
        subject: "Physics Laboratory",
        time: "02:00PM–04:00PM",
        room: "Lab Building B",
        status: "Upcoming",
    },
    {
        subject: "English Literature",
        time: "04:30PM–06:00PM",
        room: "Room 305",
        status: "Upcoming",
    },
];

const announcementData = [
    {
        title: "Campus Closure Notice",
        tag: "Important",
        by: "Administration",
        date: "June 10, 2025",
        description: "Due to scheduled maintenance, the campus will be closed on Saturday.",
    },
    {
        title: "Summer Registration Open",
        by: "Registrar Office",
        date: "June 8, 2025",
        description: "Registration for summer courses is now open.",
    },
    {
        title: "Library Extended Hours",
        by: "Library Services",
        date: "June 5, 2025",
        description: "Library will extend hours from June 20 to 30.",
    },
];

const sampleCourses = [
    {
        title: "Advanced Mathematics",
        professor: "Prof. Sarah Wilson",
        code: "MATH301",
        syllabus: "Course outline and requirements",
        resources: "12 files available",
        assignments: "2 pending, 5 completed",
        schedule: "Mon, Wed 11:00 AM",
    },
    {
        title: "Introduction to Computer Science",
        professor: "Prof. Michael Chen",
        code: "CS101",
        syllabus: "Course outline and requirements",
        resources: "8 files available",
        assignments: "1 pending, 3 completed",
        schedule: "Tue, Thu 9:00 AM",
    },
    {
        title: "Physics Laboratory",
        professor: "Prof. David Thompson",
        code: "PHYS201",
        syllabus: "Course outline and requirements",
        resources: "15 files available",
        assignments: "3 pending, 2 completed",
        schedule: "Wed 2:00 PM",
    },
];

const eventTypes = [
    { label: "Lecture", color: "text-indigo-600", icon: <FaBookOpen /> },
    { label: "Group Study", color: "text-pink-600", icon: <FaUsers /> },
    { label: "Coaching", color: "text-purple-600", icon: <FaChalkboardTeacher /> },
];


const eventTemplates = [
    { title: "Personal Coaching", time: "FEB 5, 2025, 11:00 AM", icon: <FaChalkboardTeacher /> },
    { title: "Group Study", time: "FEB 7, 2025, 5:00 PM", icon: <FaUsers /> },
    { title: "Introductory Lecture", time: "FEB 8, 2025, 10:00 AM", icon: <FaBookOpen /> },
    { title: "Assignment Deadline", time: "FEB 9, 2025, 11:59 PM", icon: <FaClipboardList /> },
    { title: "Presentation Day", time: "FEB 23, 2025, 3:00 PM", icon: <FaMicrophone /> },
];

const pieData = [
    { name: "Correct", value: 60, color: "#22c55e" },
    { name: "Wrong", value: 10, color: "#ef4444" },
    { name: "Copy", value: 15, color: "#f97316" },
    { name: "Fail", value: 5, color: "#f43f5e" },
    { name: "Miss", value: 10, color: "#3b82f6" },
];

const lineData = [
    { sem: "Sem1", cgpa: 7 },
    { sem: "Sem2", cgpa: 5.5 },
    { sem: "Sem3", cgpa: 6.8 },
    { sem: "Sem4", cgpa: 8 },
];

const subjects = [
    { name: "Mathematics", score: 85, status: "Passed" },
    { name: "Physics", score: 78, status: "Passed" },
    { name: "Chemistry", score: 90, status: "Excellent" },
    { name: "Biology", score: 82, status: "Passed" },
];

const externalAssessment = [
    { subject: "Mathematics", score: 75, status: "Passed" },
    { subject: "Physics", score: 65, status: "Passed" },
    { subject: "Chemistry", score: 50, status: "Passed" },
    { subject: "Biology", score: 80, status: "Passed" },
];

const feesOverview = {
    total: "$12,500",
    paid: "$8,750",
    pending: "$3,750",
    lastPayment: "May 15, 2025",
};

const upcomingDues = [
    {
        title: "Tuition Fee (Final Installment)",
        due: "July 15, 2025",
        note: "Late payment of $50 applies after due date",
        amount: "$3,750",
        button: "Pay Now",
        highlight: true,
    },
    {
        title: "Library Fee",
        due: "August 10, 2025",
        note: "Annual library access fee",
        amount: "$120",
        button: "Pay Later",
    },
    {
        title: "Computer Lab Access",
        due: "August 20, 2025",
        note: "Semester computer lab access fee",
        amount: "$85",
        button: "Pay Later",
    },
];

const paymentHistory = [
    {
        date: "May 15, 2025",
        id: "77341-1",
        description: "Tuition Fee Installment",
        amount: "$3,000",
        mode: "Credit Card",
        status: "Completed",
    },
    {
        date: "April 10, 2025",
        id: "77341-2",
        description: "Tuition Fee Installment",
        amount: "$2,000",
        mode: "Bank Transfer",
        status: "Completed",
    },
    {
        date: "Feb 5, 2025",
        id: "77341-3",
        description: "Lab Fee",
        amount: "$500",
        mode: "UPI",
        status: "Completed",
    },
];

const paymentMethods = ["Visa ending in 4582", "Bank Account"];

const FeesHelp = {
    faqs: "View FAQs",
    email: "finance.support@smartcampus.edu",
    phone: "+1 (123) 456-7890",
    appointment: "Book Appointment",
};

const mapProps = {
    buildingCounts: {
        "Academic Buildings": 12,
        "Residence Halls": 8,
        "Dining Facilities": 5,
        "Sports Facilities": 4,
    },
    mapLayers: [
        { label: "Academic Buildings", color: "blue" },
        { label: "Residence Halls", color: "green" },
        { label: "Dining Facilities", color: "yellow" },
        { label: "Sports Facilities", color: "purple" },
        { label: "Parking Lots", color: "gray" },
        { label: "Bus Stops", color: "red" },
    ],
    filters: ["Building Type", "Floor Level"],
    popularLocations: [
        { name: "Science Building", walk: "3 min walk" },
        { name: "Main Library", walk: "4 min walk" },
        { name: "Student Center", walk: "2 min walk" },
        { name: "Recreation Center", walk: "5 min walk" },
        { name: "Engineering Hall", walk: "3 min walk" },
    ],
    recentLocations: [
        "Computer Science Lab – Today, 10 AM",
        "Campus Café – Yesterday, 1 PM",
        "Study Room 204 – Jan 14, 6:30 PM",
    ],
    upcomingClasses: [
        "Advanced Algorithms – 11:00 AM",
        "Chemistry Lab – 2:30 PM",
        "Business Ethics – 4:15 PM",
    ],
    eventsToday: [
        "Career Fair – 10:00 AM",
        "Concert: Jazz Ensemble – 7:00 PM",
        "Student Club Fair – 3:00 PM",
    ],
};

const feedbackData = [
    { status: "Pending", date: "June 20, 2025", category: "Course Content", rating: 3 },
    { status: "Reviewed", date: "June 15, 2025", category: "Faculty", rating: 4 },
    { status: "Resolved", date: "June 5, 2025", category: "System Issue", rating: 1 },
    { status: "Resolved", date: "May 28, 2025", category: "Campus Facilities", rating: 4 },
    { status: "Pending", date: "May 20, 2025", category: "Course Content", rating: 2 },
    { status: "Resolved", date: "May 15, 2025", category: "Faculty", rating: 5 },
    { status: "Reviewed", date: "May 10, 2025", category: "System Issue", rating: 3 },
    { status: "Pending", date: "May 5, 2025", category: "Campus Facilities", rating: 2 },
    { status: "Resolved", date: "April 30, 2025", category: "Faculty", rating: 4 },
    { status: "Reviewed", date: "April 25, 2025", category: "System Issue", rating: 3 },
    { status: "Resolved", date: "April 20, 2025", category: "Course Content", rating: 4 },
    { status: "Pending", date: "April 15, 2025", category: "Campus Facilities", rating: 1 },
];



const StudentDashboard = ({ darkMode, setDarkMode }) => {
    const [activeSection, setActiveSection] = useState(null);

    const handleToggle = (section) => {
        setActiveSection((prev) => (prev === section ? null : section));
    };

    return (
        <div className="min-h-screen bg-gray-300 dark:bg-gray-900 relative overflow-x-hidden ml-[48px] sm:ml-0 text-gray-900 dark:text-gray-100">
            <TopNav darkMode={darkMode} setDarkMode={setDarkMode} />
            <Header />
            <NavBar
                activeSection={activeSection}
                onCourseSetupToggle={() => handleToggle("course")}
                onFeesToggle={() => handleToggle("fees")}
                onScheduleToggle={() => handleToggle("schedule")}
                onResultToggle={() => handleToggle("result")}
                onOthersToggle={() => handleToggle("others")}
                onMentorToggle={() => handleToggle("mentor")}
                onHomeToggle={() => handleToggle("home")}
            />

            <div className="w-full max-w-7xl mx-auto">
                {activeSection === "course" && <CourseSetup courses={sampleCourses} />}
                {activeSection === "fees" && <Fees overview={feesOverview} upcoming={upcomingDues} payments={paymentHistory} methods={paymentMethods} support={FeesHelp} />}
                {activeSection === "schedule" && <Schedule templates={eventTemplates} eventTypes={eventTypes} />}
                {activeSection === "result" && <OverallResult pieData={pieData} lineData={lineData} subjects={subjects} externalAssessment={externalAssessment} />}
                {activeSection === "others" && (
                    <>
                        <CampusMap
                            buildingCounts={mapProps.buildingCounts}
                            mapLayers={mapProps.mapLayers}
                            filters={mapProps.filters}
                            popularLocations={mapProps.popularLocations}
                            recentLocations={mapProps.recentLocations}
                            upcomingClasses={mapProps.upcomingClasses}
                            eventsToday={mapProps.eventsToday}
                        />
                        <Feedback feedbacks={feedbackData} />
                    </>
                )}
                {activeSection === "mentor" && <ChatPanel />}
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-2 py-6 flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/4">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 w-full lg:ml-15 dark:border dark:border-violet-700">
                        <AttendanceSummary summaryData={summaryData} chartData={chartData} />
                    </div>
                </div>
                <div className="w-full lg:w-3/4 lg:ml-15">
                    <RecentResults recentSubjects={recentSubjects} />
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-3/4">
                    <TodaySchedule schedule={scheduleData} />
                </div>
                <div className="w-full lg:w-3/4 lg:ml-15">
                    <Announcements announcements={announcementData} />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default StudentDashboard;
