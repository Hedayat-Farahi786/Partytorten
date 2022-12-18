import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { Dropdown } from "flowbite-react";

function TopNavbar() {
  return (
    <div className="navbar__top text-gray-700 py-3 w-10/12 mx-auto flex items-center justify-between">
      {/* Sidemenu */}

      {/* <div className="sidemenu flex z-30 absolute top-0 right-0 left-0 bottom-0 bg-black bg-opacity-90 h-full w-full">
        <div className="sidemenu__left p-6 h-full w-9/12 bg-white">
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-main focus:border-main dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-main dark:focus:border-main"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-1.5 bottom-1 transform -translate-y-1 bg-main hover:bg-main focus:ring-4 focus:outline-none focus:ring-main font-medium rounded-lg text-xs px-4 py-1 dark:bg-main dark:hover:bg-main dark:focus:ring-main"
              >
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 text-white dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </form>

          <div className="sidemenu__items flex flex-col items-start space-y-2 my-8">
            <div className="uppercase font-bold text-sm flex items-center justify-between w-full">
              <span>Home</span>
            </div>
            <Divider />
            <div className="uppercase font-bold text-sm flex items-center justify-between w-full">
              <span>Categories</span>
              <AiOutlineRight />
            </div>
            <Divider />
            <div className="uppercase font-bold text-sm flex items-center justify-between w-full">
              <span>Products</span>
              <AiOutlineRight />
            </div>
            <Divider />
            <div className="uppercase font-bold text-sm flex items-center justify-between w-full">
              <span>Aboutus</span>
            </div>
          </div>
        </div>
        <div className="sidemenu__right flex px-8 py-5 justify-end w-3/12">
          <AiOutlineClose size={40} className="text-white cursor-pointer" />
        </div>
      </div> */}

      <div className="navbar__top__left">
        <p className="text-xs">Welcome to Farahi store!</p>
      </div>
      <div className="navbar__top__right text-xs space-x-4 flex items-center justify-center">
        <Dropdown label="ENG" inline={true}>
          <Dropdown.Item>DE</Dropdown.Item>
        </Dropdown>
        <div className="hidden md:flex">
          <div className="w-px h-4 bg-gray-300"></div>
          <div className="flex items-center space-x-8 px-2">
            <div className="topbar__item flex space-x-2 items-center">
              <AiOutlineInfoCircle size={18} />
              <p>Need Help</p>
            </div>
            <div className="topbar__item flex space-x-2 items-center">
              <AiOutlineUser size={18} />
              <p>Sign in / Register</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
