import react, { createContext, useState } from "react";
import all_products from "../assets/all_product";
export const ShopContext = createContext(null);

const getCartDefault = () => {
  let cart = {};
  for (let index = 0; index < all_products.length; index++) {
    cart[index] = 0;
  }
  return cart;
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

  const contextValue = { all_products, cartItem, AddToCart, RemoveFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
