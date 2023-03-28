import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartShoppingContext } from "../../contexts/cart-shoping.context";
import { CartContext, CartProvider } from "../../contexts/cart-data.context";
const CartIcon = () => {
  const { showDropDwon, setShowDropDown } = useContext(CartShoppingContext);
  const showHandling = () => setShowDropDown(!showDropDwon);
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // console.log(totalCount);
  return (
    <div className="cart-icon-container" onClick={showHandling}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{totalCount}</span>
    </div>
  );
};

export default CartIcon;
