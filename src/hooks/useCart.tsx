import { Product } from "@/components/ProductCard";
import { create } from "zustand";
type CartHandle = {
  items: Product[];
  total: number;
  itemsCounter: number;
  addItem: (product: Product) => void;
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  deleteItem: (product: Product) => void;
};
export const useCartStore = create<CartHandle>((set) => ({
  items: [],
  total: 0,
  itemsCounter: 0,
  addItem: (product) =>
    set((state) => {
      if (!state.items.find((item) => item.id === product.id)) {
        state.items.push({ ...product, cart_quantity: 1 });
        console.log(state.items);
        return { items: state.items };
      }
      return state;
    }),
  increase: (product) =>
    set((state) => {
      const index = state.items.findIndex((item) => item.id === product.id);
      console.log(index);
      if (index !== -1) {
        state.items[index].cart_quantity!++;
        return { items: state.items };
      }
      return {};
    }),
  decrease: (product) =>
    set((state) => {
      const index = state.items.findIndex((item) => item.id === product.id);
      if (
        index !== -1 &&
        state.items[index]?.cart_quantity &&
        state.items[index]?.cart_quantity > 1
      ) {
        state.items[index].cart_quantity!--;
        return { items: state.items };
      }
      return {};
    }),
  deleteItem: (product) =>
    set((state) => {
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.items.splice(index, 1);
        return { items: state.items };
      }
      return {};
    }),
}));
