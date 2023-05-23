import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Divider from "./Divider";
import ShoppingCartItem from "./ShoppingCartItem";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, removeFromShoppingCart } from "../features/shoppingCart/shoppingCart";
import { toggleShowUserAccount } from "../features/userAccount/userAccount";

function ShoppingCart() {

  const navigate = useNavigate();

  const cart = useSelector(state => state.shoppingCart.cart);
  const loggedIn = useSelector(state => state.userAccount.loggedIn);


  let total = 0;
  cart.forEach(item => {
    total += item.product.price * item.quantity;
  });

  const dispatch = useDispatch();

  const goToCheckout = () => {
    if(loggedIn){
      navigate("/checkout");
    } else {
      dispatch(toggleShowUserAccount());
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col space-y-0 md:space-y-10 my-5 md:my-10">
      <div className="flex items-center justify-center py-8">
        <div className="uppercase text-xs md:text-2xl text-gray-600 font-bold flex items-center space-x-2">
          <span className="text-main">1. Shopping Cart</span>
          <FiChevronRight size={30} color="#CCCCCC" />
            <span onClick={() => goToCheckout()} className="cursor-pointer">2. Checkout</span>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span>3. Order Complete</span>
        </div>
      </div>
      <div className="shoppingCart w-11/12 md:w-10/12 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row mx-auto">
        <div className="shoppingCart__left w-full md:w-8/12 flex flex-col items-start space-y-10">
          <div className="hidden md:flex overflow-x-auto relative w-full">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    PRODUCT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    PRICE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    QUANTITY
                  </th>
                  <th scope="col" className="py-3 px-6">
                    SUBTOTAL
                  </th>
                  <th scope="col" className="py-3 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {
                  cart.length === 0 ? (<p className="text-center text-2xl font-semibold text-gray-600 w-full mt-10">No products in the cart.</p>) : (
                  cart.map(item => (
                    <tr key={item.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 dark:text-white"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        width={80}
                        src={item.product.image}
                        alt=""
                      />
                      <p>{item.product.name}</p>
                    </div>
                  </th>
                  <td className="text-black font-semibold py-4 px-6">€{item.product.price}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-between border rounded-md">
                      <button className="px-3 py-2 border-r cursor-pointer" onClick={()=> dispatch(removeFromShoppingCart(item.product))}>-</button>
                      <span className="px-6 py-2 font-bold">{item.quantity}</span>
                      <button className="px-3 py-2 border-l cursor-pointer" onClick={()=> dispatch(incrementQuantity(item.product))}>+</button>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-black font-bold ">€{(item.product.price * item.quantity).toFixed(2)}</td>
                  <td className="py-4 px-6 ">
                    <div onClick={()=> dispatch(removeFromShoppingCart(item.product))} className="flex items-center justify-center border rounded-full w-8 h-8 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
                      <IoCloseSharp size={20} />
                    </div>
                  </td>
                </tr>
                  )))
                }
              </tbody>
            </table>
          </div>
          <div className="flex md:hidden shoppingCart__mobileView w-full flex-col space-y-6">
           {
            cart.map(item => (
              <ShoppingCartItem ket={item.product._id} item={item} />
            ))
           }
          </div>
          <Link to="/">
            <button className="flex rounded items-center space-x-3 bg-black text-white uppercase px-6 py-2 font-semibold">
              <BsArrowLeft size={22} />
              <span>Continue Shopping</span>
            </button>
          </Link>
        </div>
        <div className="shoppingCart__right h-fit w-full md:w-4/12 border-2 p-5 flex flex-col items-start space-y-8 md:space-y-6">
          <p className="uppercase font-bold text-lg">Cart totals</p>
          <Divider />
          <div className="text-base font-semibold flex items-center justify-between w-full">
            <span>Subtotal</span>
            <span className="font-bold">€{total.toFixed(2)}</span>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start space-y-6 py-5">
            <p className="font-bold uppercase text-lg">Coupon Discount</p>
            <input
              className="border-0 border-b w-full text-sm outline-none outline-0"
              type="text"
              placeholder="Enter coupon code here..."
            />
            <button className="text-sm rounded font-semibold uppercase text-black border-2 border-black px-4 py-2">
              Apply Coupon
            </button>
          </div>
          <Divider />
          <div className="w-full flex flex-col items-start text-sm space-y-4">
            <div className="flex items-start space-x-2">
              <span>Subtotal:</span>
              <span className="font-medium">€{total.toFixed(2)}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Discount:</span>
              <span className="font-medium">€0</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-2xl font-bold">€{total.toFixed(2)}</span>
          </div>
          <button onClick={()=> goToCheckout()} className="w-full rounded uppercase text-white bg-black py-4 font-bold">
            Procced to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
