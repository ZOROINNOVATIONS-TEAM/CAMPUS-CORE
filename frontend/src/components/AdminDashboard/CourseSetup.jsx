import { useState } from 'react';
import { FaBook, FaBookOpen, FaBriefcase, FaBuilding, FaCalculator, FaChalkboardTeacher, FaEllipsisH, FaFlask, FaLaptopCode, FaSearch, FaUserGraduate } from 'react-icons/fa';
import AddCourseModal from './AddCourseModal';
import EditCourseModal from './EditCourseModal';

// Helper function to get course icon based on department
const getCourseIcon = (department) => {
  const iconClass = "text-2xl";
  switch (department) {
    case 'Computer Science':
      return <FaLaptopCode className={iconClass} />;
    case 'Mathematics':
      return <FaCalculator className={iconClass} />;
    case 'Physics':
      return <FaFlask className={iconClass} />;
    case 'Literature':
      return <FaBook className={iconClass} />;
    case 'Business':
      return <FaBriefcase className={iconClass} />;
    default:
      return <FaBookOpen className={iconClass} />;
  }
};

const statsIcons = [
  { icon: FaBookOpen, label: 'Total Courses', color: 'text-blue-600' },
  { icon: FaBuilding, label: 'Departments', color: 'text-purple-600' },
  { icon: FaChalkboardTeacher, label: 'Active Faculty', color: 'text-green-600' },
  { icon: FaUserGraduate, label: 'Total Students', color: 'text-yellow-600' }
];

const dummyData = {
  totalStats: {
    totalCourses: 48,
    departments: 12,
    activeStudents: 1248,
    activeFaculty: 36
  },
  courses: [
    {
      id: 1,
      name: 'Introduction to Computer Science',
      code: 'CS101',
      department: 'Computer Science',
      credits: 4,
      students: 42,
      faculty: 'Dr. Robert Chen',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Advanced Mathematics',
      code: 'MATH302',
      department: 'Mathematics',
      credits: 3,
      students: 28,
      faculty: 'Dr. Emily Wilson',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Physics Laboratory',
      code: 'PHYS205',
      department: 'Physics',
      credits: 2,
      students: 35,
      faculty: 'Dr. Michael Thompson',
      status: 'Active'
    },
    {
      id: 4,
      name: 'English Literature',
      code: 'ENG204',
      department: 'Literature',
      credits: 3,
      students: 31,
      faculty: 'Dr. Sarah Johnson',
      status: 'Active'
    },
    {
      id: 5,
      name: 'Business Economics',
      code: 'BUS201',
      department: 'Business',
      credits: 3,
      students: 0,
      faculty: 'Not Assigned',
      status: 'Pending'
    },
    {
      id: 6,
      name: 'Database Systems',
      code: 'CS305',
      department: 'Computer Science',
      credits: 4,
      students: 0,
      faculty: 'Dr. James Anderson',
      status: 'Inactive'
    }
  ]
};

