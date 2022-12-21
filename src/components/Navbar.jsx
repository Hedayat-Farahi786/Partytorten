import React from "react";
import Divider from "./Divider";
import TopNavbar from "./TopNavbar";
import { MdOutlineLocalOffer } from "react-icons/md";
import { Dropdown } from "flowbite-react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
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
              <Dropdown.Item>
                <Link to="/allProducts">Men</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/allProducts">Women</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/allProducts">Accessories</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/allProducts">Cosmetics</Link>
              </Dropdown.Item>
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
