import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import all_product from '../assets/all_product';
import Item from './Item';
import Hero from "../assets/D-1.0-UHP-16052024-mainbanner-z1-p1-iconicsale-4080HP Desktop.avif"
import img2 from "../assets/D-1.0-UHP-16052024-MainBannerDailyChanging-Z1-P7-AX-SuperDry-min40-extra750.avif"
import img3 from "../assets/50504080326686.webp"
import img4 from "../assets/D-1.0-UHP-16052024-MainBannerDailyChanging-Z1-P1-BrandDay-DNMX-Flat60.avif"

const CheckNow = () => {
  const sortedProducts = all_product.slice().sort((a, b) => b.old_price - b.new_price - (a.old_price - a.new_price));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full z-10 relative">
      <Slider {...settings}>
        <div>
          <img src={Hero} alt="image" className="w-full object-cover h-auto" />
        </div>
        <div>
          <img src={img2} alt="image" className="w-full object-cover h-auto" />
        </div>
        <div>
          <img src={img3} alt="image" className="w-full object-cover h-auto" />
        </div>
        <div>
          <img src={img4} alt="image" className="w-full object-cover h-auto" />
        </div>
      </Slider>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedProducts.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} className="focus:outline-none">
            <div className="bg-white rounded-md shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
              <Item data={product} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CheckNow;

