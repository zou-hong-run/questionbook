
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
        target: 'http://43.143.237.123:6060',
        changeOrigin: true,
        rewrite: (p) => {
          // console.log(p.replace(/^\/dev-api/, ''),"====");
          return p.replace(/^\/dev-api/, '')
        }
      },
      // "ws://43.143.237.123:6060/websocket":{
      //   target: "ws://43.143.237.123:6060/websocket", //这里是后台ws访问地址
      //   changeOrigin: true, //允许跨域设置
      //   ws: true, //websocket代理设置
      // },
    }
  }
})
