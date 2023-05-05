
<template>
  <div>
    <div>我是vue3_script_setup模式</div>
    <NavHeader @add="add"></NavHeader>
    <NavMain :list="list" @del="del"></NavMain>
    <NavFooter :list="list" @clear="clear"></NavFooter>

  </div>
</template>

<script setup>
import NavHeader from './components/navHeader/NavHeader.vue'
import NavMain from './components/navMain/NavMain.vue'
import NavFooter from './components/navFooter/NavFooter.vue'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'

let store = useStore()
let list = computed(() => {
  return store.state.list
})
let value = ref('')
//添加任务
let add = (val) => {
  value.value = val
  //去重
  let flag = true

  list.value.map((item) => {
    if (item.title === value.value) {
      //有重复任务
      flag = false
      alert('任务已存在')
    }
  })
  //调用mutation
  if (flag) {
    store.commit('addTodo', {
      title: value.value,
      done: false
    })
  }
}
let del = (index) => {
  store.commit('delTodo', index)
}
let clear = (val) => {
  store.commit('clear', val)
}


</script>

<style scoped lang="scss"></style>