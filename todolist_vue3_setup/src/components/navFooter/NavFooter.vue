<template>
    <div class="container">
        <div>已完成： {{ isDone }} / 全部： {{ list.length }}</div>
        <div v-if="isDone > 0" class="btn"> <button @click="clear">清除已完成</button>
        </div>
    </div>
</template>


<script setup>
import { computed } from 'vue';

const props = defineProps({
    list: {
        type: Array,
        required: true
    },
})

let isDone = computed(() => {
    //过滤已完成
    let arr = props.list.filter(item => {
        return item.done
    })
    return arr.length
})
const emit = defineEmits(['clear'])
//清除已完成
let clear = () => {
    //过滤未完成，即只留下未完成的
    let arr = props.list.filter(item => {
        return item.done === false
    })
    emit('clear', arr)
}

</script>
<style scoped lang="scss">
.container {
    display: flex;
    align-items: center;

    .btn {
        margin-left: 10px;
    }
}
</style>