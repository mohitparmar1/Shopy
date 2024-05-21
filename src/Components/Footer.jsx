import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-100 to-white text-black py-10 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between absolute bottom-0">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-orange-400">Shopy</h2>
          <p className="text-gray-400">Connecting people through fashion.</p>
        </div>

        <div className="max-w-2xl text-center mb-3">
          <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-2 ">
            Get updates on the latest collections, promotions, and more.
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-1/2 border p-2 rounded-l-full focus:outline-none"
            />
            <button className="bg-black text-white px-6 hover:bg-blue-600 focus:outline-none rounded-r-full">
              Subscribe
            </button>
          </div>
        </div>

        {/* Shopy section */}

        {/* Copyright section */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <p>Follow us on</p>
          <img src={instaIcon} alt="Instagram" />
          <img src={whatsappIcon} alt="WhatsApp" />
          <img src={pintesterIcon} alt="Pinterest" />
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 justify-evenly">
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
          <a href="#" className="block p-2">Contact</a>
        </button>
      </div>
      <hr className="border-black" />
      <div className="">
        <p className="text-sm text-black ml-5 mt-2 text-center">&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
