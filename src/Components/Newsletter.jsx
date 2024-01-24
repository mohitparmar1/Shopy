import React, { useState } from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white py-12 ">
      <div className="max-w-2xl mx-auto text-center ">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-8">
          Get updates on the latest collections, promotions, and more.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="w-1/2 border p-2 rounded-l-full focus:outline-none"
          />
          <button className="bg-black text-white px-6 hover:bg-blue-600 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
