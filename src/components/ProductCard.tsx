import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import type { Product } from "../types";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="180"
        image={product.image}
        sx={{ objectFit: "contain", p: 2, background: "#fff" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" noWrap>
          {product.title}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          component={RouterLink}
          to={`/product/${product.id}/details`}
          variant="contained"
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
