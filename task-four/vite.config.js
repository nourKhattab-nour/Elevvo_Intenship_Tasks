import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Elevvo_Intenship_Tasks/task-four/", // 👈 VERY important
  plugins: [react()],
});
