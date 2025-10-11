import React, { createContext, useState, useEffect, useContext } from "react";
import ProductContext from "./ProductContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { products } = useContext(ProductContext);

  // ✅ Load initial cart directly from localStorage (no delay)
  const [cart, setCart] = useState(() => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Error parsing cart from localStorage", err);
      return [];
    }
  });

  // 💾 Keep cart in sync with localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ➕ Add product
  const addToCart = (productId, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);

      if (existing) {
        // update quantity
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // find product from products context
      const product = products.find((p) => p.id === productId);
      if (!product) return prev;

      return [...prev, { ...product, quantity }];
    });
  };

  // 🗑️ Remove single item
  const removeFromCart = (productId) =>
    setCart((prev) => prev.filter((item) => item.id !== productId));

  // ❌ Clear entire cart
  const clearCart = () => setCart([]);

  // 💰 Total price
  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
