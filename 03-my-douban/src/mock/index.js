import Mock from 'mockjs'

Mock.mock(/\/login/, 'post', function (config) {
  const data = JSON.parse(config.body)
  if (data.userName !== 'admin') {
    return {
      error_code: 500,
      msg: '用户名或者密码错误'
    }
  } else if (data.pwd !== '123456') {
    return {
      error_code: 500,
      msg: '用户名或者密码错误'
    }
  } else {
    return {
      error_code: 200,
      userName: data.userName,
      msg: '登录成功'
    }
  }
})
