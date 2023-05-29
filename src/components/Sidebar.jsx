import React from "react";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlinePoweroff,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { BiCategory, BiShoppingBag, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sideMenu/sideMenu";
import { Sidebar as SideBar } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  logoutUser,
  toggleShowUserAccount,
} from "../features/userAccount/userAccount";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useState } from "react";

function Sidebar() {
  const showSidebar = useSelector((state) => state.sideMenu.showSidebar);
  const loggedIn = useSelector((state) => state.userAccount.loggedIn);

  const categories = useSelector((state) => state.products.categories);
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Function to handle search term change
  const handleSearchTermChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);

    if (newSearchTerm.trim() === "") {
      setShowResults(false);
      setSearchResults([]); // Clear search results if input is empty
    } else {
      // Perform search operation here, e.g., fetch data from an API
      // and update searchResults state with the matching products
      // For demonstration purposes, I'll use a simple array of products

      const filteredResults = products.filter((product) =>
        product.name.toLowerCase().includes(newSearchTerm.toLowerCase())
      );

      setShowResults(true);
      setSearchResults(filteredResults);
    }
  };

  return (
    <>
      {showSidebar && (
        <div className="sidemenu flex z-30 fixed top-0 right-0 left-0 bottom-0 bg-[#00000078] h-full w-full">
          <div className="sidemenu__left h-full w-9/12 bg-white">
            <form className="px-4 pt-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block text-xs w-full p-4 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchTermChange}
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-main hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:opacity-70 dark:focus:ring-black"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="w-full bg-red-500 relative">
              {searchResults.length > 0 && showResults && (
                <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] absolute bg-white w-full top-0 rounded-md p-3 z-20">
                  <ul className="w-full flex flex-col items-start space-y-4 overflow-clip">
                    <div className="text-right w-full">
                      <p className="text-[10px]">
                        Found <strong>{searchResults.length}</strong> results
                      </p>
                    </div>
                    {searchResults.map((product, index) => (
                      <div className="w-full">
                        <Link
                          onClick={() => {
                            setShowResults(false);
                            dispatch(toggleSidebar());
                            setSearchTerm("");
                          }}
                          to={`/products/${product._id}`}
                          className="cursor-pointer"
                        >
                          <li
                            key={product._id}
                            class={`w-full pb-2 ${
                              index !== searchResults.length - 1
                                ? "border-b border-gray-300"
                                : ""
                            }`}
                          >
                            <div className="flex items-center space-x-2">
                              <img
                                src={product.image}
                                className="w-12 h-12 object-cover rounded"
                                alt={product.name}
                              />
                              <div className="w-full flex flex-col items-start">
                                <p className="text-[8px] text-gray-500">
                                  {product.category}
                                </p>
                                <p className="text-sm font-semibold">
                                  {product.name}
                                </p>
                                <div className="w-10/12 text-left text-gray-600">
                                  <p className="w-full text-[10px] truncate text-ellipsis">
                                    €{product.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="sidemenu__items flex flex-col items-start my-8">
              <SideBar className="p-0">
                <SideBar.Items>
                  <SideBar.ItemGroup className="text-left text-sm">
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={AiOutlineHome}
                    >
                      <Link to="/">Home</Link>
                    </SideBar.Item>
                    <SideBar.Collapse icon={BiCategory} label="Categories">
                      {categories.map((category) => (
                        <SideBar.Item
                          key={category._id}
                          onClick={() => dispatch(toggleSidebar())}
                        >
                          <Link to="/allProducts">{category.name}</Link>
                        </SideBar.Item>
                      ))}
                    </SideBar.Collapse>
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={BiShoppingBag}
                    >
                      <Link to="/allProducts">Products</Link>
                    </SideBar.Item>
                    {loggedIn && (
                      <SideBar.Item
                        onClick={() => dispatch(toggleSidebar())}
                        icon={AiOutlineUnorderedList}
                      >
                      <Link to="/orders">My Orders</Link>
                      </SideBar.Item>
                    )}
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={AiOutlineInfoCircle}
                    >
                      About Us
                    </SideBar.Item>
                    {loggedIn ? (
                      <SideBar.Item
                        onClick={() => {
                          dispatch(toggleSidebar());
                          dispatch(logoutUser());
                        }}
                        icon={AiOutlinePoweroff}
                      >
                        Logout
                      </SideBar.Item>
                    ) : (
                      <SideBar.Item
                        onClick={() => {
                          dispatch(toggleSidebar());
                          dispatch(toggleShowUserAccount());
                        }}
                        icon={BiUser}
                      >
                        Sign In
                      </SideBar.Item>
                    )}
                  </SideBar.ItemGroup>
                </SideBar.Items>
              </SideBar>
            </div>
          </div>
          <div
            onClick={() => dispatch(toggleSidebar())}
            className="sidemenu__right flex px-8 py-5 justify-end w-3/12"
          >
            <AiOutlineClose size={40} className="text-white cursor-pointer" />
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
