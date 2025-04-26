import { Product } from "@/types/product";
import ProductCard from "./product-card";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div>
      <div>
        <h1 className="text-[2.625rem] font-volkhov text-center">Fashion</h1>
        <p className="font-jost mt-2 text-center">Home &gt; Fashion</p>
      </div>
      <div className="mt-26">

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
