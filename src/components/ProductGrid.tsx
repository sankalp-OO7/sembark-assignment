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
              xs: "100%",
              sm: "48%",
              md: "30%",
              lg: "22%",
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
