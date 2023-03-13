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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52 "
            >
              <li>
                <a className=" hover:text-purple-600">ToDo</a>
              </li>
              <li tabIndex={0}>
                <a className="justify-between hover:text-purple-600">
                  Projects
                  {/* <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg> */}
                </a>
                {/* <ul className="p-2 shadow-lg">
                  <li>
                    <a className=" hover:text-purple-600">Project-1</a>
                  </li>
                  <li>
                    <a className=" hover:text-purple-600">Project-2</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a className=" hover:text-purple-600">Team</a>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between hover:text-purple-600">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a className="hover:text-purple-600">Settings</a>
              </li>
              <li>
                <a className="hover:text-purple-600">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
