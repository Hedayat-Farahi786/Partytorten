import React from "react";
import { CgCloseO } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowUserAccount } from "../features/userAccount/userAccount";
import { toggleIsLogin } from "../features/userSign/userSign";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function UserAccount() {
  const showUserAccount = useSelector(
    (state) => state.userAccount.showUserAccount
  );

  const isLogin = useSelector((state) => state.userSign.isLogin);

  const dispatch = useDispatch();

  return (
    <>
      {showUserAccount && (
        <div
          className="transition-all duration-200 ease-linear fixed flex items-start md:items-center pt-24 md:pt-0 justify-center top-0 left-0 bottom-0 right-0 h-full w-full z-50 bg-[#000000c9] overflow-hidden"
          id="review"
        >
          <div className="w-10/12 md:w-full relative bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div
              onClick={() => dispatch(toggleShowUserAccount())}
              className="absolute top-5 right-5 cursor-pointer"
            >
              <CgCloseO size={24} />
            </div>
            <div className="p-8 space-y-6 md:space-y-6 sm:p-8">
              <div className="font-bold text-xl flex items-center space-x-2 justify-center">
                <span
                  onClick={() => dispatch(toggleIsLogin())}
                  className="transition-all duration-150 ease-linea cursor-pointer"
                >
                  <span
                    className={
                      !isLogin ? "text-lg text-gray-500" : "text-3xl text-black"
                    }
                  >
                    Login
                  </span>
                </span>
                <span className="font-light">or</span>
                <span
                  onClick={() => dispatch(toggleIsLogin())}
                  className="transition-all duration-150 ease-linear text-black text-3xl cursor-pointer"
                >
                  <span
                    className={
                      isLogin ? "text-lg text-gray-500" : "text-3xl text-black"
                    }
                  >
                    Register
                  </span>
                </span>
              </div>
              {isLogin ? <SignIn /> : <SignUp />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UserAccount;
