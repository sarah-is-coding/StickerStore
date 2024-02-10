import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/StickerStore/',
  plugins: [react()],
  esbuild: {
    // Treat .js files as .jsx
    loader: { '.js': 'jsx' }
  }
});
