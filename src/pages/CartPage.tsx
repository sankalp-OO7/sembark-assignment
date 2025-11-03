import React, { useContext } from "react";
import type { ComponentType } from "react";
import { observer } from "mobx-react-lite";
import { CartContext } from "../context/CartContext";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  Box,
} from "@mui/material";

const CartPage: ComponentType = observer(() => {
  const cart = useContext(CartContext);

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        My Cart ({cart.totalItems})
      </Typography>

      {cart.totalItems === 0 ? (
        <Typography color="text.secondary">
          Your cart is empty. Add products from the home page.
        </Typography>
      ) : (
        <List>
          {cart.cartItems.map((item, index) => (
            <React.Fragment key={`${item.id}-${index}`}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    src={item.image}
                    alt={item.title}
                    sx={{ width: 56, height: 56, mr: 2 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.title}
                  secondary={`$${item.price}`}
                  primaryTypographyProps={{
                    variant: "subtitle1",
                    fontWeight: 500,
                  }}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      )}

      <Box sx={{ mt: 3 }}>
        <Typography variant="subtitle1" fontWeight="bold">
          Total Price: ${cart.totalPrice}
        </Typography>
      </Box>
    </Paper>
  );
});

export default CartPage;
