import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from '../assets/google.png'
const Login = () => {
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-5xl mb-5 font-bold">Login</h1>
      <form className="flex flex-col w-96 h-3/5">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 mt-1 w-full p-3 outline-none border-2 border-gray-200 rounded-lg "
        />
        <button type="submit" className="border-2 border-gray-200 bg-gray-300 h-12 w-full font-bold rounded-lg">
          Login
        </button>
        <p className="mt-2 text-xs ">
          {"Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={handleClicked}
          >
            Sign Up
          </span>
        </p>
        <button type="submit" className="mt-5 bg-black text-white flex items-center justify-center gap-2 border-2  h-12 w-full font-bold rounded-lg">
          <img src={google} alt="google login" className="inline-block h-5" />
          <span>Login with Google</span>
        </button>
      </form>
    </div>
  );
};

export default Login;
