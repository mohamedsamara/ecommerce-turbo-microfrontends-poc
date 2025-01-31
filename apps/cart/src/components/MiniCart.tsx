import { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

import { useCartStore } from "@ecommerce/state/stores";

import CartItem from "./CartItem";
import CartFooter from "./CartFooter";

const MiniCart = () => {
  const { cartItems } = useCartStore();
  const subtotal = useCartStore((state) => state.getSubtotal());
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <IconButton onClick={toggleDrawer}>
        <ShoppingCartIcon />
        <CartBadge
          badgeContent={cartItems.length}
          color="primary"
          overlap="circular"
        />
      </IconButton>
      <Drawer
        open={open}
        onClose={toggleDrawer}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            width: {
              xs: "100%",
              sm: 428,
            },
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: "100%",
            overflowY: "hidden",
          }}
        >
          {/* Cart Header */}
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              paddingX: (theme) => theme.spacing(2),
              paddingY: (theme) => theme.spacing(1),
            }}
          >
            <Typography variant="h5">Shopping cart</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Box
            sx={{
              overflowY: "auto",
              height: "calc(100% - 56px)",
              padding: (theme) => theme.spacing(2),
            }}
          >
            {/* Cart items */}
            {cartItems.length > 0 ? (
              <Stack spacing={3}>
                {cartItems.map((item, idx) => (
                  <CartItem key={idx} cartItem={item} />
                ))}
              </Stack>
            ) : (
              <Stack
                spacing={2}
                sx={{
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ShoppingCartIcon color="secondary" fontSize="large" />
                <Typography variant="body2" color="textSecondary">
                  Your cart is empty.
                </Typography>
              </Stack>
            )}
          </Box>
        </Box>

        {/* Cart Footer */}
        {cartItems.length > 0 && <CartFooter subtotal={subtotal} />}
      </Drawer>
    </>
  );
};

export default MiniCart;
