import { createApp } from 'vue'
import './style.css'
import store from './store/store.js'
import router from './router'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')

