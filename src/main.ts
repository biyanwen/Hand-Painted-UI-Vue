import {createApp} from 'vue'
import App from './App.vue'
import './lib/hand.scss'
import './index.css'
import route from "./route/route";

createApp(App).use(route).mount('#app')
