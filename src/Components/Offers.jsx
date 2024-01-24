import React from "react";
import ExclusiveImg from "../assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="w-3/4 h-2/4 m-auto flex py-0 px-36 bg-gradient-to-b from-purple-200 to-blue-300 flex-row flex-1 rounded-3xl">
      <div className="flex flex-col py-10 text-gray-700 justify-center">
        <h1 className="text-5xl font-Poppins">Exclusive</h1>
        <h1 className="text-3xl">Offers For You</h1>
        <p>Get the best deals on your favourite products</p>
        <button className="w-32 h-12 bg-orange-300 my-2 px-2 py-1 text-white text-center font-semibold rounded-md hover:bg-orange-400 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
          Check Now
        </button>
      </div>
      <div className="flex flex-1 justify-center w-1/2">
        <img src={ExclusiveImg} alt="" className="w-2/3" />
      </div>
    </div>
  );
};

export default Offers;
