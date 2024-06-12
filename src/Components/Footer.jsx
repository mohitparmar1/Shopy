import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <>
      <div className="flex items-center justify-between py-12 bg-gradient-to-b from-purple-100 to-white">
        <div className="">
          {/* <p className="ml-5 text-4xl font-bold text-orange-400 cursor-pointer">Shopy</p> */}
          <h2 className="ml-5 text-4xl font-bold text-orange-400 cursor-pointer">
          <Link to="/">Shopy</Link>
        </h2>
          <p className="ml-5 text-gray-400">Connecting people through fashion.</p>
        </div>

        <div className="max-w-2xl mb-3 text-center">
          <h2 className="mb-2 text-3xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-2 text-gray-600 ">
            Get updates on the latest collections, promotions, and more.
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-1/2 p-2 border rounded-l-full focus:outline-none"
            />
            <button className="px-6 text-white bg-black rounded-r-full hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shopy section */}

        {/* Copyright section */}
        <div className="flex items-center justify-center mb-4 space-x-4 cursor-pointer">
          <p>Follow us on</p>
          <img src={instaIcon} alt="Instagram" />
          <img src={whatsappIcon} alt="WhatsApp"  />
          <img src={pintesterIcon} alt="Pinterest"  />
        </div>
      </div>
      <div className="flex items-center space-x-10 justify-evenly">
        <button className="hover:bg-orange-400 hover:text-white focus:outline-none">
          <a href="#" className="block p-2">Home</a>
        </button>
        <button className="hover:bg-orange-400 hover:text-white focus:outline-none">
          <a href="#" className="block p-2">Products</a>
        </button>
        <button className="hover:bg-orange-400 hover:text-white focus:outline-none">
          <a href="/about" className="block p-2">About Us</a>
        </button>
        <button className="hover:bg-orange-400 hover:text-white focus:outline-none">
          <a href="/contact" className="block p-2">Contact</a>
        </button>
      </div>
      <hr className="border-black" />
      <div className="">
        <p className="mt-2 ml-5 text-sm text-center text-black">&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
