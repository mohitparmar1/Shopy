import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import HeroImg2 from "../assets/hero1.jpg";
import HeroImg3 from "../assets/Hero.jpg";
import arrow from "../assets/arrow.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Hero = () => {
  const data = [
    {
      img:HeroImg,
      index: 1,
    },
    {
      img:HeroImg2 ,
      index: 2,
    },
    {
      img: HeroImg3,
      index: 3,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnSelect: true,

  };
  return (
    <div className="w-full z-10 relative">
      <div className="flex z-20 relative items-center flex-col">
        <p className="text-sm md:text-base lg:text-lg   font-Poppins text-center text-black pt-10 md:pt-20 absolute top-28 left-0 md:left-[250px]">
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

      {/* <img src={HeroImg} alt="image" /> */}
      <Slider {...settings}>
       {/* <Slider {...settings}> */}
     
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-white z-0  shadow-md gap-2 p-1  text-black"
          >
            <div className=" mt-14 rounded-t-xl px-16 flex justify-center p-2 items-center  ">
              <img src={d.img} className=" h-96 w-full" alt="kkk" />
            </div>
            {/* <div className="flex-col flex bg-white font-semibold justify-center items-center gap-2 p-4 ">
                <p className="text-lg  font-semibold ">{d.Name}</p>
                <p>{d.description}</p>
              </div> */}
          </div>
        ))}
        {/* </Slider> */}
        </Slider>
      
    </div>
  );
};

export default Hero;
