import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI, { Container } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { start, registerMicroApps, initGlobalState } from 'qiankun'

Vue.config.productionTip = false
Vue.use(ElementUI);
const apps = [
  {
    name: 'todolist_vue3',
    entry: '//localhost:3011',
    activeRule: '/todolist_vue3',
    container: "#sub-app"
  },
  {
    name: 'todolist_vue3_setup',
    entry: '//localhost:3012',
    activeRule: '/todolist_vue3_setup',
    container: "#sub-app"
  },
]
registerMicroApps(apps, {
  beforeLoad: [
    (app) => {
      console.log(`${app.name}的beforeLoad阶段`);
    },
  ],
  beforeMount: [
    (app) => {
      console.log(`${app.name}的beforeMount阶段`);
    },
  ],
  afterMount: [
    (app) => {
      console.log(`${app.name}的afterMount阶段`);
    },
  ],
  beforeUnmount: [
    (app) => {
      console.log(`${app.name}的beforeUnmount阶段`);
    },
  ],
  afterUnmount: [
    (app) => {
      console.log(`${app.name}的afterUnmount阶段`);
    },
  ]
})
start();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
