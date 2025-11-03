import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { CartContext } from "../context/CartContext";
import { observer } from "mobx-react-lite";

const Footer: React.FC = observer(() => {
  const cart = useContext(CartContext);
  return (
    <Box sx={{ bgcolor: "#fafafa", py: 2, mt: 3 }}>
      <Typography align="center">
        Total Items: {cart.totalItems} — Total: ${cart.totalPrice}
      </Typography>
    </Box>
  );
});

export default Footer;
