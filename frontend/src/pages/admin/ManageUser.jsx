
import { useState, useEffect } from "react";

export default function ManageUsers() {
  const [users, setUsers]       = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError]       = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("/api/admin/users")
      .then((res) => {
        if (!res.ok) throw new Error(`Server returned ${res.status}`);
        return res.json();
      })
      .then((data) => setUsers(data))
      .catch((e) => setError(e.message || "Failed to load users"))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center py-10">
        <svg
          className="animate-spin h-8 w-8 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-800 p-4 rounded-md mb-4">
        <strong>Error:</strong> {error}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return <p className="p-4 text-center text-gray-600">No users found.</p>;
  }

  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white border">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t">
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">
                {Array.isArray(u.roles) ? u.roles.join(", ") : u.roles}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
