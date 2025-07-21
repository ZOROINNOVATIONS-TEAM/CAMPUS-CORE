import { useState } from "react";
import CourseSetupHeader from "./CourseSetupHeader";
import CourseCard from "./CourseCard";
import Pagination from "./CourseSetupPagination";
import AddCourseModal from "./AddCourseModal";

const CourseSetupMain = () => {
    const [courses, setCourses] = useState(
        [...Array(12)].map((_, i) => ({
            title: `Course ${i + 1}`,
            code: `CS${100 + i}`,
            department: i % 2 === 0 ? "Computer Science" : "Mechanical",
            credits: 3 + (i % 3),
            students: Math.floor(Math.random() * 50),
            status: i % 3 === 0 ? "Inactive" : i % 3 === 1 ? "Pending" : "Active",
            instructor: {
                name: i % 2 === 0 ? "Dr. John Doe" : "Dr. Jane Smith",
                title: i % 2 === 0 ? "Professor" : "Assistant Professor",
                avatar: "https://via.placeholder.com/30"
            }
        }))
    );

    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [departmentFilter, setDepartmentFilter] = useState("All Departments");
    const [statusFilter, setStatusFilter] = useState("All Status");
    const [semesterFilter, setSemesterFilter] = useState("Summer 2025");
    const [searchTerm, setSearchTerm] = useState("");

    const itemsPerPage = 6;

    const handleEdit = (updatedCourse) => {
        setCourses(prev =>
            prev.map(course =>
                course.code === updatedCourse.code ? updatedCourse : course
            )
        );
    };

    const handleDelete = (code) => {
        setCourses(prev => prev.filter(course => course.code !== code));
    };

    const handleAdd = (newCourse) => {
        setCourses(prev => [newCourse, ...prev]);
    };

    // 🔍 Filtering + Search
    const filteredCourses = courses.filter((course) => {
        const matchesDepartment =
            departmentFilter === "All Departments" || course.department === departmentFilter;
        const matchesStatus =
            statusFilter === "All Status" || course.status === statusFilter;
        const matchesSearch =
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.code.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesDepartment && matchesStatus && matchesSearch;
    });

    const visibleCourses = filteredCourses.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="px-4 sm:px-6 py-4 bg-violet-100 min-h-screen">
            <CourseSetupHeader
                stats={{
                    totalCourses: filteredCourses.length,
                    departments: 2,
                    activeFaculty: 36,
                    totalStudents: filteredCourses.reduce((sum, c) => sum + c.students, 0)
                }}
            />

            {/* Filters */}
            <div className="bg-white rounded-xl shadow p-4 mb-4 flex flex-wrap gap-4 justify-between items-center">
                <select
                    className="border rounded px-3 py-1 text-sm"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                    <option>All Departments</option>
                    <option>Computer Science</option>
                    <option>Mechanical</option>
                </select>

                <select
                    className="border rounded px-3 py-1 text-sm"
                    value={semesterFilter}
                    onChange={(e) => setSemesterFilter(e.target.value)}
                >
                    <option>Summer 2025</option>
                </select>

                <select
                    className="border rounded px-3 py-1 text-sm"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                </select>

                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border px-3 py-1 rounded text-sm flex-1 sm:max-w-xs"
                />

                <button
                    onClick={() => setShowModal(true)}
                    className="bg-indigo-500 text-white px-4 py-1 rounded text-sm"
                >
                    + Add New Course
                </button>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {visibleCourses.map((course) => (
                    <CourseCard
                        key={course.code}
                        course={course}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(filteredCourses.length / itemsPerPage)}
                onPageChange={(page) => setCurrentPage(page)}
            />

            {showModal && (
                <AddCourseModal onClose={() => setShowModal(false)} onAdd={handleAdd} />
            )}
        </div>
    );
};

export default CourseSetupMain;
