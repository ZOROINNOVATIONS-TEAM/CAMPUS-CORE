export default function EventTypeFilter({ selected, onChange }) {
  return (
    <div className="flex items-center gap-6">
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="w-4 h-4 rounded-full bg-purple-600 block"></span>
        <input
          type="radio"
          checked={selected === "lecture"}
          onChange={() => onChange("lecture")}
          className="hidden"
        />
        <span className="text-sm font-medium">Lecture</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="w-4 h-4 rounded-full bg-black block"></span>
        <input
          type="radio"
          checked={selected === "group study"}
          onChange={() => onChange("group study")}
          className="hidden"
        />
        <span className="text-sm font-medium">Group Study</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="w-4 h-4 rounded-full bg-yellow-400 block"></span>
        <input
          type="radio"
          checked={selected === "coaching"}
          onChange={() => onChange("coaching")}
          className="hidden"
        />
        <span className="text-sm font-medium">Coaching</span>
      </label>
    </div>
  );
}
