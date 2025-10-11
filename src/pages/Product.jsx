import CartContext from "@/context/CartContext";
import ProductContext from "@/context/ProductContext";
import { ShoppingCart } from "lucide-react";
import React, { useContext } from "react";

const Product = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-4xl font-bold">Products</h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <li
            key={index}
            className="bg-blue-200 rounded-lg shadow overflow-hidden"
          >
            <img
              src={product.image}
              alt="Product Image"
              className="w-full h-60"
            />

            <article className="p-4 space-y-2">
              <h2 className="text-2xl line-clamp-1 font-semibold">
                {product.name}
              </h2>
              <p className="">{product.brand}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>

              <button
                onClick={() => addToCart(product.id)}
                className="text-xl cursor-pointer"
              >
                <ShoppingCart />
              </button>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Product;
