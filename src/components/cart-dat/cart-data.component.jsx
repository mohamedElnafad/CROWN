import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart-data.context";
import "./cart-data.styles.scss";

function Cart() {
  const { cartItems, removeItem } = useContext(CartContext);
  console.log(cartItems);
  const handleRemove = (item) => {
    removeItem(item);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>Your Shopping Products</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            {item.name} ({item.quantity}) - ${item.price * item.quantity}
            <button onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>

      <p>Total: ${totalPrice}</p>
    </div>
  );
}

export default Cart;
