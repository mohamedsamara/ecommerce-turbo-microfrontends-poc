import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@ecommerce/shop",
      filename: "assets/remoteEntry.js",
      remotes: {
        "@ecommerce/cart": {
          type: "module",
          name: "@ecommerce/cart",
          entry: "http://localhost:4002/assets/remoteEntry.js",
        },
        "@ecommerce/state": {
          type: "module",
          name: "@ecommerce/state",
          entry: "http://localhost:4001/assets/remoteEntry.js",
        },
      },
      exposes: {
        "./entry": "./src/shop",
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: dependencies["react-dom"],
        },
        "@tanstack/react-query": {
          singleton: true,
          requiredVersion: dependencies["@tanstack/react-query"],
        },
        "@mui/material": {
          singleton: true,
          requiredVersion: dependencies["@mui/material"],
        },
        "@emotion/react": {
          singleton: true,
          requiredVersion: dependencies["@emotion/react"],
        },
        "@emotion/styled": {
          singleton: true,
          requiredVersion: dependencies["@emotion/styled"],
        },
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  base: "http://localhost:4003",
  server: {
    port: 4003,
  },
  preview: {
    port: 4003,
  },
});
