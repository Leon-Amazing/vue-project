<template>
  <div class="admin-container">
    <div class="userinfo">
      <div>
        <section v-if="userName">
          <img src="@/assets/1.jpg" alt="">
          <p>{{userName}}</p>
        </section>
        <button v-else type="button"><router-link to="/login">登录</router-link></button>
      </div>
    </div>
    <div class="collect">
      <h3>我的收藏</h3>
      <div>
        <router-link tag="button" to="/want">想看{{wantLength === 0 ? '' : wantLength}}</router-link>
        <router-link tag="button" to="/watched">看过{{watchedLength === 0 ? '' : watchedLength}}</router-link>
      </div>
    </div>
    <ul>
      <li>
        我的发布
      </li>
      <li>
        我的日记
      </li>
      <li>
        我的社区
      </li>
      <li>
        我的设置
      </li>
    </ul>
  </div>
</template>

<script>
import { getCookie } from '@/utils/cookie'
export default {
  name: 'Admin',
  data () {
    return {
      userName: ''
    }
  },
  computed: {
    wantLength () {
      return Object.keys(this.$store.state.wantList).length
    },
    watchedLength () {
      return Object.keys(this.$store.state.watchedList).length
    }
  },
  created () {
    this.userName = getCookie('username')
  }
}
</script>

<style scoped lang="less">
.admin-container {
  .userinfo {
    height: 260px;
    background: rgb(160, 222, 170);
    padding-top: 30px;
    div {
      width: 50%;
      margin: 0 auto;
      text-align: center;
      img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
      }
      p {
        margin: 10px 0;
        font-size: 18px;
        font-weight: bold;
      }
      button {
        width: 80px;
        height: 36px;
        background: #fff;
        border-radius: 4px;
        color: #333;
        position: relative;
        top: 63px;
        a {
          display: block;
          width: 100%;
          height: 100%;
          line-height: 36px;
        }
      }
    }
  }
  .collect {
    margin: 10px 0;
    h3 {
      margin-bottom: 15px;
    }
    button {
      width: 60px;
      height: 60px;
      border-radius: 4px;
      border: 1px solid #ccc;
      background: rgb(244, 234, 218);
      margin-left: 20px;
    }
  }
  ul {
    margin-top: 20px;
    li {
      padding: 15px;
      font-size: 18px;
      background: rgb(244, 244, 244);
      margin-bottom: 10px;
      position: relative;
      &:after {
        width: 0;
        height: 0;
        position: absolute;
        right: 15px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid #ccc;
        content: '';

      }
    }
  }
}
</style>
