import react, { createContext, useState } from "react";
import all_products from "../assets/all_product";
export const SavedContext = createContext(null);  //ContextAPI for providing state variables to components of Wishlist

const defaultWishlist = () => {
  let list = {};
  for (let index = 0; index < all_products.length; index++) {
    list[index] = false;
  }
  return list;
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

  /*const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(item)
        );
        totalAmount += cartItem[item] * itemInfo.new_price;
      }
    }
    return totalAmount;
  };*/

  const getListQuantity = () => {
    let totalQuantity = 0;
    for (const item in listItem) {
      if (listItem[item]) {
        totalQuantity ++;
      }
    }
    return totalQuantity;
  };

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
