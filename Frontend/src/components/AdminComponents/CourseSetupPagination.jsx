const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);

  return (
    <div className="flex gap-2 justify-center mt-6">
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="px-3 py-1 text-sm rounded bg-gray-200">‹</button>
        {pages.map((page) => (
            <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 text-sm rounded ${page === currentPage ? "bg-blue-500 text-white" : "bg-gray-100"}`}>
            {page}
            </button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-3 py-1 text-sm rounded bg-gray-200">›</button>
    </div>
  );
};

export default Pagination;
