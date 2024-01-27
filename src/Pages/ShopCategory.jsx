import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Dropdown from "../assets/dropdown_icon.png";
import Product from "./Product";
import Item from "../Components/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [displayCount, setDisplayCount] = useState(12);

  const filteredProducts = all_products.filter((item) => {
    if (item.category === props.category) {
      return item;
    }
  });

  const showMore = () => {
    setDisplayCount(displayCount + 12);
  };

  const handleClicked = () => {
    alert("clicked");
  };

  return (
    <div>
      <Link to="/">
        <img src={props.banner} alt="" />
      </Link>
      <div className="flex items-center justify-between mt-4 ml-3">
        <p>
          <span className="text-black ml-4 ">
            <p className="font-bold ">Showing 1-{displayCount} </p>
            out of {filteredProducts.length} results
          </span>
        </p>
        <div className="flex flex-row items-center justify-between mr-6 border-2 border-gray-400 px-1 py-1 rounded-2xl cursor-pointer">
          <button
            className="flex flex-row items-center justify-between"
            onClick={handleClicked}
          >
            Sort By{" "}
            <img src={Dropdown} alt="dropdown" className="w-3 h-2 m-2" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto">
        {filteredProducts.slice(0, displayCount).map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>
      {filteredProducts.length >= displayCount ? (
        <div className="flex justify-center">
          <button
            className="bg-orange-400 text-white px-4 py-2 rounded-full mt-5"
            onClick={showMore}
          >
            Show More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ShopCategory;
