import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Sales from "./Sales";
import Services from "./Services";
import Banner from "./Banner";
import SmallProductsView from "./SmallProductsView";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../features/products/products";

function Main() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get('https://partytorten-backend.vercel.app/products').then(response => {
      dispatch(addProducts(response.data));
      setLoading(false);

    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);


  return (
    <>
      {
        loading ? (
          <div class="w-full h-96 z-50 overflow-hidden flex flex-col items-center justify-center">
            <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <h2 class="text-center text-xl font-semibold">Loading...</h2>
          </div>
        ) : (

          <div className="w-full overflow-hidden">
            <Carousel />
            <Services />
            <Categories />
            <ProductsList title="Products" />
            {/* <Sales /> */}
            <ProductsList title="Best Sellers" />
            {/* <ProductsList title="Our Featured" />
            <ProductsList /> */}
            <Banner />
            <SmallProductsView />
          </div>
        )
      }
    </>
  );
}

export default Main;
