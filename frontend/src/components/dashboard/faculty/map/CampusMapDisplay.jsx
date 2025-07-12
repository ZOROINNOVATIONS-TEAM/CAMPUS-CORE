export default function CampusMapDisplay() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700 p-2 sm:p-4 transition-colors duration-300">
      <img
        src="/static/campus-map.png"
        alt="Campus Map"
        className="rounded-lg w-full h-72 object-cover"
      />
    </div>
  );
}
