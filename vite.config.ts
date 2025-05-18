import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import path from "path";
import { fileURLToPath } from "url";
// https://vitejs.dev/config/

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react(), tsConfigPaths()],
    resolve: {
        alias: {
            "#minpath": path.resolve(__dirname, "node_modules/vfile/lib/minpath.js"),
            "#minproc": path.resolve(__dirname, "node_modules/vfile/lib/minproc.js"),
            "#minurl": path.resolve(__dirname, "node_modules/vfile/lib/minurl.js"),
        },
    },
    build: {
        rollupOptions: {
            external: ["#minpath", "#minproc", "#minurl"],
        },
    },
})
