import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLogin } from "../features/userSign/userSign";

function Login() {
  const isLogin = useSelector((state) => state.userSign.isLogin);

  const dispatch = useDispatch();

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div className="flex flex-col items-start">
        <label
          for="email"
          className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email..."
          required=""
        />
      </div>
      <div className="flex flex-col items-start">
        <label
          for="password"
          className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password..."
          className="bg-gray-50 text-xs md:text-sm border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required=""
        />
      </div>
      <div className="flex items-center justify-between text-xs md:text-sm">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-500 dark:text-gray-300">
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-xs md:text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-black font-bold p-2 md:py-3 rounded-md"
      >
        Sign in
      </button>
      <button
        type="submit"
        className="w-full flex items-center justify-center space-x-4 text-gray-900 border bg-white font-bold py-2 md:py-3 rounded-md"
      >
        <FcGoogle size={24} />
        <span>Log in with Google</span>
      </button>
      <p className="text-xs md:text-sm font-light text-gray-500 dark:text-gray-400">
        Don’t have an account yet?{" "}
        <a
          onClick={() => dispatch(toggleIsLogin())}
          className="font-medium cursor-pointer text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign up
        </a>
      </p>
    </form>
  );
}

export default Login;
