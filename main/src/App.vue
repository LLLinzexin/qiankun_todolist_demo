<template>
  <div id="app">
    <div class="home">
      <Header></Header>
      <el-container class="content">
        <Menu></Menu>
        <el-container>
          <el-main>

            <router-view></router-view>
            <div id="sub-app">

            </div>
          </el-main>
          <el-footer>
            <Footer></Footer>
          </el-footer>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>

import Header from "./components/common/Header.vue";
import Footer from "./components/common/Footer.vue";
import Menu from "./components/common/Menu.vue";


export default {
  components: {
    Header,
    Footer,
    Menu,


  },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;

  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;

    .cont {
      margin: 20px 0;
    }
  }
}
</style>