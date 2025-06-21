import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
=======
  base: '/hotel-green-garden/',
>>>>>>> 52499e4be17e71838cf0de729eee21e231007f83
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
