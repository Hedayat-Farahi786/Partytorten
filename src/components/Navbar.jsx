import React from "react";
import Divider from "./Divider";
import TopNavbar from "./TopNavbar";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  logoutUser,
  toggleLoggedIn,
  toggleShowUserAccount,
} from "../features/userAccount/userAccount";
import { useEffect } from "react";
import { AiOutlinePoweroff, AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";

function Navbar() {
  const categories = useSelector((state) => state.products.categories);


  return (
    <div className="w-full bg-white">
      <TopNavbar />
      <Divider />
      <div className="topbar">
        <Topbar />

        <div className="topbar__down hidden md:flex w-10/12 mx-auto py-4 items-center justify-between">
          <div className="topbar__down__left flex text-base font-bold space-x-8">
            <Link to="/">
              <p className="menu__item hover:text-main cursor-pointer">Home</p>
            </Link>
            <Dropdown
              className="hover:text-main cursor-pointer"
              label="Categories"
              inline={true}
            >
              {categories.map((category) => (
                <Dropdown.Item>
                  <Link to="/allProducts">{category.name}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown>
            <Link to="/allProducts">
              <p className="menu__item hover:text-main cursor-pointer">
                All Products
              </p>
            </Link>
            <Link to="/aboutus">
              <p className="menu__item hover:text-main cursor-pointer">
                About Us
              </p>
            </Link>
          </div>

          <div className="topbar__down__right flex items-center justify-center text-sm space-x-2 font-semibold cursor-pointer">
            <MdOutlineLocalOffer size={20} />
            <p>Special Offers</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Navbar;
