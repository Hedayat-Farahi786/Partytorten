import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

function WishListItem() {
  return (
    <div className="w-full border p-10 space-y-4 flex flex-col items-center justify-center">
      <div className="relative">
        <img
          width={120}
          src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
          alt=""
        />
        <div className="absolute -top-3 -right-3 flex items-center justify-center border rounded-full w-6 h-6 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
          <IoCloseSharp size={16} />
        </div>
      </div>
      <p className="text-sm font-medium">Fashionable Men's T-shirt Trucker</p>
      <div className="text-sm text-gray-600 flex items-center justify-center space-x-4">
        <span>Price:</span>
        <span className="font-semibold">$50</span>
      </div>
      <div className="text-sm  text-gray-600 flex items-center justify-center space-x-4">
        <span>Stock:</span>
        <span className="text-main">In Stock</span>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <Link to="/products/1">
          <button className="border-2 border-main text-main font-semibold px-4 py-2 uppercase cursor-pointer transition-all duration-150 ease-linear hover:bg-main hover:text-white">
            Quick View
          </button>
        </Link>
        <button className="border-2 border-main text-white bg-main font-semibold uppercase px-4 py-2 cursor-pointer">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default WishListItem;
