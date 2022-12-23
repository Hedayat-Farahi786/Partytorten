import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Divider from "./Divider";

import creditCartImg from "../assets/images/credit_payment.png";
import paypalImg from "../assets/images/paypal_payment.png";
import paypalIcon from "../assets/images/paypal_icon.png";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";

function Checkout() {
  const [subtotal, setSubtotal] = useState(50);
  const [total, setTotal] = useState(subtotal);
  const [sameAddress, setSameAddress] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col space-y-0 md:space-y-10 my-5 md:my-10">
      <div className="flex items-center justify-center py-8">
        <div className="uppercase text-xs md:text-2xl text-gray-600 font-bold flex items-center space-x-2">
          <Link to="/shoppingCart">
            <span className="text-main cursor-pointer">1. Shopping Cart</span>
          </Link>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span className="text-main">2. Checkout</span>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span>3. Order Complete</span>
        </div>
      </div>
      <div className="checkout w-11/12 md:w-10/12 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row mx-auto">
        <div className="checkout__left w-full md:w-7/12 flex flex-col items-start space-y-10">
          <form className="w-full">
            <p className="text-left font-bold uppercase mb-12 text-2xl">
              Billing Address
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billFirstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billFirstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First name..."
                  required
                />
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billLastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billLastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last name..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="email"
                  id="billEmail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email..."
                  required
                />
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billPhone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billPhone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+0123456789"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billCountry"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country <span className="text-[#ca2626]">*</span>
                </label>
                <select
                  id="billCountry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>France</option>
                  <option>Germany</option>
                </select>
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billCity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billCity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="City..."
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billStreet"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Street <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billStreet"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Street Name..."
                  required
                />
              </div>
              <div className="flex md:w-6/12 space-x-4">
                <div className="mb-6 w-6/12 flex flex-col items-start">
                  <label
                    for="billHouseNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    House Number <span className="text-[#ca2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="billHouseNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="House number..."
                    required
                  />
                </div>
                <div className="mb-6 w-6/12 flex flex-col items-start">
                  <label
                    for="billPostalCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Postal Code <span className="text-[#ca2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="billPostalCode"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postal code..."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex items-start my-6">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 cursor-pointer bg-black-50 text-black rounded border border-gray-300 focus:ring-gray-600 dark:bg-gray-700 dark:border-gray-600 dark:focus:black dark:ring-offset-gray-800"
                  onChange={(e) => setSameAddress(e.target.checked)}
                />
              </div>
              <label
                for="remember"
                className="ml-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Ship to a differrent address?
              </label>
            </div>
            {sameAddress && (
              <div className="w-full">
                <p className="text-left font-bold uppercase my-12 text-2xl">
                  Shipping Address
                </p>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipFirstName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipFirstName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="First name..."
                      required
                    />
                  </div>
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipLastName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipLastName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Last name..."
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipEmail"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="email"
                      id="shipEmail"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Email..."
                      required
                    />
                  </div>
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipPhone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Phone <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipPhone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="+0123456789"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipCountry"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country <span className="text-[#ca2626]">*</span>
                    </label>
                    <select
                      id="shipCountry"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>France</option>
                      <option>Germany</option>
                    </select>
                  </div>
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipCity"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      City <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipCity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="City..."
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="mb-6 md:w-6/12 flex flex-col items-start">
                    <label
                      for="shipStreet"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Street <span className="text-[#ca2626]">*</span>
                    </label>
                    <input
                      type="text"
                      id="shipStreet"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Street Name..."
                      required
                    />
                  </div>
                  <div className="flex md:w-6/12 space-x-4">
                    <div className="mb-6 w-6/12 flex flex-col items-start">
                      <label
                        for="shipHouseNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        House Number <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="shipHouseNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="House number..."
                        required
                      />
                    </div>
                    <div className="mb-6 w-6/12 flex flex-col items-start">
                      <label
                        for="shipPostalCode"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Postal Code <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="shipPostalCode"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Postal code..."
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="mt-12 md:mb-6 flex flex-col items-start">
              <label
                for="otherNotes"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Other Notes{" "}
                <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="otherNotes"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Note about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="checkout__right w-full md:w-5/12 border-2 p-5 flex flex-col items-start space-y-8 md:space-y-6">
          <p className="uppercase font-bold text-lg">Your Order</p>
          <Divider />
          <div className="flex flex-col items-start w-full space-y-4">
            <p className="text-base font-semibold">Products</p>
            <div className="w-full flex items-start justify-between text-sm text-gray-500 space-x-6">
              <span className="text-left">
                Fashionable women's original trucker - Brown, Medium x 1
              </span>
              <span className="font-semibold">€38.00</span>
            </div>
            <div className="w-full flex items-start justify-between text-sm text-gray-500 space-x-6">
              <span className="text-left">
                converse blue training shoes - Blue, Medium x 1
              </span>
              <span className="font-semibold">€35.00</span>
            </div>
          </div>
          <Divider />
          <div className="text-base font-semibold flex items-center justify-between w-full">
            <span>Subtotal</span>
            <span className="font-bold">€{subtotal}</span>
          </div>
          <Divider />
          <p className="text-base font-medium">Calculate Shipping</p>
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <input
                type="radio"
                id="jack-small"
                name="jack"
                value="7"
                className="hidden peer"
                onChange={(e) => setTotal(subtotal + Number(e.target.value))}
                required
              />
              <label
                for="jack-small"
                className="inline-flex justify-between items-center p-5 w-full text-gray-700 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-base font-semibold">DHL Delivery</div>
                  <div className="text-xs">
                    Price cost: <strong>€7</strong>
                  </div>
                </div>
                <svg
                  aria-hidden="true"
                  className="ml-3 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="jack-big"
                name="jack"
                value="10"
                className="hidden peer"
                onChange={(e) => setTotal(subtotal + Number(e.target.value))}
              />
              <label
                for="jack-big"
                className="inline-flex justify-between items-center p-5 w-full text-gray-700 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-base font-semibold">Fedex Delivery</div>
                  <div className="text-xs">
                    Price cost: <strong>€10</strong>
                  </div>
                </div>
                <svg
                  aria-hidden="true"
                  className="ml-3 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start text-sm space-y-4">
            <div className="flex items-start space-x-2">
              <span>Subtotal:</span>
              <span className="font-medium">€{subtotal}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Delivery:</span>
              <span className="font-medium">€{total - subtotal}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Discount:</span>
              <span className="font-medium">€0</span>
            </div>
          </div>
          <Divider />
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-2xl text-main font-bold">
              €{total.toFixed(2)}
            </span>
          </div>
          <Divider />
          <div className="w-full outline-0">
            <Tabs id="custom-animation" value="html">
              <TabsHeader>
                <Tab key={0} value="credit">
                  <div className="flex flex-col items-center justify-center">
                    <img width={100} src={creditCartImg} alt="" />
                  </div>
                </Tab>
                <Tab key={1} value="paypal">
                  <div className="flex flex-col items-center justify-center">
                    <img width={70} src={paypalImg} alt="" />
                  </div>
                </Tab>
              </TabsHeader>
              <TabsBody
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                <TabPanel key={0} value="credit">
                  <form>
                    <div className="mb-3 flex flex-col items-start">
                      <label
                        for="cardNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card Number <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1234 1234 1234 1234"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="mb-3 flex flex-col items-start">
                        <label
                          for="expiryDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Expiry Date <span className="text-[#ca2626]">*</span>
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="mb-3 flex flex-col items-start">
                        <label
                          for="cvc"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          CVC <span className="text-[#ca2626]">*</span>
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="CVC"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col items-start">
                      <label
                        for="cardName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name On Card <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Name on your card..."
                        required
                      />
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email..."
                        required
                      />
                    </div>
                    <Link to="/orderSummary">
                      <button
                        type="submit"
                        className="bg-black text-white uppercase font-semibold w-full py-2 rounded"
                      >
                        Place Order
                      </button>
                    </Link>
                  </form>
                </TabPanel>
                <TabPanel key={1} value="paypal">
                  <div className="py-10">
                    <Link to="/orderSummary">
                      <div className="flex items-center justify-center space-x-2 bg-[#F7CA3E] hover:bg-[#f7c93ee7] transition-all duration-150 ease-linear font-semibold py-2 rounded-md cursor-pointer shadow">
                        <img width={24} src={paypalIcon} alt="" />
                        <span>Pay with payal (€ {total.toFixed(2)})</span>
                      </div>
                    </Link>
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
