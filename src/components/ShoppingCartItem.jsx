import React from "react";
import { IoCloseSharp } from "react-icons/io5";

function ShoppingCartItem() {
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
        <span className="font-semibold">€50</span>
      </div>
      <div>
        <div className="flex items-center border rounded-md">
          <button className="px-4 py-2 border-r">-</button>
          <span className="px-6 font-bold">1</span>
          <button className="px-4 py-2 border-l">+</button>
        </div>
      </div>
      <div className="text-sm  text-gray-600 flex items-center justify-center space-x-4">
        <span>Subtotal:</span>
        <span className="font-bold">€50</span>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
