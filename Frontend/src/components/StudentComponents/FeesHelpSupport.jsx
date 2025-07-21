const HelpSupport = ({ support }) => {
    return (
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-4 text-gray-700 dark:text-gray-200 border dark:border-violet-700">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Help & Support</h2>
            <div className="space-y-3 text-sm">
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">📄 Payment FAQs</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Find answers to common questions about fees and payments.
                    </p>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">{support.faqs}</a>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">📧 Contact Finance Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Need help with your payment? Reach out to our finance office.
                    </p>
                    <a href={`mailto:${support.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {support.email}
                    </a>
                    <br />
                    <a href={`tel:${support.phone}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                        {support.phone}
                    </a>
                </div>
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100">📅 Schedule an Appointment</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                        Book a meeting with a financial advisor for personalized help.
                    </p>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {support.appointment}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
