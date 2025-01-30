import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme, CartProvider } from "@ecommerce/shared";
import Shop from "@ecommerce/shop/entry";
import { MiniCart } from "@ecommerce/cart/components";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <h1>Store</h1>
        <MiniCart />
        <Shop />
      </CartProvider>
    </QueryClientProvider>
  </ThemeProvider>
);
