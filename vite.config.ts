import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
    plugins: [
        react(),
        tsConfigPaths(),
    ],
    resolve: {
        alias: {
            '#minpath': path.resolve(__dirname, 'node_modules/vfile/lib/minpath.js'),
            '#minurl': path.resolve(__dirname, 'node_modules/vfile/lib/minurl.js'),
            '#minproc': path.resolve(__dirname, 'node_modules/vfile/lib/minproc.js'),
        }
    }
})
