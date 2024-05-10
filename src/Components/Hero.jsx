import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import arrow from "../assets/arrow.png";
const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${HeroImg})`}} className="relative w-full h-[560px] max-[440px]:h-[400px] bg-center bg-cover bg-custom-image">
      <div className="flex flex-col gap-5 py-16 ms-5 lg:ps-16 lg:m-14">
        <p className="text-sm text-black md:text-base lg:text-lg font-Poppins">
          SPRING/SUMMER COLLECTION 2021
        </p>
        <p className="text-2xl text-black md:text-4xl lg:text-5xl font-Poppins">
          Get up to 30% Off
        </p>
        <p className="text-2xl text-black md:text-4xl lg:text-5xl font-Poppins">
          New Arrivals
        </p>
        <button className="p-1 text-base text-white bg-black border border-gray-400 cursor-pointer font-Poppins md:text-lg rounded-3xl active:bg-slate-200 top-36 max-w-40">
          <a href="/women">Shop Now</a>
        </button>
      </div>

    </div>
  );
};

export default Hero;
