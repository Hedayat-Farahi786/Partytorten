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

     {
      loggedIn ? (
        <div className="navbar__top__left">
        <p className="text-xs">Welcome <strong>{user.name}</strong></p>
      </div>
      ) : (
         <div className="navbar__top__left">
        <p className="text-xs">Welcome to Partytorten!</p>
      </div>
      )
     }


      <div className="navbar__top__right text-xs space-x-4 flex items-center justify-center">
        <Dropdown label="ENG" inline={true}>
          <Dropdown.Item>DE</Dropdown.Item>
        </Dropdown>
      </div>
    </div>
  );
}

export default TopNavbar;
