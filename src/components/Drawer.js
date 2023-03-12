import { useState } from "react";

import React from "react";
import {
  BsSearch,
  BsFillCloudSunFill,
  BsFillArchiveFill,
} from "react-icons/bs";
import { MdToday, MdNotificationImportant } from "react-icons/md";
import { AiFillEnvironment, AiFillSetting } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { icons } from "react-icons";

export default function Drawer() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Today", icon: <MdToday /> },
    { title: "My Day", icon: <BsFillCloudSunFill /> },
    { title: "Important", icon: <MdNotificationImportant /> },
    { title: "Archive", icon: <BsFillArchiveFill /> },
    { title: "settings", spacing: true, icon: <AiFillSetting /> },
  ];
  return (
    <>
      <div className="flex ">
        <div
          className={` bg-black bg-opacity-25 backdrop-blur-xl  h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          }  duration-300   relative`}
        >
          <div className="inline-flex">
            <FaTasks
              className={`text-purple-500 text-3xl rounded cursor-pointer block float-left mr-2  duration-300 
              
              
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
              open ? "bg-gray-300" : " "
            } mt-6  ${!open ? "px-2.5" : "px-4"} py-2`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer $(open && "mr-2") `}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${
                !open && "hidden"
              } `}
            />
          </div>
          <ul className="pt-2 ">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 hover:text-purple-600 rounded-md ${
                    menu.spacing ? "mt-20" : "mt-6"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <BsFillCloudSunFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
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
        <div className="p-7 ">
          {/* add more components here  */}
          <h1 className="text-2xl font-semibold"></h1>
        </div>
      </div>
    </>
  );
}
