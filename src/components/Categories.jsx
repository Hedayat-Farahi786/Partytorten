import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Categories() {



    const categories = useSelector(state => state.products.categories);


  return (
    <div className="mb-10 w-11/12 md:w-9/12 mx-auto">
      <p className="font-semibold text-2xl mb-5">Categories</p>
      <div className="categories flex flex-col md:flex-row items-center md:first-letter:flex-wrap md:justify-center md:space-x-10 w-full">
        {categories.map((cat, ind) => (
          <Link to="/allProducts" className="w-10/12">
            <div
              key={ind}
              className="category relative border border-gray-200 transition duration-150 ease-in-out cursor-pointer hover:scale-110 flex flex-col items-end justify-between mt-4 w-full h-48 md:w-64 md:h-64 category overflow-hidden rounded-lg"
            >
              <img src={cat.image} alt="category" className="h-[70%] object-cover w-full" />
              <button className="h-[30%] transition duration-200 ease-in bg-white text-sm md:text-base font-semibold rounded hover:bg-main hover:text-white cursor-pointer w-full p-1 md:p-2">
                {cat.name}
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
