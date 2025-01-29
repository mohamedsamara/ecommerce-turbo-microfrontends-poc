import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { CartItemState } from "../contexts/cart-context";

type Props = {
  cartItem: CartItemState;
};

const CartItem = ({ cartItem }: Props) => {
  return (
    <Stack>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="h6" noWrap>
            {cartItem.name}
          </Typography>
        </Box>
        <Typography variant="subtitle2">${cartItem.price} USD</Typography>
      </Stack>
      <Typography variant="subtitle2" color="textSecondary">
        Qty: {cartItem.quantity}
      </Typography>
    </Stack>
  );
};

export default CartItem;
