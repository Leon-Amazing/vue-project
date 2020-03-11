<template>
  <div class="head">
    <div class="login w">
      <h2>Login</h2>
      <div class="name">
        <i class="iconfont">&#xe6fb;</i>
        <input type="text" v-model="username">
        <i class="iconfont" style="visibility:hidden">&#xe6d1;</i>
      </div>
      <div class="password">
        <i class="iconfont">&#xe604;</i>
        <input type="password" v-model="password">
        <i class="iconfont">&#xe6d1;</i>
      </div>
      <button type="button" @click="toIndex">登录</button>
    </div>
  </div>
</template>

<script>
import loginByUsername from '@/api/login'
import {setCookie} from '@/utils/cookie'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    toIndex () {
      loginByUsername(this.username, this.password).then(res => {
        if (res.data.code === '200') {
          setCookie('username', res.data.username)
          if (this.$route.query['redirect']) {
            this.$router.push(this.$route.query.redirect)
          } else {
            this.$router.push('/index')
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .head{
    height: calc(100% - 60px);
    background:  rgb(31,45,61);
    padding-top: 60px;
    .login{
      margin-top: 100px;
      text-align: center;
      color: #fff;
      h2{
        font-size: 30px;
      }
      .name,.password{
        width: 280px;
        line-height:50px;
        margin: 30px auto;
        border: 1px solid #fff;
        border-radius: 8px;
        i{
          font-size: 20px;
        }
        input{
          width: 200px;
          font-size: 18px;
          outline: none;
          border: none;
          background-color: rgb(31,45,61);
          text-indent: 1em;
          color: #fff;
        }
      }
      button{
         width: 280px;
         height: 46px;
         border-radius: 8px;
         outline: none;
         border: none;
         padding-left: 10px;
         letter-spacing: 10px;
      }
    }
  }
</style>
