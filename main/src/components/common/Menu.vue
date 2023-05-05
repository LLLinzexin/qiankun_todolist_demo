<template>
    <div class="menu">
        <el-aside width="200px">
            <el-menu router default-active="2" class="el-menu-vertical-demo" background-color="#2578b5" text-color="#fff"
                active-text-color="#ffd04b">
                <template v-for="(item, index) in menus">
                    <el-menu-item :index="item.path" :key="index" v-if="!item.hidden">
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: []
        };
    },
    methods: {
        clickMenu(item) {
            this.$router.push(item.path)
        }
    },
    created() {
        // console.log(this.$router.options.routes)
        this.menus = [...this.$router.options.routes]
    }
}
</script>

<style lang="scss" scoped>
.menu {
    .el-aside {
        height: 100%;
        display: flex;

        .el-menu {
            height: 100%;
            border-right: none;
        }

        .el-menu-item {
            min-width: 0;
        }
    }
}
</style>