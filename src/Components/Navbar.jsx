import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { SavedContext } from "../Context/SavedContext";
import Cart from "../assets/cart_icon.png";
import Wishlist from "../assets/wishlist_icon.png";
import { Search } from "@mui/icons-material";
import DarkModeToggle from './DarkModeToggle'


const Navbar = () => {
  const { getCartQuantity } = useContext(ShopContext);
  const { getListQuantity } = useContext(SavedContext);

  return (
    <div className="flex items-center justify-around bg-white dark:bg-gray-800 shadow-md top-0 left-0 w-full sticky z-20 font-[Helvetica]">
      <div className="text-orange-400 font-bold text-2xl mx-5 text-center">
        <h2 className="cursor-pointer">
          <Link to="/">Shopy</Link>
        </h2>
      </div>

      <div className="flex gap-5 items-center space-x-4 text-black dark:text-white font-semibold">
        <Link to="/" className="hover:text-orange-400 dark:hover:text-orange-300 transition-all ease-in-out hover:scale-110 duration-300">
          Home
        </Link>
        <div className="relative z-20">
          <span className="hover:text-orange-400 dark:hover:text-orange-300 cursor-pointer transition-all ease-in-out hover:scale-110 duration-300">
            Products
          </span>
          <ul className="absolute hidden bg-white dark:bg-gray-800 border rounded-md shadow-md z-10 text-black dark:text-white">
            <li className="py-2 px-4 hover:text-orange-400 dark:hover:text-orange-300">
              <Link to="/women">Women</Link>
            </li>
            <li className="py-2 px-4 hover:text-orange-400 dark:hover:text-orange-300">
              <Link to="/mens">Men</Link>
            </li>
            <li className="py-2 px-4 hover:text-orange-400 dark:hover:text-orange-300">
              <Link to="/kids">Kids</Link>
            </li>
          </ul>
        </div>
        <Link to="/about" className="hover:text-orange-400 dark:hover:text-orange-300 transition-all ease-in-out hover:scale-110 duration-300">
          About Us
        </Link>
        <Link to="/contact" className="hover:text-orange-400 dark:hover:text-orange-300 transition-all ease-in-out hover:scale-110 duration-300">
          Contact
        </Link>
        <style jsx>{`
          .relative:hover .absolute {
            display: block;
          }
        `}</style>
      </div>

      <div className="flex items-center mx-5">
        <button className="font-Poppins cursor-pointer text-lg m-5 border text-black dark:text-white bg-white dark:bg-gray-800 border-gray-400 dark:border-gray-600 rounded-3xl px-4 py-1 active:bg-slate-200 dark:active:bg-slate-700">
          <Link to="/login" className="hover:text-orange-400 dark:hover:text-orange-300">
            Login
          </Link>
        </button>
        <Link to="/search">
          
          <div className="cursor-pointer mr-2"><Search /></div>
        </Link>
        <Link to="/cart">
          <img src={Cart} alt="cart" className="w-6 h-6 cursor-pointer filter dark:invert transition-all ease-in-out hover:scale-110 duration-300" />
        </Link>
        <div className="relative -top-2 right-[10px] bg-orange-400 rounded-full w-4 h-4 text-xs text-white text-center pointer-events-none">
          {getCartQuantity()}
        </div>
        <Link to="/wishlist">
          <img src={Wishlist} alt="wishlist" className="w-6 h-6 cursor-pointer filter dark:invert transition-all ease-in-out hover:scale-110 duration-300" />
        </Link>
        <div className="relative -top-2 right-[10px] bg-orange-400 rounded-full w-4 transition-all ease-in-out hover:scale-110 duration-300 h-4 text-xs text-white text-center pointer-events-none">
          {getListQuantity()}
        </div>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
