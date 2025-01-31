import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { theme } from "@ecommerce/shared";
import Shop from "@ecommerce/shop/entry";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Shop />
      </Layout>
    </QueryClientProvider>
  </ThemeProvider>
);
