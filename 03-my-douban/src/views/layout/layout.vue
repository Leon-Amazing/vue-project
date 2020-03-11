<template>
  <div class="layout-container">
    <my-header></my-header>
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view class="main-container"></router-view>
      </keep-alive>
    </transition>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import myHeader from './component/header'
import NavBar from './component/navbar'
export default {
  name: 'Layout',
  components: {
    myHeader,
    NavBar
  },
  data () {
    return {
      transitionName: 'right'
    }
  },
  watch: {
    $route (to, from) {
      this.transitionName = to.meta.index > from.meta.index ? 'right' : 'left'
    }
  }
}
</script>

<style scoped lang="less">
  .layout-container {
    height: 100%;
    overflow: hidden;
    .main-container {
      position: absolute;
      width: 100vw;
      height: calc(100% - 142px);
      overflow: auto;
    }
  }
</style>
