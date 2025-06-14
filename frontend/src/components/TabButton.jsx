const TabButton = ({ isActive, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-all duration-300
        ${isActive
          ? 'bg-white text-blue-600 shadow-md'
          : 'text-white hover:bg-blue-600/70'}
      `}
    >
      {children}
    </button>
  );
};

export default TabButton;
