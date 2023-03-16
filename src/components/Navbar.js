import React from "react";

//importing react icon

import { BiUserCircle } from "react-icons/bi";

export default function Navbar() {
  return (
    <div className="py-2 px-2.5 font-medium">
      <div className="navbar bg-white text-neutral-content shadow-lg rounded-xl ">
        <div className="navbar-start ">
          <a className=" Logo btn btn-ghost normal-case text-2xl font-Logo text-purple-600 font-medium">
            TaskMate
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-light px-2">
            <li>
              <a className=" hover:text-purple-600">Todo</a>
            </li>
            <li tabIndex={0}>
              <a className=" hover:text-purple-600">Projects</a>
            </li>
            <li>
              <a className=" hover:text-purple-600">Team</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="rgb(103, 86, 145)"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg text-black bg-white rounded-box w-52 "
            >
              <li>
                <a className=" hover:text-purple-600 hover:bg-[#d5c8fa]">
                  ToDo
                </a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between hover:text-purple-600 hover:bg-[#d5c8fa]">
                  Projects
                </a>
              </li>
              <li>
                <a className=" hover:text-purple-600 hover:bg-[#d5c8fa]">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end shadow-none">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar shadow-inner"
            >
              <BiUserCircle size="2rem" color="#9333EA " />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2  text-black shadow bg-white rounded-box w-52"
            >
              <li>
                <a className="justify-between hover:text-purple-600 hover:bg-[#d5c8fa]">
                  Profile
                  <span className="badge bg-white hover:text-white hover:bg-purple-400">
                    New
                  </span>
                </a>
              </li>

              <li>
                <a className="hover:text-purple-600 hover:bg-[#d5c8fa]">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
