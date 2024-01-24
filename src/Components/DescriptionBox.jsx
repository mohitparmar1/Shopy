import React from "react";

const DescriptionBox = () => {
  return (
    <div className="flex flex-col items-center  w-3/4 m-auto mt-10 mb-10">
      <div className="flex flex-row justify-left  w-full my-3 ">
        <div className="border-2 p-3">Description</div>
        <div className="border-2 p-3">Reviews (120)</div>
      </div>
      <div className="flex flex-row justify-left  w-full mt-3 ">
        <p className="border-2 p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          condimentum, nisl eu molestie viverra, eros nunc faucibus dolor, vel
          aliquam nunc quam id nunc. Nullam auctor, elit vitae aliquet aliquet,
          lorem elit tincidunt nisi, eget tincidunt urna nunc a neque. Donec
          eget nisl non nisl ultricies aliquam. Donec nec diam euismod, aliquet
          nisi vitae, lacinia quam. Nulla facilisi. Praesent sed erat tincidunt,
          aliquam lectus vitae, consequat risus. Nulla facilisi. Donec auctor,
          sem vitae aliquet aliquet, lorem elit tincidunt nisi, eget tincidunt
          urna nunc a neque. Donec eget nisl non nisl ultricies aliquam. Donec
          nec diam euismod, aliquet nisi vitae, lacinia quam. Nulla facilisi.
          Praesent sed erat tincidunt, aliquam lectus vitae, consequat risus.
          Nulla facilisi.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
