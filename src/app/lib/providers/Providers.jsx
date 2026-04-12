"use client";

import Context from "@/Context/Context";
import React from "react";

const Providers = ({ children }) => {
  return <Context>{children}</Context>;
};

export default Providers;
