
const recentResults = [
  {
    id: 1,
    subject: 'Computer Science',
    date: 'Mid-Term Exam - May 28, 2024',
    grade: 'A',
    score: '92/100',
  },
  {
    id: 2,
    subject: 'Advanced Mathematics',
    date: 'Assignment 3 - June 5, 2024',
    grade: 'B+',
    score: '88/100',
  },
  {
    id: 3,
    subject: 'Physics',
    date: 'Quiz 4 - June 9, 2024',
    grade: 'B-',
    score: '82/100',
  },
];

const RecentResults = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Results</h2>
        <a href="#" className="text-sm text-indigo-600 hover:text-indigo-500">
          All Results
        </a>
      </div>

      <div className="space-y-4">
        {recentResults.map((result) => (
          <div
            key={result.id}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-900">
                {result.subject}
              </h3>
              <p className="mt-1 text-xs text-gray-500">{result.date}</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">
                  {result.score}
                </p>
                <p className="mt-1 text-xs text-gray-500">Score</p>
              </div>
              <div className={`h-10 w-10 rounded-full flex items-center justify-center
                ${
                  result.grade.startsWith('A')
                    ? 'bg-green-100 text-green-800'
                    : result.grade.startsWith('B')
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                <span className="text-sm font-medium">{result.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Performance Graph */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Math</span>
          <span>85%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-blue-500 rounded" style={{ width: '85%' }} />
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4 mb-2">
          <span>Physics</span>
          <span>78%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded overflow-hidden">
          <div className="h-full bg-blue-500 rounded" style={{ width: '78%' }} />
        </div>
      </div>
    </div>
  );
};

export default RecentResults;
