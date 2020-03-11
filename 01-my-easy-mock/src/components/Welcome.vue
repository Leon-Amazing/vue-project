<template>
  <div class="header-wrap">
    <header class="w clearfix">
      <img src="@/assets/easy-mock.png" alt="easy-mock" class="fl">
      <span class="fr" @click="toLogin">登录</span>
    </header>
    <h1 class="w">
      let us study easy-mock together
    </h1>
    <div class="w nav">
      <button type="button" @click="toWorkbench">我的工作台</button>
      <button type="button" @click="toDoucument">文档</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  methods: {
    toLogin () {
      this.$router.push('/login')
    },
    toWorkbench () {
      this.$router.push('./index/workbench')
    },
    toDoucument () {
      this.$router.push('./index/document')
    }
  }
}
</script>

<style lang="less" scoped>
  .header-wrap{
    height: 60px;
    width: 100%;
    background-color: rgb(31,45,61);
    header{
      height: 60px;
      img{
      height: 20px;
      margin: 20px 0;
      }
      span{
        display: inline-block;
        line-height: 30px;
        margin: 15px 0;
        padding: 0 5px;
        background-color: rgb(244,244,244);
        border-radius: 4px;
      }
    }
  }
  h1{
    text-align: center;
    font-size: 45px;
    margin-top: 80px;
  }
  .nav{
    text-align: center;
    margin-top: 80px;
    button{
      width: 150px;
      height: 46px;
      color: #fff;
      background-color: rgb(133,206,97);
      outline: none;
      border: none;
      border-radius: 7px;
      margin: 10px;
    }
  }
</style>
