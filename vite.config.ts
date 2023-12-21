import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { compilerOptions as tsconfig } from "./tsconfig.json";

const removeStar = (path: string) => path.replace(/\*/g, "");

export default defineConfig({
  plugins: [react()],
  resolve: {
    // allow absolute imports, such as `import Button from '@/components/Button'`
    alias: Object.entries(tsconfig.paths).map(([key, value]) => ({
      find: removeStar(key), // this assumes only first path value is used
      replacement: resolve(process.cwd(), tsconfig.baseUrl, removeStar(value[0]!)) + "/"
    }))
  }
});
