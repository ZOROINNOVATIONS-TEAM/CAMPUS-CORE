import React from 'react';
import OverallPerformance from '@/components/dashboard/student/results/OverallPerformance';
import SubjectCard from '@/components/dashboard/student/results/SubjectCard';
import Chart from '@/components/dashboard/student/results/Chart';
import Button from '@/components/dashboard/student/results/Button';

export default function ResultsPage() {
  // Stat values
  const averageScore = 80.25;
  const passedSubjects = 6;
  const failedSubjects = 2;

  // ISA & ESA subjects
  const isaSubjects = [
    { name: "AI", score: 85, status: "Passed", actionLabel: "Re-evaluate" },
    { name: "DBMS", score: 76, status: "Passed", actionLabel: "Re-evaluate" },
    { name: "IOT", score: 92, status: "Passed", actionLabel: "Re-evaluate" },
  ];
  const esaSubjects = [
    { name: "MATH", score: 75, status: "Passed", actionLabel: "Re-appear" },
    { name: "AI", score: 80, status: "Passed", actionLabel: "Re-appear" },
    { name: "IOT", score: 86, status: "Passed", actionLabel: "Re-appear" },
  ];

  // Pie chart data: Assignment Results
  const pieData = [
    { name: "DBMS", value: 85 },
    { name: "AI", value: 78 },
    { name: "IoT", value: 92 },
    { name: "Statistics", value: 80 },
  ];

  // Line chart data: CGPA per semester
  const lineData = [7.5, 8.0, 8.2, 8.8];
  const lineLabels = ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];

  return (
    <div className="min-h-screen bg-gray-100 py-1 px-2 md:px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left: Overall Performance and Assessments */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="bg-white rounded-2xl shadow p-4">
            <OverallPerformance
              averageScore={averageScore}
              passedSubjects={passedSubjects}
              failedSubjects={failedSubjects}
            />
            {/* ISA Section */}
            <h3 className="text-lg font-semibold mb-2 mt-2">Internal Summative Assessment (ISA)</h3>
            <p className="text-sm text-gray-500 mb-2">View your ISA results for the semester.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {isaSubjects.map((sub) => (
                <SubjectCard key={sub.name} {...sub} />
              ))}
            </div>
            {/* ESA Section */}
            <h3 className="text-lg font-semibold mb-2 mt-2">External Summative Assessment (ESA)</h3>
            <p className="text-sm text-gray-500 mb-2">View your ESA results for the end semester exam.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {esaSubjects.map((sub) => (
                <SubjectCard key={sub.name} {...sub} />
              ))}
            </div>
          </div>
        </div>
        {/* Right: Charts and Actions */}
        <div className="flex flex-col gap-6">
          {/* Assignment Results (Pie Chart) */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">Assignment Results</h3>
            <p className="text-sm text-gray-500 mb-4">View your performance in the assignment.</p>
            <Chart type="pie" data={pieData} />
            <div className="flex gap-2 mt-4">
              <Button>Print Assignment Results</Button>
              <Button variant="secondary">Download Assignment Results</Button>
            </div>
          </div>
          {/* CGPA Line Chart */}
          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">View SGPA/CGPA</h3>
            <Chart type="line" data={lineData} labels={lineLabels} />
            <div className="flex gap-2 mt-4">
              <Button>Print SGPA/CGPA</Button>
              <Button variant="secondary">Download SGPA/CGPA</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



