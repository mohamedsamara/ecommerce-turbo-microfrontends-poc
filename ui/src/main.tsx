import { createRoot } from "react-dom/client";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "./theme";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <h1>UI</h1>
  </ThemeProvider>
);
