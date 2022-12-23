import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function SmallProduct() {
  return (
    <div className="flex space-x-2">
      <img
        className="w-20 h-20 object-cover"
        src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-9-1-267x300.jpg"
        alt="product"
      />
      <div className="flex space-y-2 flex-col items-start justify-center">
        <p className="text-xs truncate">Fashionable Women's Hat</p>
        <p className="text-xs font-bold">€49.00 - €80.00</p>
        <div className="flex">
          <AiFillStar size={12} style={{ color: "#D26E4B" }} />
          <AiFillStar size={12} style={{ color: "#D26E4B" }} />
          <AiFillStar size={12} style={{ color: "#D26E4B" }} />
          <AiFillStar size={12} style={{ color: "#D26E4B" }} />
          <AiOutlineStar size={12} style={{ color: "#D26E4B" }} />
        </div>
      </div>
    </div>
  );
}

export default SmallProduct;
