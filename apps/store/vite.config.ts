import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const federationConfig = {
  name: "@ecommerce/store",
  remotes: {
    "@ecommerce/cart": "http://localhost:4001/assets/remoteEntry.js",
    "@ecommerce/shop": "http://localhost:4002/assets/remoteEntry.js",
  },
  shared: [
    "react",
    "react-dom",
    "@tanstack/react-query",
    "@mui/material",
    "@emotion/react",
    "@emotion/styled",
    "@ecommerce/shared",
  ],
};

export default defineConfig({
  plugins: [react(), federation(federationConfig)],
  build: {
    target: "esnext",
  },
  server: {
    port: 4000,
  },
  preview: {
    port: 4000,
  },
});
