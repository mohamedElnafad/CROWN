// import SHOP_DATA from "../../shop-data.json";
import { useContext, Fragment } from "react";

import ProductPreview from "../../components/products-preview/product-preview.component";
import { ShopContext } from "../../contexts/shop-data.context";
import "./shop.styles.scss";

const Shop = () => {
  const { shopData } = useContext(ShopContext);
  // console.log(shopData);
  return (
    <>
      {Object.keys(shopData).map((title) => {
        const product = shopData[title];
        return <ProductPreview title={title} product={product} />;
      })}
    </>
  );
};

export default Shop;
