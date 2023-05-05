<template>
    <div>
        <input placeholder="请输入任务" v-model="value" @keydown.enter="enter" />
    </div>
</template>


<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'navHeader',
    setup(props, ctx) {
        let value = ref('')
        //回车确认
        let enter = () => {
            ctx.emit('add', value.value)
            value.value = ''
        }
        return {
            value,
            enter
        }
    },
})
</script>

<style scoped lang="scss"></style>