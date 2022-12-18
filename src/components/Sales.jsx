import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Sales() {
  return (
    <div className="sales w-11/12 md:w-9/12 mx-auto my-20 flex space-y-4 xl:space-y-0 xl:space-x-2 flex-wrap items-center justify-center md:justify-between">
      <div style={{ minWidth: "30%" }} className="h-52 relative rounded-md">
        <img
          className="w-full h-full rounded-md object-cover"
          src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/banner1.jpg"
          alt="sale"
        />
        <div className="absolute top-2/4 transform -translate-y-2/4 left-8 flex flex-col items-start text-white">
          <p className="font-bold text-xl md:text-3xl">For Men</p>
          <p className="uppercase text-sm md:text-base font-normal">Starting at $29</p>
          <div className="w-10 h-1 bg-white my-2"></div>
          <p className="cursor-pointer flex items-center space-x-2 text-sm md:text-base">
            <span>Shop Now</span> <BsArrowRight size={20} />
          </p>
        </div>
      </div>
      <div style={{ minWidth: "30%" }} className="h-52 relative rounded-md">
        <img
          className="w-full h-full rounded-md object-cover"
          src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/12/banner2.jpg"
          alt="sale"
        />
        <div className="absolute top-2/4 transform -translate-y-2/4 left-8 text-white flex items-center space-x-6 md:space-x-3">
          <div className="flex flex-col items-start">
            <p className="text-sm md:text-base">Up to 20% off</p>
            <p className="text-lg md:text-2xl" style={{ fontFamily: "Segeo" }}>
              Black Friday
            </p>
            <p className="font-bold text-4xl md:text-5xl text-main">Sale</p>
          </div>
          <button className="cursor-pointer uppercase flex items-center space-x-2 bg-transparent px-2 md:px-4 py-1 md:py-3 border-main border-2 transition-all duration-200 ease-linear hover:bg-main text-xs md:text-sm">
            <span>shop now</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div style={{ minWidth: "30%" }} className="h-52 relative rounded-md">
        <img
          className="w-full h-full rounded-md object-cover"
          src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/banner2.jpg"
          alt="sale"
        />
        <div className="absolute top-2/4 transform -translate-y-2/4 right-4 md:right-8 flex flex-col items-start text-white">
          <p className="font-bold text-xl md:text-3xl">For Women</p>
          <p className="uppercase text-sm base:text-base font-normal ">30% off</p>
          <div className="w-10 h-1 bg-white my-2"></div>
          <p className="cursor-pointer flex items-center space-x-2 text-sm md:text-base">
            <span>Shop Now</span> <BsArrowRight size={20} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sales;
