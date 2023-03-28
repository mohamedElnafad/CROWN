import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { ShopProvider } from "./contexts/shop-data.context";
import { CartShoppingProvider } from "./contexts/cart-shoping.context.jsx";
import { CartProvider } from "./contexts/cart-data.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ShopProvider>
          <CartShoppingProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CartShoppingProvider>
        </ShopProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
