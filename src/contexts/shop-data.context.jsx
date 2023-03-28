import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import {
  getCollectionAndDocument,
  createCollectionAndDocument,
} from "../utils/firebase/firebase.utils";

export const ShopContext = createContext({
  shopData: {},
});

export const ShopProvider = ({ children }) => {
  const [shopData, setShopData] = useState({});
  useEffect(() => {
    // createCollectionAndDocument("categories", SHOP_DATA);
    const getDatafromFirebaseCollection = async () => {
      const categories = await getCollectionAndDocument("categories");
      setShopData(categories);
    };
    getDatafromFirebaseCollection();
  }, []);

  const value = { shopData, setShopData };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
