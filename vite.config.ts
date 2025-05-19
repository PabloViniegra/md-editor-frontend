// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
import path from 'path'

export default defineConfig({
    plugins: [
        react(),
        tsconfigPaths(),
        nodePolyfills({
            protocolImports: true,
        }),
    ],
    resolve: {
        alias: {
            '#minpath': path.resolve(__dirname, 'node_modules/vfile/lib/minpath.js'),
            '#minurl': path.resolve(__dirname, 'node_modules/vfile/lib/minurl.js'),
            '#minproc': path.resolve(__dirname, 'node_modules/vfile/lib/minproc.js'),
        }
    }
})
