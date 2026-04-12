import Image from "next/image";
import React from "react";
import footerImg from "../../assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { DiGithubBadge } from "react-icons/di";
import { MdFacebook } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="bg-[#001931] py-12">
      <div className=" text-white container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Image
              src={footerImg}
              alt="nav image"
              width={50}
              height={50}
            ></Image>
            <h2 className="text-purple-500 font-bold">HERO.IO</h2>
          </div>

          <div>
            <h3>Social Links</h3>
            <div className="flex items-center gap-4">
              <span>
                <FaXTwitter />
              </span>
              <span>
                <DiGithubBadge />
              </span>
              <span>
                <MdFacebook />
              </span>
            </div>
          </div>
        </div>
        <hr className="text-gray-500"/>
        <p className="text-center mt-4">&copy;2026@ Salman Shah || All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
