import * as path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      // Include only SVG files
      include: ['**/*.svg'],
      // Exclude all other file types
      exclude: ['**/*.{png,jpg,jpeg,gif,webp,avif}'],
    }),
    svgr(),
    react(),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/globals.scss";',
      },
    },
  },
});
