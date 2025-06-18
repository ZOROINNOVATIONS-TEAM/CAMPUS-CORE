import React from "react";

const AssignmentResults = () => {
  return (
    <div className="bg-[#2b2f42] rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4">Assignment Results</h2>
      <div className="w-full h-48">
        <img src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Assignment','Theory','Oral','Copy','Practical','Misc'],datasets:[{data:[40,20,10,15,10,5]}]}}" alt="Pie Chart" className="w-full h-full object-contain" />
      </div>
      <p className="text-sm text-gray-300 mt-4">View your performance in the assignment.</p>

      <div className="flex flex-col gap-2 mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Print Assignment Results
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Download Assignment Results
        </button>
      </div>
    </div>
  );
};

export default AssignmentResults;
