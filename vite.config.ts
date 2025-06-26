import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  server: {
    host: '::',       // IPv6 wildcard — same as 0.0.0.0 for IPv4
    port: 8080,        // Change if needed
  },
  plugins: [
    react(),           // Using SWC for faster builds
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Enables `@/` alias from project root
    },
  },
});
