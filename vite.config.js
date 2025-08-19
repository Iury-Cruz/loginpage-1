import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://iury-cruz.github.io/loginpage-1/',
  plugins: [react()],
})
