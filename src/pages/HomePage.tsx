import React, { useEffect, useState } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../api/productAPI";
import type { Product } from "../types";
import ProductGrid from "../components/ProductGrid";
import {
  Container,
  // CircularProgress,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams } from "react-router-dom";
import ShimmerGrid from "../components/ShimmerGrid";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "";

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const list = await fetchCategories();
        console.log("categories list : " + list);
        setCategories(list);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        if (selectedCategory) {
          const items = await fetchProductsByCategory(selectedCategory);
          console.log("products by category : " + items);
          setProducts(items);
        } else {
          const all = await fetchProducts();
          console.log("all products : " + all);
          setProducts(all);
        }
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [selectedCategory]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    const category = event.target.value as string;
    if (!category) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  const clearFilter = () => {
    setSearchParams({});
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <FormControl sx={{ minWidth: 200 }}>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            label="Category"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <MenuItem value="">All</MenuItem>
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedCategory && (
          <Button variant="outlined" onClick={clearFilter}>
            Clear Filter
          </Button>
        )}
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <ShimmerGrid />
        </Box>
      ) : (
        <ProductGrid products={products} />
      )}
    </Container>
  );
};

export default HomePage;
