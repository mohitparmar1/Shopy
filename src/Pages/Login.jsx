import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [active, setActive] = useState(true);

  const navigate = useNavigate();
  const handleClicked = () => {
    navigate("/signup");
  };
  return (
    <div className="flex flex-col items-center justify-center w-full m-auto h-screen bg-gradient-to-b from-purple-100 to-white">
      <h1 className="text-2xl ml-0">Login</h1>
      <form className="flex flex-col w-4/3 h-1/2 p-10">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="mb-5 py-1 outline-none border-3"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="mb-5 py-1 outline-none "
        />
        <button type="submit" className="border-2 mt-4 w-full font-bold py-2">
          Login
        </button>
        <p className="mt-5">
          {"Don't have an account?"}
          <span
            className="text-blue-500 cursor-pointer ml-2"
            onClick={handleClicked}
          >
            Sign Up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
