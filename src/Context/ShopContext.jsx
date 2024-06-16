import react, { createContext, useEffect, useState } from "react";
import all_products from "../assets/all_product";
export const ShopContext = createContext(null);

const getCartDefault = () => {

  const existingItems = JSON.parse(localStorage.getItem("shopy-cart"));
  if (existingItems) {
    return existingItems
  } else {
    let cart = {};
    for (let index = 0; index < all_products.length; index++) {
      cart[index] = 0;
    }
    return cart;
  }

};

const ShopContextProvider = (props) => {
  const [cartItem, setCartItem] = useState(getCartDefault());

  const AddToCart = (id) => {
    setCartItem((prev) => {
      const updatedState = { ...prev, [id]: prev[id] + 1 };
      console.log(updatedState);
      return updatedState;
    });
  };

  const RemoveFromCart = (id) => {
    if (cartItem[id] > 0) {
      setCartItem((prev) => {
        const updatedState = { ...prev, [id]: prev[id] - 1 };
        console.log(updatedState);
        return updatedState;
      });
    }
  };

  const getCartTotalAmount = () => {
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
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalQuantity += cartItem[item];
      }
    }
    return totalQuantity;
  };

  useEffect(() => {
    localStorage.setItem("shopy-cart", JSON.stringify(cartItem))
  }, [cartItem])

  const contextValue = {
    all_products,
    cartItem,
    AddToCart,
    RemoveFromCart,
    getCartTotalAmount,
    getCartQuantity,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
