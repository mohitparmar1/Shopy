import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { image, name, new_price, old_price, id } = props.data;

  return (
    <div className="flex flex-row flex-wrap">
      <Link to={`/product/${id}`}>
        <div className="scale-100 hover:scale-95 transition delay-300 m-5 cursor-pointer">
          <img
           onClick={window.scrollTo(0, 0)}
            src={image}
            alt=""
            className="scale-100 hover:scale-95 transition delay-300"
          />
          <p className="text-gray-500 max-w-80">{name}</p>
          <div className="flex flex-row gap-3">
            <p className="text-gray-500 font-semibold line-through">
              $ {old_price}
            </p>
            <p className="text-black font-semibold">$ {new_price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
