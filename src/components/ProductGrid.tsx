import React from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

const ProductGrid: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
