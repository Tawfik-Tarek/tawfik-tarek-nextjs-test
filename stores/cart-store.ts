import { Product } from "@/types/product";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  items: Product[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: number) => void;
}

const usePersistedCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addToCart: (product, quantity) =>
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );
          if (existingProduct) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: (item.quantity || 0) + quantity }
                  : item
              ),
            };
          } else {
            return { items: [...state.items, { ...product, quantity }] };
          }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);

export const useCartStore = () => {
  const { items, addToCart, removeFromCart } = usePersistedCartStore();
  return { items, addToCart, removeFromCart };
};
