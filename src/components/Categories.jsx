import React from "react";

function Categories() {
  const categories = [
    {
      url: "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/category3.jpg",
      text: "For Men",
    },
    {
      url: "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/category4.jpg",
      text: "Accessories",
    },
    {
      url: "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/category1.jpg",
      text: "For Women",
    },
    {
      url: "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/10/category2.jpg",
      text: "Cosmetic",
    },
  ];

  return (
    <div className="my-10 w-11/12 md:w-9/12 mx-auto space-y-8">
      <p className="font-semibold text-2xl">Our Categories</p>
      <div className="categories flex flex-wrap justify-between">
        {categories.map((cat, ind) => (
          <div
            key={ind}
            style={{
              background: `url(${cat.url}) no-repeat center center`,
              backgroundSize: "cover",
            }}
            className="relative transition duration-150 ease-in-out cursor-pointer hover:scale-110 p-2 md:p-5 flex items-end justify-center mt-4 w-44 h-36 md:w-64 md:h-64 category overflow-hidden rounded-lg"
          >
            <button className="transition duration-200 ease-in bg-white text-xs md:text-sm font-semibold rounded hover:bg-main hover:text-white cursor-pointer w-full p-1 md:p-2">
              {cat.text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
