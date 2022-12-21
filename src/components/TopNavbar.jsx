import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { Dropdown } from "flowbite-react";
import { useDispatch } from "react-redux";
import { toggleShowUserAccount } from "../features/userAccount/userAccount";

function TopNavbar() {


  const dispatch = useDispatch();

  return (
    <div className="navbar__top text-gray-700 py-3 w-10/12 mx-auto flex items-center justify-between">
      {/* Sidemenu */}

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
            <div onClick={()=> dispatch(toggleShowUserAccount())} className="topbar__item cursor-pointer hover:text-main transition-all duration-150 ease-linear flex space-x-2 items-center">
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
