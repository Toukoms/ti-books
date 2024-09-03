"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { FaBookOpen, FaExclamationTriangle } from "react-icons/fa"; // Importing the book and danger icons

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-screen-lg flex flex-col items-center justify-center text-green-600 bg-white min-h-96 mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <FaBookOpen className="w-24 h-24 text-green-600" />
        <FaExclamationTriangle className="w-24 h-24 text-red-600" />
      </div>
      <h1 className="text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="mt-2 text-lg text-gray-700 text-center">
        {error.message}
      </p>
      <div className="flex items-center gap-2 mt-6">
        <Link
          href="/"
          className={buttonVariants()}
        >
          Return to Home
        </Link>
        <Button variant={"outline"}>Try Again</Button>
      </div>
    </div>
  );
};

export default ErrorPage;
