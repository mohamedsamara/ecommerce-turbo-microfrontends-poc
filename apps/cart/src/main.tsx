import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "@ecommerce/shared";
import MiniCart from "./components/MiniCart";
import { CartProvider } from "./contexts/cart-context";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CartProvider>
      <MiniCart />
    </CartProvider>
  </ThemeProvider>
);
