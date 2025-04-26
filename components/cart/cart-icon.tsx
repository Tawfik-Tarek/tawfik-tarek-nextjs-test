"use client";

import { useCartStore } from "@/stores/cart-store";
import Image from "next/image";
import Link from "next/link";

export default function CartIcon() {
  const { items } = useCartStore();

  return (
    <Link href="/cart" className="px-[0.813rem] py-[1.188rem] relative">
      <Image
        src="/icons/cart.svg"
        alt="cart"
        width={10}
        height={10}
        className="cursor-pointer"
      />
      {items.length > 0 && (
        <div className="absolute top-1 -right-[0.5px] bg-[#FF0606] text-white rounded-full w-4 h-4 text-xs flex items-center justify-center font-volkhov">
          {items.length}
        </div>
      )}
    </Link>
  );
}
