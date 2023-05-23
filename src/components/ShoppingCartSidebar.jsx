import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleShoppingCartSidebar } from "../features/shoppingCartSidebar/shoppingCartSidebar";
import { removeFromShoppingCart } from "../features/shoppingCart/shoppingCart";
import notFoundImage from '../assets/images/productNoResult.png'

function ShoppingCartSidebar() {
  const showShoppingCartSidebar = useSelector(
    (state) => state.shoppingCartSidebar.showShoppingCartSidebar
  );

  const cart = useSelector(state => state.shoppingCart.cart);

  let total = 0;
  cart.forEach(item => {
    total += item.product.price * item.quantity;
  });
  

  const dispatch = useDispatch();

  return (
    <>
      {showShoppingCartSidebar && (
        <div
          className="shoppingCart transition-all duration-200 ease-linear fixed flex items-end justify-end top-0 left-0 bottom-0 right-0 h-full w-full z-50 bg-[#00000078] overflow-hidden"
          id="review"
        >
          <div className="bg-white h-full w-10/12 xl:w-4/12 p-5 md:p-10 flex flex-col items-start space-y-6">
            <div className="flex flex-col w-full space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-xl uppercase font-bold">Shopping Cart</p>
                <div
                  onClick={() => dispatch(toggleShoppingCartSidebar())}
                  className="flex items-center space-x-2 text-sm text-gray-600 transition-all duration-150 ease-linear hover:text-main cursor-pointer"
                >
                  <span>CLOSE</span>
                  <BsArrowRight />
                </div>
              </div>
              <div className="h-px w-full bg-gray-300"></div>
            </div>
            <div className="shoppingCart__items w-full flex flex-col md:space-y-4 space-y-6">
              
              {
                cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center space-y-5 my-10">
                    <img src={notFoundImage} alt="Not Found Image"/>
                    <p className="text-center text-base font-semibold text-gray-600">No products in the cart.</p>
                  </div>
                ) : (
                cart.map(item => (
                    <div key={item.product._id} className="flex items-center justify-between">
                    <div className="flex items-start space-x-4">
                    <img
                      width={80}
                      src={item.product.image}
                    />
                    <div className="flex flex-col items-start space-y-3">
                      <p className="text-left font-semibold text-gray-700 text-sm md:text-base">
                        {item.product.name}
                      </p>
                      <div className="flex items-center space-x-4 text-sm">
                        <p className="text-gray-500">{item.quantity} x</p>
                        <p className="font-semibold text-gray">€{item.product.price}</p>
                      </div>
                    </div>
                    </div>
                    <div onClick={() => dispatch(removeFromShoppingCart(item.product))} className="rounded-full border p-2 hover:text-main hover:border-main transition-all duration-150 ease-linear cursor-pointer">
                      <FaTimes />
                    </div>
                  </div>
                )))
              }
             
              <div className="w-full flex flex-col space-y-3">
                <div className="h-px w-full bg-gray-300"></div>
                <div className="flex items-center justify-between px-2">
                  <p className="text-sm md:text-base">Subtotal:</p>
                  <p className="md:text-lg text-base font-bold">€{total.toFixed(2)}</p>
                </div>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
              <div>
                {/* <div className="flex items-center justify-center cursor-pointer hover:text-main">
                  <p
                    
                    className="text-sm font-bold border-b-2 border-main"
                  >
                    View Cart</Link>
                  </p>
                </div> */}
                <div className="flex items-center justify-center">
                  <button onClick={() => dispatch(toggleShoppingCartSidebar())} className="bg-[#e8898a] uppercase text-white font-semibold px-6 py-3 text-base md:text-lg rounded md:w-10/12 w-8/12 mt-5 hover:opacity-80 transition-all duration-150 ease-linear">
                <Link to="/shoppingCart">
                    Checkout
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShoppingCartSidebar;
