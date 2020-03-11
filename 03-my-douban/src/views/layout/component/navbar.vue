<template>
  <div class="nav-container">
    <ul>
      <router-link tag="li" exact to="/">首页</router-link>
      <router-link tag="li" exact to="/hot">热映</router-link>
      <router-link tag="li" exact to="/top">Top250</router-link>
      <router-link tag="li" exact to="/future">即将上映</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
  // watch: {
  //   $route (to, from) {
  //     if (to.meta.index > from.meta.index) {
  //       this.$store.commit('RIGHT_TRANSITION')
  //     } else {
  //       this.$store.commit('LEFT_TRANSITION')
  //     }
  //     console.log(this.$store.state.transitionName)
  //   }
  // }
}
</script>

<style scoped lang="less">
.nav-container {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  ul {
    height: 100%;
    display: flex;
    border-top: 1px solid #fff;
    li {
      flex: 1;
      text-align: center;
      line-height: 50px;
      font-size: 18px;
      background: rgb(219, 219, 219);
      border-right: 1px solid #fff;
      height: 100%;
      color: #333;
      &:last-child {
        border-right: none;
      }
    }
    li.is-active {
      background: rgb(142, 204, 152);
      color: #fff;
    }
  }
}
</style>
