import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import arrow from "../assets/arrow.png";
const Hero = () => {
  return (
    <div style={{backgroundImage: `url(${HeroImg})`}} className="relative w-full h-[560px] max-[440px]:h-[400px] bg-center bg-cover bg-custom-image">
      <div className="flex flex-col gap-5  ms-5 absolute top-[50%] lg:left-40 left-[10%] translate-y-[-50%] w-fit">
        <p className="text-lg text-black md:text-xl font-Poppins">
          SPRING/SUMMER COLLECTION 2021
        </p>
        <p className="text-4xl font-bold text-black md:text-6xl font-Poppins">
          Get up to 30% Off
        </p>
        <p className="text-4xl font-bold text-black md:text-6xl font-Poppins">
          New Arrivals
        </p>
        <button className="p-2 md:p-3 text-base text-white bg-black cursor-pointer font-Poppins md:text-lg rounded-full active:bg-slate-200 top-36 max-w-40">
          <a href="/women">Shop Now</a>
        </button>
      </div>

    </div>
  );
};

export default Hero;
