<template>
  <div class="login-container">
    <div>
      <h2>豆瓣登录</h2>
      <form>
        <div>
          <p>用户名</p>
          <input type="text" ref="userName" :class="userNameValid ? '' : 'error-border'" @blur="validateUserName">
        </div>
        <span :class="[{'transition': userNameValidatedInfo}, userNameValid ? 'success' : 'error']">{{userNameValidatedInfo}}</span>
        <div>
          <p>密码</p>
          <input type="password" ref="pwd" :class="pwdValid ? '' : 'error-border'" @blur="validatePwd">
        </div>
        <span :class="[{'transition': pwdValidateInfo}, pwdValid ? 'success' : 'error']">{{pwdValidateInfo}}</span>
        <button type="button" @click="login">登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import { loginByUserInfo } from '@/api/login'
import { setCookie } from '@/utils/cookie'
export default {
  name: 'Login',
  data () {
    return {
      userNameValidatedInfo: '',
      userNameValid: true,
      pwdValidateInfo: '',
      pwdValid: true
    }
  },
  methods: {
    validateUserName () {
      const userName = this.$refs.userName.value
      if (userName === '') {
        this.userNameValidatedInfo = '用户名不能为空'
        this.userNameValid = false
      } else if (userName.length > 16 || userName.length < 4) {
        this.userNameValidatedInfo = '用户名长度为 4 - 16 之间'
        this.userNameValid = false
      } else {
        this.userNameValidatedInfo = '用户名验证成功'
        this.userNameValid = true
      }
    },
    validatePwd () {
      const pwd = this.$refs.pwd.value
      if (pwd === '') {
        this.pwdValidateInfo = '密码不能为空'
        this.pwdValid = false
      } else {
        this.pwdValidateInfo = ''
        this.pwdValid = true
      }
    },
    login () {
      if (this.userNameValid && this.pwdValid) {
        loginByUserInfo(this.$refs.userName.value, this.$refs.pwd.value).then(res => {
          if (res.data.error_code === 200) {
            alert(res.data.msg)
            setCookie('username', res.data.userName)
            this.$router.push('/')
          } else {
            alert(res.data.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  height: 100%;
  padding-top: 150px;
  background: rgb(214, 246, 218);
  > div {
    width: 65%;
    margin: 0 auto;

    h2 {
      margin-bottom: 30px;
      text-align: center;
    }
    form {
      div {
        p {
          margin-bottom: 10px;
        }
        input {
          width: 100%;
          height: 36px;
          font-size: 20px;
          text-indent: 10px;
          border-radius: 4px;
          border: 1px solid #ccc;
        }
        input.error-border {
          border-color: red;
        }
      }
      span {
        display: block;
        font-size: 12px;
        height: 20px;
        line-height: 20px;
        position: relative;
        top: 20px;
        opacity: 0;
        transition: .4s;
      }
      span.error {
        color: red;
      }
      span.success {
        color: green;
      }
      span.transition {
        opacity: 1;
        transform: translateY(-20px);
      }
      button {
        width: 100%;
        height: 36px;
        background: rgb(65, 172, 82);
        border-radius: 4px;
        color: #fff;
      }
    }
  }
}
</style>
