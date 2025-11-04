import React, { Component } from "react";
import {
  fetchProducts,
  fetchCategories,
  fetchProductsByCategory,
} from "../api/productAPI";
import type { Product } from "../types";
import ProductGrid from "../components/ProductGrid";
import {
  Container,
  CircularProgress,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import { useSearchParams, useNavigate } from "react-router-dom";

interface Props {
  searchParams: URLSearchParams;
  setSearchParams: (params: Record<string, string>) => void;
}

interface State {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  loading: boolean;
}

class HomePage extends Component<Props, State> {
  state: State = {
    products: [],
    categories: [],
    selectedCategory: "",
    loading: true,
  };

  async componentDidMount() {
    await this.loadCategories();

    const categoryFromURL = this.props.searchParams.get("category");
    if (categoryFromURL) {
      await this.loadProductsByCategory(categoryFromURL);
    } else {
      await this.loadAllProducts();
    }
  }

  loadCategories = async () => {
    try {
      const categories = await fetchCategories();
      this.setState({ categories });
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  loadAllProducts = async () => {
    try {
      this.setState({ loading: true });
      const products = await fetchProducts();
      this.setState({ products, loading: false, selectedCategory: "" });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      this.setState({ loading: false });
    }
  };

  loadProductsByCategory = async (category: string) => {
    try {
      this.setState({ loading: true });
      const products = await fetchProductsByCategory(category);
      this.setState({ products, loading: false, selectedCategory: category });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      this.setState({ loading: false });
    }
  };

  handleCategoryChange = async (event: SelectChangeEvent) => {
    const category = event.target.value as string;

    if (!category) {
      this.props.setSearchParams({});
      await this.loadAllProducts();
    } else {
      this.props.setSearchParams({ category });
      await this.loadProductsByCategory(category);
    }
  };

  clearFilter = async () => {
    this.props.setSearchParams({});
    await this.loadAllProducts();
  };

  render() {
    const { products, categories, selectedCategory, loading } = this.state;

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
              onChange={this.handleCategoryChange}
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
            <Button variant="outlined" onClick={this.clearFilter}>
              Clear Filter
            </Button>
          )}
        </Box>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
            <CircularProgress />
          </Box>
        ) : (
          <ProductGrid products={products} />
        )}
      </Container>
    );
  }
}

const HomePageWrapper: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const setParams = (params: Record<string, string>) => {
    const query = new URLSearchParams(params);
    navigate({ search: query.toString() });
  };

  return <HomePage searchParams={searchParams} setSearchParams={setParams} />;
};

export default HomePageWrapper;
