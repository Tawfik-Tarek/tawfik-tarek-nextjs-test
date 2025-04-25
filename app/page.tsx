import ProductCard from "@/components/products/product-card";
import ProductList from "@/components/products/product-list";
import { fetchProducts } from "@/lib/api";

export default async function Home() {
  const products = await fetchProducts();
  return (
    <main className="container mt-[4.375rem] mx-auto px-6 md:px-10 lg:px-14 very-large:px-[20rem] max-w-[1280px] ">
        <ProductList products={products} />
    </main>
  );
}
