import { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
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

import { useCart } from "@ecommerce/shared";
import CartItem from "./CartItem";

const MiniCart = () => {
  const { cartItems } = useCart();
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
      <Drawer open={open} onClose={toggleDrawer} anchor="right">
        <Stack
          spacing={2}
          sx={{
            width: 300,
            height: "100%",
            padding: (theme) => theme.spacing(2),
          }}
        >
          <Stack
            direction="row"
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">My cart</Typography>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon />
            </IconButton>
          </Stack>

          {cartItems.length > 0 ? (
            <Stack spacing={1} divider={<Divider />}>
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
        </Stack>
      </Drawer>
    </>
  );
};

export default MiniCart;
