import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

const federationConfig = {
  name: "@ecommerce/cart",
  filename: "remoteEntry.js",
  exposes: {
    "./components": "./src/components",
  },
  shared: [
    "react",
    "react-dom",
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
    port: 4001,
  },
  preview: {
    port: 4001,
  },
});
