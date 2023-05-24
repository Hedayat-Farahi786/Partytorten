import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toggleIsLogin } from "../features/userSign/userSign";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { loginUser, toggleLoggedIn, toggleShowUserAccount } from "../features/userAccount/userAccount";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm();




  const [loading, setLoading] = useState(false);

  const isLogin = useSelector((state) => state.userSign.isLogin);

  const decodeToken = (token) => {
    return JSON.parse(
      decodeURIComponent(
        atob(token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'))
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    );
  }


  const onSubmit = (data) => {
    setLoading(true);
    axios.post('https://partytorten-backend.vercel.app/login', data).then(res => {
      const token = res.data.token;
      localStorage.setItem('token', token);
      setLoading(false);
      dispatch(toggleLoggedIn(true));
      dispatch(loginUser(decodeToken(token)));
      dispatch(toggleShowUserAccount());
      reset();
      toast.success('Logged In Successfully!');
    }).catch(err => {
      if(err.response.data.message === "Invalid email"){
        toast.error("User with this email does not exist!")
      }else if(err.response.data.message === "Invalid password"){
        toast.error("Incorrect Password!")
      } else {
        toast.error(err.response.data.message);
      }
      setLoading(false);

    })
  };

  const dispatch = useDispatch();

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col items-start">
        <label
          for="email"
          className="block mb-2 text-xs md:text-sm font-medium text-gray-900 dark:text-white"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-xs md:text-sm sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email..."
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <span className="text-left text-xs text-red-500">
            {errors.email.message}
          </span>
        )}
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
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="text-left text-xs text-red-500">
            {errors.password.message}
          </span>
        )}
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
        className="w-full text-white bg-black font-bold p-2 md:py-3 rounded-md flex items-center justify-center text-center"
      >
        <div className="flex items-center space-x-2">
          {loading && <AiOutlineLoading3Quarters className="animate-spin" />}
          <p>Login</p>
        </div>
      </button>
      {/* <button
        type="submit"
        className="w-full flex items-center justify-center space-x-4 text-gray-900 border bg-white font-bold py-2 md:py-3 rounded-md"
      >
        <FcGoogle size={24} />
        <span>Log in with Google</span>
      </button> */}
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
