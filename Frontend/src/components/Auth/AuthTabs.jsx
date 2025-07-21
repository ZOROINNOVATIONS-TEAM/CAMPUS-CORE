const AuthTabs = ({ role, setRole }) => {
  return (
    <div className="flex flex-col items-center mb-6">
        <div className="flex gap-2 bg-gray-100 lg:bg-white p-1 rounded-full shadow">
            {/* {["student", "faculty", "admin"].map((r) => ( */}
            {["student", "faculty"].map((r) => (
            <button
                key={r}
                onClick={() => setRole(r)}
                className={`px-4 py-1 text-sm font-medium rounded-full cursor-pointer ${
                role === r ? "bg-blue-600 text-white" : "text-gray-700"
                }`}
            >
                {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
            ))}
        </div>
      
    </div>
  );
};

export default AuthTabs;