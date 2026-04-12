import React from "react";
import navImg from "../../assets/images/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { LiaGithub } from "react-icons/lia";
const Navbar = () => {
  const links = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/apps", text: "Apps" },
    { id: 3, href: "/installations", text: "Installations" },
    { id: 4, href: "/dashboard", text: "Dashboard" },
  ];
  return (
    <div className="shadow">
      <nav className="flex justify-between items-center gap-5 container mx-auto py-2">
        <div className="flex items-center gap-1">
          <Image src={navImg} alt="nav image" width={50} height={50}></Image>
          <h2 className="text-purple-500 font-bold">HERO.IO</h2>
        </div>

        <ul className="flex items-center gap-5">
          {links.map((link) => (
            <MyLink key={link.id} link={link}></MyLink>
          ))}
        </ul>

        <button className="bg-purple-500 text-white flex items-center gap-1 btn">
          <LiaGithub />
          contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
