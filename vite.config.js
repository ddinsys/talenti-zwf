import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://www.nomada.com.mx/apps/ctes/talenti/wfautomat/'
})
