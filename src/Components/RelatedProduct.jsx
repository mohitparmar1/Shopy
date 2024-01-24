import React from "react";
import data_product from "../assets/data";
import Item from "./Item";
import all_product from "../assets/all_product";
const RelatedProduct = () => {
  return (
    <div>
      <div className="text-center text-2xl font-bold mt-10 mb-5">
        Related Product
      </div>
      <div className="grid grid-cols-4 gap-3 m-auto">
        {data_product.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
