import Link from 'next/link';
import { FaBookOpen } from 'react-icons/fa'; // Importing the book icon from React Icons

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-green-600 bg-white min-h-96">
      <FaBookOpen className="w-24 h-24 mb-4 text-green-600" />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-2 text-lg">Sorry, the page you are looking for does not exist.</p>
      <Link href="/"  className="mt-6 text-green-600 underline hover:text-green-800">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
