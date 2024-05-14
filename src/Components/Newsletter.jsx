import React from "react";
import instaIcon from "../assets/instagram_icon.png"; 
import pintesterIcon from "../assets/pintester_icon.png";
import whatsappIcon from "../assets/whatsapp_icon.png";

const NewsletterSection = () => {
  return (
    <footer className="footer bg-gray-800 text-white py-12 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center space-y-4">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-400">Shopy</h2>
          <p className="text-gray-400 text-xl">Connecting people through fashion.</p>
        </div>
        <div className="max-w-md flex justify-center">
          <div className="flex flex-col items-center space-y-2"> 
          {/* Nested flexbox for layout */}
            <h2 className="text-3xl font-bold text-center mb-2">Subscribe to Our Newsletter</h2>
            <div className="flex justify-center mb-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border p-2 rounded-l-full focus:outline-none"
              />
              <button className="bg-black text-white px-6 hover:bg-blue-600 focus:outline-none rounded-r-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <p>Follow us on</p>
          <img
            src={instaIcon}
            alt="Instagram"
            style={{
              display: "inline-block",
              filter: "invert(100%) hue-rotate(180deg)", 
              padding: "3px",
              borderRadius: "50%",
              transition: "all 0.3s ease-in-out",
            }}
          />
          <img
            src={whatsappIcon}
            alt="WhatsApp"
            style={{
              display: "inline-block",
              filter: "invert(100%) hue-rotate(180deg)", 
              padding: "3px",
              borderRadius: "50%",
              transition: "all 0.3s ease-in-out",
            }}
          />
          <img
            src={pintesterIcon}
            alt="Pinterest"
            style={{
              display: "inline-block",
              filter: "invert(100%) hue-rotate(180deg)", 
              padding: "3px",
              borderRadius: "50%",
              transition: "all 0.3s ease-in-out",
            }}
          />
        </div>
      </div>
      <hr className="border-white" />
      <div className="text-center text-sm text-white mt-2">&copy; {new Date().getFullYear()} Shopy. All rights reserved.</div>
    </footer>
  );
};

export default NewsletterSection;








