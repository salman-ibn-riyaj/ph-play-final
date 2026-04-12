import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";
import { MdOutlineStarBorder } from "react-icons/md";

const AppCard = ({ app }) => {
  return (
    <Link href={`/apps/${app.id}`} className="card bg-green-200 shadow-sm pt-4">
      <figure>
        <Image
          src={app.image}
          alt="card image"
          width={200}
          height={200}
          className="rounded-md"
        ></Image>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{app.title}</h2>

        <div className="flex justify-between items-center gap-4">
          <span className="flex items-center gap-1 bg-blue-200 text-blue-700 p-1 rounded-md">
            {" "}
            <FiDownload />
            {app.downloads}
          </span>
          <span className="flex items-center gap-1 bg-amber-100 text-amber-600 p-1 rounded-md">
            <MdOutlineStarBorder />
            {app.ratingAvg}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
