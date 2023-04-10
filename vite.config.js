
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import vueJsx from "@vitejs/plugin-vue-jsx"
// element

// import AutoImport from ''

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve:{
    alias:{
      '~':path.resolve(__dirname,"./"),
      '@':path.resolve(__dirname,"./src"),
    },
    extensions:['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server:{
    host:true,
    port: 80,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://39.105.182.200:6060',
        changeOrigin: true,
        rewrite: (p) => {
          // console.log(p.replace(/^\/dev-api/, ''),"====");
          return p.replace(/^\/dev-api/, '')
        }
      }
      }
  }
})
