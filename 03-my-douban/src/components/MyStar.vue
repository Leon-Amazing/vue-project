<template>
  <div class="star-container" :score="score">
    <div class="first">
      <span v-for="item in 5" :key="item">☆</span>
    </div>
    <div>评分: {{score}}</div>
    <div class="second" :style="width">
      <span v-for="item in 5" :key="item">★</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyStar',
  props: ['score'],
  computed: {
    width () {
      return {
        width: (this.score * 10) / 100 * 82 + 'px'
      }
    }
  }
}
</script>

<style scoped lang="less">
.star-container {
  position: relative;
  width: 100%;
  height: 25px;
  div {
    width: 82px;
    position: absolute;
    &:nth-of-type(2) {
      font-size: 14px;
      line-height: 26px;
      right: 3px;
    }
  }
  span {
    font-size: 20px;
  }
  .second {
    color: rgb(247, 186, 42);
    top: 0;
    overflow: hidden;
  }
}
</style>
