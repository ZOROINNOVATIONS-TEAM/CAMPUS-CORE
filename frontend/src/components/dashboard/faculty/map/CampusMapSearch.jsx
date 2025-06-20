export default function CampusMapSearch() {
  return (
    <div className="bg-white rounded-xl shadow border p-4 flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <input
          className="border rounded-md px-4 py-2 flex-1 text-sm"
          placeholder="Search for buildings, rooms, or facilities..."
        />
        <select className="border rounded-md px-2 py-2 text-sm">
          <option>Building Type</option>
          <option>Lecture Hall</option>
          <option>Staff Room</option>
        </select>
        <select className="border rounded-md px-2 py-2 text-sm">
          <option>Floor Level</option>
          <option>Ground</option>
          <option>1st Floor</option>
        </select>
        <button className="ml-auto px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-md border text-sm">🔄</button>
      </div>
    </div>
  );
}
