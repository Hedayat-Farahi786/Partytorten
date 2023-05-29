import { Badge, Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import {
  AiOutlineSearch,
  AiOutlinePhone,
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import {
  HiMenu,
  HiOutlineLogin,
  HiOutlineShoppingBag,
  HiOutlineUserCircle,
  HiUserCircle,
} from "react-icons/hi";
import packageJson from "../../package.json";
import { useDispatch, useSelector } from "react-redux";
import { toggleShoppingCartSidebar } from "../features/shoppingCartSidebar/shoppingCartSidebar";
import ShoppingCartSidebar from "./ShoppingCartSidebar";
import { toggleSidebar } from "../features/sideMenu/sideMenu";
import Sidebar from "./Sidebar";
import Filter from "./Filter";
import UserAccount from "./UserAccount";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/text-logo.png";
import {
  loginUser,
  logoutUser,
  toggleLoggedIn,
  toggleShowUserAccount,
} from "../features/userAccount/userAccount";

function Topbar() {
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.shoppingCart.cart);

  const [stickyClass, setStickyClass] = useState("relative");
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

  let total = 0;
  cart.forEach((item) => {
    total += item.product.price * item.quantity;
  });

  const loggedIn = useSelector((state) => state.userAccount.loggedIn);
  const user = useSelector((state) => state.userAccount.user);

  const decodeToken = (token) => {
    return JSON.parse(
      decodeURIComponent(
        atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          .split("")
          .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
          .join("")
      )
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    let token = localStorage.getItem("token");
    if (token) {
      dispatch(toggleLoggedIn(true));
      dispatch(loginUser(decodeToken(token)));
    } else {
      dispatch(toggleLoggedIn(false));
    }

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const dispatch = useDispatch();

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass(
            "fixed top-0 left-0 z-50 shadow-md transition duration-1000 ease-in"
          )
        : setStickyClass("relative");
    }
  };

  return (
    <div className={`topbar__top w-full bg-white ${stickyClass}`}>
      <ShoppingCartSidebar />
      <Sidebar />
      <Filter />
      <UserAccount />
      <div className="w-11/12 md:w-10/12 mx-auto py-4 flex items-center justify-between">
        <div className="logo flex items-center space-x-4">
          <HiMenu
            onClick={() => dispatch(toggleSidebar())}
            size={30}
            className="block md:hidden cursor-pointer"
          />
          {/* <img src={logo} alt="logo" className="w-14 mr-10" /> */}
          <div className="flex items-start space-x-3">
            <Link to="/">
              <img className="my-1 md:my-3 w-36 md:w-52" src={logo} alt="" />
            </Link>
            {/* <Badge color="gray">{packageJson.version}</Badge> */}
          </div>
        </div>
        <div className="hidden md:flex search w-5/12 h-12 relative rounded-md overflow border-black border">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className="w-full h-full rounded-md border-0 text-sm px-4"
            placeholder="Search..."
          />
          <span className="absolute text-gray-900 right-4 top-1/2 transform -translate-y-1/2">
            <AiOutlineSearch size={20} />
          </span>

          {searchResults.length > 0 && showResults && (
            <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] absolute bg-white w-full top-12 rounded-md p-3 z-20">
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
                            className="w-14 h-14 object-cover rounded"
                            alt={product.name}
                          />
                          <div className="w-full flex flex-col items-start">
                            <p className="text-[10px] text-gray-500">
                              {product.category}
                            </p>
                            <p className="text-base font-semibold">
                              {product.name}
                            </p>
                            <div className="w-10/12 text-left text-gray-600">
                              <p className="w-full text-xs truncate text-ellipsis">
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

        <div className="flex xl:hidden space-x-5">
          {/* Don't show the phone icon in mobile view */}
          {/* <AiOutlinePhone size={35} className="rotate-90" /> */}

          <div
            onClick={() => dispatch(toggleShoppingCartSidebar())}
            className="shoppingCart relative"
          >
            <HiOutlineShoppingBag size={30} />
            <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-5 h-5 text-xs font-bold text-white bg-main rounded-full border-2 border-white dark:border-gray-900">
              {cart.length}
            </div>
          </div>

          {loggedIn ? (
            <Dropdown
              label={
                <HiOutlineUserCircle
                  className="transition-all duration-150 ease-linear hover:text-main"
                  size={30}
                />
              }
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">
                  {user.email}
                </span>
              </Dropdown.Header>
              {/* <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Divider /> */}
              <Dropdown.Item>
                <Link to='/orders'>
                My Orders
                </Link>
              </Dropdown.Item>
              <Dropdown.Item onClick={() => dispatch(logoutUser())}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            // <div
            //   onClick={() => dispatch(toggleShowUserAccount())}
            //   className="topbar__down__right flex items-center justify-center text-sm space-x-4 font-semibold cursor-pointer"
            // >
            //   <p>Sign In / Sign Up</p>
            //   <AiOutlineUser size={18} />
            // </div>

            // <button
            // onClick={() => dispatch(toggleShowUserAccount())}
            //       className="text-white bg-main font-medium rounded-lg text-xs px-4 py-1"
            //     >
            //       Login
            //     </button>

            <HiOutlineLogin
              onClick={() => dispatch(toggleShowUserAccount())}
              size={30}
            />
          )}
        </div>
        <div className="hidden xl:flex actions items-center space-x-5">
          {/* <div className="actions__item flex items-center space-x-2">
            <AiOutlinePhone size={40} className="rotate-90" />
            <div className="flex flex-col items-start">
              <p className="text-xs">Call Us Now:</p>
              <p className="text-sm font-bold">0(800)123-456</p>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div> */}
          {/* <div className="actions__item cursor-pointer transition-all duration-150 ease-linear hover:text-main">
            <Link to="/wishlist">
              <AiOutlineHeart size={40} />
            </Link>
          </div>
          <div className="w-px h-12 bg-gray-300"></div> */}
          <div
            onClick={() => dispatch(toggleShoppingCartSidebar())}
            className="actions__item flex items-center space-x-2 transition-all duration-150 ease-linear hover:text-main cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <p className="text-xs">Shopping Cart:</p>
              <p className="text-sm font-bold">€{total.toFixed(2)}</p>
            </div>
            <div className="shoppingCart relative">
              <HiOutlineShoppingBag size={40} />
              <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-main rounded-full border-2 border-white dark:border-gray-900">
                {cart.length}
              </div>
            </div>
          </div>
          <div className="w-px h-12 bg-gray-300"></div>

          {loggedIn ? (
            <div className="actions__item flex items-center space-x-2 transition-all duration-150 ease-linear cursor-pointer">
              <div className="flex flex-col items-end">
                <p className="text-xs">Logged In As:</p>
                <p className="text-sm font-bold">{user.name}</p>
              </div>
              <Dropdown
                label={
                  <HiOutlineUserCircle
                    className="transition-all duration-150 ease-linear hover:text-main"
                    size={40}
                  />
                }
                arrowIcon={false}
                inline={true}
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user.name}</span>
                  <span className="block truncate text-sm font-medium">
                    {user.email}
                  </span>
                </Dropdown.Header>
                {/* <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Divider /> */}
                <Dropdown.Item onClick={() => dispatch(logoutUser())}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
              {/* <HiOutlineUserCircle size={30} /> */}
            </div>
          ) : (
            // <div
            //   onClick={() => dispatch(toggleShowUserAccount())}
            //   className="topbar__down__right flex items-center justify-center text-sm space-x-4 font-semibold cursor-pointer"
            // >
            //   <p>Sign In / Sign Up</p>
            //   <AiOutlineUser size={18} />
            // </div>

            <div
              onClick={() => dispatch(toggleShowUserAccount())}
              className="actions__item flex items-center space-x-2 transition-all duration-150 ease-linear hover:text-main cursor-pointer"
            >
              <div className="flex flex-col items-end">
                <p className="text-xs">Register or:</p>
                <p className="text-sm font-bold">Login</p>
              </div>
              <HiOutlineLogin size={40} />
            </div>
          )}

          {/* <div
            onClick={() => dispatch(toggleShoppingCartSidebar())}
            className="actions__item flex items-center space-x-2 transition-all duration-150 ease-linear hover:text-main cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <p className="text-xs">Logged In As:</p>
              <p className="text-sm font-bold">Aman Farahi</p>
            </div>
              <HiOutlineUserCircle size={40} />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
