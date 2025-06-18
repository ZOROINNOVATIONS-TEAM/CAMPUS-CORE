import React from 'react';
import { Users, Mail, Clock } from 'lucide-react';

const MentorTab = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-6">
      <h3 className="font-semibold text-xl mb-6 flex items-center gap-2 text-purple-600">
        <Users className="w-6 h-6" />
        Mentor Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border border-purple-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-purple-200 flex items-center justify-center text-purple-600 text-2xl font-bold">
              AV
            </div>
            <div>
              <h4 className="font-bold text-lg">Dr. Aditi Verma</h4>
              <p className="text-sm text-gray-600">Computer Science Department</p>
            </div>
          </div>
          
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-purple-500" />
              <a href="mailto:aditi.verma@campuscore.edu" className="text-blue-600 hover:underline">
                aditi.verma@campuscore.edu
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-500" />
              <span className="text-gray-700">Mon, Wed 3–5 PM</span>
            </p>
          </div>
        </div>
        
        <div className="bg-white border rounded-lg p-6">
          <h4 className="font-semibold text-base mb-4">Schedule Meeting</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input 
                type="date" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
                <option>4:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
              <textarea 
                className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                rows="3"
                placeholder="Briefly describe the purpose of the meeting"
              ></textarea>
            </div>
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm font-medium">
              Request Meeting
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-semibold text-base mb-3">Previous Meetings</h4>
        <ul className="space-y-3 text-sm">
          <li className="p-3 bg-white rounded border flex justify-between items-center">
            <div>
              <p className="font-medium">June 10, 2025</p>
              <p className="text-gray-600">Course selection advice</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>
          </li>
          <li className="p-3 bg-white rounded border flex justify-between items-center">
            <div>
              <p className="font-medium">May 25, 2025</p>
              <p className="text-gray-600">Internship guidance</p>
            </div>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Completed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MentorTab;