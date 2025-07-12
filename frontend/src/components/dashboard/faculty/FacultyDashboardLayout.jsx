import FacultyHeader from "./FacultyTopNavigation";
import FacultyWelcomeBanner from "./FacultyWelcomeBanner";
import FacultyNavigation from "./FacultyNav";

export default function FacultyDashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <FacultyHeader />
      <FacultyWelcomeBanner />
      <FacultyNavigation />
      <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
}
