import React, { useContext } from "react";
import CartContext from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
      <h2 className="text-2xl font-bold mb-4">🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                    <p>${item.price.toLocaleString()}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-bold">
              Total: ${getTotal().toLocaleString()}
            </p>
            <button
              onClick={clearCart}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
