// import SHOP_DATA from "../../shop-data.json";
import { useContext } from "react";
import ProductCard from "../../components/product/product-card.component";
import { ShopContext } from "../../contexts/shop-data.context";
import "./shop.styles.scss";

const Shop = () => {
  const { shopData } = useContext(ShopContext);

  return (
    <div className="products-container">
      {shopData.map((data) => {
        return <ProductCard products={data} key={data.id} />;
      })}
    </div>
  );
};

export default Shop;
