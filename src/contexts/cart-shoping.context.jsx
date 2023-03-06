import { createContext, useState } from "react";

export const CartShoppingContext = createContext({
  showDropDwon: false,
  setShowDropDown: () => {},
});

export const CartShoppingProvider = ({ children }) => {
  const [showDropDwon, setShowDropDown] = useState(false);
  const value = { showDropDwon, setShowDropDown };
  return (
    <CartShoppingContext.Provider value={value}>
      {children}
    </CartShoppingContext.Provider>
  );
};
