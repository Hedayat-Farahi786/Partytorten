import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import noResults from "../assets/images/no_results.png";

const Orders = () => {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  const loggedIn = useSelector((state) => state.userAccount.loggedIn);
  const user = useSelector((state) => state.userAccount.user);

  const getTotalOf = (arr, field) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i][field];
    }
    return total;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${month}.${day}.${year}`;
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate("/");
    } else {
      axios
        .get(`https://partytorten-backend.vercel.app/order/${user.userId}`)
        .then((response) => {
          setOrders(response.data);
          setFiltered(response.data);
          setLoading(false);
        })
        .catch((error) => {
          toast.error("Error getting orders!");
        });
    }
  }, [loggedIn, user.userId]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFiltered(orders);
    } else {
      const filteredOrders = orders.filter((order) =>
        order?.orderNumber.includes(searchQuery)
      );
      setFiltered(filteredOrders);
    }
  }, [searchQuery]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filtered.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {loading ? (
        <div className="w-full h-96 z-50 overflow-hidden flex flex-col items-center justify-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
          <h2 className="text-center text-xl font-semibold">Loading...</h2>
        </div>
      ) : (
        <div className="orders">
          <div className="w-11/12 md:w-10/12 mx-auto">
            <div className="mt-6 mb-12 flex items-center justify-between">
              <p className="text-2xl font-bold ">My Orders</p>
              <TextInput
                icon={HiSearch}
                placeholder="Search..."
                className="outline-0 w-44 md:w-60"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            {currentItems.length === 0 ? (
              <div className="w-full flex flex-col items-center justify-center">
                <img
                  src={noResults}
                  className="w-72"
                  alt="No Orders Found Image"
                />
                <p className="text-lg font-semibold text-center">
                  No Orders Found!
                </p>
              </div>
            ) : (
              <>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {/* Table header */}
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Order Number
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Products
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Date
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((order, index) => (
                        <tr
                          key={order._id}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            #{order.orderNumber || 1000 + index + 1}
                          </th>
                          <td className="px-6 py-4">{order.products.length}</td>
                          <td className="px-6 py-4">
                            {getTotalOf(order.products, "quantity")}
                          </td>
                          <td className="px-6 py-4">
                            €{getTotalOf(order.products, "price").toFixed(2)}
                          </td>
                          <td className="px-6 py-4">{order.status}</td>
                          <td className="px-6 py-4">
                            <a
                              href="#"
                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              {order.trackingNumber}
                            </a>
                          </td>
                          <td className="px-6 py-4">
                            {formatDate(order.createdAt)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 mb-12 flex items-center flex-col-reverse md:flex-row md:justify-between">
                  <span className="px-3 py-1 text-gray-600 text-sm mt-5 md:mt-0">
                    Showing{" "}
                    <strong>
                      {indexOfFirstItem + 1}-
                      {Math.min(indexOfLastItem, orders.length)}{" "}
                    </strong>
                    of <strong>{orders.length}</strong> orders
                  </span>
                  <div className="flex items-center">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="px-3 py-1 rounded-l-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Previous
                    </button>
                    {Array.from(
                      { length: Math.ceil(orders.length / itemsPerPage) },
                      (_, index) => (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`px-3 py-1 ${
                            currentPage === index + 1
                              ? "border border-main dark:border-main bg-main dark:bg-main text-white"
                              : "border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                          }`}
                        >
                          {index + 1}
                        </button>
                      )
                    )}
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={
                        currentPage === Math.ceil(orders.length / itemsPerPage)
                      }
                      className="px-3 py-1 rounded-r-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
