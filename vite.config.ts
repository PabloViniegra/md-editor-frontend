// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import polyfillNode from "rollup-plugin-node-polyfills";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
    ],
    resolve: {
        alias: [
            { find: "node:url", replacement: "url" },
            { find: "#minpath", replacement: path.resolve(__dirname, "node_modules/vfile/lib/minpath.js") },
            { find: "#minurl", replacement: path.resolve(__dirname, "node_modules/vfile/lib/minurl.js") },
            { find: "#minproc", replacement: path.resolve(__dirname, "node_modules/vfile/lib/minproc.js") },
        ],
    },
    optimizeDeps: {
        include: ["url"],
    },
    build: {
        rollupOptions: {
            plugins: [
                polyfillNode(),
            ],
        },
    },
});
