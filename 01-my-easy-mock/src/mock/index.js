import Mock from 'mockjs'

Mock.mock(/\/login/, function (config) {
  const data = JSON.parse(config.body)
  if (data.username !== 'admin') {
    return {
      code: '400',
      msg: '用户名错误'
    }
  } else if (data.password !== '123456') {
    return {
      code: '401',
      msg: '密码错误'
    }
  } else {
    return {
      code: '200',
      msg: '登录成功',
      username: data.username
    }
  }
})
