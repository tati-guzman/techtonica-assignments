import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  server: {
    proxy: {
      '/quiz': {
        target: 'http://localhost:5003',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
