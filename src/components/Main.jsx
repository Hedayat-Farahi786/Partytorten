import React from "react";
import ProductsList from "./ProductsList";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Sales from "./Sales";
import Services from "./Services";
import Banner from "./Banner";
import SmallProductsView from "./SmallProductsView";
import UserAccount from "./UserAccount";

function Main() {
  return (
    <div className="w-full overflow-hidden">
      <UserAccount />
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
