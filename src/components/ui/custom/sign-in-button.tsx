"use client";
import { useAuth } from "@/contexts/auth-context";
import { Button } from "../button";
import { Skeleton } from "../skeleton";

const SignInButton = () => {
  const { isAuthenticated, isLoading, login, logout } = useAuth();

  const handleLogIn = async () => {
    try {
      await login();
    } catch (error) {
      console.error("Error when trying to login", error);
    }
  };

  return isLoading ? (
    <Skeleton className="rounded-full h-10 w-20 bg-green-900" />
  ) : (
    <Button
      onClick={isAuthenticated ? logout : handleLogIn}
      className={
        "rounded-full px-6 bg-green-800 hover:bg-green-700 transition-colors duration-300"
      }
    >
      {isAuthenticated ? "Logout" : "Login"}
    </Button>
  );

  // return (
  //   <Button
  //     className={
  //       "rounded-full px-6 bg-green-800 hover:bg-green-700 transition-colors duration-300"
  //     }
  //   >
  //     Login
  //   </Button>
  // );
};

export default SignInButton;
