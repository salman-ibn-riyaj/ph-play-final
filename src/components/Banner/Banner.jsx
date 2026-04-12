import Image from "next/image";
import React from "react";
import { FaAppStore } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import bannerImg from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="container mx-auto text-center mt-4">
      <div className="space-y-2">
        <h2 className="text-6xl font-bold">
          We Build <br />
          <span className="text-purple-500">Productive</span> Apps
        </h2>
        <p className="text-gray-500">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
        <div>
          <button className="btn mr-3">
            <IoLogoGooglePlaystore color="green"/>
            Google Play
          </button>
          <button className="btn">
            <FaAppStore color="salmon"/>

            App Store
          </button>
        </div>

        <div>
            <Image className="mx-auto mt-4" src={bannerImg} alt=""></Image>
        </div>
      </div>
    </div>
  );
};

export default Banner;
