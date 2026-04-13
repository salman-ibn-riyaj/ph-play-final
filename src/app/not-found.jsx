
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-9xl font-black text-gray-200">404</h1>
      <h2 className="text-2xl font-bold text-gray-700">Page Not Found</h2>
      <p className="text-gray-400">
        The page you are looking for doesn't exist.
      </p>
      <Link href="/" className="btn bg-green-400 text-white px-8">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
