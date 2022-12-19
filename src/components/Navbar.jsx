import React from "react";
import Divider from "./Divider";
import TopNavbar from "./TopNavbar";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import Topbar from "./Topbar";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
              <Dropdown.Item>Category 3</Dropdown.Item>
            </Dropdown>
            <Dropdown
              className="hover:text-main cursor-pointer"
              label="Products"
              inline={true}
            >
              <Dropdown.Item>Product 1</Dropdown.Item>
              <Dropdown.Item>Product 2</Dropdown.Item>
              <Dropdown.Item>Product 3</Dropdown.Item>
            </Dropdown>
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
