import React, { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Dropdown from "../assets/dropdown_icon.png";
import Item from "../Components/Item";
import { Link } from "react-router-dom";


const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [displayCount, setDisplayCount] = useState(12);
  const [sortCriteria, setSortCriteria] = useState("default");


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // Filter products based on category
  const filteredProducts = all_products.filter(
    (item) => item.category === props.category
  );


  // Sort products based on selected criteria
  const sortProducts = (products) => {
    if (sortCriteria === "priceLowToHigh") {
      return products.slice().sort((a, b) => parseFloat(a.new_price) - parseFloat(b.new_price));
    } else if (sortCriteria === "priceHighToLow") {
      return products.slice().sort((a, b) => parseFloat(b.new_price) - parseFloat(a.new_price));
    } else if (sortCriteria === "popularity") {
      // Ensure the 'popularity' attribute is available in your data
      return products.slice().sort((a, b) => b.popularity - a.popularity);
    } else if (sortCriteria === "discount") {
      return products.slice().sort((a, b) => {
        const discountA = a.old_price ? ((parseFloat(a.old_price) - parseFloat(a.new_price)) / parseFloat(a.old_price)) * 100 : 0;
        const discountB = b.old_price ? ((parseFloat(b.old_price) - parseFloat(b.new_price)) / parseFloat(b.old_price)) * 100 : 0;
        return discountB - discountA; // Sort in descending order
      });
    } else {
      return products; // Default sort
    }
  };
 


  // Apply sorting to the filtered products
  const sortedProducts = sortProducts(filteredProducts);
  console.log(filteredProducts)


  // Handle the load more functionality
  const showMore = () => {
    setDisplayCount(displayCount + 12);
  };


  // Handle sorting criteria change
  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
    setIsDropdownOpen(false); // Close the dropdown after selecting a sort option
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
        <div className="relative mr-6">
          <button
            className="flex flex-row items-center justify-between border-2 border-gray-400 px-2 py-1 rounded-2xl cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Sort By{" "}
            <img src={Dropdown} alt="dropdown" className="w-3 h-2 m-2" />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <ul>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSortChange("priceLowToHigh")}
                >
                  Price-low to high
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSortChange("priceHighToLow")}
                >
                  Price- high to low
                </li>
                <li
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleSortChange("discount")}
                >
                  Discount
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto">
        {sortedProducts.slice(0, displayCount).map((item) => (
          <Item data={item} key={item.id} />
        ))}
      </div>
      {filteredProducts.length >= displayCount ? (
        <div className="flex justify-center">
          <button
            className="bg-orange-400 text-white px-4 py-2 mt-4 rounded-full"
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
