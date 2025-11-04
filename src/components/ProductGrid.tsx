import React from "react";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";
import type { Product } from "../types";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 3,
        mt: 2,
      }}
    >
      {products.map((product) => (
        <Box
          key={product.id}
          sx={{
            width: {
              xs: "100%", // full width on mobile
              sm: "48%", // two per row on small screens
              md: "30%", // three per row on medium
              lg: "22%", // four per row on large
            },
          }}
        >
          <ProductCard product={product} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductGrid;
