import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import Divider from "./Divider";

import creditCartImg from "../assets/images/credit_payment.png";
import paypalImg from "../assets/images/paypal_payment.png";
import paypalIcon from "../assets/images/paypal_icon.png";
import cashIcon from "../assets/images/cash_icon.png";
import payCashIcon from "../assets/images/Frame 1(1).png";

import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { clearCart } from "../features/shoppingCart/shoppingCart";
import { BsCashCoin } from "react-icons/bs";
import { toast } from "react-hot-toast";



function Checkout() {
  // const [sameAddress, setSameAddress] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.userAccount.loggedIn);



  const [errorMessage, setErrorMessage] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [additionalDetails, setAdditionalDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [otherNotes, setOtherNotes] = useState("");

  const cart = useSelector(state => state.shoppingCart.cart);

  const user = useSelector(
    (state) => state.userAccount.user
  );

  let total = 0;
  cart.forEach(item => {
    total += item.product.price * item.quantity;
  });


  const callError = (field) => {
    window.scrollTo(0, 0);
    setErrorMessage(`${field} is required!`);
    toast.error("Please enter the required fields!");
  }


  const placeOrder = () => {


    if(street === ""){
     callError("Street")
    } else if(houseNumber === ""){
      callError("House Number")
    } else if(postalCode === ""){
      callError("Postal Code")
    } else if(phone === ""){
      callError("Phone")
    } else {
      setErrorMessage("");

      const products = cart.map(item => {
        return {
          product: item.product._id,
          quantity: item.quantity,
          price: Number((item.product.price * item.quantity).toFixed(2))
        }
      });
  
  
      let res = {
        user: user.userId,
        products,
        address: street + " " + houseNumber + ", " + postalCode + " Munich, Germany",
        phone,
        email: user.email,
        otherNotes,
        trackingNumber: "12345"
      }
  
      submitOrder(res);
    }

  }

  const submitOrder = (orderData) => {
    axios.post('https://partytorten-backend.vercel.app/order', orderData)
      .then(response => {
        // Handle the successful response
        // console.log('Order submitted successfully:', response.data);
        dispatch(clearCart())
        navigate(`/orderSummary/${response.data._id}`);
        
      })
      .catch(error => {
        // Handle the error
        console.error('Error submitting order:', error);
      });
  };


  useEffect(() => {

    if(!loggedIn || cart.length === 0){
      navigate('/shoppingCart');
    }
    
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col space-y-0 md:space-y-10 my-5 md:my-10">
      <div className="flex items-center justify-center py-8">
        <div className="uppercase text-xs md:text-2xl text-gray-600 font-bold flex items-center space-x-2">
          <Link to="/shoppingCart">
            <span className="text-main cursor-pointer">1. Shopping Cart</span>
          </Link>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span className="text-main">2. Checkout</span>
          <FiChevronRight size={30} color="#CCCCCC" />
          <span>3. Order Complete</span>
        </div>
      </div>
      <div className="checkout w-11/12 md:w-10/12 space-y-20 md:space-y-0 md:space-x-6 flex flex-col md:flex-row mx-auto">
        <div className="checkout__left w-full md:w-7/12 flex flex-col items-start space-y-10">
          <form className="w-full">
            <p className="text-left font-bold uppercase mb-6 text-2xl">
              Your Address
            </p>
            <p className="text-left font-semibold uppercase mb-6 text-red-600 text-sm">
              {errorMessage}
            </p>
            {/* <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billFirstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billFirstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="First name..."
                  required
                />
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billLastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billLastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Last name..."
                  required
                />
              </div>
            </div> */}
           
           
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billStreet"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Street <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billStreet"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Street Name..."
                  required
                />
              </div>
              <div className="flex md:w-6/12 space-x-4">
                <div className="mb-6 w-6/12 flex flex-col items-start">
                  <label
                    for="billHouseNumber"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    House Number <span className="text-[#ca2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="billHouseNumber"
                    value={houseNumber}
                  onChange={(e) => setHouseNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="House number..."
                    required
                  />
                </div>
                <div className="mb-6 w-6/12 flex flex-col items-start">
                  <label
                    for="billPostalCode"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Postal Code <span className="text-[#ca2626]">*</span>
                  </label>
                  <input
                    type="text"
                    id="billPostalCode"
                    value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Postal code..."
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billEmail"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Additional Details <span className="text-gray-500 text-xs">(optional)</span>
                </label>
                <input
                  type="text"
                  id="additionalDetails"
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Additional Deatils..."
                  required
                />
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billPhone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone <span className="text-[#ca2626]">*</span>
                </label>
                <input
                  type="text"
                  id="billPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+0123456789"
                  required
                />
              </div>
            </div>

             <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billCountry"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Country <span className="text-[#ca2626]">*</span>
                </label>
                <select
                  id="billCountry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Germany" selected>Germany</option>
                </select>
              </div>
              <div className="mb-6 md:w-6/12 flex flex-col items-start">
                <label
                  for="billCity"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City <span className="text-[#ca2626]">*</span>
                </label>
                <select
                  id="billCity"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="München" selected>München</option>
                </select>
              </div>
            </div>
            
            <div className="md:mb-6 flex flex-col items-start">
              <label
                for="otherNotes"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Other Notes{" "}
                <span className="text-xs text-gray-500">(Optional)</span>
              </label>
              <textarea
                id="otherNotes"
                rows="6"
                value={otherNotes}
                  onChange={(e) => setOtherNotes(e.target.value)}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Note about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </form>
        </div>
        <div className="checkout__right w-full md:w-5/12 border-2 p-5 flex flex-col items-start space-y-8 md:space-y-6">
          <p className="uppercase font-bold text-lg">Your Order</p>
          <Divider />
          <div className="flex flex-col items-start w-full space-y-4">
            <p className="text-base font-semibold">Products</p>
            {
              cart.map((item, i) => (
                <div key={i} className="w-full flex items-start justify-between text-sm text-gray-500 space-x-6">
              <span className="text-left">
                {item.product.name} x {item.quantity}
              </span>
              <span className="font-semibold">€{(item.product.price * item.quantity).toFixed(2)}</span>
            </div>
              ))
            }
          </div>
          <Divider />
          <div className="text-base font-semibold flex items-center justify-between w-full">
            <span>Subtotal</span>
            <span className="font-bold">€{total.toFixed(2)}</span>
          </div>
          {/* <Divider />
          <p className="text-base font-medium">Calculate Shipping</p>
          <div className="flex flex-col space-y-4 w-full">
            <div className="w-full">
              <input
                type="radio"
                id="jack-small"
                name="jack"
                value="7"
                className="hidden peer"
                onChange={(e) => setTotal(subtotal + Number(e.target.value))}
                required
              />
              <label
                for="jack-small"
                className="inline-flex justify-between items-center p-5 w-full text-gray-700 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-base font-semibold">DHL Delivery</div>
                  <div className="text-xs">
                    Price cost: <strong>€7</strong>
                  </div>
                </div>
                <svg
                  aria-hidden="true"
                  className="ml-3 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="jack-big"
                name="jack"
                value="10"
                className="hidden peer"
                onChange={(e) => setTotal(subtotal + Number(e.target.value))}
              />
              <label
                for="jack-big"
                className="inline-flex justify-between items-center p-5 w-full text-gray-700 bg-white rounded-lg border border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="flex flex-col items-start space-y-2">
                  <div className="text-base font-semibold">Fedex Delivery</div>
                  <div className="text-xs">
                    Price cost: <strong>€10</strong>
                  </div>
                </div>
                <svg
                  aria-hidden="true"
                  className="ml-3 w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </label>
            </div>
          </div> */}
          <Divider />
          <div className="w-full flex flex-col items-start text-sm space-y-4">
            <div className="flex items-start space-x-2">
              <span>Subtotal:</span>
              <span className="font-medium">€{total.toFixed(2)}</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Delivery:</span>
              <span className="font-medium">€0</span>
            </div>
            <div className="flex items-start space-x-2">
              <span>Discount:</span>
              <span className="font-medium">€0</span>
            </div>
          </div>
          <Divider />
          <div className="w-full flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="text-2xl text-main font-bold">
              €{total.toFixed(2)}
            </span>
          </div>
          <Divider />
          <div className="w-full outline-0">
            <Tabs id="custom-animation" value="html">
              <TabsHeader>
                <Tab key={0} value="credit">
                  <div className="flex flex-col items-center justify-center">
                    <img width={100} src={creditCartImg} alt="" />
                  </div>
                </Tab>
                <Tab key={1} value="cash">
                  <div className="flex h-full items-center justify-center">
                    {/* <img width={70} src={paypalImg} alt="" /> */}
                    <img src={payCashIcon} width={120} alt="" />
                  </div>
                </Tab>
              </TabsHeader>
              <TabsBody
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                <TabPanel key={0} value="credit">
                  <form>
                    <div className="mb-3 flex flex-col items-start">
                      <label
                        for="cardNumber"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Card Number <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="1234 1234 1234 1234"
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between space-x-2">
                      <div className="mb-3 flex flex-col items-start">
                        <label
                          for="expiryDate"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Expiry Date <span className="text-[#ca2626]">*</span>
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div className="mb-3 flex flex-col items-start">
                        <label
                          for="cvc"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          CVC <span className="text-[#ca2626]">*</span>
                        </label>
                        <input
                          type="text"
                          id="cvc"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="CVC"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col items-start">
                      <label
                        for="cardName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name On Card <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="text"
                        id="cardName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Name on your card..."
                        required
                      />
                    </div>
                    <div className="mb-6 flex flex-col items-start">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email <span className="text-[#ca2626]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Email..."
                        required
                      />
                    </div>
                    {/* <Link to="/orderSummary"> */}
                      <button
                        type="submit"
                        onClick={()=> placeOrder()}
                        disabled={true}
                        className="bg-black disabled:cursor-not-allowed disabled:opacity-50 text-white uppercase font-semibold w-full py-2 rounded"
                      >
                        Place Order
                      </button>
                    {/* </Link> */}
                  </form>
                </TabPanel>
                <TabPanel key={1} value="cash">
                  <div className="py-10">
                    {/* <Link to="/orderSummary"> */}
                      <div onClick={()=> placeOrder()} className="text-white text-sm flex items-center justify-center space-x-3 bg-black transition-all duration-150 ease-linear font-semibold py-2 rounded-md cursor-pointer shadow">
                        <img width={24} src={cashIcon} alt="" className="filter brightness-0 invert" />
                        {/* <BsCashCoin size={24} /> */}
                        <span>Pay on delivery (€ {total.toFixed(2)})</span>
                      </div>
                    {/* </Link> */}
                  </div>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
