import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { image, name, new_price, old_price, id } = props.data;

  return (
    <div className="m-5 cursor-pointer">
      <Link to={`/product/${id}`}>
        <div className="transition delay-300 scale-100 hover:scale-95">
          <img
            onClick={window.scrollTo(0, 0)}
            src={image}
            alt=""
            className="transition delay-300 scale-100 hover:scale-95"
          />
          <p className="text-gray-500 max-w-80">{name}</p>
          <div className="flex flex-row gap-3">
            <p className="font-semibold text-gray-500 line-through">
              $ {old_price}
            </p>
            <p className="font-semibold text-black">$ {new_price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
