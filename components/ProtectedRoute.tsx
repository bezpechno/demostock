import React, { useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../lib/authContext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('Auth state:', { user, loading });
    if (!loading && !user) {
      console.log('Redirecting to /auth...');
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    console.log('Loading or no user...');
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
