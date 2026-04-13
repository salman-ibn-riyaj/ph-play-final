import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="w-16 h-16 border-4 border-green-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 font-medium animate-pulse">Loading...</p>
    </div>
  );
};

export default loading;
