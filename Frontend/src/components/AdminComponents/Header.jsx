const Header = ({ name = "Admin", date = "Friday, June 13, 2025" }) => {
    return (
        <div className="px-4 sm:px-6">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 bg-gradient-to-r from-blue-400 to-violet-500 text-white rounded-2xl flex flex-row flex-wrap items-center justify-between gap-4 my-6">
                <h2 className="text-lg sm:text-xl font-semibold">Welcome, {name}</h2>
                <p className="text-sm">{date}</p>
            </div>
        </div>
    );
};

export default Header;
