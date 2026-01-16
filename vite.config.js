import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html
            .replace(/%VITE_API_KEY%/g, env.VITE_API_KEY || '')
            .replace(/%VITE_SDK_URL%/g, env.VITE_SDK_URL || '')
        },
      },
    ],
    server: {
      port: 3100,
    },
    preview: {
      port: 3100,
    },
    build: {
      outDir: 'build',
    },
  }
})
