import React from "react";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "react-carousel-minimal";
import "./ProductDetails.css";
import { Breadcrumb, Table, Tabs } from "flowbite-react";
import { HiHome, HiOutlineShoppingBag } from "react-icons/hi";
import { AiFillDislike, AiFillLike, AiFillStar } from "react-icons/ai";
import { CgRuler } from "react-icons/cg";
import sizeGuide from "../assets/images/size_guide.png";
import { VscDebugBreakpointLog } from "react-icons/vsc";
import "video-react/dist/video-react.css"; // import css
import { Player } from "video-react";
import { BsShieldLock, BsTruck } from "react-icons/bs";
import Comment from "./Comment";
import ProductsList from "./ProductsList";

function ProductDetails() {
  const data = [
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1.jpg",
    },
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-1.jpg",
    },
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-3.jpg",
    },
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-4.jpg",
    },
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-4.jpg",
    },
    {
      image:
        "https://d-themes.com/wordpress/riode/demo-1/wp-content/uploads/sites/5/2020/09/product-3-4.jpg",
    },
  ];

  const { id } = useParams();
  return (
    <>
      <div className="mb-20 mt-10 w-9/12 mx-auto flex flex-col space-y-10">
        <div className="w-12/12 flex space-x-10">
          <div className="details__left w-5/12">
            <Carousel
              data={data}
              time={2000}
              // captionStyle={captionStyle}
              // radius="10px"
              // slideNumber={true}
              // slideNumberStyle={slideNumberStyle}
              // captionPosition="bottom"
              automatic={false}
              // dots={true}
              // pauseIconColor="white"
              // pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
            />
          </div>
          <div className="details__right w-7/12 flex flex-col items-start space-y-6">
            <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item icon={HiHome}>
                <Link>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link>Men's Wear</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Fashionable Men T-shirt</Breadcrumb.Item>
            </Breadcrumb>
            <p className="text-2xl font-bold">Fashionable Men T-shirt</p>
            <div className="flex space-x-6">
              <div className="text-xs text-gray-600 flex space-x-2">
                <span className="font-semibold">SKU:</span>
                <span>987612345</span>
              </div>
              <div className="text-xs text-gray-600 flex space-x-2">
                <span className="font-semibold">CATERGORY:</span>
                <span>Fashionable Men's</span>
              </div>
            </div>
            <p className="text-4xl font-bold text-[#D26E4B]">$38.00 - $50.00</p>
            <div className="flex items-center space-x-4">
              <div className="stars flex">
                <AiFillStar color="#666666" />
                <AiFillStar color="#666666" />
                <AiFillStar color="#666666" />
                <AiFillStar color="#666666" />
                <AiFillStar color="#D6D6D6" />
              </div>
              <span className="text-xs text-gray-500">(2 Reviews)</span>
            </div>
            <p className="text-left text-gray-700 text-sm">
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol
              faucibus adipiscing.
            </p>
            <div className="flex space-x-4 items-center">
              <p className="text-base">Color:</p>
              <div className="colors flex space-x-3">
                <div className="black w-8 h-8 bg-main rounded border cursor-pointer transition-all duration-100 ease-linear hover:scale-110"></div>
                <div className="black w-8 h-8 bg-[#56962E] rounded border cursor-pointer transition-all duration-100 ease-linear hover:scale-110"></div>
                <div className="black w-8 h-8 bg-[#965000]  rounded border cursor-pointer transition-all duration-100 ease-linear hover:scale-110"></div>
              </div>
            </div>
            <div className="flex space-x-4 items-center">
              <p className="text-base">Size:</p>
              <div className="sizes flex space-x-3">
                <div className="w-8 h-8 border flex items-center justify-center text-xs cursor-pointer transition-all duration-100 ease-linear hover:scale-110">
                  S
                </div>
                <div className="w-8 h-8 border flex items-center justify-center text-xs cursor-pointer transition-all duration-100 ease-linear hover:scale-110">
                  M
                </div>
                <div className="w-8 h-8 border flex items-center justify-center text-xs cursor-pointer transition-all duration-100 ease-linear hover:scale-110">
                  L
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-500 underline space-x-2 cursor-pointer">
                <CgRuler size={20} />
                <span>Size Guide</span>
              </div>
            </div>
            <div className="h-px w-full bg-gray-100"></div>
            <div className="flex space-x-10">
              <div className="flex items-center border rounded-md">
                <button className="px-4 border-r">-</button>
                <span className="px-6 font-bold">1</span>
                <button className="px-4 border-l">+</button>
              </div>
              <button className="flex items-center space-x-2 bg-main px-6 py-2 text-white rounded-md text-base cursor-pointer font-semibold">
                <HiOutlineShoppingBag />
                <span>Add to cart</span>
              </button>
            </div>
            <div className="h-px w-full bg-gray-100"></div>
          </div>
        </div>
        <Tabs.Group style="underline">
          <Tabs.Item active={true} title="Description">
            <div className="flex space-x-8">
              <div className="description__left w-6/12 flex flex-col items-start space-y-8">
                <p className="text-lg font-bold">Features</p>
                <div className="flex flex-col items-start space-y-4">
                  <p className="text-left text-base">
                    Praesent id enim sit amet.Tdio vulputate eleifend in in
                    tortor. ellus massa. siti iMassa ristique sit amet condim
                    vel, facilisis quimequistiqutiqu amet condim Dilisis
                    Facilisis quis sapien. Praesent id enim sit amet.
                  </p>
                  <div className="flex flex-col space-y-2 items-start">
                    <div className="flex items-center space-x-4 text-sm">
                      <VscDebugBreakpointLog size={18} />
                      <p>Eleifend in in tortor. ellus massa.Dristique sitii</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <VscDebugBreakpointLog size={18} />
                      <p>Massa ristique sit amet condim vel</p>
                    </div>
                    <div className="flex items-center space-x-4 text-sm">
                      <VscDebugBreakpointLog size={18} />
                      <p>
                        Dilisis Facilisis quis sapien. Praesent id enim sit amet
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-bold">Specifications</p>
                <div className="flex flex-col items-start space-y-2 w-full">
                  <div className="flex text-sm w-full items-start justify-start text-left">
                    <p className="font-bold w-4/12">Material </p>
                    <p className="w-8/12">
                      Praesent idasdfasdfasdfasfdasfd enimasdfasdfasf sit
                      amet.Tdio
                    </p>
                  </div>
                  <h className="w-full h-px bg-gray-300"></h>
                  <div className="flex text-sm w-full items-start justify-start text-left">
                    <p className="font-bold w-4/12">Claimed Size </p>
                    <p className="w-8/12">Praesent id enim sit amet.Tdio</p>
                  </div>
                  <h className="w-full h-px bg-gray-100"></h>
                  <div className="flex text-sm w-full items-start justify-start text-left">
                    <p className="font-bold w-4/12">Recommended Use </p>
                    <p className="w-8/12">Praesent id enim sit amet.Tdio</p>
                  </div>
                  <h className="w-full h-px bg-gray-100"></h>
                  <div className="flex text-sm w-full items-start justify-start text-left">
                    <p className="font-bold w-4/12">Manufacturer </p>
                    <p className="w-8/12">Praesent id enim sit amet.Tdio</p>
                  </div>
                </div>
              </div>
              <div className="description__right w-6/12 flex flex-col items-start space-y-6">
                <p className="text-xl font-bold">Video Description</p>
                <Player poster={data[0].image}>
                  <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                </Player>
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center rounded-full p-3 border-2">
                      <BsShieldLock size={26} />
                    </div>
                    <div className="flex flex-col items-start text-sm">
                      <p className="font-bold">Secure Payments</p>
                      <p>We ensure secure payements</p>
                    </div>
                  </div>
                  <div className="h-full w-px bg-gray-200"></div>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center justify-center rounded-full p-3 border-2">
                      <BsTruck size={26} />
                    </div>
                    <div className="flex flex-col items-start text-sm">
                      <p className="font-bold">Free Shipping</p>
                      <p>On orders over $99</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Additional Information">
            <div className="flex flex-col space-y-4 items-start w-full">
              <div className="w-full text-left flex">
                <p className="w-2/12 font-bold">Brands:</p>
                <p className="w-8/12">SkillStar, SLS</p>
              </div>
              <div className="w-full text-left flex">
                <p className="w-2/12 font-bold">Colors:</p>
                <p className="w-8/12">Black, Blue, Brown, Green</p>
              </div>
              <div className="w-full text-left flex">
                <p className="w-2/12 font-bold">Sizes:</p>
                <p className="w-8/12">Extra Large, Large, Medium, Small</p>
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Size Guide">
            <div className="flex items-center justify-center">
              <img src={sizeGuide} alt="" />
            </div>
          </Tabs.Item>
          <Tabs.Item title="(2) Reviews">
            <div className="review flex space-x-8">
              <div className="review__left w-4/12 flex flex-col items-start space-y-8">
                <div className="flex space-x-4">
                  <p className="text-main text-8xl font-extrabold">4.0</p>
                  <div className="flex flex-col space-y-2 items-start">
                    <p className="font-semibold">Average Rating</p>
                    <div className="flex items-center space-x-4">
                      <div className="stars flex">
                        <AiFillStar color="#D26E4B" />
                        <AiFillStar color="#D26E4B" />
                        <AiFillStar color="#D26E4B" />
                        <AiFillStar color="#D26E4B" />
                        <AiFillStar color="#D6D6D6" />
                      </div>
                      <span className="text-xs text-gray-500">(2 Reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="stars flex">
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                    </div>
                    <div className="w-56 h-2 rounded-full bg-[#EEEEEE]"></div>
                    <p className="text-gray-800">0%</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="stars flex">
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D6D6D6" />
                    </div>
                    <div className="w-56 h-2 rounded-full bg-[#999999]"></div>
                    <p className="text-gray-800">100%</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="stars flex">
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                    </div>
                    <div className="w-56 h-2 rounded-full bg-[#EEEEEE]"></div>
                    <p className="text-gray-800">0%</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="stars flex">
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                    </div>
                    <div className="w-56 h-2 rounded-full bg-[#EEEEEE]"></div>
                    <p className="text-gray-800">0%</p>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="stars flex">
                      <AiFillStar color="#D26E4B" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                      <AiFillStar color="#D6D6D6" />
                    </div>
                    <div className="w-56 h-2 rounded-full bg-[#EEEEEE]"></div>
                    <p className="text-gray-800">0%</p>
                  </div>
                </div>
                <button className="bg-black uppercase text-white font-semibold px-6 py-2 text-lg rounded">
                  Submit Review
                </button>
              </div>
              <div className="review__right w-8/12 border-l pl-6">
                <Comment
                  name="Aman Farahi"
                  comment="Best Product with good quality"
                  like={0}
                  unlike={1}
                />
                <div className="w-full h-px bg-gray-200 my-6"></div>
                <Comment
                  name="Hedayat Farahi"
                  comment="Nice Material Good Product"
                  like={1}
                  unlike={0}
                />
              </div>
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
      <ProductsList title="Related Products" />
    </>
  );
}

export default ProductDetails;
