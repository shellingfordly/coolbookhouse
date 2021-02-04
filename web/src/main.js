import { createApp } from 'vue'
import App from './App.vue'
import setup from './setup'
import './style/index.scss'
import './index.scss'

const app = createApp(App)

// 按需引入
setup(app)

// 挂载
app.mount('#app')
