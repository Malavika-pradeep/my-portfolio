import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";  

// https://vitejs.dev/config/
export default defineConfig({
  // Ensure assets are referenced with the repo path when deploying to GitHub Pages
  // Change this value to the repository name if different
  base: "/my-portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
