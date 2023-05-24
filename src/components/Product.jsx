import React from "react";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function Product({name, description, image, category, price, id}) {
  return (
    <div className="product w-64 group space-y-2 md:mb-10 border border-gray-100 rounded-md overflow-hidden">
      <div className="product__top relative h-[20%]">
        <img
          src={image}
          alt="product"
          className="h-60 w-full object-cover"
        />
        <button className="absolute md:group-hover:block top-2 right-2 hover:bg-main hover:text-white transition-all duration-200 ease-linear hidden cursor-pointer bg-white rounded-full p-2">
          <AiOutlineHeart />
        </button>
        <Link to={`/products/${id}`}>
          <button className="absolute md:group-hover:block bottom-0 right-0 left-0 bg-main opacity-60 hover:opacity-100 text-white font-bold uppercase w-full py-3 text-sm hidden transition-all duration-200 ease-in-out">
            Quick view
          </button>
        </Link>
      </div>
      <div className="product__bottom flex items-center justify-between px-4 py-4 space-x-2">
        <div className="flex flex-col items-start space-y-2 overflow-hidden">
        <p className="text-main cursor-pointer transition-all text-ellipsis truncate duration-200 ease-in-out text-[10px] xl:text-xs">
         {category}
        </p>
        <Link to={`/products/${id}`}>
          <p className="hover:text-main cursor-pointer transition-all text-ellipsis truncate duration-200 ease-in-out font-semibold text-base xl:text-base">
            {name}
          </p>
        </Link>
        </div>
        <div className="flex flex-col items-end space-y-2">
        <div className="flex flex-col xl:flex-row space-y-2 xl:space-y-0 items-center justify-center space-x-0 xl:space-x-4">
          <div className="stars flex">
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiFillStar style={{ color: "#D26E4B" }} />
            <AiOutlineStar style={{ color: "#D26E4B" }} />
          </div>
          {/* <Link to={`/products/${id}`}>

          <p className="hover:text-main cursor-pointer transition-all duration-200 ease-in-out font-light text-[8px] xl:text-xs text-gray-400">
            ( 2 Reviews )
          </p>
          </Link> */}
        </div>
        <p className="font-bold text-base xl:text-base">€{price}</p>
        </div>
      </div>
      <Link to={`/products/${id}`}>
          <button className="md:hidden bg-main text-white font-bold uppercase w-full py-3 text-sm transition-all duration-200 ease-in-out">
            Quick view
          </button>
        </Link>
    </div>
  );
}

export default Product;
