import Button from "../button/button.component";
import "./cart-dropdown.styles.scss";
import Cart from "../cart-dat/cart-data.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-data.context";
import Checkout from "../../routes/checkout/checkout-component";
import { Link } from "react-router-dom";
const DropDown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Cart />
      </div>
    </div>
  );
};

export default DropDown;
