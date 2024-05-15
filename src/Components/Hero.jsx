import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import arrow from "../assets/arrow.png";
const Hero = () => {
  return (
    <div className="w-full z-10 relative">
      <div className="flex items-center flex-col">
        <p className="text-sm md:text-base lg:text-lg font-Poppins text-center text-black pt-10 md:pt-20 absolute top-28 left-0 md:left-[250px]">
          SPRING/SUMMER COLLECTION 2021
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-Poppins text-center text-black pt-16 md:pt-32 absolute top-32 left-0 md:left-[250px]">
          Get up to 30% Off
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-Poppins text-center text-black pt-16 md:pt-32 absolute top-44 left-0 md:left-[250px]">
          New Arrivals
        </p>
        <button className="flex items-center font-Poppins cursor-pointer text-base md:text-lg border text-white bg-black border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200 absolute top-80 md:top-96 left-0 md:left-[250px]">
          <a href="/women">Shop Now</a>
        </button>
      </div>

      <img src={HeroImg} alt="image" />
    </div>
  );
};

export default Hero;
