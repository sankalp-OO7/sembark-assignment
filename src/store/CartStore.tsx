import { makeAutoObservable } from "mobx";
import type { Product } from "../types";

export class CartStore {
  cartItems: Product[] = [];

  constructor() {
    makeAutoObservable(this);
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

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    this.sync();
  }

  clearCart() {
    this.cartItems = [];
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
    try {
      sessionStorage.setItem("cart", JSON.stringify(this.cartItems));
    } catch {
      // ignore
    }
  }
}

export const cartStore = new CartStore();
