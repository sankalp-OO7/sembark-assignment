import { makeAutoObservable } from "mobx";
import type { Product } from "../types";

export class CartStore {
  cartItems: Product[] = [];

  constructor() {
    makeAutoObservable(this);
    // optional: load from session (bonus)
    const raw = sessionStorage.getItem("cart");
    if (raw) {
      try {
        this.cartItems = JSON.parse(raw) as Product[];
      } catch {
        // ignore
      }
    }
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.sync();
  }

  // removal not allowed per assignment - but keep helper
  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.sync();
  }

  get totalItems(): number {
    return this.cartItems.length;
  }

  get totalPrice(): string {
    const total = this.cartItems.reduce((s, p) => s + p.price, 0);
    return total.toFixed(2);
  }

  sync() {
    // persist to sessionStorage (bonus)
    try {
      sessionStorage.setItem("cart", JSON.stringify(this.cartItems));
    } catch {
      // ignore
    }
  }
}

export const cartStore = new CartStore();
