import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  // Allow React Router to handle client-side routes on refresh
  build: {
    rollupOptions: {
      input: '/index.html',
    },
  },
  base: '/',
});
