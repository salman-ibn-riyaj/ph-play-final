"use client";
import React, { createContext, useState } from "react";

export const InstalledAppContext = createContext();
const Context = ({ children }) => {
  const [installedApps, setInstalledApp] = useState([]);

  const value = {
    installedApps,
    setInstalledApp,
  };
  return (
    <InstalledAppContext.Provider value={value}>
      {children}
    </InstalledAppContext.Provider>
  );
};

export default Context;
