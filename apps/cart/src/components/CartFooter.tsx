import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const CartFooter = ({ subtotal }: { subtotal: number }) => {
  return (
    <Box
      sx={{
        padding: (theme) => theme.spacing(2),
        borderTop: (theme) =>
          theme.palette.border.primary
            ? `3px solid ${theme.palette?.border?.primary}`
            : "1px solid #ccc",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">Subtotal</Typography>
        <Typography variant="h6" color="textSecondary">
          $
          {subtotal.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      </Stack>
    </Box>
  );
};

export default CartFooter;
