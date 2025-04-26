"use client";

import { Product } from "@/types/product";
import ProductCard from "./product-card";
import { useState } from "react";
import clsx from "clsx"; 

export default function ProductList({ products }: { products: Product[] }) {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState("best-selling");
  const [gridColumns, setGridColumns] = useState(4);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    let sortedProducts = [...products];
    if (selectedOption === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (selectedOption === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = products;
    }
    setFilteredProducts(sortedProducts);
  };

  return (
    <div>
      <div>
        <h1 className="text-[2.625rem] font-volkhov text-center">Fashion</h1>
        <p className="font-jost mt-2 text-center">Home &gt; Fashion</p>
      </div>
      <div className="mt-26 flex items-center justify-between">
        <select
          className="font-volkhov max-w-[130px] focus-within:outline-none"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="best-selling">Best Selling</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center gap-[2.5px] bg-[#F2F2F2] w-9 h-9 p-[11px] rounded-[3px] cursor-pointer"
            onClick={() => setGridColumns(3)}
          >
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
          </button>
          <button
            className="flex items-center justify-center gap-[2.5px] bg-[#F2F2F2] w-9 h-9 p-[11px] rounded-[3px] cursor-pointer"
            onClick={() => setGridColumns(4)}
          >
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
          </button>
          <button
            className="flex items-center justify-center gap-[2.5px] bg-[#F2F2F2] w-9 h-9 p-[11px] rounded-[3px] cursor-pointer"
            onClick={() => setGridColumns(5)} 
          >
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
            <span className="inline-block h-[12px] w-[1.44px] bg-black"></span>
          </button>
        </div>
      </div>
      <div
        className={clsx(
          "grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 mt-6",
          {
            "lg:grid-cols-3": gridColumns === 3,
            "lg:grid-cols-4": gridColumns === 4,
            "lg:grid-cols-5": gridColumns === 5,
          }
        )}
      >
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}