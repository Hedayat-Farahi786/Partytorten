import React from "react";
import SmallProduct from "./SmallProduct";

function SmallProductsView() {
  return (
    <div className="w-9/12 mx-auto my-10 flex items-center justify-between flex-wrap">
      <div className="my-10 flex flex-col items-start space-y-4">
        <h1 className="font-bold text-xl">Sales Products</h1>
        <SmallProduct />
        <SmallProduct />
        <SmallProduct />
      </div>
      <div className="my-10 flex flex-col items-start space-y-4">
        <h1 className="font-bold text-xl">Latest Products</h1>
        <SmallProduct />
        <SmallProduct />
        <SmallProduct />
      </div>
      <div className="my-10 flex flex-col items-start space-y-4">
        <h1 className="font-bold text-xl">Best of the Week</h1>
        <SmallProduct />
        <SmallProduct />
        <SmallProduct />
      </div>
      <div className="my-10 flex flex-col items-start space-y-4">
        <h1 className="font-bold text-xl">Popular</h1>
        <SmallProduct />
        <SmallProduct />
        <SmallProduct />
      </div>
    </div>
  );
}

export default SmallProductsView;
