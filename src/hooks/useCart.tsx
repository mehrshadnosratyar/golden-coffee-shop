import { Product } from "@/components/ProductCard";
import { sumProducts } from "@/helper/helper";
import toast from "react-hot-toast";
import { create } from "zustand";
type CartHandle = {
  items: Product[];
  total: number;
  itemsCount: number;
  addItem: (product: Product) => void;
  increase: (product: Product) => void;
  decrease: (product: Product) => void;
  deleteItem: (product: Product) => void;
};
export const useCartStore = create<CartHandle>((set) => ({
  items: [],
  total: 0,
  itemsCount: 0,
  addItem: (product) =>
    set((state) => {
      if (product.quantity < 1) {
        toast.error("این محصول موجود نمی باشد");
        return {};
      }
      if (!state.items.find((item) => item.id === product.id)) {
        state.items.push({ ...product, cart_quantity: 1 });
        return { items: state.items, ...sumProducts(state.items) };
      }
      return {};
    }),
  increase: (product) =>
    set((state) => {
      if (
        state.items.find((item) => item.id === product.id)?.cart_quantity! >=
        product.quantity
      ) {
        toast.error("موجودی این محصول بیشتر نمی باشد");
        return {};
      }
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.items[index].cart_quantity!++;
        return { items: state.items, ...sumProducts(state.items) };
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
        return { items: state.items, ...sumProducts(state.items) };
      }
      return {};
    }),
  deleteItem: (product) =>
    set((state) => {
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        state.items.splice(index, 1);
        return { items: state.items, ...sumProducts(state.items) };
      }
      return {};
    }),
}));
