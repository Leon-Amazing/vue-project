<template>
    <div class="header-wrap">
      <header class="w clearfix">
        <img src="@/assets/easy-mock.png" alt="easy-mock" class="fl" @click="toWelcom">
        <ul>
          <router-link tag="li" to="/index/project" exact>我的项目</router-link>
          <router-link tag="li" to="/index/workbench">我的工作台</router-link>
          <router-link tag="li" to="/index/document">我的文档</router-link>
        </ul>
        <div class="fr user-info">
          <img src="@/assets/1.png">
          <span>{{username}}</span>
          <i></i>
          <div class="logo-out" @click="toLogin">注销</div>
        </div>
      </header>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
import {getCookie, removeCookie} from '@/utils/cookie'
export default {
  name: 'Index',
  computed: {
    username () {
      return getCookie('username')
    }
  },
  methods: {
    toLogin () {
      this.$router.push('/login')
      removeCookie('username')
    },
    toWelcom () {
      this.$router.push('/')
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
      ul{
        list-style: none;
        color: rgb(197,242,255);
        li{
          float: left;
          line-height: 60px;
          margin-left: 100px;
          &:hover{
            color: #fff;
          }
        }
      }
      .user-info{
        color: #fff;
        height: 100%;
        position: relative;
        padding-right: 20px;
        &:hover i{
          transform: rotateX(180deg);
        }
        &:hover .logo-out{
          transform: translateY(41px);
          opacity: 1;
        }
        img{
          vertical-align: middle;
        }
        span{
          display: inline-block;
          line-height: 60px;
          vertical-align: middle;
        }
        i{
          position: absolute;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-top: 8px solid #fff;
          border-bottom: none;
          top: 26px;
          right: 0;
          transition: all 0.5s;
        }
        .logo-out{
          width: 100px;
          line-height: 36px;
          position: absolute;
          text-align: center;
          background: rgb(31,45,61);
          top: 20px;
          opacity: 0;
          transition: all 0.5s;
        }
      }
    }
  }
</style>
