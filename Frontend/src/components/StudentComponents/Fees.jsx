import FeesOverview from "./FeesOverview";
import UpcomingDues from "./FeesUpcomingDues";
import QuickPay from "./FeesQuickPay";
import HelpSupport from "./FeesHelpSupport";

const Fees = ({ overview, upcoming, payments, methods, support }) => {
    return (
        <div className="mt-5 rounded-2xl w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6 
                        bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border dark:border-violet-700 transition-colors duration-300">
            <div className="lg:col-span-2 space-y-6">
                <FeesOverview overview={overview} payments={payments} />
                <UpcomingDues dues={upcoming} />
            </div>
            <div className="space-y-6">
                <QuickPay methods={methods} />
                <HelpSupport support={support} />
            </div>
        </div>
    );
};

export default Fees;
