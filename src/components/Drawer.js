import { useState } from "react";

import React from "react";
import { BsArrowLeft, BsSearch, BsFillCloudSunFill } from "react-icons/bs";
import { MdToday, MdNotificationImportant } from "react-icons/md";
import { AiFillEnvironment, AiFillSetting } from "react-icons/ai";
import { icons } from "react-icons";

export default function Drawer() {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Today", icon: <MdToday /> },
    { title: "My Day", icon: <BsFillCloudSunFill /> },
    { title: "Important", icon: <MdNotificationImportant /> },
    // { title: "media", spacing: true },
    // { title: "indox" },
    { title: "settings", spacing: true, icon: <AiFillSetting /> },
  ];
  return (
    <>
      <div className="flex">
        <div
          className={` bg-blue-900 h-screen p-5 pt-8 ${
            open ? "w-72" : "w-20"
          }  duration-300   relative`}
        >
          <BsArrowLeft
            className={`bg-white text-blue-900 text-3xl rounded-full absolute -right-3 top-9 border border-black  cursor-pointer ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          />
          <div className="inline-flex">
            <AiFillEnvironment
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2  duration-300 ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              TODAY
            </h1>
          </div>

          <div
            className={`flex items-center rounded-md bg-gray-500 mt-6  ${
              !open ? "px-2.5" : "px-4"
            } py-2`}
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

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-200 rounded-md ${
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
        <div className="p-7">
          <h1 className="text-2xl font-semibold">HomePage</h1>
        </div>
      </div>
    </>
  );
}
