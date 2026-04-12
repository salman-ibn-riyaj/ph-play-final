import Image from "next/image";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineStarBorder } from "react-icons/md";
import UninstalledBtn from "../UninstalledBtn/UninstalledBtn";

const InstalledAppCard = ({ installedApp }) => {
  return (
    <div className="bg-cyan-200 p-2 rounded-md mb-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div>
          <Image
            alt={installedApp.title}
            src={installedApp.image}
            width={50}
            height={50}
          ></Image>
        </div>

        <div className="">
          <h2 className="text-3xl font-bold">{installedApp.title}</h2>
          <div className="flex gap-4">
            <span className="flex items-center gap-1 bg-blue-200 text-blue-700 p-1 rounded-md">
              {" "}
              <FiDownload />
              {installedApp.downloads}
            </span>
            <span className="flex items-center gap-1 bg-amber-100 text-amber-600 p-1 rounded-md">
              <MdOutlineStarBorder />
              {installedApp.ratingAvg}
            </span>
          </div>
        </div>
      </div>


        {/* uninstalled app btn compo  */}
        <UninstalledBtn installedApp={installedApp}>

        </UninstalledBtn>
      
    </div>
  );
};

export default InstalledAppCard;
