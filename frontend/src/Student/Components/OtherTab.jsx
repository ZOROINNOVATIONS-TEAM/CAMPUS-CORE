import React from 'react';
import { BookOpen, Users, Award } from 'lucide-react';

const OtherTab = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-gray-600">
        <BookOpen className="w-6 h-6" />
        Other Resources
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <h4 className="font-medium">Library</h4>
          </div>
          <p className="text-sm text-gray-600">Access digital and physical resources</p>
        </div>
        
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <h4 className="font-medium">Student Clubs</h4>
          </div>
          <p className="text-sm text-gray-600">Join student organizations</p>
        </div>
        
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <h4 className="font-medium">Scholarships</h4>
          </div>
          <p className="text-sm text-gray-600">View available funding</p>
        </div>
        
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <BookOpen className="w-5 h-5 text-yellow-600" />
            </div>
            <h4 className="font-medium">Career Services</h4>
          </div>
          <p className="text-sm text-gray-600">Resume and interview help</p>
        </div>
        
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-red-100 p-2 rounded-full">
              <Users className="w-5 h-5 text-red-600" />
            </div>
            <h4 className="font-medium">Counseling</h4>
          </div>
          <p className="text-sm text-gray-600">Mental health support</p>
        </div>
        
        <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-indigo-100 p-2 rounded-full">
              <Award className="w-5 h-5 text-indigo-600" />
            </div>
            <h4 className="font-medium">Academic Support</h4>
          </div>
          <p className="text-sm text-gray-600">Tutoring and workshops</p>
        </div>
      </div>
    </div>
  );
};

export default OtherTab;