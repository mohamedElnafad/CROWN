import Button from "../button/button.component";
import "./product-card.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart-data.context";
const ProductCard = ({ products }) => {
  // console.log(products);

  const { addItem, cartItems } = useContext(CartContext);

  const { id, name, price, imageUrl } = products;
  const HandleAddingToCard = () => {
    addItem({ id, name, price, imageUrl, quantity: 1 });
    // console.log(cartItems);
  };
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <Button buttonType="inverted" onClick={HandleAddingToCard}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
