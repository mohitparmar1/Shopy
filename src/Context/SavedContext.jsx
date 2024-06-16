import react, { createContext, useEffect, useState } from "react";
import all_products from "../assets/all_product";
export const SavedContext = createContext(null);  //ContextAPI for providing state variables to components of Wishlist

const defaultWishlist = () => {

  const existingItems = JSON.parse(localStorage.getItem("shopy-wishlist"));

  if (existingItems) {
    return existingItems;
  } else {
    let list = {};
    for (let index = 0; index < all_products.length; index++) {
      list[index] = false;
    }
    return list;

  }
};

const SavedContextProvider = (props) => {
  const [listItem, setListItem] = useState(defaultWishlist());
  const AddToList = (id) => {

    setListItem((prev) => {

      const updatedState = { ...prev, [id]: !listItem[id] };
      console.log(updatedState);
      return updatedState;


    });
  };

  const RemoveFromList = (id) => {
    if (listItem[id]) {
      setListItem((prev) => {

        const updatedState = { ...prev, [id]: false };

        console.log(updatedState);
        return updatedState;
      });
    }
  };

  const getListQuantity = () => {
    let totalQuantity = 0;
    for (const item in listItem) {
      if (listItem[item]) {
        totalQuantity++;
      }
    }
    return totalQuantity;
  };

  useEffect(() => {
    localStorage.setItem("shopy-wishlist", JSON.stringify(listItem))
  }, [listItem])

  const contextValue = {
    all_products,
    listItem,
    AddToList,
    RemoveFromList,
    getListQuantity,
  };
  return (
    <SavedContext.Provider value={contextValue}>
      {props.children}
    </SavedContext.Provider>
  );
};

export default SavedContextProvider;
