
import { createApp } from 'vue'
// import "./assets/styles/reset.css"
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/styles/wangedit.css'

import "./permission"


import App from './App.vue'
import pinia from "./store/index"
import router from "./router/index"

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
.use(router)
.use(pinia)
.use(ElementPlus)
.mount('#app')
