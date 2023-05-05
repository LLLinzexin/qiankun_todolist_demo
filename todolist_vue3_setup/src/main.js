import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './public-path'

let app = null
function render(props = {}) {
    const { container } = props;
    app = createApp(App)
    app.use(store).mount(container ? container.querySelector('#app') : '#app');
}


//如果是独立运行window.__POWERED_BY_QIANKUN__=undefined
if (!window.__POWERED_BY_QIANKUN__) {
    // render({ container: "#app" })
    render()
    console.log("非qiankun模式")
}
// debugger
console.log(this)
export async function bootstrap() {
    console.log("todolist_vue3_setup bootstraped");
}
export async function mount(props) {
    render(props);
}
export async function unmount() {
    console.log("todolist_vue3_setup unmount");
    app.unmount();
}
export async function update(props) {
    console.log('update props', props);
}
