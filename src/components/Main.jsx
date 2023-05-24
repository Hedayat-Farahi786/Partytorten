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
import { addCategories, addProducts } from "../features/products/products";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

function Main() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);

    axios.get('https://partytorten-backend.vercel.app/category').then(response => {
      dispatch(addCategories(response.data));
      console.log(response.data)
    }).catch(error => {
      console.error('Error fetching products:', error);
    });


    axios.get('https://partytorten-backend.vercel.app/products').then(response => {
      dispatch(addProducts(response.data));
      setLoading(false);

    }).catch(error => {
      console.error('Error fetching products:', error);
    });
  }, []);


  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {
        loading ? (
          <div className="w-full h-96 z-50 overflow-hidden flex flex-col items-center justify-center">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <h2 className="text-center text-xl font-semibold">Loading...</h2>
          </div>
        ) : (

          <div className="w-full overflow-hidden">
            <Carousel />
            <Services />
            <Categories />
            <ProductsList title="Featured Products" />
            {/* <Sales /> */}
            <Banner />
            <ProductsList title="Best Sellers" />
            {/* <ProductsList title="Our Featured" />
            <ProductsList /> */}
            {/* <SmallProductsView /> */}
      <Footer />
          </div>
        )
      }
    </>
  );
}

export default Main;
