import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api/productAPI";
import type { Product } from "../types";
import { CartContext } from "../context/CartContext";
import { observer } from "mobx-react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

function withRouter<
  P extends { params: { id?: string }; navigate: (path: string) => void }
>(ComponentClass: React.ComponentType<P>) {
  return (props: Omit<P, "params" | "navigate">) => {
    const params = useParams();
    const navigate = useNavigate();
    return (
      <ComponentClass {...(props as P)} params={params} navigate={navigate} />
    );
  };
}

interface Props {
  params: { id?: string };
  navigate: (path: string) => void;
}

interface State {
  product: Product | null;
  loading: boolean;
}

class ProductDetailPage extends Component<Props, State> {
  static contextType = CartContext;
  declare context: React.ContextType<typeof CartContext>;

  state: State = {
    product: null,
    loading: true,
  };

  async componentDidMount() {
    const { id } = this.props.params;
    if (!id) return;

    try {
      const product = await fetchProductById(Number(id));
      this.setState({ product, loading: false });
    } catch (error) {
      console.error("Error fetching product:", error);
      this.setState({ loading: false });
    }
  }

  handleAddToCart = () => {
    const { product } = this.state;
    if (product) {
      this.context.addToCart(product);
    }
  };

  render() {
    const { product, loading } = this.state;
    const { navigate } = this.props;

    if (loading) {
      return (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      );
    }

    if (!product) {
      return (
        <Typography variant="h6" textAlign="center" mt={4}>
          Product not found.
        </Typography>
      );
    }

    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          p: 3,
          gap: 3,
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            width: { xs: "100%", md: 300 },
            height: 300,
            objectFit: "contain",
            backgroundColor: "#fff",
            p: 2,
          }}
        />

        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            ${product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {product.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleAddToCart}
            >
              Add to My Cart
            </Button>
            <Button variant="outlined" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </Box>
        </CardContent>
      </Card>
    );
  }
}

const ProductDetailPageWrapper = withRouter(
  observer(ProductDetailPage)
) as React.FC & { displayName?: string };
ProductDetailPageWrapper.displayName = "ProductDetailPage";
export default ProductDetailPageWrapper;
