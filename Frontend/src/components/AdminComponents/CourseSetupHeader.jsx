const CourseSetupHeader = ({ stats }) => {
    return (
        <div className="flex flex-wrap justify-between items-center bg-white shadow rounded-xl p-4 mb-4">
            <div className="text-lg font-semibold">Course Management</div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 sm:mt-0 text-center w-full sm:w-auto">
                <div><p className="text-sm">Total Courses</p><p className="text-xl font-bold">{stats.totalCourses}</p></div>
                <div><p className="text-sm">Departments</p><p className="text-xl font-bold">{stats.departments}</p></div>
                <div><p className="text-sm">Active Faculty</p><p className="text-xl font-bold">{stats.activeFaculty}</p></div>
                <div><p className="text-sm">Total Students</p><p className="text-xl font-bold">{stats.totalStudents}</p></div>
            </div>
        </div>
    );
};

export default CourseSetupHeader;
