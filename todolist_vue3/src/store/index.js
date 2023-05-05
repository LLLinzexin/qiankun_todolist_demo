import { createStore } from 'vuex'
export default createStore({
    state: {
        list: [{
            title: 'eat',
            done: false
        },
        {
            title: 'run',
            done: true
        },
        {
            title: 'sleep',
            done: false
        }]
    },
    mutations: {
        //增加
        addTodo(state, payload) {
            state.list.push(payload)
        },
        //删除,找下标
        delTodo(state, payload) {
            state.list.splice(payload, 1)
        },
        //清除所有
        clear(state, payload) {
            //过滤后的数组传进来
            state.list = payload
        }

    },
    actions: {

    },
})