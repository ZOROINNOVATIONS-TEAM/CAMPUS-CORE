import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

/**
 * Wrap a route element like:
 * <ProtectedRoute roles={['admin']} permissions={['manage:users']}>
 *    <AdminDashboard />
 * </ProtectedRoute>
 */
export default function ProtectedRoute({ children, roles, permissions }) {
  const { isAuthed, hasRole, can } = useAuth();

  if (!isAuthed) return <Navigate to="/login" replace />;

  if (roles && !hasRole(...roles)) return <Navigate to="/401" replace />;
  if (permissions && !can(...permissions)) return <Navigate to="/403" replace />;

  return children;
}
