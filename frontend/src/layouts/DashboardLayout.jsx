import { Outlet } from 'react-router-dom';
import { TopNavigation } from '../components/dashboard/TopNavigation';

export default function DashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      <TopNavigation />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}
