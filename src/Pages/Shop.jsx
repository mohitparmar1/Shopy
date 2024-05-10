import React from "react";
import Hero from "../Components/Hero";
import Popular from "../Components/Popular";
import Offers from "../Components/Offers";
import NewCollection from "../Components/NewCollection";
import NewsletterSection from "../Components/Newsletter";

const Shop = () => {
  return (
    <div className="flex flex-col gap-8">
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsletterSection />
    </div>
  );
};

export default Shop;
