import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../contexts/shop-data.context";
import ProductCard from "../../components/product/product-card.component";
const Category = () => {
  const { shopData } = useContext(ShopContext);
  const { title } = useParams();
  const [products, setProducts] = useState([]);

  console.log(shopData[title]);
  useEffect(() => {
    setProducts(shopData[title]);
  }, [shopData, title]);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title.toUpperCase()}</h1>
      <div className="products-container">
        {products &&
          products.map((item) => {
            return <ProductCard products={item} key={item.id} />;
          })}
      </div>
    </>
  );
};

export default Category;
