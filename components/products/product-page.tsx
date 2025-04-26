"use client";

import { Product } from "@/types/product";
import Logo from "../ui/logo";
import Rating from "./rating";
import { useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/stores/cart-store";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartStore();
  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mt-[4.875rem] mx-auto px-6 md:px-10 lg:px-14 very-large:px-[20rem] max-w-[1280px]">
      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-w-sm object-contain"
        />
      </div>

      <div className="space-y-6">
        <Logo className="text-[0.75rem] text-[#666666]" />
        <h1 className="text-3xl font-volkhov">{product.title}</h1>

        <Rating
          count={product.rating.count}
          rating={product.rating.rate}
        />

        <div className="flex items-center space-x-4">
          <span className="text-2xl font-volkhov">${product.price}</span>
          <span className="line-through font-jost text-[#666666]">
            ${product.price}
          </span>
          {/* This is a placeholder because FakeStore API doesn't have disscount */}
          <span className="text-white bg-[#DA3F3F] rounded-[11px] px-2.5 py-[2.5px] font-jost font-[500] text-[0.688rem]">
            SAVE 20%
          </span>
        </div>

        <p className="font-jost">{product.description}</p>

        {/* This is a placeholder because FakeStore API doesn't have quantity */}
        <div className="relative">
          <p className="font-jost text-[#666666]">
            Only 9 item(s) left in stock!
          </p>
          <span className="inline-block w-full h-[5px] rounded-[2px] bg-[#DEDEDE]"></span>
          <span className="absolute left-0 bottom-[7px] rounded-[2px] bg-[#EF2D2D] w-6 h-[5px] z-10"></span>
        </div>

        <div className="flex flex-col gap-[0.813rem]">
          <p className="text-base font-volkhov">Quantity</p>
          <div className="flex items-center gap-4 h-full">
            <div className="flex border border-[#EEEEEE]">
              <button
                onClick={handleDecrement}
                className="h-10 w-8 flex items-center justify-center cursor-pointer"
              >
                <span>-</span>
              </button>
              <div className="h-ful w-8 flex items-center justify-center">
                <span className="font-jost">{quantity}</span>
              </div>
              <button
                onClick={handleIncrement}
                className="h-10 w-8 flex items-center justify-center cursor-pointer"
              >
                <span>+</span>
              </button>
            </div>
            <button
              className="border border-black rounded-[5px] py-6 px-12 lg:py-10 lg:px-16 xl:py-[0.688rem] xl:px-[11.189rem] w-full hover:bg-primary hover:text-white transition duration-300 ease-in-out cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="border-b pb-3 border-b-[#EEEEEE]">
          <Image
            src="/icons/share.svg"
            alt="share"
            width={20}
            height={20}
            className="inline-block mr-2"
          />
          <span className="font-jost">Share</span>
        </div>

        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            <Image
              src="/icons/car.svg"
              alt="return"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="font-jost">
              <span className="font-volkhov font-bold">
                Estimated Delivery:
              </span>{" "}
              Jul 30 - Aug 5
            </p>
          </div>

          <div className="flex items-center mt-2">
            <Image
              src="/icons/box.svg"
              alt="box"
              width={20}
              height={20}
              className="inline-block mr-2"
            />
            <p className="font-jost">
              <span className="font-volkhov font-bold">
                Free Shipping & Returns:
              </span>{" "}
              On all orders over $75
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-[108px] gap-5 bg-[#F8F8F8]">
          <Image
            src="/images/payment.png"
            alt="Patment"
            width={320}
            height={26}
          />
          <p className="font-volkhov">Guarantee safe & secure checkout</p>
        </div>
      </div>
    </div>
  );
}
