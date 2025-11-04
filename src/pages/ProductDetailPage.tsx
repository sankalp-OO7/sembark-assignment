import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchProductById } from "../api/productAPI";
import type { Product } from "../types";
import { CartContext } from "../context/CartContext";
import { observer } from "mobx-react-lite";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";
import ShimmerGrid from "../components/ShimmerGrid";

const ProductDetailPage: React.FC = observer(() => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const cart = useContext(CartContext);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      try {
        const data = await fetchProductById(Number(id));
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      cart.addToCart(product);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 0 }}>
        <ShimmerGrid count={1} width={1100} height={320} borderRadius={2} />
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
          ₹{product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {product.description}
        </Typography>

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleAddToCart}>
            Add to My Cart
          </Button>
          <Button variant="outlined" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
});

export default ProductDetailPage;
