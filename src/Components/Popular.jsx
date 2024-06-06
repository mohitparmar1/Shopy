import React from "react";
import dataProduct from "../assets/data";
import Item from "./Item";

const Popular = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium text-center font-Poppins mt-9 col-span-full">
        Popular In Women
      </h1>


      <div className="grid items-center grid-cols-1 ps-20 sm:p-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {dataProduct.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>

    </div>
  );
};

export default Popular;
