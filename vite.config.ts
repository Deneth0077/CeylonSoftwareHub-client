import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://ceylon-software-hub-server.vercel.app',
        changeOrigin: true,
      },
    },
  },
});

// http://localhost:5000

// https://ceylon-software-hub-server.vercel.app

// CgVercel.json
// ,
//   "env": {
//     "VITE_API_URL": "https://ceylon-software-hub-server.vercel.app/"
//   }