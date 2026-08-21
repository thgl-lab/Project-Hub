import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Builds straight into the repo root so index.html stays a plain static
// file that opens directly, alongside the untouched list.html/about.html.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: '../',
    emptyOutDir: false,
  },
});
