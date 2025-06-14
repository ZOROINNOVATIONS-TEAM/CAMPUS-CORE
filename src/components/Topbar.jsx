function Topbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow">
      <img src="/logo.png" alt="Campus Core" className="h-10" />
      <div className="flex items-center space-x-4">
        <button>🔔</button>
        <button>💬</button>
        <span className="font-medium">DEVANSH ⬇️</span>
      </div>
    </div>
  );
}
export default Topbar;
