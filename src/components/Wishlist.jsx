import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import WishListItem from "./WishListItem";
function Wishlist() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto my-20 flex flex-col items-start space-y-10">
      <p className="text-2xl font-bold">My wishlist on Farahi Store</p>

      <div class="hidden md:flex overflow-x-auto relative w-full">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6">
                PRODUCT
              </th>
              <th scope="col" class="py-3 px-6">
                PRICE
              </th>
              <th scope="col" class="py-3 px-6">
                STOCK STATUS
              </th>
              <th scope="col" class="py-3 px-6"></th>
              <th scope="col" class="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 dark:text-white"
              >
                <div className="flex items-center space-x-4">
                  <img
                    width={80}
                    src="https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1-600x675.jpg"
                    alt=""
                  />
                  <p>Fashion Meablen T-shirt</p>
                </div>
              </th>
              <td class="text-black font-semibold py-4 px-6">$50</td>
              <td class="text-main py-4 px-6">In Stock</td>
              <td class="py-4 px-6 space-x-4">
                <button className="border-2 border-main text-main font-semibold px-6 py-2 uppercase cursor-pointer transition-all duration-150 ease-linear hover:bg-main hover:text-white">
                  Quick View
                </button>
                <button className="border-2 border-main text-white bg-main font-semibold uppercase px-6 py-2 cursor-pointer">
                  Add to Cart
                </button>
              </td>
              <td class="py-4 px-6 ">
                <div className="flex items-center justify-center border rounded-full w-8 h-8 cursor-pointer transition-all duration-150 ease-linear hover:text-main">
                  <IoCloseSharp size={20} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mobileView space-y-6 flex md:hidden flex-col items-center w-full">
        <WishListItem />
        <WishListItem />
        <WishListItem />
      </div>
    </div>
  );
}

export default Wishlist;
