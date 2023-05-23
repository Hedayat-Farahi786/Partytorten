import React from "react";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({name, description, image, category, price, id}) {
  return (
    <div className="product w-32 xl:w-64 group space-y-2 mx-5 md:mb-10">
      <div className="product__top relative">
        <img
          src={image}
          alt="product"
        />
        <button className="absolute top-2 right-2 hover:bg-main hover:text-white transition-all duration-200 ease-linear hidden group-hover:block cursor-pointer bg-white rounded-full p-2">
          <AiOutlineHeart />
        </button>
        <Link to={`/products/${id}`}>
          <button className="absolute bottom-0 right-0 left-0 bg-main opacity-60 hover:opacity-100 text-white font-bold uppercase w-full py-3 text-sm hidden group-hover:block transition-all duration-200 ease-in-out">
            Quick view
          </button>
        </Link>
      </div>
      <div className="product__bottom space-y-2">
        <p className="hover:text-main cursor-pointer transition-all duration-200 ease-in-out text-[10px] xl:text-xs text-gray-600">
         {category}
        </p>
        <Link to={`/products/${id}`}>
          <p className="hover:text-main cursor-pointer transition-all duration-200 ease-in-out truncate text-xs xl:text-sm">
            {name}
          </p>
        </Link>
        <p className="font-bold text-xs xl:text-sm">€{price}</p>
        <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 items-center justify-center space-x-0 xl:space-x-4">
          <div className="stars flex">
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiOutlineStar style={{ color: "#D26E4B" }} />
          </div>
          <Link to={`/products/${id}`}>

          <p className="hover:text-main cursor-pointer transition-all duration-200 ease-in-out font-light text-[8px] xl:text-xs text-gray-400">
            ( 2 Reviews )
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
