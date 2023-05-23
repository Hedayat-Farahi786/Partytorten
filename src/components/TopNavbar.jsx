import React, { useEffect, useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlinePoweroff,
  AiOutlineUser,
} from "react-icons/ai";
import { Dropdown } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutUser, toggleLoggedIn, toggleShowUserAccount } from "../features/userAccount/userAccount";


function TopNavbar() {

  const loggedIn = useSelector(state => state.userAccount.loggedIn);
  const user = useSelector(state => state.userAccount.user);


  const decodeToken = (token) => {
    return JSON.parse(
      decodeURIComponent(
        atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    );
  }


  useEffect(() => {
    let token = localStorage.getItem('token');
    if (token) {
      dispatch(toggleLoggedIn(true));
      dispatch(loginUser(decodeToken(token)));
    } else {
      dispatch(toggleLoggedIn(false));
    }
  }, [])


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
            {
              loggedIn ? (
                <div onClick={() => dispatch(logoutUser())} className="topbar__item cursor-pointer hover:text-main transition-all duration-150 ease-linear flex space-x-2 items-center">
                  <AiOutlinePoweroff size={18} />
                 <p>{user.name}</p>
                </div>
              ) : (
                <div onClick={() => dispatch(toggleShowUserAccount())} className="topbar__item cursor-pointer hover:text-main transition-all duration-150 ease-linear flex space-x-2 items-center">
                  <AiOutlineUser size={18} />
                  <p>Sign In / Sign Up</p>
                </div>
                )
            }

          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
