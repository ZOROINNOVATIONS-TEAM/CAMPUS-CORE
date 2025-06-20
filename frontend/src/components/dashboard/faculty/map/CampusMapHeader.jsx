export default function CampusMapHeader() {
  return (
    <section className="py-2 md:py-4">
      <h1 className="text-xl md:text-2xl font-bold">Campus Map</h1>
      <p className="text-gray-600 mt-1 text-sm">
        Manage and locate your teaching spaces and faculty facilities
      </p>
      <div className="flex flex-wrap gap-4 items-center mt-2">
        <button className="text-sm px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 font-medium hover:bg-blue-100 transition">Show My Classes</button>
        <button className="text-sm px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">Book a Room</button>
        <button className="ml-auto text-sm px-4 py-1.5 rounded-md bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Download Map</button>
      </div>
    </section>
  );
}
