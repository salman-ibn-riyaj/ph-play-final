import React from "react";
import fs from "fs";
import path from "path";
import AppCard from "../AppCard/AppCard";
import Link from "next/link";

const TrendingApps = async () => {
  const filePath = path.join(process.cwd(), "public", "appsData.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const apps = JSON.parse(data);
  console.log(apps);

  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center mb-4">Trending Apps</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto">
        {
            apps.slice(0,6).map(app => <AppCard key={app.id} app={app}></AppCard>)
        }
      </div>

      <Link href={'/apps'} className="mt-12 flex justify-center">
        <button className="btn bg-purple-500 text-white font-bold">Show All</button>
      </Link>
    </div>
  );
};

export default TrendingApps;
