import React, { useEffect } from "react";
import ProductsList from "./ProductsList";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Sales from "./Sales";
import Services from "./Services";
import Banner from "./Banner";
import SmallProductsView from "./SmallProductsView";

function Main() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Carousel />
      <Services />
      <Categories />
      <ProductsList title="Best Sellers" />
      <Sales />
      <ProductsList title="New Arrivals" />
      <ProductsList title="Our Featured" />
      <ProductsList />
      <Banner />
      <SmallProductsView />
    </div>
  );
}

export default Main;
