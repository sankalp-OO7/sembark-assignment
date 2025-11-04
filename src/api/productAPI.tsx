import type { Product } from "../types";

const BASE = "https://fakestoreapi.com";

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};

export const fetchCategories = async (): Promise<string[]> => {
  const res = await fetch(`${BASE}/products/categories`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  return res.json();
};

export const fetchProductsByCategory = async (
  category: string
): Promise<Product[]> => {
  const res = await fetch(
    `${BASE}/products/category/${encodeURIComponent(category)}`
  );
  if (!res.ok) throw new Error("Failed to fetch products by category");
  return res.json();
};
