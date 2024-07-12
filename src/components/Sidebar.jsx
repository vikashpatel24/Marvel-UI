import React from "react";
import { RiHome3Line } from "react-icons/ri";
import { MdOutlineCameraAlt } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { GrGamepad } from "react-icons/gr";
import { GrPin } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const SideBarLinks = [
    { icon: <GoPerson className="bg-blue-500 rounded" /> },
    { icon: <RiHome3Line /> },
    { icon: <MdOutlineCameraAlt /> },
    { icon: <GoPeople /> },
    { icon: <GrPin /> },
    { icon: <GrGamepad /> },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center p-4 gap-24">
        <div className="flex flex-col text-2xl gap-6">
          {SideBarLinks.map((item, index) => {
            return (
              <Link to={"#"} key={index}>
                {item.icon}
              </Link>
            );
          })}
        </div>
        <div className="">
          <button className="text-2xl">
            <IoLogOutOutline />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
