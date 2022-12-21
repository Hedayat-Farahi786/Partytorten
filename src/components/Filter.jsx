import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { Fragment, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../features/sideMenu/sideMenu";
import Divider from "./Divider";

function Filter() {
  const [open, setOpen] = useState(0);
  const showFilter = useSelector((state) => state.sideMenu.showFilter);

  const dispatch = useDispatch();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      {showFilter && (
        <div className="flex z-30 fixed top-0 right-0 left-0 bottom-0 bg-[#00000078] h-full w-full">
          <div className="filter__left h-full w-9/12 bg-white overflow-y-scroll">
            <div className="flex flex-col p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div
                  onClick={() => dispatch(toggleFilter())}
                  className="flex items-center text-xs space-x-2 border-2 border-main px-2 py-1 text-main uppercase font-medium transition-all duration-150 ease-linear hover:bg-main hover:text-white cursor-pointer"
                >
                  <p>Filter</p>
                  <BsArrowLeft />
                </div>
                <p className="text-xs cursor-pointer transition-all duration-150 ease-linear hover:underline">
                  Clean All
                </p>
              </div>
              {/* <div className="h-px w-full bg-gray-200"></div> */}
              <Fragment>
                <Accordion open={open}>
                  <AccordionHeader
                    className="text-sm"
                    onClick={() => handleOpen(1)}
                  >
                    Product Categories
                  </AccordionHeader>
                  <AccordionBody className="space-y-3">
                    <div className="w-full flex items-center justify-between">
                      <p className="text-black text-xs font-medium">Cosmetic</p>
                      <p className="text-xs">(8)</p>
                    </div>
                    <Divider />
                    <div className="w-full flex items-center justify-between">
                      <p className="text-black text-xs font-medium">
                        Fashionable Women
                      </p>
                      <p className="text-xs">(5)</p>
                    </div>
                    <Divider />
                    <div className="w-full flex items-center justify-between">
                      <p className="text-black text-xs font-medium">For Men</p>
                      <p className="text-xs">(5)</p>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open}>
                  <AccordionHeader
                    className="text-sm"
                    onClick={() => handleOpen(2)}
                  >
                    Filter By Price
                  </AccordionHeader>
                  <AccordionBody className="">
                    <div className="flex flex-col items-start mb-2">
                      <label
                        for="minmax-range"
                        className="block mb-2 text-xs font-medium text-gray-900 dark:text-white"
                      >
                        Price range
                      </label>
                      <input
                        type="range"
                        class="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                        min="1"
                        max="10"
                        defaultValue={5}
                      />
                      <div aria-hidden="true" class="w-full text-xs flex justify-between p-1">
                        <span>$0</span>
                        <span>$1000</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start space-y-4">
                      <p className="text-xs">Price: $0 - $500</p>
                      <button className="text-white bg-black text-xs px-4 py-2 uppercase font-semibold rounded">
                        Filter
                      </button>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open}>
                  <AccordionHeader
                    className="text-sm"
                    onClick={() => handleOpen(3)}
                  >
                    Size
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex items-center justify-between mb-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Extra Large
                        </label>
                      </div>
                      <p className="text-xs">(4)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Large
                        </label>
                      </div>
                      <p className="text-xs">(10)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Medium
                        </label>
                      </div>
                      <p className="text-xs">(17)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Small
                        </label>
                      </div>
                      <p className="text-xs">(16)</p>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open}>
                  <AccordionHeader
                    className="text-sm"
                    onClick={() => handleOpen(3)}
                  >
                    Color
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex items-center justify-between mb-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Black
                        </label>
                      </div>
                      <p className="text-xs">(4)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Blue
                        </label>
                      </div>
                      <p className="text-xs">(10)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Brown
                        </label>
                      </div>
                      <p className="text-xs">(17)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Green
                        </label>
                      </div>
                      <p className="text-xs">(16)</p>
                    </div>
                  </AccordionBody>
                </Accordion>
                <Accordion open={open}>
                  <AccordionHeader
                    className="text-sm"
                    onClick={() => handleOpen(4)}
                  >
                    Brand
                  </AccordionHeader>
                  <AccordionBody>
                    <div className="flex items-center justify-between mb-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Prada
                        </label>
                      </div>
                      <p className="text-xs">(4)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Dior
                        </label>
                      </div>
                      <p className="text-xs">(10)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
                        >
                          Polo
                        </label>
                      </div>
                      <p className="text-xs">(17)</p>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between my-4 px-2">
                      <div class="flex items-center">
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 text-black bg-gray-100 rounded border-gray-300 focus:ring-0 curcsor-pointer"
                        />
                        <label
                          for="default-checkbox"
                          className="ml-2 text-xs font-medium text-gray-900 dark:text-gray-300"
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
          </div>
        </div>
      )}
    </>
  );
}

export default Filter;
