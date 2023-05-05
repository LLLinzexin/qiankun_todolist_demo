<template>
    <div>
        <input placeholder="请输入任务" v-model="value" @keydown.enter="enter" />
    </div>
</template>


<script setup>
import { ref } from 'vue';
const props = defineProps({
    add: Function
})
const emit = defineEmits(['add'])
let value = ref('')
//回车确认
let enter = () => {
    emit('add', value.value)
    value.value = ''
}
const a = 1;
const b = ref(2).value


</script>

<style scoped lang="scss"></style>