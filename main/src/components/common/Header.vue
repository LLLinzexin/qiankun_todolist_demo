<template>
    <div class="header">
        <el-header>
            <div class="title"> 微前端demo</div>
        </el-header>
    </div>
</template>

<script >
export default {
    data() {
        return {
            name: ''
        }
    },

}
</script>


<style lang="scss" scoped>
.header {


    .el-header {
        background: #2578b5;
        color: #fff;
        line-height: 60px;
        display: flex;
        justify-content: space-between;

        .title {
            width: 200px;
            font-size: 24px;
        }
    }
}
</style>