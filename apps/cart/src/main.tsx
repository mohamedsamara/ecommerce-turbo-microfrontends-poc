import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import { theme } from "@ecommerce/shared";
import { MiniCart } from "./components";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <MiniCart />
  </ThemeProvider>
);
