import FeesOverview from "./FeesOverview";
import PaymentHistory from "./PaymentHistory";
import UpcomingDues from "./UpcomingDues";
import QuickPay from "./QuickPay";
import HelpSupport from "./HelpSupport";

export default function FeesPage() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      <div className="flex flex-col gap-8 xl:col-span-2 w-full">
        <FeesOverview />
        <PaymentHistory />
        <UpcomingDues />
      </div>
      <div className="flex flex-col gap-8 w-full xl:w-auto">
        <QuickPay />
        <HelpSupport />
      </div>
    </div>
  );
}
