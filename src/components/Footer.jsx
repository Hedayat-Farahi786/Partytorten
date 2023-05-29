import React from "react";

import paymentsImage from "../assets/images/payments.png";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Footer() {
  const loggedIn = useSelector((state) => state.userAccount.loggedIn);

  return (
    <div className="footer bg-[#222222] text-white">
      <div className="footer__top py-10 w-10/12 mx-auto flex flex-wrap flex-col xl:flex-row items-center space-y-8 xl:space-y-0 justify-between">
        <h1 className="text-4xl font-bold">Partytorten</h1>
        <div className="flex flex-col xl:items-start items-center">
          <p className="font-bold text-base md:text-lg">
            Subscribe to our Newsletter
          </p>
          <p className="font-light text-sm md:text-base">
            Get all the latest information, Sales and Offers.
          </p>
        </div>
        <form className="flex space-x-4">
          <input
            type="text"
            className="bg-[#2C2C2C] text-xs md:text-sm px-4 md:px-8 py-2 md:py-4 border-0 w-8/12"
            placeholder="Email..."
          />
          <button className="uppercase bg-main px-6 py-2 md:py-4 text-xs md:text-sm w-4/12 font-bold">
            Subscribe
          </button>
        </form>
      </div>
      <div className="w-full h-px bg-gray-700"></div>
      <div className="footer__main py-10 w-10/12 mx-auto flex flex-col xl:flex-row space-y-10 xl:space-y-0 xl:items-center xl:space-x-40">
        <div className="flex flex-col space-y-2 items-start">
          <p className="font-semibold text-lg mb-3">Contact Info</p>
          <p className="flex space-x-2 text-sm text-gray-300">
            <p className="font-semibold">PHONE: </p>
            <span className="font-light">+49 176 46294780</span>
          </p>
          <p className="flex space-x-2 text-sm text-gray-300">
            <p className="font-semibold">EMAIL: </p>
            <span className="font-light">partytortenmunchen@gmail.com</span>
          </p>
          <p className="flex space-x-2 text-sm text-gray-300">
            <p className="font-semibold">ADDRESS: </p>
            <span className="font-light">Hauptbahnof München, Germany</span>
          </p>
          <p className="flex space-x-2 text-sm text-gray-300">
            <p className="font-semibold">WORKING DAYS: </p>
            <span className="font-light">Mon - Fri</span>
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <p className="font-semibold text-lg mb-3">My Account</p>
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            About Us
          </p>
          {loggedIn && (
            <p className="flex space-x-2 text-sm text-gray-300 font-light">
              <Link to="/orders">My Orders</Link>
            </p>
          )}
          {/* <p className="flex space-x-2 text-sm text-gray-300 font-light">
            Returns
          </p> */}
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            Customer Services
          </p>
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            Terms & Condition
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <p className="font-semibold text-lg mb-3">Contact Info</p>
          {!loggedIn && (
            <p className="flex space-x-2 text-sm text-gray-300 font-light">
              Sign in
            </p>
          )}
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            <Link to="/shoppingCart">View Cart</Link>
          </p>
          {/* <p className="flex space-x-2 text-sm text-gray-300 font-light">
            My Whishlist
          </p> */}
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            Track My Order
          </p>
          <p className="flex space-x-2 text-sm text-gray-300 font-light">
            Help
          </p>
        </div>
      </div>
      <div className="w-full h-px bg-gray-700"></div>
      <div className="footer__bottom py-5 w-10/12 mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 items-center justify-between">
        <img src={paymentsImage} className="w-32" alt="payments" />
        <p className="text-sm text-gray-300">
          Farahi © {new Date().getFullYear()}. All Rights Reserved
        </p>
        <div className="flex items-center space-x-4">
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100092420380082"
            className="border border-white rounded-full p-1.5 cursor-pointer"
          >
            <FaFacebookF />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/partytortenmunchen"
            className="border border-white rounded-full p-1.5 cursor-pointer"
          >
            <FaInstagram />
          </a>
          <a
            target="_blank"
            href="https://www.tiktok.com/@partytortenmunchen"
            className="border border-white rounded-full p-1.5 cursor-pointer"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
