"use client";
import InstalledAppCard from "@/components/InstalledAppCard/InstalledAppCard";
import { InstalledAppContext } from "@/Context/Context";
import React, { useContext } from "react";

const InstallationsPage = () => {
  const { installedApps, setInstalledApp } = useContext(InstalledAppContext);
  console.log(installedApps);
  return (
    <div className="container mx-auto">
      <div className="my-3 text-center">
        <h2 className="text-3xl font-bold my-2">Your Installed Apps</h2>
        <p className="text-gray-500">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {installedApps.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 gap-3">
          <p className="text-2xl font-bold text-gray-400">
            No installed apps yet!
          </p>
        </div>
      ) : (
        <div>
          {installedApps.map((installedApp) => (
            <InstalledAppCard
              key={installedApp.id}
              installedApp={installedApp}
            ></InstalledAppCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstallationsPage;
