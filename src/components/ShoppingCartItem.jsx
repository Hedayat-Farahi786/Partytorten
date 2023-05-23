import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { incrementQuantity, removeFromShoppingCart } from "../features/shoppingCart/shoppingCart";

function ShoppingCartItem({item}) {

  const dispatch = useDispatch();


  return (
    <div className="w-full border p-10 space-y-4 flex flex-col items-center justify-center">
      <div className="relative">
        <img
          width={120}
          src={item.product.image}
          alt=""
        />
        <div onClick={()=> dispatch(removeFromShoppingCart(item.product))} className="absolute -top-3 -right-3 flex items-center justify-center border rounded-full w-6 h-6 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
          <IoCloseSharp size={16} />
        </div>
      </div>
      <p className="text-sm font-medium">{item.product.name}</p>
      <div className="text-sm text-gray-600 flex items-center justify-center space-x-4">
        <span>Price:</span>
        <span className="font-semibold">€{item.product.price}</span>
      </div>
      <div>
        <div className="flex items-center border rounded-md">
          <button onClick={()=> dispatch(removeFromShoppingCart(item.product))} className="px-4 py-2 border-r">-</button>
          <span className="px-6 font-bold">{item.quantity}</span>
          <button onClick={()=> dispatch(incrementQuantity(item.product))} className="px-4 py-2 border-l">+</button>
        </div>
      </div>
      <div className="text-sm  text-gray-600 flex items-center justify-center space-x-4">
        <span>Subtotal:</span>
        <span className="font-bold">€{(item.product.price * item.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ShoppingCartItem;
