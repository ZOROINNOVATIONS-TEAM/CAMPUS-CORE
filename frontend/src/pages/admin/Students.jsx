import React, { useState } from 'react';
import StudentList from '@/components/dashboard/admin/StudentList';
import StudentForm from '@/components/dashboard/admin/StudentForm';

export default function AdminStudents() {
  // Sample initial students (replace with your data)
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com' }
  ]);
  
  const [editingStudent, setEditingStudent] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Add new student
  const handleAdd = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  // Edit existing student
  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  // Delete student
  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  // Submit form (both add and edit)
  const handleSubmit = (studentData) => {
    if (editingStudent) {
      // Update existing student
      setStudents(students.map(s => 
        s.id === editingStudent.id ? { ...s, ...studentData } : s
      ));
    } else {
      // Add new student
      const newId = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1;
      setStudents([...students, { ...studentData, id: newId }]);
    }
    setShowForm(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Student Management</h1>
      
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Students List</h2>
        <button 
          onClick={handleAdd}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add New Student
        </button>
      </div>

      {showForm ? (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingStudent ? 'Edit Student' : 'Add New Student'}
          </h2>
          <StudentForm
            student={editingStudent}
            onSubmit={handleSubmit}
            onCancel={() => setShowForm(false)}
          />
        </div>
      ) : null}

      <StudentList 
        students={students} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    </div>
  );
}
