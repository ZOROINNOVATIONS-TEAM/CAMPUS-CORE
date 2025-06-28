import React from "react";

const CGPAChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">View SGPA/CGPA</h2>
      <div className="w-full h-48">
        <img
          src="https://quickchart.io/chart?c={type:'line',data:{labels:['Sem1','Sem2','Sem3','Sem4'],datasets:[{label:'CGPA',data:[6.5,7.2,8.1,8.3]}]}}"
          alt="Line Chart"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Print SGPA/CGPA
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
          Download SGPA/CGPA
        </button>
      </div>
    </div>
  );
};

export default CGPAChart;
