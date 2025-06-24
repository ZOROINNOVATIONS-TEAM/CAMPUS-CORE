import React from 'react';
import { WelcomeBanner } from '../../components/dashboard/student/WelcomeBanner';
import FeesOverview from '../../components/dashboard/student/FeesPage/FeesOverview';
import PaymentHistory from '../../components/dashboard/student/FeesPage/PaymentHistory';
import QuickPay from '../../components/dashboard/student/FeesPage/QuickPay';
import UpcomingDues from '../../components/dashboard/student/FeesPage/UpcomingDues';
import HelpSupport from '../../components/dashboard/student/FeesPage/HelpSupport';

const FeesPage = () => {
  return (
    <div className="fees-page p-6">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column: Fees Overview + Payment History */}
        <div>
          <FeesOverview />
        </div>

        {/* Right Column: Quick Pay + Upcoming Dues + Help & Support */}
        
        <div>
          <QuickPay />
        </div>
      </div>

      <div className="mt-6">
        <PaymentHistory />
      </div>

<div className="mt-6">
        <HelpSupport />
      </div>

    <div className="mt-6">
    <UpcomingDues />
    </div>
    </div>
  );
};

export default FeesPage;