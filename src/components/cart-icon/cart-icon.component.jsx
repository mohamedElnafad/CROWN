import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingCart } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartShoppingContext } from "../../contexts/cart-shoping.context";
const CartIcon = () => {
  const { showDropDwon, setShowDropDown } = useContext(CartShoppingContext);
  const showHandling = () => setShowDropDown(!showDropDwon);

  return (
    <div className="cart-icon-container" onClick={showHandling}>
      <ShoppingCart className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
