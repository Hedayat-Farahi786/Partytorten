import React from "react";
import "./Banner.css";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner text-white flex flex-col items-center py-20 space-y-5">
      <div
        style={{ fontFamily: "Segeo" }}
        className=" text-xl md:text-4xl flex items-center space-x-4"
      >
        <span>Extra</span>{" "}
        <span className="bg-[#222222] text-main px-4 py-2 flex items-center space-x-3">
          <AiOutlineStar className="animate-[spin_3s_linear_infinite]" />
          <span>Discount</span>
          <AiOutlineStar className="animate-[spin_3s_linear_infinite]" />
        </span>
        <span>online</span>
      </div>
      <p className="font-bold text-3xl  md:text-5xl">Summer Season Sale</p>
      <p className="text-base md:text-xl">Free shipping on orders over €99</p>
      <Link to="/allProducts">
        <button className="bg-main uppercase flex items-center font-bold space-x-2 px-6 py-4">
          <span>Order Now</span> <BsArrowRight />
        </button>
      </Link>
    </div>
  );
}

export default Banner;
