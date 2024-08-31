import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.', // Ensure this points to the root directory
  build: {
    outDir: 'dist', // Output directory
    rollupOptions: {
      input: {
        main: '/index.html', // Adjust path if necessary
      },
    },
  },
});