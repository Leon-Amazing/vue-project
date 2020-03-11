<template>
  <div id="app">
    <router-view class="main-container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped lang='less'>
.main-container {
  width: 1200px;
  margin: 0 auto;
}
</style>
