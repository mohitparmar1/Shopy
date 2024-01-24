import React from "react";
import newCollection from "../assets/new_collections";
import Item from "./Item";

const NewCollection = () => {
  return (
    <div className="flex flex-col gap-7 items-center">
      <h1 className="font-Poppins text-4xl font-medium text-center mt-9">
        New Collection
      </h1>
      <hr className="w-[200px] h-2 bg-gray-400 rounded-xl" />
      <div className="grid grid-cols-4">
        {newCollection.map((item) => {
          return <Item data={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
