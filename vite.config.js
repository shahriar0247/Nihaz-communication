import { defineConfig } from 'vite'
import mkcert from 'vite-plugin-mkcert'

export default defineConfig({
  plugins: [ mkcert() ],
  port: 3001,
  server: { https: true },
})