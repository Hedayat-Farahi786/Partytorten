import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleShoppingCartSidebar } from "../features/shoppingCartSidebar/shoppingCartSidebar";

function ShoppingCartSidebar() {
  const showShoppingCartSidebar = useSelector(
    (state) => state.shoppingCartSidebar.showShoppingCartSidebar
  );

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
              {/* <p className="text-center text-base font-semibold text-gray-600">No products in the cart.</p> */}
              {/* SHOPPING CART PRODUCT START */}
              <div className="flex items-start space-x-4">
                <img
                  width={80}
                  src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
                />
                <div className="flex flex-col items-start space-y-3">
                  <p className="text-left font-semibold text-gray-700 text-sm md:text-base">
                    Fashionable Women T-shirt Original Trucker - Good Fabric
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <p className="text-gray-500">1 x</p>
                    <p className="font-semibold text-gray">$50.00</p>
                  </div>
                </div>
                <div className="rounded-full border p-2 hover:text-main hover:border-main transition-all duration-150 ease-linear cursor-pointer">
                  <FaTimes />
                </div>
              </div>
              {/* SHOPPING CART PRODUCT END */}
              {/* SHOPPING CART PRODUCT START */}
              <div className="flex items-start space-x-4">
                <img
                  width={80}
                  src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
                />
                <div className="flex flex-col items-start space-y-3">
                  <p className="text-left font-semibold text-gray-700 text-sm md:text-base">
                    Fashionable Women T-shirt Original Trucker - Good Fabric
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <p className="text-gray-500">1 x</p>
                    <p className="font-semibold text-gray">$50.00</p>
                  </div>
                </div>
                <div className="rounded-full border p-2 hover:text-main hover:border-main transition-all duration-150 ease-linear cursor-pointer">
                  <FaTimes />
                </div>
              </div>
              {/* SHOPPING CART PRODUCT END */}
              {/* SHOPPING CART PRODUCT START */}
              <div className="flex items-start space-x-4">
                <img
                  width={80}
                  src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
                />
                <div className="flex flex-col items-start space-y-3">
                  <p className="text-left font-semibold text-gray-700 text-sm md:text-base">
                    Fashionable Women T-shirt Original Trucker - Good Fabric
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <p className="text-gray-500">1 x</p>
                    <p className="font-semibold text-gray">$50.00</p>
                  </div>
                </div>
                <div className="rounded-full border p-2 hover:text-main hover:border-main transition-all duration-150 ease-linear cursor-pointer">
                  <FaTimes />
                </div>
              </div>
              {/* SHOPPING CART PRODUCT END */}
              <div className="w-full flex flex-col space-y-3">
                <div className="h-px w-full bg-gray-300"></div>
                <div className="flex items-center justify-between px-2">
                  <p className="text-sm md:text-base">Subtotal:</p>
                  <p className="md:text-lg text-base font-bold">$150</p>
                </div>
                <div className="h-px w-full bg-gray-300"></div>
              </div>
              <div>
                <div className="flex items-center justify-center cursor-pointer hover:text-main">
                  <p className="text-sm font-bold border-b-2 border-main">
                    View Cart
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-black uppercase text-white font-semibold px-6 py-3 text-base md:text-lg rounded md:w-10/12 w-8/12 mt-5 hover:opacity-80 transition-all duration-150 ease-linear">
                    Go To Checkout
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
