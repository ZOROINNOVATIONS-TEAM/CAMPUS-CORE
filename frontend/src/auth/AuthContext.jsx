import { createContext, useContext, useMemo, useState } from 'react';

// Decode JWT payload without external library
function decodeToken(token) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return {};
    const payload = parts[1];
    return JSON.parse(atob(payload));
  } catch {
    return {};
  }
}

export const landingRoute = (roles = []) => {
  if (roles.includes('admin')) return '/admin-dashboard';
  if (roles.includes('faculty')) return '/faculty-dashboard';
  return '/student-dashboard';
};

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('token'));
  const [role, setRole]   = useState(() => localStorage.getItem('role'));

  const login = (newToken, newRole) => {
    localStorage.setItem('token', newToken);
    localStorage.setItem('role', newRole);
    setToken(newToken);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setRole(null);
  };

  const user = useMemo(() => {
    if (!token) return null;
    if (token === 'dummy-auth-token' && role) {
      return { id: 'demo', name: 'Demo User', roles: [role], permissions: [] };
    }
    const decoded = decodeToken(token);
    if (!decoded.sub) return null;
    return {
      id:          decoded.sub,
      name:        decoded.name || '',
      roles:       decoded.roles || [],
      permissions: decoded.permissions || [],
    };
  }, [token, role]);

  const isAuthed = Boolean(user);
  const hasRole = (...r) => isAuthed && r.some(rl => user.roles.includes(rl));
  const can     = (...p) => isAuthed && p.every(perm => user.permissions.includes(perm));

  return (
    <AuthContext.Provider value={{ user, isAuthed, login, logout, hasRole, can }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be inside <AuthProvider>');
  return ctx;
};
