const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) =>
    setFilters({ ...filters, [e.target.name]: e.target.value });

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <select
        name="department"
        value={filters.department}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100"
      >
        <option value="">All Departments</option>
        <option value="CSE">CSE</option>
        <option value="ECE">ECE</option>
        <option value="ME">ME</option>
      </select>

      <select
        name="semester"
        value={filters.semester}
        onChange={handleChange}
        className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md text-sm bg-white dark:bg-zinc-900 text-gray-800 dark:text-gray-100"
      >
        <option value="">All Semesters</option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
      </select>
    </div>
  );
};

export default FilterBar;
