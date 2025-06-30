import StatCard from './StatCard';
import Button from './Button';

export default function OverallPerformance({ averageScore, passedSubjects, failedSubjects }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center mb-1">Overall Performance</h2>
      <p className="text-center text-gray-500 mb-4">Summary of your performance across assessments.</p>
      <div className="flex justify-center mb-4">
        <Button>Analyze Performance</Button>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <StatCard label="Average Score" value={`${averageScore}%`} color={{ text: "text-blue-600", bg: "bg-blue-50" }} />
        <StatCard label="Passed Subjects" value={passedSubjects} color={{ text: "text-green-600", bg: "bg-green-50" }} />
        <StatCard label="Failed Subjects" value={failedSubjects} color={{ text: "text-red-600", bg: "bg-red-50" }} />
      </div>
    </div>
  );
}

