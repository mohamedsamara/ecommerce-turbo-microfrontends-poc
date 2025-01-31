import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@ecommerce/cart",
      filename: "assets/remoteEntry.js",
      remotes: {
        "@ecommerce/state": {
          type: "module",
          name: "@ecommerce/state",
          entry: "http://localhost:4001/assets/remoteEntry.js",
        },
      },
      exposes: {
        "./components": "./src/components",
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
  base: "http://localhost:4002",
  server: {
    port: 4002,
  },
  preview: {
    port: 4002,
  },
});
