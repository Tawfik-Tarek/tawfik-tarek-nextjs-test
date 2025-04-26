import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({product}: {product: Product}) {
  return (
    <Link href={`/product/${product.id}`} className="group">
      <div className="flex flex-col gap-5 px-[0.75rem] max-w-[326px]">
        <Image
          src={product.image}
          alt={product.title}
          className="w-[302px] h-[402.61px] group-hover:scale-105 transition-transform duration-300 ease-in-out"
          width={302}
          height={402.61}
        />
        <h2 className="font-volkhov mb-2 text-base">
          {product.title.slice(0, 18)}
          {product.title.length > 18 ? "..." : ""}
        </h2>
        <span className="font-jost">${product.price}</span>
      </div>
    </Link>
  );
}