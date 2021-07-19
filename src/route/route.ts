import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'
import Doc from '../view/Doc.vue'
import Switch from '../view/Switch.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history, routes: [{
        path: "/",
        component: Home
    }, {
        path: "/doc",
        component: Doc,
        children: [{
            path: "switch",
            component: Switch
        }]
    }]
});

export default router