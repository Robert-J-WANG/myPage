import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { join } from "node:path";
import { BASE_PATH } from "./src/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  // 配置@路径, 应用组件时使用@代替./src/
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": join(__dirname, "src"),
    },
  },
});
