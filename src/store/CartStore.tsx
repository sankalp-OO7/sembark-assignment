import { makeAutoObservable } from "mobx";
import type { Product } from "../types";

function createCartStore() {
  const store = {
    cartItems: [] as Product[],

    addToCart(product: Product) {
      store.cartItems.push(product);
      store.sync();
    },

    removeFromCart(index: number) {
      store.cartItems.splice(index, 1);
      store.sync();
    },

    clearCart() {
      store.cartItems = [];
      store.sync();
    },

    get totalItems() {
      return store.cartItems.length;
    },

    get totalPrice() {
      const total = store.cartItems.reduce((s, p) => s + p.price, 0);
      return total.toFixed(2);
    },

    sync() {
      try {
        sessionStorage.setItem("cart", JSON.stringify(store.cartItems));
      } catch {
        // ignore
      }
    },

    load() {
      const raw = sessionStorage.getItem("cart");
      if (raw) {
        try {
          store.cartItems = JSON.parse(raw) as Product[];
        } catch {
          // ignore
        }
      }
    },
  };

  makeAutoObservable(store);

  store.load();

  return store;
}

export const cartStore = createCartStore();