const CourseSetup = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: '',
    semester: 'Summer 2025',
    status: ''
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [assignOnly, setAssignOnly] = useState(false);
  const [courses, setCourses] = useState(dummyData.courses);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !filters.department || course.department === filters.department;
    const matchesStatus = !filters.status || course.status === filters.status;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = [...new Set(courses.map(course => course.department))];
  const statuses = [...new Set(courses.map(course => course.status))];

  const handleAddCourse = (newCourse) => {
    setCourses([...courses, { ...newCourse, id: Date.now() }]);
    setIsAddModalOpen(false);
  };

  const handleEditCourse = (updatedCourse) => {
    setCourses(courses.map(c => c.id === updatedCourse.id ? updatedCourse : c));
    setIsEditModalOpen(false);
    setSelectedCourse(null);
    setAssignOnly(false);
  };

  const openEditModal = (course) => {
    setSelectedCourse(course);
    setAssignOnly(false);
    setIsEditModalOpen(true);
  };

  const openAssignModal = (course) => {
    setSelectedCourse(course);
    setAssignOnly(true);
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header Stats */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Course Management</h2>
        <p className="text-sm text-gray-600 mb-4">Manage all courses for Summer Semester 2025</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {statsIcons.map((item, index) => {
            const Icon = item.icon;
            const value = Object.values(dummyData.totalStats)[index];
            return (
              <div key={item.label} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center`}>
                    <Icon className={`text-2xl ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                    <p className="text-xl font-semibold mt-1">{value.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 flex-grow">
            <select 
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={filters.department} 
              onChange={(e) => setFilters({ ...filters, department: e.target.value })}
            >
              <option value="">All Departments</option>
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>

            <select 
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={filters.semester} 
              onChange={(e) => setFilters({ ...filters, semester: e.target.value })}
            >
              <option value="Summer 2025">Summer 2025</option>
            </select>

            <select 
              className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
              value={filters.status} 
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
            >
              <option value="">All Status</option>
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full px-3 py-2 pl-10 border border-gray-200 rounded-md text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400 text-lg" />
            </div>
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium whitespace-nowrap"
            onClick={() => setIsAddModalOpen(true)}
          >
            + Add New Course
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="space-y-4">
        {dummyData.courses.map(course => (
          <div key={course.id} className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center ${
                  course.status === 'Active' ? 'bg-blue-50' :
                  course.status === 'Pending' ? 'bg-yellow-50' :
                  'bg-gray-50'
                }`}>
                  {getCourseIcon(course.department)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-gray-900">{course.name}</h3>
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-sm">
                      {course.code}
                    </span>
                  </div>
                  <div className="mt-2">
                    <span className="text-sm text-gray-500">Department:</span>
                    <span className="text-sm text-gray-900 ml-2">{course.department}</span>
                    <span className="text-sm text-gray-500 ml-4">Credits:</span>
                    <span className="text-sm text-gray-900 ml-2">{course.credits}</span>
                    <span className="text-sm text-gray-500 ml-4">Students:</span>
                    <span className="text-sm text-gray-900 ml-2">{course.students}</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-gray-500">Faculty:</span>
                    {course.faculty === 'Not Assigned' ? (
                      <span className="text-sm text-gray-400">Not Assigned</span>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                          <FaChalkboardTeacher className="text-gray-500 text-xs" />
                        </div>
                        <span className="text-sm text-gray-900">{course.faculty}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  course.status === 'Active' ? 'bg-green-50 text-green-600' :
                  course.status === 'Pending' ? 'bg-yellow-50 text-yellow-600' :
                  'bg-red-50 text-red-600'
                }`}>
                  {course.status}
                </span>
                <div className="flex items-center gap-2">
                  <button 
                    className="px-4 py-1.5 text-sm border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600 font-medium"
                    onClick={() => openEditModal(course)}
                  >
                    Edit
                  </button>
                  <button 
                    className={`px-4 py-1.5 text-sm rounded-md font-medium ${
                      course.faculty === 'Not Assigned'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-gray-200 hover:bg-gray-50 text-gray-600'
                    }`}
                    onClick={() => openAssignModal(course)}
                  >
                    Assign
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md hover:bg-gray-50">
                    <FaEllipsisH />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-between items-center text-sm text-gray-500 border-t pt-6">
        <span>Showing {filteredCourses.length} of {dummyData.courses.length} courses</span>
        <div className="flex gap-1">
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">‹</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">4</button>
          <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 transition-colors">›</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-gray-400 border-t pt-4">
        <div className="flex items-center justify-center gap-2">
          <span>🎯</span>
          <span>Designed and developed by <strong>ZoroTeam</strong></span>
          <span className="mx-2">©</span>
          <span><strong>2025 Zoro innovations</strong></span>
        </div>
      </footer>

      {/* Modals */}
      <AddCourseModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSubmit={handleAddCourse} 
      />
      <EditCourseModal 
        isOpen={isEditModalOpen} 
        onClose={() => { setIsEditModalOpen(false); setSelectedCourse(null); setAssignOnly(false); }} 
        onSubmit={handleEditCourse} 
        courseData={selectedCourse} 
        assignOnly={assignOnly}
      />
    </div>
  );
};

// Statistics Card Component
const StatCard = ({ icon, label, value, color }) => {
  const colorClasses = {
    blue: 'text-blue-500 bg-blue-100',
    rose: 'text-rose-500 bg-rose-100',
    green: 'text-green-500 bg-green-100',
    yellow: 'text-yellow-500 bg-yellow-100'
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${colorClasses[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">{label}</p>
          <p className="text-xl font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course, onEdit, onAssign }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'Inactive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{course.name}</h3>
          <p className="text-xs text-gray-500 mb-3">{course.code}</p>
          
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Department</span>
              <span className="text-sm font-medium text-gray-800">{course.department}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Credits</span>
              <span className="text-sm font-medium text-gray-800">{course.credits}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Students</span>
              <span className="text-sm font-medium text-gray-800">{course.students}</span>
            </div>
          </div>
          
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xs">👨‍🏫</span>
              </div>
              <span className="text-sm text-gray-600">{course.faculty}</span>
              <span className="text-xs text-gray-500">Professor</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-2 ml-4">
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusStyle(course.status)}`}>
            {course.status}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={onEdit}
              className="text-xs px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              ✏️ Edit
            </button>
            <button 
              onClick={onAssign}
              className={`text-xs px-3 py-1 rounded-lg transition-colors ${
                course.faculty === 'Not Assigned' 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'border border-gray-300 hover:bg-gray-50'
              }`}
            >
              👥 Assign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseSetup;
