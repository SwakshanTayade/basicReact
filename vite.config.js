import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import envCompatible from 'vite-plugin-env-compatible'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix:"REACT_APP_",
  plugins: [
    envCompatible(),
    react(), 
    svgr()],
})
