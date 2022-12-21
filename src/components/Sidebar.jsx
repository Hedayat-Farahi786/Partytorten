import { TextInput } from "flowbite-react";
import React from "react";
import { AiFillHome, AiFillInfoCircle, AiOutlineClose } from "react-icons/ai";
import { HiSearch, HiShoppingBag, HiTable, HiUser } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/sideMenu/sideMenu";
import { Sidebar as SideBar } from "flowbite-react";

function Sidebar() {
  const showSidebar = useSelector((state) => state.sideMenu.showSidebar);

  const dispatch = useDispatch();

  return (
    <>
      {showSidebar && (
        <div className="sidemenu flex z-30 fixed top-0 right-0 left-0 bottom-0 bg-[#00000078] h-full w-full">
          <div className="sidemenu__left h-full w-9/12 bg-white">
            <form className="px-4 pt-6">
              <TextInput
                id="search"
                type="text"
                placeholder="Search..."
                icon={HiSearch}
              />
            </form>

            <div className="sidemenu__items flex flex-col items-start my-8">
              <SideBar className="p-0">
                <SideBar.Items>
                  <SideBar.ItemGroup className="text-left text-sm">
                    <SideBar.Item icon={AiFillHome}>Home</SideBar.Item>
                    <SideBar.Collapse icon={HiTable} label="Categories">
                      <SideBar.Item>Men</SideBar.Item>
                      <SideBar.Item>Women</SideBar.Item>
                      <SideBar.Item>Accessories</SideBar.Item>
                      <SideBar.Item>Accessories</SideBar.Item>
                    </SideBar.Collapse>
                    <SideBar.Item icon={HiShoppingBag}>Products</SideBar.Item>
                    <SideBar.Item icon={AiFillInfoCircle}>
                      About Us
                    </SideBar.Item>
                    <SideBar.Item icon={HiUser}>Sign In</SideBar.Item>
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
