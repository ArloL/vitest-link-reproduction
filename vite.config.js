import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import pkg from './package.json' with { type: 'json' };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react/jsx-runtime',
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.devDependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      ],
    },
  },
});
