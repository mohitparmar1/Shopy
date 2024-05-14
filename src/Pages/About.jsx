import React from "react";
import Store from "../assets/store.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col xl:flex-row w-full mx-auto mt-20 sm:w-11/12 md:w-3/4 lg:w-3/4 xl:w-3/4 px-4 py-8 sm:px-6 md:px-8 lg:px-10 rounded-3xl bg-gradient-to-b from-purple-200 to-blue-300">
        <div className="flex flex-col justify-center px-4 py-6 md:px-8 lg:px-2 text-gray-700">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-Poppins">
            We are team Shopy
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-4">
            Your ultimate fashion destination for the whole family. With a
            curated selection of clothing for men, women, and kids, we blend
            timeless sophistication with contemporary flair to ensure you make
            a statement wherever you go.
          </p>
          <h2 className="text-2xl sm:text-3xl mb-2">Why Us?</h2>
          <ul className="list-disc list-inside">
            <li className="mb-2">
              <span className="font-bold">Diverse Selection:</span> Wide range
              for all.
            </li>
            <li className="mb-2">
              <span className="font-bold">Quality Assurance:</span> Durability,
              comfort, style.
            </li>
            <li className="mb-2">
              <span className="font-bold">Seamless Shopping:</span> Easy,
              secure, fast.
            </li>
            <li className="mb-2">
              <span className="font-bold">Fashion Expertise:</span> Trendy,
              latest styles.
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center w-full md:w-35">
    <img
      src={Store}
      alt="Illustration for store"
      className="w-full md:w-auto max-w-lg "
    />
  </div>

      </div>
      
    </>
  );
};

export default About;

