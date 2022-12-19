import { Badge } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlinePhone,
  AiOutlineHeart,
} from "react-icons/ai";
import { HiOutlineShoppingBag, HiMenuAlt2 } from "react-icons/hi";
import packageJson from "../../package.json";

function Topbar() {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass(
            "fixed top-0 left-0 z-50 shadow-md transition duration-1000 ease-in"
          )
        : setStickyClass("relative");
    }
  };

  return (
    <div className={`topbar__top w-full bg-white ${stickyClass}`}>
      <div className="w-10/12 mx-auto py-4 flex items-center justify-between">
        <div className="logo flex items-center space-x-4">
          <HiMenuAlt2 size={26} className="block md:hidden cursor-pointer" />
          {/* <img src={logo} alt="logo" className="w-14 mr-10" /> */}
          <div className="text-3xl md:text-5xl font-bold flex items-start space-x-2">
            <span>Farahi</span>
            <Badge color="gray">{packageJson.version}</Badge>
          </div>
        </div>
        <div className="hidden md:flex search w-5/12 h-12 relative rounded-md overflow-hidden border-black border">
          <input
            type="text"
            className="w-full h-full rounded-md border-0 text-sm px-4"
            placeholder="Search..."
          />
          <span className="absolute text-gray-900 right-4 top-1/2 transform -translate-y-1/2">
            <AiOutlineSearch size={20} />
          </span>
        </div>
        <div className="flex xl:hidden space-x-4">
          <AiOutlinePhone size={35} className="rotate-90" />
          <AiOutlineHeart size={35} />

          <div className="shoppingCart relative">
            <HiOutlineShoppingBag size={35} />
            <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-main rounded-full border-2 border-white dark:border-gray-900">
              0
            </div>
          </div>
        </div>
        <div className="hidden xl:flex actions items-center space-x-5">
          <div className="actions__item flex items-center space-x-2">
            <AiOutlinePhone size={40} className="rotate-90" />
            <div className="flex flex-col items-start">
              <p className="text-xs">Call Us Now:</p>
              <p className="text-sm font-bold">0(800)123-456</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="actions__item">
            <AiOutlineHeart size={40} />
          </div>
          <div className="w-px h-12 bg-gray-300"></div>
          <div className="actions__item flex items-center space-x-2">
            <div className="flex flex-col items-start">
              <p className="text-xs">Shopping Cart:</p>
              <p className="text-sm font-bold">$0.00</p>
            </div>
            <div className="shoppingCart relative">
              <HiOutlineShoppingBag size={40} />
              <div class="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-main rounded-full border-2 border-white dark:border-gray-900">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
