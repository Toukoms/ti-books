"use client"
import { useAuth } from "@/contexts/auth-context";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PrivateRoute({
  protectedRoutes,
  children,
}: {
  protectedRoutes: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading, login } = useAuth();

  const pathIsProtected = protectedRoutes.map(route => route.startsWith(pathname))[0];

  useEffect(() => {
    if (!isLoading && !isAuthenticated && pathIsProtected) {
      router.push("/");
      login();
    }
  }, [isLoading, isAuthenticated, pathIsProtected, router, login]);

  if ((isLoading || !isAuthenticated) && pathIsProtected) {
    return <div>Loading...</div>;
  }

  return children;
}
