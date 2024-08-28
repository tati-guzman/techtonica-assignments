import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//Add in configs for server and specifics for proxy to connect to backend
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy defines root directory as info located at specified port (5002 in this case)
      '/':'http://localhost:5002',
    }
  }
})
