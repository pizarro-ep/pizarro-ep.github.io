import { createApp } from 'vue'
import App from './App.vue'

// import router vue
import router from "./router"

// import plugins
import './assets/css/style.css'
import "./plugins/fontawesome"

// init app
const app = createApp(App)
app.use(router)
app.mount('#app')
