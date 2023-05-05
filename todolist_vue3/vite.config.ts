import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from 'vite-plugin-qiankun';

export default defineConfig({
    base: "/todolist_vue3",
    server: {
        port: 3011,
        cors: true,
        origin: 'http://localhost:3011'
    },
    plugins: [
        vue(),
        qiankun('todolist_vue3', { // 配置qiankun插件
            useDevMode: true
        })
    ],
});