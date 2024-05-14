import React from "react";
import Hero from "../Components/Hero";
import NewCollection from "../Components/NewCollection";
import NewsletterSection from "../Components/Newsletter";
import Offers from "../Components/Offers";
import Popular from "../Components/Popular";

const Shop = () => {
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden">
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <hr className="w-full border-black border-solid border-2"></hr>
        <NewsletterSection />
      
    </div>
  );
};

export default Shop;
