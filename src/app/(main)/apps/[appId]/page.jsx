import React, { useContext } from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { TbFileLike } from "react-icons/tb";
import Rechart from "@/components/AppCard/Rechart/Rechart";
import { InstalledAppContext } from "@/Context/Context";
import InstallButton from "@/components/InstallButton/InstallButton";

const AppDetailPage = async ({ params }) => {
  const { appId } = await params;
  console.log(appId);

  const filePath = path.join(process.cwd(), "public", "appsData.json");
  const data = fs.readFileSync(filePath, "utf-8");
  const apps = JSON.parse(data);
  console.log(apps);

  const expectedAppData = apps.find(
    (appData) => appData.id === parseInt(appId),
  );
  console.log(expectedAppData);

  return (
    <div className="bg-[#f5f5f5] p-10">
      <div className="flex gap-3">
        <div>
          <Image
            src={expectedAppData.image}
            alt="app image"
            width={200}
            height={200}
          ></Image>
        </div>
        <div>
          <div>
            <h2 className="text-3xl font-bold">{expectedAppData.title}</h2>
            <p className="text-2xl font-bold">
              Developed by:{" "}
              <span className="text-purple-500">{`${expectedAppData.companyName}`}</span>
            </p>
            <hr className="text-gray-500" />

            <div className="flex gap-4 my-3">
              <div className="flex flex-col items-center">
                <span>
                  <MdOutlineFileDownload color="green" />
                </span>
                <small>Downloads</small>
                <h3 className="font-bold text-2xl">
                  {expectedAppData.downloads}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <FaRegStar color="salmon" />
                </span>
                <small>Average Ratings</small>
                <h3 className="font-bold text-2xl">
                  {expectedAppData.ratingAvg}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <TbFileLike color="purple" />
                </span>
                <small>Total Reviews</small>
                <h3 className="font-bold text-2xl">
                  {expectedAppData.reviews}
                </h3>
              </div>
            </div>
            {/* install btn compo  */}
            <InstallButton
              expectedAppData={ expectedAppData }
            ></InstallButton>
          </div>
        </div>
      </div>
      <hr className="text-gray-500 mt-2" />

      <Rechart expectedAppData={expectedAppData}></Rechart>
      <hr />

      <h2 className="font-bold text-3xl my-2">Description:</h2>
      <p>{expectedAppData.description}</p>
    </div>
  );
};

export default AppDetailPage;
