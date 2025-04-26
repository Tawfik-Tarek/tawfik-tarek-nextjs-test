"use client"
import { useCartStore } from "@/stores/cart-store";
import { Product } from "@/types/product";

export default function CartItem({ item } : { item: Product }) {
  const { removeFromCart, addToCart } = useCartStore();
    return (
      <div
        className="grid grid-cols-4 py-6 border-b border-black/39"
      >
        <div className="flex gap-4">
          <img
            src={item.image}
            alt={item.title}
            className="w-[168px] h-[225px]"
          />
          <div className="flex flex-col gap-17 items-start">
            <p className="font-volkhov text-[1.375rem]">
              {item.title.slice(0, 20)} {item.title.length > 20 ? "..." : ""}
            </p>
            <button
              className="text-sm text-gray-500 underline mt-2 cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="font-volkhov text-[1.375rem]">
          ${item.price.toFixed(2)}
        </div>
        <div className="flex items-start font-poppins gap-2 border-1 border-[#8A8A8A] h-fit w-fit p-1 rounded-[3.5px]">
          <button
            className="font-[500] cursor-pointer"
            onClick={() => addToCart(item, -1)}
            disabled={(item.quantity || 1) <= 1}
          >
            -
          </button>
          <span className="w-6 text-center text-[#8A8A8A]">
            {item.quantity || 1}
          </span>
          <button
            className="font-[500] cursor-pointer"
            onClick={() => addToCart(item, 1)}
          >
            +
          </button>
        </div>
        <div className="font-volkhov text-[1.375rem]">
          ${(item.price * (item.quantity || 1)).toFixed(2)}
        </div>
      </div>
    );
}