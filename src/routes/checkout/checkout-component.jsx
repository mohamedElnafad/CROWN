import { useContext } from "react";

import { CartContext } from "../../contexts/cart-data.context";

const Checkout = () => {
  const { cartItems, removeItem, addItem, decrementItem } =
    useContext(CartContext);
  console.log(cartItems);

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Description</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.length === 0 ? (
          <h2>You did not select any items</h2>
        ) : (
          cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{ width: "100px", height: "100px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>
                  <span onClick={() => decrementItem(item)}>derement</span>
                  <br />
                  {item.quantity}
                  <br />
                  <span onClick={() => addItem(item)}>increment</span>
                </td>
                <td>{item.price}</td>
                <td onClick={() => removeItem(item)}>Remove</td>
              </tr>
            );
          })
        )}
      </tbody>
    </table>
  );
};

export default Checkout;
