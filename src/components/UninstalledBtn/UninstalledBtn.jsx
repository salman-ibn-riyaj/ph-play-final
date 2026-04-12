"use client";
import { InstalledAppContext } from "@/Context/Context";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const UninstalledBtn = ({ installedApp }) => {
  const { installedApps, setInstalledApp } = useContext(InstalledAppContext);

  const hanldeUninstall = (installedApp) => {
    const filteredArray = installedApps.filter(
      (instaApp) => instaApp.id !== installedApp.id,
    );
    setInstalledApp(filteredArray);
    toast.error(`${installedApp.title} uninstalled`);
  };

  return (
    <button
      onClick={() => hanldeUninstall(installedApp)}
      className="btn bg-purple-400 text-white"
    >
      Uninstall
    </button>
  );
};

export default UninstalledBtn;
