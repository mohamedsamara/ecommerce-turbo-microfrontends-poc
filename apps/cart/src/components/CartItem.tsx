import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CartItemState } from "@ecommerce/state/stores";

type Props = {
  cartItem: CartItemState;
};

const CartItem = ({ cartItem }: Props) => {
  return (
    <Stack spacing={2} direction="row">
      <Box
        sx={{
          position: "relative",
          width: "4rem",
          height: "4rem",
          overflow: "hidden",
        }}
      >
        <img
          src={cartItem.image}
          alt={cartItem.name}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </Box>

      <Stack spacing={1} sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h6" noWrap>
          {cartItem.name}
        </Typography>
        <Typography variant="subtitle1">${cartItem.price} USD</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Qty: {cartItem.quantity}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CartItem;
