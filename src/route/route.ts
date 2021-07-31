import {createWebHashHistory, createRouter} from 'vue-router'
import Home from '../view/Home.vue'
import Doc from '../view/Doc.vue'
import SwitchDemo from '../components/SwitchDemo.vue'
import ButtonDemo from '../components/ButtonDemo.vue'
import DialogDemo from '../components/DialogDemo.vue'
import TabsDemo from '../components/TabsDemo.vue'
import Info from '../components/Info.vue'

const history = createWebHashHistory();
const router = createRouter({
    history: history, routes: [{
        path: "/",
        component: Home
    }, {
        path: "/doc",
        component: Doc,
        children: [{
            path: "switchDemo",
            component: SwitchDemo
        }, {
            path: "buttonDemo",
            component: ButtonDemo
        }, {
            path: "dialogDemo",
            component: DialogDemo
        }, {
            path: "tabsDemo",
            component: TabsDemo
        }, {
            path: "info",
            component: Info
        }]
    }]
});

export default router