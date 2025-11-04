import React, { createContext, type ReactNode } from "react";
import { cartStore } from "../store/CartStore";

export const CartContext = createContext(cartStore);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return React.createElement(
    CartContext.Provider,
    { value: cartStore },
    children
  );
};
