import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ProductList from "./components/ProductList";

const Shop = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Shop</Typography>
      <ProductList />
    </Stack>
  );
};

export default Shop;
