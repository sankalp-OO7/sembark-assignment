import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { observer } from "mobx-react-lite";

const Navbar: React.FC = observer(() => {
  const cart = useContext(CartContext);

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{ color: "inherit", textDecoration: "none" }}
        >
          Sembark Store
        </Typography>

        <Button
          component={RouterLink}
          to="/cart"
          color="inherit"
          startIcon={<Badge badgeContent={cart.totalItems} color="secondary" />}
          sx={{ textTransform: "none" }}
        >
          View Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
});

export default Navbar;
