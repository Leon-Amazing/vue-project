<template>
  <div class="header-container">
    <header>{{title}}</header>
    <div class="breadcrumbs">
      <b v-if="$route.name === 'index'">{{title}}</b>
      <span v-else><router-link tag="b" to="/" >首页</router-link><span class="bread"> / {{title}}</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '首页'
    }
  },
  watch: {
    $route (to) {
      this.title = to.meta.title
    }
  }
}
</script>

<style scoped lang="less">
.header-container {
  header {
    line-height: 50px;
    font-weight: bold;
    font-size: 24px;
    letter-spacing: 20px;
    padding-left: 20px;
    text-align: center;
    color: #fff;
    background: rgb(65, 172, 82);
  }
  .breadcrumbs {
    line-height: 40px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    text-indent: 20px;
    .bread {
      font-size: 14px;
      color: #ccc;
    }
  }
}
</style>
