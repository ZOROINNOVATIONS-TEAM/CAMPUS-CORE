import FacultyHeader from "./FacultyTopNavigation";
import FacultyWelcomeBanner from "./FacultyWelcomeBanner";
import FacultyNavigation from "./FacultyNav";

export default function FacultyDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <FacultyHeader />
      <FacultyWelcomeBanner />
      <FacultyNavigation />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
