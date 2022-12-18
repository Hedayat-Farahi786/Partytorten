import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import {
  AiOutlineRight,
  AiOutlineLeft
} from "react-icons/ai";
import Product from "./Product";
import {useWindowInfo} from 'react-window-info-hook'

function ProductsList({title}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const info = useWindowInfo();
  return (
    <div className="w-9/12 mx-auto my-20 flex flex-col space-y-8">
      <p className="font-semibold text-2xl">{title}</p>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        glutter={5}
        numberOfCards={info.mobile ? 2 : 4}
        leftChevron={
          <div className="w-12 h-full bg-white opacity-40 hover:opacity-100 flex items-center justify-center">
            <AiOutlineLeft />
          </div>
        }
        rightChevron={
          <div className="w-12 h-full bg-white opacity-40 hover:opacity-100 flex items-center justify-center">
            <AiOutlineRight />
          </div>
        }
        chevronWidth={chevronWidth}
      >
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ItemsCarousel>
    </div>
  );
}

export default ProductsList;
