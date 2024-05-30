import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import HeroImg from "../assets/hero2.jpg";
import HeroImg1 from "../assets/austin-distel-7uoMmzPd2JA-unsplash.jpg";
import HeroImg2 from "../assets/averie-woodard-4nulm-JUYFo-unsplash.jpg";
import HeroImg3 from "../assets/dennys-lennon-DCslPWw7Bs0-unsplash.jpg";
import HeroImg4 from "../assets/Hero.jpg";
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
          <img
            src={HeroImg}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
        <div>
          <img
            src={HeroImg1}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
        <div>
          <img
            src={HeroImg2}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
        <div>
          <img
            src={HeroImg3}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
        <div>
          <img
            src={HeroImg4}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
        <div>
          <img
            src={HeroImg5}
            alt="image"
            className="w-full object-cover"
            style={{
              height: "540px",
            }}
          />
        </div>
      </Slider>

      <div className="flex items-center flex-col">
        <p className="text-sm md:text-base lg:text-lg font-Poppins text-center text-black dark:text-white pt-10 md:pt-20 absolute top-28 left-0 md:left-[250px]">
          SPRING/SUMMER COLLECTION 2021
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-Poppins text-center text-black dark:text-white pt-16 md:pt-32 absolute top-32 left-0 md:left-[250px]">
          Get up to 30% Off
        </p>
        <p className="text-2xl md:text-4xl lg:text-5xl font-Poppins text-center text-black dark:text-white pt-16 md:pt-32 absolute top-44 left-0 md:left-[250px]">
          New Arrivals
        </p>
        <button className="flex items-center font-Poppins cursor-pointer text-base md:text-lg border text-white bg-black dark:bg-white dark:text-black border-gray-400 rounded-3xl px-4 py-1 active:bg-slate-200 absolute top-80 md:top-96 left-0 md:left-[250px]">
          <Link to="/women">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
