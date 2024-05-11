import React from "react";
import instaIcon from "../assets/instagram_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";
import pintesterIcon from "../assets/pintester_icon.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-purple-100 to-white text-black py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-orange-400">Shopy</h2>
          <p className="text-gray-400">Connecting people through fashion.</p>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Products
          </a>
          <a href="#" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <img src={instaIcon} />
          </div>
          <div className="">
            <img src={whatsappIcon} />
          </div>
          <div>
            <img src={pintesterIcon} />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Shopy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
