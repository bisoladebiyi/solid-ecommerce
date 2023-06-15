import { Component, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { ILayout } from "../utils/interfaces";

const CartContext = createContext();

const CartContextProvider: Component<Omit<ILayout, "active">> = (props) => {
  const [cart, setCart] = createStore([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartContextProvider;
