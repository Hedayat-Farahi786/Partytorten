import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Product from "./Product";
import { useWindowInfo } from "react-window-info-hook";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoading } from "../features/products/products";
import "./ProductsList.css";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductsList({ title }) {
  const products = useSelector((state) => state.products.products);

  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      {/* Add your custom previous arrow icon or content */}
      Previous
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      {/* Add your custom next arrow icon or content */}
      Nextsdf
    </button>
  );

  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [settings, setSettings] = useState(config);

  return (
    <div className="fa w-full md:w-10/12 mx-auto my-20">
      <p className="font-semibold text-2xl mb-5">{title}</p>

      <Slider {...settings}>
        {products.map((product, id) => (
          <Product
            product={product}
            key={product._id}
          />
        ))}
      </Slider>
    </div>
  );
}
// leftChevron={
//   <div className="w-12 h-full bg-white opacity-40 hover:opacity-100 flex items-center justify-center">
//     <AiOutlineLeft />
//   </div>
// }
// rightChevron={
//   <div className="w-12 h-full bg-white opacity-40 hover:opacity-100 flex items-center justify-center">
//     <AiOutlineRight />
//   </div>

export default ProductsList;
