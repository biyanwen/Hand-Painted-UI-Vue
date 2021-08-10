import { createApp } from 'vue';
import App from './App.vue';
import './lib/hand.scss';
import './index.css';
import route from "./route/route";
import 'github-markdown-css';
createApp(App).use(route).mount('#app');
