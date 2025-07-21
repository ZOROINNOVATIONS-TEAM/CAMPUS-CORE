const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t dark:border dark:border-violet-700 py-4 mt-10 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                <p>
                    Designed and developed by{" "}
                    <span className="font-semibold text-black dark:text-white">ZORO Team</span>
                </p>
                <p className="mt-2 sm:mt-0">
                    © 2025 <span className="font-semibold text-black dark:text-white">ZORO Innovations</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
