'use client'
import { InstalledAppContext } from "@/Context/Context";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const InstallButton = ({expectedAppData}) => {

    const {installedApps, setInstalledApp} = useContext(InstalledAppContext);
    console.log(installedApps);

    const handleInstalledApp =(expectedAppData)=> {
        const findedApp = installedApps.find(itm => itm.id === expectedAppData.id);
        if(findedApp){
            toast.error(`${expectedAppData.title} is already installed`);
            return;
        }
        const updatedInstalledApp = [...installedApps, expectedAppData];
        setInstalledApp(updatedInstalledApp);
        toast.success(`${expectedAppData.title} is installed successfully`);
    }

  return (
    <button onClick={()=>handleInstalledApp(expectedAppData)} className="btn bg-green-400 text-white">
      Install Now {`${expectedAppData.size} MB`}
    </button>
  );
};

export default InstallButton;
