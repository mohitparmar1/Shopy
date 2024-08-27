import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white py-12 flex flex-col items-center">
      {/* Shopy section */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-orange-400">Shopy</h2>
        <p className="text-gray-400">Connecting people through fashion.</p>
      </div>

      {/* Newsletter subscription */}
      <div className="max-w-md text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-2">
          Get updates on the latest collections, promotions, and more.
        </p>
        <div className="flex flex-col sm:flex-row justify-center mb-4">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full border p-1 mx-8  text-sm rounded-l-full rounded-r-full focus:outline-none mb-2 sm:mb-0 sm:rounded-l-full"
            style={{ fontSize: '0.975rem', padding: '0.6rem', width: '66%' }}
          />

          <button className="bg-black text-white px-6 mx-8 hover:bg-blue-600 focus:outline-none rounded-r-full rounded-l-full  sm:rounded-r-full  sm:rounded-l-full" style={{ fontSize: '0.975rem', padding: '0.6rem', width: '66%' }}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Social media section */}
      <div className="flex flex-wrap items-center justify-center space-x-4 mb-6">
        <p className="mr-2">Follow us on</p>
        <img src={instaIcon} alt="Instagram" className="w-8 h-8" />
        <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
        <img src={pintesterIcon} alt="Pinterest" className="w-8 h-8" />
      </div>

      {/* Navigation links */}
      <div className="flex flex-wrap justify-center space-x-4 mb-6">
        <a href="#" className="p-2 hover:bg-orange-400 hover:text-white rounded focus:outline-none">Home</a>
        <a href="#" className="p-2 hover:bg-orange-400 hover:text-white rounded focus:outline-none">Products</a>
        <a href="/about" className="p-2 hover:bg-orange-400 hover:text-white rounded focus:outline-none">About Us</a>
        <a href="/contact" className="p-2 hover:bg-orange-400 hover:text-white rounded focus:outline-none">Contact</a>
      </div>

      <hr className="border-black mb-4 w-full max-w-screen-lg" />

      {/* Copyright section */}
      <div className="text-center">
        <p className="text-sm text-black">&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
