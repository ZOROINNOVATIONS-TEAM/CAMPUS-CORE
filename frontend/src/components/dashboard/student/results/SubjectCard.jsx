import Button from './Button';

export default function SubjectCard({ name, score, status, image, actionLabel }) {
  // Map subject names to image paths
  const subjectImageMap = {
    "IOT": "/iot.jpeg",
    "MATH": "/math.jpg",
    "DBMS": "/dbms.jpg",
    "AI": "/ai.jpeg"
  };

  return (
    <div className="bg-white border rounded-xl p-4 flex flex-col items-center shadow">
      <img
        src={image || subjectImageMap[name] || `https://source.unsplash.com/80x80/?${name}`}
        alt={name}
        className="mb-2 rounded"
      />
      <span className="font-semibold">{name}</span>
      <span className="text-blue-600 font-bold">{score}</span>
      <span className={`text-xs mt-1 ${status === "Passed" ? "text-green-600" : "text-red-600"}`}>{status}</span>
      <div className="flex gap-2 mt-2">
        {actionLabel && <Button variant="secondary">{actionLabel}</Button>}
        <Button variant="outline">View Detail</Button>
      </div>
    </div>
  );
}

