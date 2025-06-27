import { useAuth } from './AuthContext';

export default function HasPermission({
  roles,
  permissions,
  fallback = null,
  children,
}) {
  const { hasRole, can } = useAuth();
  const ok =
    (roles ? hasRole(...roles) : true) &&
    (permissions ? can(...permissions) : true);

  return ok ? children : fallback;
}
