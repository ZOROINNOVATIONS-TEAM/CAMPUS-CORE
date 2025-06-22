export default function CampusMapLayers() {
  return (
    <div className="bg-white rounded-xl shadow border p-4 min-w-[260px] max-w-xs flex flex-col gap-6">
      <div>
        <h3 className="font-semibold mb-2">Map Layers</h3>
        <ul className="space-y-2 text-sm">
          <li><input type="checkbox" checked readOnly className="mr-2 accent-blue-500" /> <span className="text-blue-600">Lecture Halls</span></li>
          <li><input type="checkbox" checked readOnly className="mr-2 accent-green-500" /> <span className="text-green-600">Staff Rooms</span></li>
          <li><input type="checkbox" checked readOnly className="mr-2 accent-yellow-500" /> <span className="text-yellow-600">Research Labs</span></li>
          <li><input type="checkbox" className="mr-2 accent-purple-500" /> <span className="text-purple-600">Faculty Parking</span></li>
          <li><input type="checkbox" className="mr-2 accent-gray-500" /> <span className="text-gray-600">Department Offices</span></li>
          <li><input type="checkbox" className="mr-2 accent-red-500" /> <span className="text-red-600">My Classes</span></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Display Options</h3>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Show Walking Paths</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked /> Show Building Names</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Show Accessibility Routes</label>
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> 3D Building View</label>
        </div>
      </div>
    </div>
  );
}
