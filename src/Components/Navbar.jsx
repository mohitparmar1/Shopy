import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import {SavedContext} from "../Context/SavedContext"
import Cart from "../assets/cart_icon.png";
import Wishlist from "../assets/wishlist_icon.png";


const Navbar = () => {
  const { getCartQuantity } = useContext(ShopContext);
  const { getListQuantity }=useContext(SavedContext);
  return (
    <div className="flex items-center justify-around bg-white shadow-md  top-0 left-0 w-screen">
      <div className="text-orange-400 font-bold text-2xl mx-5 text-center">
        <h2 className="cursor-pointer ">
          <Link to="/">Shopy</Link>
        </h2>
      </div>
      <div className="flex items-center space-x-4">
  <a href="/" className="hover:text-orange-400">
    Home
  </a>
  <div className="relative z-20">
    <a href="#" className="hover:text-orange-400">
      Products
    </a>
    <ul className="absolute hidden bg-white border rounded-md shadow-md z-10">
      <li className="py-2 px-4 hover:text-orange-400">
        <Link to="/women">Women</Link>
      </li>
      <li className="py-2 px-4 hover:text-orange-400">
        <Link to="/mens">Men</Link>
      </li>
      <li className="py-2 px-4 hover:text-orange-400">
        <Link to="/kids">Kids</Link>
      </li>
    </ul>
  </div>
  <a href="/about" className="hover:text-orange-400">
    About Us
  </a>
  <a href="#" className="hover:text-orange-400">
    Contact
  </a>
  {/* <style jsx>{`
  .relative:hover .absolute {
    display: block;
  }
`}</style> */}
</div>
      <div className="flex items-center mx-5">
        <button className="font-Poppins cursor-pointer text-lg m-5 border text-white bg-orange-300   hover:bg-orange-400 border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200">
          <Link to="/login" className="hover:bg-orange-400" >Login</Link>
        </button>
        <Link to="/cart">
          <img src={Cart} alt="cart" className="w-6 h-6 cursor-pointer" />
        </Link>
        <div className="relative -top-2 right-[10px] bg-orange-400 rounded-full w-4 h-4 text-xs text-white text-center pointer-events-none">
          {getCartQuantity()}
        </div>
        <Link to="/wishlist">
          <img src={Wishlist} alt="wishlist" className="w-6 h-6 cursor-pointer" />
        </Link>
        <div className="relative -top-2 right-[10px] bg-orange-400 rounded-full w-4 h-4 text-xs text-white text-center pointer-events-none">
          {getListQuantity()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
