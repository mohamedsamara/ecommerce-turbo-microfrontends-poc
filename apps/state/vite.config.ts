import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "@ecommerce/state",
      filename: "assets/remoteEntry.js",
      exposes: {
        "./stores": "./src/stores",
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
      },
    }),
  ],
  build: {
    target: "esnext",
  },
  base: "http://localhost:4001",
  server: {
    port: 4001,
  },
  preview: {
    port: 4001,
  },
});
