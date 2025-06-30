export default function StatCard({ label, value, color }) {
  return (
    <div className={`rounded-xl p-4 flex flex-col items-center shadow-sm ${color.bg}`}>
      <span className={`text-2xl font-bold ${color.text}`}>{value}</span>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
}
