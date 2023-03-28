// import "./product-preview.styles.scss";
import ProductCard from "../product/product-card.component";
import { useNavigate } from "react-router-dom";
const ProductPreview = (props) => {
  const { title, product } = props;
  const navigate = useNavigate();
  const NavigateToCategory = (val) => {
    if (val === true) {
      navigate(`/shop/${title}`);
    }
  };
  return (
    <div key={title}>
      <h2 onClick={() => NavigateToCategory(true)}>{title.toUpperCase()}</h2>
      <div className="products-container">
        {product.map((data) => {
          return <ProductCard products={data} key={data.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductPreview;
