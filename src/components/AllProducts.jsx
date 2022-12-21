import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { Fragment, useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useWindowInfo } from "react-window-info-hook";
import searchBanner from "../assets/images/search_banner.jpg";
import { toggleFilter } from "../features/sideMenu/sideMenu";
import Divider from "./Divider";
import Product from "./Product";

function AllProducts() {
  const [open, setOpen] = useState(1);

  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])

  const info = useWindowInfo();
  const [showFilter, setShowFilter] = useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-col">
      <div
        className="flex items-center justify-center h-60 w-full"
        style={{
          background: `url(${searchBanner}) no-repeat center center`,
          backgroundPosition: "cover",
        }}
      >
        <div className="flex flex-col space-y-3 items-center text-white">
          <p className="text-4xl font-semibold">Farahi Store</p>
          <div className="flex items-center space-x-2 ">
            <div className="cursor-pointer opacity-60 hover:opacity-100">
              <AiOutlineHome size={18} />
            </div>
            <p className="opacity-60">/</p>
            <p>Farahi store</p>
          </div>
        </div>
      </div>
      <div className="allProducts my-6 flex w-11/12 md:w-10/12 mx-auto md:space-x-4">
        {showFilter && (
          <div className="allProducts__left hidden md:flex flex-col w-3/12">
            <div className="hidden md:flex items-center justify-between py-6">
              <div
                onClick={() => setShowFilter(!showFilter)}
                className="flex items-center text-base space-x-2 border-2 border-main px-4 py-1 text-main uppercase font-medium transition-all duration-150 ease-linear hover:bg-main hover:text-white cursor-pointer"
              >
                <p>Filter</p>
                <BsArrowLeft />
              </div>
              <p className="text-s cursor-pointer transition-all duration-150 ease-linear hover:underline">
                Clean All
              </p>
            </div>
            <div className="h-px w-full bg-gray-200"></div>
            <Fragment>
              <Accordion open={open}>
                <AccordionHeader
                  className="text-lg"
                  onClick={() => handleOpen(1)}
                >
                  Product Categories
                </AccordionHeader>
                <AccordionBody className="space-y-3">
                  <div className="w-full flex items-center justify-between">
                    <p className="text-black font-medium">Cosmetic</p>
                    <p className="text-xs">(8)</p>
                  </div>
                  <Divider />
                  <div className="w-full flex items-center justify-between">
                    <p className="text-black font-medium">Fashionable Women</p>
                    <p className="text-xs">(5)</p>
                  </div>
                  <Divider />
                  <div className="w-full flex items-center justify-between">
                    <p className="text-black font-medium">For Men</p>
                    <p className="text-xs">(5)</p>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open}>
                <AccordionHeader
                  className="text-lg"
                  onClick={() => handleOpen(2)}
                >
                  Filter By Price
                </AccordionHeader>
                <AccordionBody className="">
                  <div className="flex flex-col items-start mb-4">
                    <label
                      for="minmax-range"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price range
                    </label>
                    <input
                      id="minmax-range"
                      type="range"
                      min="0"
                      max="10"
                      value="5"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                    />
                  </div>
                  <div className="flex flex-col items-start space-y-4">
                    <p>Price: $0 - $340</p>
                    <button className="text-white bg-black px-6 py-2 uppercase font-semibold rounded">
                      Filter
                    </button>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Size
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Extra Large
                      </label>
                    </div>
                    <p className="text-xs">(4)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Large
                      </label>
                    </div>
                    <p className="text-xs">(10)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Medium
                      </label>
                    </div>
                    <p className="text-xs">(17)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Small
                      </label>
                    </div>
                    <p className="text-xs">(16)</p>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  Color
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Black
                      </label>
                    </div>
                    <p className="text-xs">(4)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Blue
                      </label>
                    </div>
                    <p className="text-xs">(10)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Brown
                      </label>
                    </div>
                    <p className="text-xs">(17)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Green
                      </label>
                    </div>
                    <p className="text-xs">(16)</p>
                  </div>
                </AccordionBody>
              </Accordion>
              <Accordion open={open}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  Brand
                </AccordionHeader>
                <AccordionBody>
                  <div className="flex items-center justify-between mb-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Prada
                      </label>
                    </div>
                    <p className="text-xs">(4)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Dior
                      </label>
                    </div>
                    <p className="text-xs">(10)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Polo
                      </label>
                    </div>
                    <p className="text-xs">(17)</p>
                  </div>
                  <Divider />
                  <div className="flex items-center justify-between my-4 px-2">
                    <div className="flex items-center">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                      />
                      <label
                        for="default-checkbox"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Boss
                      </label>
                    </div>
                    <p className="text-xs">(16)</p>
                  </div>
                </AccordionBody>
              </Accordion>
            </Fragment>
          </div>
        )}
        <div className={showFilter ? "w-full md:w-9/12" : "w-full"}>
          <div className="allProducts__right md:p-6 flex flex-col space-y-10">
            <div className=" flex items-center justify-between">
              <div
                onClick={() => dispatch(toggleFilter())}
                className="flex md:hidden items-center text-sm space-x-2 border-2 border-main px-4 py-1 text-main uppercase font-medium transition-all duration-150 ease-linear hover:bg-main hover:text-white cursor-pointer"
              >
                <p>Filter</p>
                <BsArrowRight />
              </div>
              <div className="flex items-center space-x-4">
                {!showFilter && (
                  <div
                    onClick={() => setShowFilter(!showFilter)}
                    className="hidden md:flex items-center text-base space-x-2 border-2 border-main px-4 py-1 text-main uppercase font-medium transition-all duration-150 ease-linear hover:bg-main hover:text-white cursor-pointer"
                  >
                    <p>Filter</p>
                    <BsArrowRight />
                  </div>
                )}
                <p className="text-sm font-semibold uppercase">Sort:</p>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Default Sorting</option>
                  <option value="a">Sort by rating</option>
                  <option value="a">Sort by latest</option>
                  <option value="a">Sort by price: High to Low</option>
                  <option value="a">Sort by price: Low to High</option>
                </select>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <p className="text-sm font-semibold uppercase">Show:</p>
                <select
                  id="countries"
                  className="bg-gray-50 px-6 md:px-8 border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>12</option>
                  <option value="a">24</option>
                  <option value="a">36</option>
                  <option value="a">48</option>
                  <option value="a">60</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center flex-wrap my-6 overflow-y-scroll">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
            <div className="flex flex-col-reverse md:flex-row space-y-4 md:space-y-0 items-center justify-between">
              <span className="text-sm mt-4 text-gray-700 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  10
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  100
                </span>{" "}
                Entries
              </span>
              <div className="inline-flex xs:mt-0">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  Previous
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
