import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion']
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@/components/atoms': path.resolve(__dirname, './src/components/atoms'),
      '@/components/molecules': path.resolve(__dirname, './src/components/molecules'),
      '@/components/organisms': path.resolve(__dirname, './src/components/organisms'),
      '@/components/templates': path.resolve(__dirname, './src/components/templates'),
      '@/assets': path.resolve(__dirname, './src/assets'),
      '@/lib': path.resolve(__dirname, './src/lib'),
      '@/hooks': path.resolve(__dirname, './src/lib/hooks'),
      '@/styles': path.resolve(__dirname, './src/styles'),
      '@/types': path.resolve(__dirname, './src/types'),
      '@/data': path.resolve(__dirname, './src/data')
    }
  }
})