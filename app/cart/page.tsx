// app/cart/page.tsx

"use client";

import CartItem from "@/components/cart/cart-item";
import { useCartStore } from "@/stores/cart-store";
import { useState } from "react";

export default function CartPage() {
  const { items } = useCartStore();
  const [wrapProduct, setWrapProduct] = useState(false);

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const total = wrapProduct ? subtotal + 10 : subtotal;

  return (
    <div className="container mt-[4.375rem] mx-auto px-6 md:px-10 lg:px-14 very-large:px-[20rem] max-w-[1280px] ">
      <h1 className="text-[2.625rem] font-volkhov text-center">
        Shopping Cart
      </h1>
      <p className="font-jost mt-2 text-center">Home &gt; Your Shopping Cart</p>

      {items.length === 0 ? (
        <div className="text-center text-gray-600 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div>
          <div className="mt-16 grid grid-cols-4 py-4 font-volkhov text-xl border-b border-black/39">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
          </div>

            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}

          <div className="max-w-[610px] ml-auto">
            <div className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                id="gift"
                className="w-5 h-5"
                checked={wrapProduct}
                onChange={() => setWrapProduct(!wrapProduct)}
              />
              <label
                htmlFor="gift"
                className="font-poppins text-[1.375rem] text-[#8A8A8A]"
              >
                For <span className="text-black">$10.00</span> Please Wrap The
                Product
              </label>
            </div>

            <div className="mt-8 pt-6 flex justify-between items-center">
              <div className="text-xl font-semibold">Subtotal</div>
              <div className="text-xl font-semibold">${total.toFixed(2)}</div>
            </div>

            <div className="mt-6 font-poppins">
              <button className="w-full shadow-[0px_20px_35px_0px_rgba(0,0,0,0.15)] bg-black text-white py-3 rounded-md hover:bg-gray-800 transition cursor-pointer">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
