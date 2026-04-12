"use client";
import { InstalledAppContext } from "@/Context/Context";
import React, { useContext, useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const { Legend, Pie, PieChart, Tooltip } = dynamic(() => import('recharts'), {
  ssr: false
});

const DashboardPage = () => {
  const { installedApps, setInstalledApp } = useContext(InstalledAppContext);
  console.log(installedApps);
  const instaNum = installedApps.length;

  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/appsData.json")
      .then((res) => res.json())
      .then((apps) => setApps(apps));
  }, []);

  console.log(apps);

  const uninstalledAppsNum = apps.length - instaNum;

  const data = [
    { name: "Installed Apps", value: instaNum, fill: "#0088FE" },
    { name: "UnInstalled Apps", value: uninstalledAppsNum, fill: "#00C49F" },
  ];

  return (
    <div>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          margin: "15px auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend></Legend>
        <Tooltip></Tooltip>
      </PieChart>
    </div>
  );
};

export default DashboardPage;
