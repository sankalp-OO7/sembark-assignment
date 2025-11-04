import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Badge, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { observer } from "mobx-react-lite";

const Navbar: React.FC = observer(() => {
  const cart = useContext(CartContext);
  console.log(cart);
  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", sm: "space-between" },
          mx: { xs: 1, sm: 3, md: 6, lg: 16 },
        }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            component="img"
            src="https://media.licdn.com/dms/image/v2/D4E0BAQFJqUF4V0qDuw/company-logo_200_200/B4EZjmRpkOGYAI-/0/1756210043681/sembark_logo?e=2147483647&v=beta&t=QUotPrF1b7iQT4F4-CQKF5FuY-vrsTaEBOHUIOnr-9k"
            alt="Sembark Logo"
            sx={{
              width: 90,
              height: 50,
              objectFit: "cover",
              objectPosition: "center 50%",
              borderRadius: "8px",
              mr: 1.5,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              display: { xs: "none", sm: "block" },
            }}
          >
            Sembark Store
          </Typography>
        </Box>

        <Button
          component={RouterLink}
          to="/cart"
          color="inherit"
          variant="outlined"
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
