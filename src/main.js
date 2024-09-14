import { createApp } from 'vue'

import App from './App.vue'
import stores from './stores'
import router from './router'
import directive from './directive' // directive
// 注册指令
import plugins from './plugins' // plugins
import '@/styles/index.scss' // global css
import { parseTime } from '@/utils/common'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.config.globalProperties.parseTime = parseTime


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'//element css
import 'dayjs/locale/zh-cn';
import locale from 'element-plus/es/locale/lang/zh-cn';//中文


// 自定义组件
import HComps from './components/HComps'
app.use(HComps)
app.use(router)
app.use(stores)
app.use(plugins)
app.use(ElementPlus,{locale})//中文
directive(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
