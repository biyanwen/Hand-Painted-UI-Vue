import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history, routes: [{
        path: "/",
        component: Home
    }]
});

export default router