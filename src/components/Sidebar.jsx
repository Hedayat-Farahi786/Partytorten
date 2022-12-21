import React from "react";
import { AiFillHome, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sideMenu/sideMenu";
import { Sidebar as SideBar } from "flowbite-react";
import { Link } from "react-router-dom";
import { toggleShowUserAccount } from "../features/userAccount/userAccount";

function Sidebar() {
  const showSidebar = useSelector((state) => state.sideMenu.showSidebar);

  const dispatch = useDispatch();

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
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-black hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-4 py-2 dark:bg-black dark:hover:opacity-70 dark:focus:ring-black"
                >
                  Search
                </button>
              </div>
            </form>

            <div className="sidemenu__items flex flex-col items-start my-8">
              <SideBar className="p-0">
                <SideBar.Items>
                  <SideBar.ItemGroup className="text-left text-sm">
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={AiFillHome}
                    >
                      <Link to="/">Home</Link>
                    </SideBar.Item>
                    <SideBar.Collapse icon={HiTable} label="Categories">
                      <SideBar.Item onClick={() => dispatch(toggleSidebar())}>
                        Men
                      </SideBar.Item>
                      <SideBar.Item onClick={() => dispatch(toggleSidebar())}>
                        Women
                      </SideBar.Item>
                      <SideBar.Item onClick={() => dispatch(toggleSidebar())}>
                        Accessories
                      </SideBar.Item>
                      <SideBar.Item onClick={() => dispatch(toggleSidebar())}>
                        Accessories
                      </SideBar.Item>
                    </SideBar.Collapse>
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={HiShoppingBag}
                    >
                      <Link to="/allProducts">Products</Link>
                    </SideBar.Item>
                    <SideBar.Item
                      onClick={() => dispatch(toggleSidebar())}
                      icon={AiFillInfoCircle}
                    >
                      About Us
                    </SideBar.Item>
                    <SideBar.Item
                      onClick={() => {
                        dispatch(toggleSidebar());
                        dispatch(toggleShowUserAccount());
                      }}
                      icon={HiUser}
                    >
                      Sign In
                    </SideBar.Item>
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
