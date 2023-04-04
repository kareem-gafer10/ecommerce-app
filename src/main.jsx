import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import context
import CartProvider from "./Context/CartContext";
import ProductProvider from "./Context/ProductContext";
import SidebarProvider from "./Context/SidebarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
