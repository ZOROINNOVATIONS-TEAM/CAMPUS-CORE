export default function ThemeTest() {
    const toggle = () => {
        const html = document.documentElement;
        html.classList.toggle('dark');
        console.log('Current theme:', html.classList.contains('dark') ? 'dark' : 'light');
    };

    return (
        <div className="p-8 min-h-screen bg-white dark:bg-gray-900">
            <h1 className="text-2xl font-bold text-black dark:text-white">
                Theme Test
            </h1>
            <button
                onClick={toggle}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
                Toggle Theme
            </button>

            <div className="mt-8 p-4 bg-gray-100 dark:bg-gray-800">
                <p className="text-gray-800 dark:text-gray-200">
                    This should change appearance when toggled
                </p>
            </div>
        </div>
    );
}