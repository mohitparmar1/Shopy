import React from "react";
import dataProduct from "../assets/data.js";
import Item from "./Item";

const Popular = () => {
  return (
    <div className="flex flex-col gap-7 items-center">
      <h1 className="font-Poppins text-4xl font-medium text-center mt-9">
        Popular In Women
      </h1>
      <hr className="w-[200px] h-2 bg-gray-400 rounded-xl" />
      <div className="sm:flex">
        {dataProduct.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
