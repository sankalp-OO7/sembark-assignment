import React, { Component } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../api/productAPI";
import type { Product } from "../types"; // ✅ correct import for Product type
import ProductGrid from "../components/ProductGrid";
import { Container, CircularProgress } from "@mui/material";

interface State {
  products: Product[];
  loading: boolean;
}

class HomePage extends Component<object, State> {
  state: State = { products: [], loading: true };

  async componentDidMount() {
    try {
      const products = await fetchProducts();
      this.setState({ products, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    const { products, loading } = this.state;

    return (
      <Container sx={{ mt: 4 }}>
        {loading ? <CircularProgress /> : <ProductGrid products={products} />}
      </Container>
    );
  }
}

export default HomePage;
