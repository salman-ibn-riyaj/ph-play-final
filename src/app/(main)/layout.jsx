import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Providers from "../lib/providers/Providers";
import { Toaster } from "react-hot-toast";

const MainLGroupLayout = ({ children }) => {
  return (
    <div>
      <Providers>
        <Toaster></Toaster>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </Providers>

      
    </div>
  );
};

export default MainLGroupLayout;
