import React from "react";
import ProductsList from "./ProductsList";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Sales from "./Sales";
import Services from "./Services";
import Banner from "./Banner";
import SmallProductsView from "./SmallProductsView";

function Main() {
  return (
    <>
      <Carousel />
      <Services />
      <Categories />
      <ProductsList title="Best Sellers" />
      <Sales />
      <ProductsList title="New Arrivals" />
      <ProductsList title="Our Featured" />
      <Banner />
      <SmallProductsView />
    </>
  );
}

export default Main;
