"use client";
import { InstalledAppContext } from "@/Context/Context";
import { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const DashboardChart = dynamic(() => import('./DashboardChart'), {
  ssr: false
});

const DashboardPage = () => {
  const { installedApps } = useContext(InstalledAppContext);
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);

  const instaNum = installedApps.length;
  const uninstalledAppsNum = apps.length - instaNum;

  const data = [
    { name: "Installed Apps", value: instaNum, fill: "#0088FE" },
    { name: "UnInstalled Apps", value: uninstalledAppsNum, fill: "#00C49F" },
  ];

  return (
    <div>
      <DashboardChart data={data} />
    </div>
  );
};

export default DashboardPage;