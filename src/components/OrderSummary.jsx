import React, { useEffect, useState } from "react";
import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Divider from "./Divider";
import "./OrderSummary.css";
import axios from 'axios';

function OrderSummary() {
  const { id } = useParams();
 
  const [loading, setLoading] = useState(true);


  const [orderData, setOrderData] = useState([]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(`https://partytorten-backend.vercel.app/order/single/${id}`);
      setOrderData(response.data); // Store the order details in state
      setLoading(false);
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  const getProductName = async (id) => {
    try {
      const response = await axios.get(`https://partytorten-backend.vercel.app/products/${id}`);
      return response.data.name;
    } catch (error) {
      console.error('Error fetching order details:', error);
      return ""
    }
  };



  useEffect(() => {
    window.scrollTo(0, 0);
    fetchOrderDetails();
    console.log(orderData);
    
  }, []);  



  const convertDateFormat = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }

  const calculateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price
    })

    return total.toFixed(2);
  }


  return (
    <>
    {
      loading ? (
        <div className="w-full h-96 z-50 overflow-hidden flex flex-col items-center justify-center">
	<div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 className="text-center text-xl font-semibold">Loading...</h2>
</div>

      ) : (
        <div className="flex flex-col space-y-0 md:space-y-10 my-5 md:my-10 mb-20">
      <div className="flex items-center justify-center py-8">
        <div className="uppercase text-xs md:text-2xl text-gray-600 font-bold flex items-center space-x-2">
          <Link to="/shoppingCart">
            <span className="text-main cursor-pointer">1. Shopping Cart</span>
          </Link>
          <FiChevronRight size={30} color="#CCCCCC" />
          <Link to="/checkout">
            <span className="text-main cursor-pointer">2. Checkout</span>
          </Link>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span className="text-main">3. Order Complete</span>
        </div>
      </div>
      <div className="orderSummary w-11/12 md:w-10/12 space-y-20 flex flex-col mx-auto">
        <div className="orderSummary__left w-full md:w-10/12 mx-auto flex flex-col items-start space-y-10">
          <div className="w-full flex items-center justify-center">
            <div className="flex space-x-8 items-center justify-center border-2 p-5 rounded-md">
              <FiCheckCircle size={50} color="green" />
              <div className="flex flex-col items-start">
                <span className="uppercase font-bold text-xl">Thank you!</span>
                <span className="text-base text-left">Your order has been received</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 flex-wrap">
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-4">
              <span className="uppercase text-base">Order Number:</span>
              <span className="text-base md:text-xl font-bold">#{orderData.orderNumber}</span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-4">
              <span className="uppercase text-base">Status:</span>
              <span className="text-base md:text-xl font-bold">{orderData.status}</span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-4">
              <span className="uppercase text-base">Date:</span>
              <span className="text-base md:text-xl font-bold">
                {convertDateFormat(orderData.createdAt)}
              </span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-4">
              <span className="uppercase text-base">Email:</span>
              <span className="text-base md:text-xl font-bold">
                {orderData.email}
              </span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-8">
              <span className="uppercase text-base">Total:</span>
              <span className="text-base md:text-lg font-bold">€{calculateTotal(orderData.products)}</span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-8">
              <span className="uppercase text-base">Payment Method:</span>
              <span className="text-base md:text-lg font-bold">Paypal</span>
            </div>
            <div className="flex flex-row md:flex-col items-center md:items-start space-x-2 md:space-x-0 md:border-r-2 md:px-4 md:my-8">
              <span className="uppercase text-base">Address:</span>
              <span className="text-base md:text-lg font-bold">{orderData.address}</span>
            </div>
          </div>
        </div>
        <div className="orderSummary__right h-fit w-full md:w-10/12 mx-auto border-2 px-5 py-8 flex flex-col items-start space-y-8 md:space-y-6">
          <p className="md:px-4 uppercase font-bold text-lg">Products</p>
          <Divider />
          <div className="flex flex-col items-start w-full space-y-4">
            {
              orderData.products.map((item, i) => (
                <div key={i} className="md:px-4 w-full flex items-start justify-between text-sm  space-x-6">
              <span className="text-left">
                {item.product} x {item.quantity}
              </span>
              <span className="font-semibold">€{item.price}</span>
            </div>
              ))
            }
          </div>
          <div className="md:px-4 text-base font-semibold flex items-center justify-between w-full">
            <span className="text-sm">Subtotal</span>
            <span className="font-bold text-gray-700">€{calculateTotal(orderData.products)}</span>
          </div>
          <Divider />
          <div className="md:px-4 text-base font-semibold flex items-center justify-between w-full">
            <span className="text-sm">Delivery</span>
            <span className="font-bold text-gray-700">€0</span>
          </div>
          <Divider />
          <div className="md:px-4 text-base font-semibold flex items-center justify-between w-full">
            <span className="text-sm">Discount</span>
            <span className="font-bold text-gray-700">€0</span>
          </div>
          <Divider />
          <div className="md:px-4 text-base font-semibold flex items-center justify-between w-full">
            <span className="text-sm">Payment Method</span>
            <span className="font-bold text-gray-700">Paypal</span>
          </div>
          <Divider />
          <div className="w-full flex items-center justify-between">
            <span className="md:px-4 text-lg font-semibold">Total</span>
            <span className="text-2xl font-bold">€{calculateTotal(orderData.products)}</span>
          </div>
        </div>
        {/* <div className="w-full md:w-10/12 mx-auto flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-40">
          <div className="flex flex-col items-start space-y-4">
            <p className="uppercase font-bold text-xl">Billing Address</p>
            <div className="flex flex-col items-start space-y-1">
              <span>lkjl;kjasdf</span>
              <span>lkjl;kjasdf asdfasdfas</span>
              <span>asdfsdfasdf</span>
              <span>asdfsdffdg</span>
              <span>80933 asdfsdffdg</span>
              <span>Germany</span>
              <span>012341324</span>
              <span></span>
              <span>Hedayatfarahi8@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="uppercase font-bold text-xl">Shipping Address</p>
            <div className="flex flex-col items-start space-y-1">
              <span>lkjl;kjasdf</span>
              <span>lkjl;kjasdf asdfasdfas</span>
              <span>asdfsdfasdf</span>
              <span>asdfsdffdg</span>
              <span>80933 asdfsdffdg</span>
              <span>Germany</span>
              <span>012341324</span>
            </div>
          </div>
        </div> */}
        <Divider />
        <div className="w-full flex items-start justify-end mt-0">
          <Link to="/allProducts">
            <button className="bg-black text-white uppercase font-semibold rounded px-6 py-2">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
      )
    }
    </>
   
  );
}

export default OrderSummary;
