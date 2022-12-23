import React from "react";
import { BsTruck } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import "./Services.css";

function Services() {
  return (
    <div className="services space-y-5 flex-col md:flex-row rounded-md my-20 w-11/12 md:w-9/12 mx-auto py-6 px-10 flex items-center justify-between ">
      <div className="service flex flex-col md:flex-row items-center space-x-4">
        <BsTruck size={40} />
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold text-xs md:text-sm">
            Free Shipping & Return
          </p>
          <p className="text-xs md:text-sm font-light">
            Free Shipping on orders over $99
          </p>
        </div>
      </div>
      <div className="h-px w-full md:h-12 md:w-px bg-gray-300"></div>
      <div className="service flex flex-col md:flex-row items-center space-x-4">
        <MdSupportAgent size={40} />
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold text-xs md:text-sm">
            Customer Support 24/7
          </p>
          <p className="text-xs md:text-sm font-light">
            Free Shipping on orders over $99
          </p>
        </div>
      </div>
      <div className="h-px w-full md:h-12 md:w-px bg-gray-300"></div>
      <div className="service flex flex-col md:flex-row items-center space-x-4">
        <RiSecurePaymentLine size={40} />
        <div className="flex flex-col items-center md:items-start">
          <p className="font-semibold text-xs md:text-sm">
            100$ Secure Payemnt
          </p>
          <p className="text-xs md:text-sm font-light">
            We ensure secure payment!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
