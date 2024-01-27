import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Cart from "../assets/cart_icon.png";

const Navbar = () => {
  const { getCartQuantity } = useContext(ShopContext);
  return (
    <div className="flex items-center justify-around bg-white shadow-md  top-0 left-0 w-screen">
      <div className="text-orange-400 font-bold text-2xl mx-5 text-center">
        <h2 className="cursor-pointer ">
          <Link to="/">Shopy</Link>
        </h2>
      </div>
      <div className="">
        <ul className="flex flex-row font-Poppins">
          <li className="relative mx-3 cursor-pointer text-lg hover:text-orange-400 hover:font-semibold">
            <Link to="/women">Women</Link>
          </li>
          <li className="mx-3 cursor-pointer text-lg hover:text-orange-400 hover:font-semibold">
            <Link to="/mens">Men</Link>
          </li>
          <li className="mx-3 cursor-pointer text-lg hover:text-orange-400 hover:font-semibold">
            <Link to="/kids">Kids</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center mx-5">
        <button className="font-Poppins cursor-pointer text-lg m-5 border text-black bg-white border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">
          <img src={Cart} alt="cart" className="w-6 h-6 cursor-pointer" />
        </Link>
        <div className="relative -top-2 right-[10px] bg-orange-400 rounded-full w-4 h-4 text-xs text-white text-center pointer-events-none">
          {getCartQuantity()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
