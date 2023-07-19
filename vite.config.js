import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // To use the import alias @
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
