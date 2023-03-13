import { useState } from "react";

import React from "react";
import {
  BsSearch,
  BsFillCloudSunFill,
  BsFillArchiveFill,
} from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { MdToday, MdNotificationImportant } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

import { icons } from "react-icons";

export default function Drawer() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Today", icon: <MdToday /> },
    { title: "My Day", icon: <BsFillCloudSunFill /> },
    { title: "Important", icon: <MdNotificationImportant /> },
    { title: "Archive", icon: <BsFillArchiveFill /> },
    { title: "Settings", spacing: true, icon: <AiFillSetting /> },
  ];
  return (
    <>
      <div className="flex pt-5 z-10">
        <div
          className={` bg-white bg-opacity-25 backdrop-blur-md h-screen rounded-lg px-5 pt-10 ${
            open ? "w-40" : "w-20"
          }  duration-300 relative`}
        >
          <div className="inline-flex">
            <BiTask
              className={`text-purple-800 text-3xl rounded cursor-pointer block float-left duration-300 
              `}
              onClick={() => setOpen(!open)}
            />
            {/* <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            ></h1> */}
          </div>
          <div
            className={`flex items-center rounded-md ${
              open ? "bg-[#d5c8fa]" : " "
            } mt-6  ${!open ? "px-2.5" : "px-4"} py-2`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer $(open && "mr-2") `}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent pl-2 w-full text-white focus:outline-none ${
                !open && "hidden"
              } `}
            />
          </div>
          <ul className="pt-2 ">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-white text-xs flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#d5c8fa] hover:text-purple-600 rounded-md ${
                    menu.spacing ? "mt-20" : "mt-6"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <BsFillCloudSunFill />}
                  </span>
                  <span
                    className={`text-base font-medium text-[#6d777e] flex-1 duration-300 ${
                      !open && "hidden"
                    }`}
                  >
                    {menu.title}
                  </span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
