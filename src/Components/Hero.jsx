import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import HeroImg1 from "../assets/averie-woodard-4nulm-JUYFo-unsplash.jpg";
import HeroImg6 from "../assets/austin-distel-7uoMmzPd2JA-unsplash.jpg";
import HeroImg2 from "../assets/dennys-lennon-DCslPWw7Bs0-unsplash.jpg";
import HeroImg3 from "../assets/Hero.jpg";
import HeroImg4 from "../assets/greg-raines-rqFBIR6vQXg-unsplash.jpg";
import HeroImg5 from "../assets/mubariz-mehdizadeh-t3zrEm88ehc-unsplash.jpg";

import arrow from "../assets/arrow.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (

    <div className="w-full z-10 relative">
      <Slider {...settings}>
        <div>
          <img src={HeroImg} alt="image" className="w-full object-fill" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg1} alt="image" className="w-full  object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg2} alt="image" className="w-full object-cover"  style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg6} alt="image" className="w-full object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg3} alt="image" className="w-full object-cover" style={{
            height : "540px",

          }}/>
        </div>
        <div>
          <img src={HeroImg4} alt="image" className="w-full object-cover" style={{
            height : "540px"
          }}/>
        </div>
        <div>
          <img src={HeroImg5} alt="image" className="w-full object-cover" style={{
            height : "540px"
          }}/>
        </div>
      </Slider>

      <div className="flex items-center flex-col">
        <p className="text-sm md:text-base lg:text-lg font-Poppins text-center text-black pt-10 md:pt-20 absolute top-28 left-0 md:left-[250px]">

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
