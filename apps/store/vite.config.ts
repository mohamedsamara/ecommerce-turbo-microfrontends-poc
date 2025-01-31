import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@ecommerce/store",
      remotes: {
        "@ecommerce/cart": {
          type: "module",
          name: "@ecommerce/cart",
          entry: "http://localhost:4002/assets/remoteEntry.js",
          entryGlobalName: "@ecommerce/cart",
          shareScope: "default",
        },
        "@ecommerce/shop": {
          type: "module",
          name: "@ecommerce/shop",
          entry: "http://localhost:4003/assets/remoteEntry.js",
          entryGlobalName: "@ecommerce/shop",
          shareScope: "default",
        },
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
  server: {
    port: 4000,
  },
  preview: {
    port: 4000,
  },
});
