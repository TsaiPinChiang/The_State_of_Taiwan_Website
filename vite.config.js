import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    base: "/material-tailwind/",
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    host: 'localhost',
    watch: {
        usePolling: true,
    },
},
});
