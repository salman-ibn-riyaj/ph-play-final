import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <div className="bg-blue-200 h-full w-64">
        <h2>Sidebar</h2>
        <Link href={'/'}><button className="btn btn-primary">Go back</button></Link>
      </div>
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
