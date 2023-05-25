import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { AiFillStar, AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Product({ name, description, image, category, price, id }) {
  const [categoryName, setCategoryName] = useState("");

  const categories = useSelector((state) => state.products.categories);

  const handleCategoryLookup = () => {
    const matchingCategory = categories.find((cat) => cat._id === category);
    if (matchingCategory) {
      setCategoryName(matchingCategory.name);
    } else {
      setCategoryName(category);
    }
  };

  useEffect(() => {
    handleCategoryLookup();
  }, []);

  return (
    <div className="product w-44 md:w-64 group space-y-2 my-10 md:mb-10 rounded overflow-hidden">
      <div className="product__top relative">
        <img
          src={image}
          alt="product"
          className="h-48 md:h-60 w-full object-cover"
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
          {categoryName}
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
          <p className="hover:text-main cursor-pointer transition-all duration-200 ease-in-out font-light text-[8px] xl:text-xs text-gray-400">
            ( 2 Reviews )
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
