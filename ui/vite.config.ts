import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "store-ui",
      filename: "remoteEntry.js",
      exposes: {
        "./theme": "./src/theme",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    port: 4002,
  },
  preview: {
    port: 4002,
  },
});
