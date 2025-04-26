import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";
import { Product } from "@/types/product";
import ProductPage from "@/components/products/product-page";

export default async function productPage({ params } : { params: { id: string } }) {
  const product: Product = await fetchProductById(Number(params.id));
  
  if (!product) {
    notFound();
  }

  return (
    <ProductPage product={product} />
  );

}