import React from "react";
import { Link } from "react-router-dom";
import ExclusiveImg from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="flex flex-row flex-1 w-3/4 px-20 py-0 mx-auto sm:px-36 h-2/4 bg-gradient-to-b from-purple-200 to-blue-300 dark:from-purple-800 dark:to-blue-900 rounded-3xl">
      <div className="flex flex-col justify-center py-10 text-gray-700 dark:text-gray-200">
        <h1 className="text-5xl font-Poppins">Exclusive</h1>
        <h1 className="text-3xl">Offers For You</h1>
        <p>Get the best deals on your favourite products</p>
        <Link to="/checknow">
          <button className="w-32 h-12 px-2 py-1 my-2 font-semibold text-center text-white transition duration-300 bg-orange-300 rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:border-blue-300 dark:bg-orange-500 dark:hover:bg-orange-600">
            Check Now
          </button>
        </Link>
      </div>
      <div className="flex justify-center w-1/2 opacity-0 sm:opacity-100">
        <img src={ExclusiveImg} alt="Exclusive Offers" className="w-2/3" />
      </div>
    </div>
  );
};

export default Offers;
