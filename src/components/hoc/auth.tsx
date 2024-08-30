"use client";
import { useAuth } from "@/contexts/auth-context";

export const withAuth = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  const Auth: React.FC<P> = async (props) => {
    const { isAuthenticated, isLoading, login } = useAuth();

    if (isLoading) return <div>Loading..</div>;

    if (!isAuthenticated) await login();

    return <Component {...(props as P)} />;
  };
  return Auth;
};
