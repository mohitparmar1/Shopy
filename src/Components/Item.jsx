import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SavedContext } from "../Context/SavedContext"
import filled_Wishlist from '../assets/filled_wishlist.png'
import outlined_Wishlist from '../assets/outlined_wishlist.png'

const Item = (props) => {
  const { image, name, new_price, old_price, id } = props.data;
  const { AddToList, listItem } = useContext(SavedContext);

  return (

    <div className="m-5 cursor-pointer transition delay-300 scale-100 hover:scale-95 relative">
      <Link to={`/product/${id}`}>
        <div>
          <img
            onClick={window.scrollTo(0, 0)}
            src={image}
            alt=""
            className="transition delay-300 scale-100 hover:scale-95"
          />
          <p className="text-gray-500 dark:text-gray-400 max-w-80">{name}</p>
          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-500 dark:text-gray-400 line-through">
              $ {old_price}
            </p>
            <p className="font-semibold text-black dark:text-white">$ {new_price}</p>
          </div>
        </div>
      </Link>
      <button
            onClick={() => {
              AddToList(id);
            }}
            className="absolute top-0 right-0 mt-3 mr-3 bg-transparent border-none rounded"
          >
            {
              listItem[id] ? <img src={filled_Wishlist} alt="wishlist" className="h-8 w-8 scale-100 hover:scale-95 rounded" /> :
              <img src={outlined_Wishlist} alt="wishlist" className="h-8 w-8 scale-100 hover:scale-95 rounded" />
            }
          </button>
    </div>
  );
};

export default Item;
