import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotifications } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { GiHeron } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between gap-8 mx-8 py-4">
        <div>
          <Link to={"/"} className="p-2">
            <GiHeron className="text-2xl" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-3xl sm:px-4 px-2 py-2  bg-gray-800">
          <CiSearch className="text-xl" />
          <input
            placeholder="Search.."
            className="bg-inherit focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <span className=" rounded-full p-2 bg-gray-800 cursor-pointer ">
            <MdOutlineNotifications />
          </span>
          <span className=" rounded-full p-2 bg-gray-800 cursor-pointer">
            <MdOutlinePersonOutline />
          </span>
          <img
            src="/assets/man.png"
            alt="profile_img"
            height={40}
            width={40}
            className="rounded-full cursor-pointer"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
